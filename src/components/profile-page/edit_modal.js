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
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Modal from 'react-bootstrap/Modal';
import logger from 'debug';
import EnterTokenModal from './enter_token_modal.js';


// FUNCTIONS //

const createTooltip = ( str ) => {
	return <Tooltip id="tooltip">{str}</Tooltip>;
};


// VARIABLES //

const debug = logger( 'isle-dashboard' );


// MAIN //

class EditModal extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			email: props.user.email,
			name: props.user.name,
			organization: props.user.organization,
			password: '',
			passwordRepeat: '',
			changed: false,
			showTokenModal: false
		};
	}

	handleUpdate = () => {
		const { name, password, passwordRepeat, organization } = this.state;
		const form = {
			name,
			organization
		};
		let change = false;
		if ( password ) {
			if ( passwordRepeat === password ) {
				change = true;
				form.password = password;
			}
		}
		if (
			name !== this.props.user.name ||
			organization !== this.props.user.organization
		) {
			change = true;
		}
		if ( change ) {
			debug( 'Update user...' );
			this.props.updateUser( form );
			this.props.onHide();
		}
	}

	handleInputChange = ( event ) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[ name ]: value,
			changed: true
		});
	}

	getNameValidationState = () => {
		const { name } = this.state;
		if ( name && name.length > 3 ) {
			return true;
		}
		return false;
	}

	getPasswordValidationState = () => {
		const { password, passwordRepeat } = this.state;
		if ( password.length < 6 || passwordRepeat.length === 0 ) {
			return false;
		}
		if ( password !== passwordRepeat ) {
			return false;
		}
		return true;
	}

	toggleTokenModal = () => {
		this.setState({
			showTokenModal: !this.state.showTokenModal
		});
	}

	renderInstructorButton() {
		if ( this.props.user.writeAccess ) {
			return null;
		}
		const t = this.props.t;
		return ( <Button
			onClick={this.toggleTokenModal}
			variant="outline-success"
			style={{ float: 'right', marginRight: 5 }}
		>{t('get-instructor-access')}</Button> );
	}

	render() {
		const validPasswords = this.getPasswordValidationState();
		const validName = this.getNameValidationState();
		const enteredPasswords = this.state.password || this.state.passwordRepeat;
		const t = this.props.t;
		return (
			<Fragment>
				<Modal show={this.props.show} onHide={this.props.onHide} >
				<Modal.Header>
					<Modal.Title as="h3" style={{ width: '100%' }}>
						{t('profile')}
						<OverlayTrigger placement="right" overlay={createTooltip( t('close-edit-modal') )}>
							<Button
								onClick={this.props.onHide}
								style={{ float: 'right' }}
								variant="outline-secondary"
								aria-label={t('close-edit-modal')}
							>
								<span aria-hidden="true">x</span>
							</Button>
						</OverlayTrigger>
						{this.renderInstructorButton()}
					</Modal.Title>
				</Modal.Header>
					<Form noValidate style={{ padding: '20px' }}>
						<FormGroup
							controlId="form-email"
						>
							<FormLabel>
								{t('common:email')}
							</FormLabel>
							<FormControl
								name="email"
								type="email"
								value={this.state.email}
								disabled
							/>
						</FormGroup>
						{!this.props.user.verifiedEmail ? <Badge
							variant="danger" style={{ position: 'absolute', right: 20, top: 80 }}
						>{t('common:email-not-verified')}
							<OverlayTrigger placement="right" overlay={createTooltip( t('resend-confirm-email') )}>
								<Button
									size="sm" variant="outline-light" onClick={this.props.resendConfirmEmail}
									style={{ fontSize: 12, marginLeft: 6 }}
								>
									<i className="fas fa-redo-alt"></i>
								</Button>
							</OverlayTrigger>
						</Badge> : null}
						<OverlayTrigger placement="right" overlay={createTooltip( t('update-name') )}>
							<FormGroup
								controlId="form-name"
							>
								<FormLabel>{t('common:name')}</FormLabel>
								<FormControl
									name="name"
									type="text"
									value={this.state.name}
									onChange={this.handleInputChange}
									isInvalid={!validName}
								/>
								<Form.Control.Feedback type="invalid">
									{t('invalid-name')}
								</Form.Control.Feedback>
							</FormGroup>
						</OverlayTrigger>
						<OverlayTrigger placement="right" overlay={createTooltip( t('update-organization') )}>
							<FormGroup
								controlId="form-organization"
							>
								<FormLabel>{t('common:organization')}</FormLabel>
								<FormControl
									name="organization"
									type="text"
									value={this.state.organization}
									onChange={this.handleInputChange}
								/>
							</FormGroup>
						</OverlayTrigger>
						<OverlayTrigger placement="right" overlay={createTooltip( t('enter-password') )}>
							<FormGroup
								controlId="form-password"
							>
								<FormLabel>{t('common:password')}</FormLabel>
								<FormControl
									name="password"
									type="password"
									value={this.state.password}
									autoComplete="new-password"
									placeholder={t('common:choose-new-password')}
									onChange={this.handleInputChange}
									maxLength={30}
									minLength={6}
									isInvalid={enteredPasswords && !validPasswords}
								/>
								<Form.Control.Feedback type="invalid">
									Please enter a new password with at least six characters.
								</Form.Control.Feedback>
							</FormGroup>
						</OverlayTrigger>
						<FormGroup
							controlId="form-repeat-password"
						>
							<FormControl
								name="passwordRepeat"
								type="password"
								value={this.state.passwordRepeat}
								autoComplete="new-password"
								placeholder={t('repeat-new-password')}
								onChange={this.handleInputChange}
								maxLength={30}
								minLength={6}
								isInvalid={enteredPasswords && !validPasswords}
							/>
							<Form.Control.Feedback type="invalid">
								{t('invalid-password')}
							</Form.Control.Feedback>
						</FormGroup>
					</Form>
					<Card>
						<Button block disabled={!this.state.changed || !validName || ( !validPasswords && enteredPasswords )} onClick={this.handleUpdate}>
							{t('common:update')}
						</Button>
					</Card>
				</Modal>
				<EnterTokenModal
					user={this.props.user}
					authenticate={this.props.authenticate}
					show={this.state.showTokenModal}
					onHide={this.toggleTokenModal}
				/>
			</Fragment>
		);
	}
}


// PROPERTIES //

EditModal.propTypes = {
	onHide: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	t: PropTypes.func.isRequired,
	updateUser: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
};

EditModal.defaultProps = {};


// EXPORTS

export default EditModal;
