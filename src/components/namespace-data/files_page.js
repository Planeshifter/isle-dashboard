/**
* Copyright (C) 2016-present The ISLE Authors
*
* The isle-dashboard program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import stringify from 'csv-stringify';
import ReactTable from 'react-table';
import InputRange from 'react-input-range';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Badge from 'react-bootstrap/Badge';
import copyToClipboard from 'clipboard-copy';
import roundn from '@stdlib/math/base/special/roundn';
import ceil from '@stdlib/math/base/special/ceil';
import pick from '@stdlib/utils/pick';
import contains from '@stdlib/assert/contains';
import lowercase from '@stdlib/string/lowercase';
import trim from '@stdlib/string/trim';
import ConfirmModal from 'components/confirm-modal';
import server from 'constants/server';
import saveAs from 'utils/file_saver.js';
import 'react-table/react-table.css';
import 'css/table.css';
import 'css/input_range.css';
import './files_page.css';


// VARIABLES //

const EXPORT_COLUMNS = [ 'name', 'email', 'lesson', 'title', 'filename', 'type', 'createdAt', 'updatedAt' ];
const debug = logger( 'isle:files-page' );


// FUNCTIONS //

const prepareExportData = ( data ) => {
	for ( let i = 0; i < data.length; i++ ) {
		const row = pick( data[ i ], EXPORT_COLUMNS );
		row.lesson = row.lesson.title;
		row.filename = server+'/'+row.filename;
		data[ i ] = row;
	}
	return data;
};


// MAIN //

class FilesPage extends Component {
	constructor( props ) {
		super( props );
		this.columns = this.createColumns();
		this.state = {
			showDeleteModal: false,
			deletionID: null,
			fileMaxSize: 0,
			fileInputKey: 0
		};
	}

	componentDidMount() {
		debug( 'Component did mount...' );
		this.props.getFiles({
			namespaceName: this.props.namespace.title
		});
	}

	componentDidUpdate( prevProps ) {
		if ( prevProps.files !== this.props.files ) {
			const files = this.props.files;
			let fileMaxSize = 0;
			for ( let i = 0; i < files.length; i++ ) {
				const size = files[ i ].size;
				if ( size && size > fileMaxSize ) {
					fileMaxSize = size;
				}
			}
			this.setState({
				fileMaxSize,
				fileInputKey: this.state.fileInputKey + 1
			});
		}
	}

	handleDelete = () => {
		this.props.handleFileDeletion( this.state.deletionID, this.props.ownerFiles );
		this.toggleDeleteModal();
	}

	toggleDeleteModal = () => {
		this.setState({
			showDeleteModal: !this.state.showDeleteModal
		});
	}

	createColumns = () => {
		const { t } = this.props;
		return [
			{
				Header: t('filename'),
				accessor: 'title',
				minWidth: 250,
				filterMethod: ( filter, row ) => {
					return contains( lowercase( row[ filter.id ] ), lowercase( filter.value ) );
				}
			},
			{
				Header: t('common:open'),
				accessor: 'filename',
				Cell: ( row ) => {
					return (
						<OverlayTrigger placement="left" overlay={<Tooltip id="external-link-tooltip">{t('open-file')}</Tooltip>}>
							<a href={server+'/'+row.value} target="_blank">
								<Button size="sm" variant="outline-secondary">
									<i className="fa fa-external-link-alt"></i>
								</Button>
							</a>
						</OverlayTrigger> );
				},
				resizable: false,
				filterable: false,
				sortable: false,
				width: 45
			},
			{
				Header: t('common:copy'),
				id: 'copy-path',
				accessor: 'filename',
				Cell: ( row ) => {
					return (
						<OverlayTrigger placement="right" overlay={<Tooltip id="copy-clipboard-tooltip">{t('common:copy-link')}</Tooltip>}>
							<Button variant="outline-secondary" size="sm"
								onClick={() => {
									copyToClipboard( server+'/'+row.value );
									this.props.addNotification({
										title: 'Copied',
										message: 'Link copied to clipboard',
										level: 'success',
										position: 'tl'
									});
								}}
							>
								<i className="fa fa-clipboard"></i>
							</Button>
						</OverlayTrigger>
					);
				},
				resizable: false,
				filterable: false,
				sortable: false,
				width: 45
			},
			{
				Header: t('common:lesson'),
				accessor: 'lesson',
				maxWidth: 160,
				Cell: ( row ) => {
					if ( !row.row.lesson ) {
						return <span>{t('no-lesson')}</span>;
					}
					return (
						<OverlayTrigger placement="right" overlay={<Tooltip id="open-lesson-tooltip">{t('open-lesson-new-tab')}</Tooltip>}>
							<div style={{ width: '100%', height: '100%' }} >
								<a href={row.row.lesson.url} target="_blank">
									{row.row.lesson.title}
								</a>
							</div>
						</OverlayTrigger>
					);
				},
				filterMethod: ( filter, row ) => {
					return row[ filter.id ].title.startsWith( filter.value );
				}
			},
			{
				Header: t('first-name'),
				id: 'first_name',
				accessor: d => {
					const parts = trim( d.name ).split( ' ' );
					if ( parts.length > 1 ) {
						parts.pop();
						return parts.join( ' ' );
					}
					return parts[ 0 ];
				},
				maxWidth: 75,
				style: { color: 'darkslategrey' },
				filterMethod: ( filter, row ) => {
					return contains( lowercase( row[ filter.id ] ), lowercase( filter.value ) );
				}
			},
			{
				Header: t('last-name'),
				id: 'last_name',
				accessor: d => {
					const parts = trim( d.name ).split( ' ' );
					if ( parts.length > 1 ) {
						return parts[ parts.length - 1 ];
					}
					return '';
				},
				maxWidth: 75,
				style: { color: 'darkslategrey' },
				filterMethod: ( filter, row ) => {
					return contains( lowercase( row[ filter.id ] ), lowercase( filter.value ) );
				}
			},
			{
				Header: t('common:email'),
				accessor: 'email',
				maxWidth: 160,
				filterMethod: ( filter, row ) => {
					return contains( lowercase( row[ filter.id ] ), lowercase( filter.value ) );
				}
			},
			{
				Header: t('type'),
				accessor: 'type',
				filterMethod: ( filter, row ) => {
					return contains( row[ filter.id ], filter.value );
				}
			},
			{
				Header: t('size'),
				accessor: 'size',
				Cell: row => row.value ? `${roundn( row.value, -3 )}mb` : 'NA',
				filterMethod: ( filter, row ) => {
					const id = filter.pivotId || filter.id;
					const size = row[ id ];
					return size >= filter.value.min && size <= filter.value.max;
				},
				Filter: ({ filter, onChange }) => {
					const maxValue = ceil( this.state.fileMaxSize ) || 1;
					const defaultVal = {
						max: maxValue,
						min: 0
					};
					return (
						<div style={{
							paddingLeft: '4px',
							paddingRight: '4px',
							paddingTop: '8px'
						}}>
							<InputRange
								allowSameValues
								maxValue={maxValue}
								minValue={0}
								step={0.1}
								value={filter ? filter.value : defaultVal}
								onChange={( newValue ) => {
									onChange( newValue );
								}}
								formatLabel={value => roundn( value, -2 )}
							/>
						</div>
					);
				}
			},
			{
				Header: t('common:date'),
				accessor: 'updatedAt',
				Cell: ( row ) => {
					if ( row.value && row.value.toLocaleDateString ) {
						return row.value.toLocaleDateString( 'en-US' );
					}
					return '';
				},
				maxWidth: 120
			},
			{
				Header: 'Del',
				accessor: '_id',
				Cell: ( row ) => {
					return (
						<OverlayTrigger placement="left" overlay={<Tooltip id="delete-file-tooltip">{t('delete-file-tooltip')}</Tooltip>}>
							<Button
								size="sm" variant="outline-secondary"
								onClick={() => {
								this.setState({
									deletionID: row.value,
									showDeleteModal: true
								});
							}} >
								<div className="fa fa-trash-alt" />
							</Button>
						</OverlayTrigger>
					);
				},
				resizable: false,
				filterable: false,
				sortable: false,
				width: 45
			}
		];
	}

	saveJSON = () => {
		const currentFiles = this.reactTable.getResolvedState().sortedData;
		let data = prepareExportData( currentFiles );
		const blob = new Blob([ JSON.stringify( data ) ], {
			type: 'application/json'
		});
		const name = `files_${this.props.namespace.title}.json`;
		saveAs( blob, name );
	}

	saveCSV = () => {
		const currentFiles = this.reactTable.getResolvedState().sortedData;
		let data = prepareExportData( currentFiles );
		stringify( data, {
			header: true
		}, ( err, output ) => {
			if ( err ) {
				return this.props.addNotification({
					title: 'Error encountered',
					message: 'Encountered an error while creating CSV: '+err.message,
					level: 'error',
					position: 'tl'
				});
			}
			const blob = new Blob([ output ], {
				type: 'text/plain'
			});
			const name = `files_${this.props.namespace.title}.csv`;
			saveAs( blob, name );
		});
	}

	render() {
		const { t } = this.props;
		return ( <div className="namespace-data-page">
			<div className="namespace-data-buttons">
				<ButtonGroup className="files-export-button-group" >
					<OverlayTrigger placement="bottom" overlay={<Tooltip id="csvTooltip" >{t('save-as-csv')}</Tooltip>}>
						<Button size="sm" variant="secondary" onClick={this.saveCSV} ><i className="fas fa-download"></i> CSV</Button>
					</OverlayTrigger>
					<OverlayTrigger placement="bottom" overlay={<Tooltip id="jsonTooltip">{t('save-as-json')}</Tooltip>}>
						<Button size="sm" variant="secondary" onClick={this.saveJSON} ><i className="fas fa-download"></i> JSON</Button>
					</OverlayTrigger>
				</ButtonGroup>
				{ this.props.ownerFiles ? <FormGroup className="file-upload-button" >
					<FormLabel htmlFor="fileUpload" style={{ cursor: 'pointer' }}>
						<h3><Badge variant="success">{t('upload-file')}</Badge></h3>
						<input
							id="fileUpload"
							key={this.state.fileInputKey}
							type="file"
							accept=".pdf,.html,.md,image/*,video/*,audio/*,.json,.csv"
							onChange={this.props.handleUpload}
							style={{ display: 'none' }}
						/>
					</FormLabel>
				</FormGroup> : null }
			</div>
			<ReactTable
				className="dashboard-table"
				filterable
				data={this.props.files}
				columns={this.columns}
				ref={(r) => {
					this.reactTable = r;
				}}
				previousText={t('common:previous')}
				nextText={t('common:next')}
				loadingText={t('common:loading')}
				noDataText={t('common:no-rows-found')}
				pageText={t('common:page')}
				ofText={t('common:of')}
				rowsText={t('common:rows')}
			/>
			<ConfirmModal
				show={this.state.showDeleteModal}
				close={this.toggleDeleteModal}
				message={t('delete-file')}
				title={`${t('common:delete')}?`}
				onConfirm={this.handleDelete}
			/>
		</div> );
	}
}


// PROPERTIES //

FilesPage.propTypes = {
	addNotification: PropTypes.func.isRequired,
	files: PropTypes.array.isRequired,
	handleFileDeletion: PropTypes.func.isRequired,
	handleUpload: PropTypes.func.isRequired,
	namespace: PropTypes.object.isRequired,
	ownerFiles: PropTypes.bool
};

FilesPage.defaultProps = {
	ownerFiles: false
};


// EXPORTS //

export default withTranslation( [ 'namespace_data', 'common' ] )( FilesPage );
