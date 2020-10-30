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

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import ReactTable from 'react-table';
import moment from 'moment';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import PINF from '@stdlib/constants/math/float64-pinf';
import omit from '@stdlib/utils/omit';
import Tooltip from 'react-bootstrap/Tooltip';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import ConfirmModal from 'components/confirm-modal';
import server from 'constants/server';
import createBooleanColumn from './create_boolean_column.js';
import createCategoricalColumn from './create_categorical_column.js';
import createTextColumn from './create_text_column.js';
import createDateColumn from './create_date_column.js';
import TicketModal from 'components/ticket-modal';
import 'react-table/react-table.css';
import 'css/table.css';


// VARIABLES //

const RE_TICKET = /ticket=([^&]*)/;


// MAIN //

class TicketPage extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			showDeleteModal: false,
			showTicketModal: false,
			selectedTicket: null,
			columns: this.createColumns()
		};
	}

	async componentDidMount() {
		await this.props.getAllTickets();

		if ( this.props.history.location.search ) {
			const match = RE_TICKET.exec( this.props.history.location.search );
			if ( match && match[ 1 ] ) {
				const { tickets } = this.props.admin;
				for ( let i = 0; i < tickets.length; i++ ) {
					const ticket = tickets[ i ];
					if ( ticket._id === match[ 1 ] ) {
						// eslint-disable-next-line react/no-did-mount-set-state
						this.setState({
							selectedTicket: ticket,
							showTicketModal: true
						});
						break;
					}
				}
			}
		}
	}

	componentDidUpdate( prevProps ) {
		if ( prevProps.admin.tickets !== this.props.admin.tickets ) {
			this.setState({
				columns: this.createColumns()
			});
		}
	}

	toggleDeleteModal = () => {
		this.setState({
			showDeleteModal: !this.state.showDeleteModal
		});
	}

	toggleTicketModal = () => {
		this.setState({
			showTicketModal: !this.state.showTicketModal
		});
	}

	askToDeleteSelectedTicketFactory = ( event ) => {
		return () => {
			this.setState({
				showDeleteModal: !this.state.showDeleteModal,
				selectedTicket: event
			});
		};
	}

	deleteSelectedTicket = () => {
		this.setState({
			showDeleteModal: false
		}, async () => {
			await this.props.deleteTicket( this.state.selectedTicket._id );
			this.props.getAllTickets();
		});
	}

	createColumns = () => {
		const { t } = this.props;
		const tickets = this.props.admin.tickets || [];
		let minTime = PINF;
		let maxTime = 0;
		for ( let i = 0; i < tickets.length; i++ ) {
			if ( tickets[ i ].createdAt > maxTime ) {
				maxTime = tickets[ i ].createdAt;
			}
			if ( tickets[ i ].updatedAt > maxTime ) {
				maxTime = tickets[ i ].updatedAt;
			}
			if ( tickets[ i ].createdAt < minTime ) {
				minTime = tickets[ i ].createdAt;
			}
			if ( tickets[ i ].updatedAt < minTime ) {
				minTime = tickets[ i ].updatedAt;
			}
		}
		maxTime = moment( maxTime );
		minTime = moment( minTime );
		return [
			{
				Header: 'Pic',
				accessor: 'user.picture',
				Cell: ( row ) => {
					return <img className="table-pic" src={`${server}/thumbnail/${row.value}`} alt="Profile Pic" />;
				},
				style: { marginTop: '8px', color: 'darkslategrey' },
				maxWidth: 46,
				minWidth: 46,
				filterable: false,
				resizable: false,
				sortable: false
			},
			createTextColumn({
				Header: t('common:name'),
				accessor: 'user.name',
				style: { marginTop: '8px', color: 'darkslategrey' }
			}),
			createTextColumn({
				Header: t('common:email'),
				accessor: 'user.email',
				style: { marginTop: '8px', color: 'darkslategrey' }
			}),
			createTextColumn({
				Header: t('common:title'),
				accessor: 'title',
				minWidth: 200
			}),
			{
				Header: t('common:description'),
				accessor: 'description',
				Cell: ( row ) => {
					return ( <OverlayTrigger placement="top" overlay={<Card className="tickets-description-overlay" body id="description-tooltip">
						{row.value}
					</Card>}>
						<p className="tickets-description" >{row.value}</p>
					</OverlayTrigger> );
				},
				style: { marginTop: '8px', color: 'darkslategrey' },
				minWidth: 350
			},
			createTextColumn({
				Header: t('common:component'),
				accessor: 'component'
			}),
			{
				Header: 'Reply',
				accessor: '_id',
				Cell: ( row ) => {
					return (
						<OverlayTrigger placement="left" overlay={<Tooltip id="open-ticket-tooltip">{t('common:open-ticket-tooltip')}</Tooltip>}>
							<Button
								size="sm" variant="outline-secondary"
								onClick={() => {
									this.setState({
										selectedTicket: row.original
									}, this.toggleTicketModal );
								}} >
								<i className="fas fa-reply"></i>
							</Button>
						</OverlayTrigger>
					);
				},
				resizable: false,
				filterable: false,
				sortable: false,
				width: 45
			},
			createTextColumn({
				Header: t('common:course'),
				accessor: 'namespace.title',
				maxWidth: 140
			}),
			createCategoricalColumn({
				Header: t('common:priority'),
				accessor: 'priority',
				labels: [ 'Low', 'Middle', 'High' ]
			}),
			createTextColumn({
				Header: t('common:lesson'),
				accessor: 'lesson.title',
				maxWidth: 140,
				Cell: ( row ) => {
					if ( !row.value || !row.original.namespace ) {
						return null;
					}
					const url = `${server}/${row.original.namespace.title}/${row.value}`;
					return (
						<Badge variant="light" style={{ fontSize: '1em' }} >
							<a href={url} target="_blank">
								{row.value}
							</a>
						</Badge>
					);
				}
			}),
			createBooleanColumn({
				Header: t('common:done'),
				accessor: 'done',
				trueLabel: t('common:done'),
				falseLabel: t('common:not-done')
			}),
			{
				Header: t( 'common:platform' ),
				accessor: 'platform',
				style: { marginTop: '2px', color: 'darkslategrey', fontSize: 24, textAlign: 'center', cursor: 'pointer' },
				Cell: ( row ) => {
					if ( row.value ) {
						const popover = <Popover id="popover-data" style={{ width: 400, maxHeight: '80vh', overflowY: 'auto' }}>
							<Popover.Title as="h3">{row.row._original.title}</Popover.Title>
							<Popover.Content style={{ backgroundColor: 'lightblue' }} >
								<pre>{JSON.stringify( omit( row.value, [ 'description' ] ), null, 2 )}
								</pre>
							</Popover.Content>
						</Popover>;
						return (
							<OverlayTrigger trigger="click" placement="left" overlay={popover}>
								<i className="data-icon fas fa-tablet-alt"></i>
							</OverlayTrigger>
						);
					}
					return null;
				},
				maxWidth: 75,
				resizable: false,
				filterable: false,
				sortable: false
			},
			createDateColumn({
				Header: t('last-updated'),
				accessor: 'updatedAt',
				startDate: minTime,
				endDate: maxTime
			}),
			createDateColumn({
				Header: t('created-at'),
				accessor: 'createdAt',
				startDate: minTime,
				endDate: maxTime
			}),
			{
				Header: t('common:actions'),
				Cell: ( row ) => {
					return ( <div>
						<OverlayTrigger placement="bottom" overlay={<Tooltip id="delete_ticket">{t('delete-ticket')}</Tooltip>}>
							<Button
								variant="outline-secondary"
								style={{ marginLeft: 8 }}
								onClick={this.askToDeleteSelectedTicketFactory( row.row._original )}
								aria-label={t('delete-ticket')}
							>
								<div className="fa fa-trash-alt" />
							</Button>
						</OverlayTrigger>
					</div> );
				},
				resizable: false,
				filterable: false,
				sortable: false
			}
		];
	}

	render() {
		return ( <Fragment>
			<ReactTable
				filterable
				data={this.props.admin.tickets}
				columns={this.state.columns}
				ref={(r) => {
					this.reactTable = r;
				}}
			/>
			{ this.state.showDeleteModal ? <ConfirmModal
				title={this.props.t('delete-ticket')}
				message={<span>{this.props.t('delete-ticket-confirm')}</span>}
				close={this.toggleDeleteModal}
				show={this.state.showDeleteModal}
				onConfirm={this.deleteSelectedTicket}
			/> : null }
			{ this.state.showTicketModal ? <TicketModal
				show={this.state.showTicketModal}
				onHide={this.toggleTicketModal}
				ticket={this.state.selectedTicket}
				submitTicketMessage={this.props.submitTicketMessage}
				closeTicket={this.props.closeTicket}
				openTicket={this.props.openTicket}
			/> : null }
		</Fragment> );
	}
}


// PROPERTIES //

TicketPage.propTypes = {
	closeTicket: PropTypes.func.isRequired,
	deleteTicket: PropTypes.func.isRequired,
	getAllTickets: PropTypes.func.isRequired,
	openTicket: PropTypes.func.isRequired
};


// EXPORTS //

export default withTranslation( [ 'admin', 'common' ] )( TicketPage );
