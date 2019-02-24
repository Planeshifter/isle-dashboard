// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stringify from 'csv-stringify';
import ReactTable from 'react-table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import Badge from 'react-bootstrap/Badge';
import pick from '@stdlib/utils/pick';
import contains from '@stdlib/assert/contains';
import lowercase from '@stdlib/string/lowercase';
import ConfirmModal from 'components/confirm-modal';
import server from 'constants/server';
import saveAs from 'utils/file_saver.js';
import 'react-table/react-table.css';
import './react_table_height.css';
import './files_page.css';


// VARIABLES //

const EXPORT_COLUMNS = [ 'name', 'email', 'lesson', 'title', 'filename', 'type', 'createdAt', 'updatedAt' ];


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
			deletionID: null
		};
	}

	handleDelete = () => {
		this.props.handleFileDeletion( this.state.deletionID );
		this.toggleDeleteModal();
	}

	toggleDeleteModal = () => {
		this.setState({
			showDeleteModal: !this.state.showDeleteModal
		});
	}

	createColumns() {
		return [
			{
				Header: 'Lesson',
				accessor: 'lesson',
				maxWidth: 160,
				Cell: ( row ) => {
					if ( !row.row.lesson ) {
						return <span>no lesson</span>;
					}
					return ( <a href={row.row.lesson.url} target="_blank">
						{row.row.lesson.title}
					</a> );
				},
				filterMethod: ( filter, row ) => {
					return row[ filter.id ].title.startsWith( filter.value );
				}
			},
			{
				Header: 'Name',
				accessor: 'name',
				maxWidth: 160,
				filterMethod: ( filter, row ) => {
					return contains( lowercase( row[ filter.id ] ), lowercase( filter.value ) );
				}
			},
			{
				Header: 'Email',
				accessor: 'email',
				maxWidth: 160,
				filterMethod: ( filter, row ) => {
					return contains( lowercase( row[ filter.id ] ), lowercase( filter.value ) );
				}
			},
			{
				Header: 'Type',
				accessor: 'type',
				filterMethod: ( filter, row ) => {
					return contains( row[ filter.id ], filter.value );
				}
			},
			{
				Header: 'Date',
				accessor: 'updatedAt',
				Cell: ( row ) => {
					return row.value.toLocaleDateString( 'en-US' );
				},
				maxWidth: 120
			},
			{
				Header: 'Filename',
				accessor: 'title',
				filterable: false,
				minWidth: 250
			},
			{
				Header: 'Access',
				accessor: 'filename',
				Cell: ( row ) => {
					return ( <a href={server+'/'+row.value} target="_blank">
						Open
					</a> );
				},
				resizable: false,
				filterable: false,
				width: 60
			},
			{
				Header: 'Del',
				accessor: '_id',
				Cell: ( row ) => {
					return ( <Button
						size="sm" variant="outline-secondary"
						onClick={() => {
						this.setState({
							deletionID: row.value,
							showDeleteModal: true
						});
					}} >
						<div className="fa fa-trash-alt" />
					</Button> );
				},
				resizable: false,
				filterable: false,
				maxWidth: 60,
				minWidth: 30
			}
		];
	}

	saveJSON = () => {
		let data = prepareExportData( this.props.files );
		const blob = new Blob([ JSON.stringify( data ) ], {
			type: 'application/json'
		});
		const name = `files_${this.props.namespace.title}.json`;
		saveAs( blob, name );
	}

	saveCSV = () => {
		let data = prepareExportData( this.props.files );
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
		return ( <div className="namespace-data-page">
			<ButtonGroup className="files-export-button-group" >
				<Button size="sm" variant="secondary" onClick={this.saveCSV} >Save as CSV</Button>
				<Button size="sm" variant="secondary" onClick={this.saveJSON} >Save as JSON</Button>
			</ButtonGroup>
			<FormGroup style={{
				position: 'absolute',
				top: '4px',
				right: '16px',
				display: 'inline-block'
			}}>
					<FormLabel htmlFor="fileUpload" style={{ cursor: 'pointer' }}>
						<h3><Badge variant="success">Upload file</Badge></h3>
						<FormControl
							id="fileUpload"
							type="file"
							accept=".pdf"
							onChange={this.props.handleUpload}
							style={{ display: 'none' }}
						/>
					</FormLabel>
			</FormGroup>
			<ReactTable
				filterable
				data={this.props.files}
				columns={this.columns}
			/>
			<ConfirmModal
				show={this.state.showDeleteModal}
				close={this.toggleDeleteModal}
				message="Are you sure that you want to delete this file?"
				title="Delete?"
				onDelete={this.handleDelete}
			/>
		</div> );
	}
}


// PROPERTIES //

FilesPage.propTypes = {
	files: PropTypes.array.isRequired,
	handleFileDeletion: PropTypes.func.isRequired,
	handleUpload: PropTypes.func.isRequired,
	namespace: PropTypes.object.isRequired
};

FilesPage.defaultProps = {
};


// EXPORTS //

export default FilesPage;
