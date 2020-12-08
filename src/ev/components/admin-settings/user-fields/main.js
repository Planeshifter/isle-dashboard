// MODULES //

import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import LicenseBarrier from 'ev/components/admin/barrier';
import CreateFieldModal from './create_field_modal.js';
import './user_fields.css';


// MAIN //

class AdminSettingsUserFields extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			showCreateModal: false
		};
	}

	componentDidMount() {
		this.props.getCustomFields();
	}

	toggleCreateModal = () => {
		this.setState({
			showCreateModal: !this.state.showCreateModal
		});
	}

	handleDeletionFactory = ( id ) => {
		return () => {
			this.props.deleteCustomField( id );
		};
	}

	render() {
		const { t } = this.props;
		return (
			<Fragment>
				<div className="admin-settings-outer-container" >
					<LicenseBarrier license={this.props.admin.license} >
						<h1>{this.props.t('user-fields')}</h1>
						<p>{this.props.t('user-fields-description')}</p>
						{ this.props.user.customFields.length > 0 ? <ListGroup className="admin-settings-fields-list" >
							{this.props.user.customFields.map( ( field, idx ) => {
								let optionsStr;
								if ( field.type === 'dropdown' ) {
									optionsStr = `; options: ${field.options.join( ', ' )}`;
								}
								return (
									<ListGroup.Item key={idx} >
										<b>{field.name}</b>: {field.description} (type: {field.type}{optionsStr})
										<OverlayTrigger placement="left" overlay={<Tooltip id="delete_field">{t('delete-field')}</Tooltip>}>
											<Button
												variant="outline-secondary"
												onClick={this.handleDeletionFactory( field._id )}
												aria-label={t('delete-field')}
											>
												<div className="fa fa-trash-alt" />
											</Button>
										</OverlayTrigger>
										<Button
											variant="outline-secondary"
											onClick={() => {
												this.props.incrementFieldPosition( field._id );
											}}
											disabled={idx === this.props.user.customFields.length - 1}
										>
											<i className="fas fa-arrow-down"></i>
										</Button>
										<Button
											variant="outline-secondary"
											onClick={() => {
												this.props.decrementFieldPosition( field._id );
											}}
											disabled={idx === 0}
										>
											<i className="fas fa-arrow-up"></i>
										</Button>
									</ListGroup.Item>
								);
							})}
						</ListGroup> : <Jumbotron className="admin-settings-fields-jumbotron" >
							{t('no-custom-fields')}
						</Jumbotron> }
						<Button variant="primary" onClick={this.toggleCreateModal} >
							<i className="fas fa-plus" style={{ marginRight: 8 }}></i>
							{this.props.t('add-user-field')}
						</Button>
					</LicenseBarrier>
				</div>
				{this.state.showCreateModal ? <CreateFieldModal
					show={this.state.showCreateModal}
					onHide={this.toggleCreateModal}
					t={this.props.t}
					createCustomField={this.props.createCustomField}
					customFields={this.props.user.customFields}
				/> : null}
			</Fragment>
		);
	}
}


// PROPERTIES //

AdminSettingsUserFields.propTypes = {
	admin: PropTypes.object,
	createCustomField: PropTypes.func.isRequired,
	getCustomFields: PropTypes.func.isRequired,
	user: PropTypes.object
};

AdminSettingsUserFields.defaultProps = {
	admin: {},
	user: {}
};


// EXPORTS //

export default withTranslation( 'admin_settings' )( AdminSettingsUserFields );
