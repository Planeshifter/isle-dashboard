// MODULES //

import React, { Component, Fragment } from 'react';
import { Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './profile-page.css';
// import stats from './img/stats.png';
import badge2 from './img/badge2.svg';
import badgeCircle from './img/badge_circle.svg';
import hoodie from './img/hoodie.jpg';
import EditModal from './edit_modal.js';
import EnterTokenModal from './enter_token_modal.js';
import ProfilePicModal from './profile_pic_modal.js';

// FUNCTIONS //

const createTooltip = ( str ) => {
	return <Tooltip id="tooltip">{str}</Tooltip>;
};


// MAIN //

class ProfilePage extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			showEditModal: false,
			showTokenModal: false,
			showProfilePicModal: false
		};
	}

	renderInstructorButton() {
		if ( this.props.user.writeAccess ) {
			return null;
		}
		return ( <Button
			onClick={this.toggleTokenModal}
			variant="success"
			style={{ marginLeft: 10, marginTop: 15 }}
		>Instructor Access</Button> );
	}

	toggleEditModal = () => {
		this.setState({
			showEditModal: !this.state.showEditModal
		});
	}

	toggleTokenModal = () => {
		this.setState({
			showTokenModal: !this.state.showTokenModal
		});
	}

	toggleProfilePicModal = () => {
		this.setState({
			showProfilePicModal: !this.state.showProfilePicModal
		});
	}

	renderStatisticSection() {
		return (
			<div className="profile-page-statistics">
				<div className="profile-page-statistics-title1">Actions</div>
				<div className="profile-page-statistics-title2">Statistics</div>
				<div className="profile-page-statistics-actions"></div>
				<div className="profile-page-statistics-stats"></div>
			</div>
		);
	}

	renderBadgesSectionNew() {
		let list = [];
		for ( let i = 0; i < 24; i++ ) {
			list.push(
				<div className="profile-page-badge-item-nova" key={i}>
					<OverlayTrigger placement="bottom" overlay={<Tooltip id="toggle_visibility">Toggle Visibility</Tooltip>}>
						<div className="profile-page-badge-item">
							<img className="mask" src={badgeCircle} />
							<div className="profile-page-badge-item-interior" >
							<img src={badge2} />
							</div>
						</div>
					</OverlayTrigger>
				</div>
			);
		}
		return list;
	}

	renderBadgesSection() {
		let list = [];
		for ( let i = 0; i < 24; i++ ) {
			list.push(
				<div className="profile-page-badge-item" key={i} >
					<OverlayTrigger placement="bottom" overlay={<Tooltip id="toggle_visibility">Toggle Visibility</Tooltip>}>
						<div className="profile-page-badge-image">
							<img src={badge2} />
						</div>
					</OverlayTrigger>
				</div>
			);
		}
		return (
			<Card style={{ height: '100%' }}>
				<Card.Header>
					<Card.Title as="h3">Badges</Card.Title>
				</Card.Header>
				<Card.Body>
				{list}
				</Card.Body>
			</Card>
		);
	}

	renderUserSection() {
		var date = null;
		if ( this.props.user.createdAt) date = new Date(this.props.user.createdAt).toLocaleDateString();
		let userPic = hoodie;
		if (this.props.user.picture) userPic = this.props.user.picture;
		return (
			<div className="profile-page-user-container">
				<div className="profile-page-user-portrait">
					<img onClick={this.toggleProfilePicModal} src={userPic} />
				</div>
				<div className="profile-page-user-personal">
					<div className="profile-page-user-personal-name">
						<Card>
							<Card.Header>
								<Card.Title as="h3">{ this.props.user.name}</Card.Title>
								{date ? <div>registered since {date}</div> : null}
							</Card.Header>
							<Card.Body>
								<div className="profile-page-user-values">
									<div className="profile-page-user-legend">Score</div>
									<OverlayTrigger placement="top" overlay={createTooltip( 'Your score' )}>
										<div className="profile-page-user-value">17912</div>
									</OverlayTrigger>
									<div className="profile-page-user-legend">Completed Lessons</div>
									<div className="profile-page-user-value">13</div>

									<div className="profile-page-user-legend">Time spent</div>
									<div className="profile-page-user-value">3:17</div>
								</div>
							</Card.Body>
						</Card>
						<Button style={{ marginTop: 15 }} onClick={this.toggleEditModal}>Edit Profile</Button>
						{this.renderInstructorButton()}
					</div>
				</div>
				<div className="profile-page-user-footer">
				</div>
			</div>
		);
	}

	render() {
		return (
			<Fragment>
				<div className="profile-page-grid-container">
					<div className="profile-page-left">
						{this.renderUserSection()}
					</div>

					{this.renderStatisticSection()}

					<div className="profile-page-badge-title">Badges</div>

					<div className="profile-page-badge-container">
						{this.renderBadgesSectionNew()}
					</div>
				</div>
				<EditModal
					user={this.props.user}
					show={this.state.showEditModal}
					addNotification={this.props.addNotification}
					updateUser={this.props.updateUser}
					onHide={this.toggleEditModal}
				/>
				<EnterTokenModal
					user={this.props.user}
					authenticate={this.props.authenticate}
					show={this.state.showTokenModal}
					onHide={this.toggleTokenModal}
				/>
				<ProfilePicModal
					user={this.props.user}
					authenticate={this.props.authenticate}
					show={this.state.showProfilePicModal}
					onHide={this.toggleProfilePicModal}
					uploadProfilePic={this.props.uploadProfilePic}
				/>
			</Fragment>
		);
	}
}


// PROPERTIES //

ProfilePage.propTypes = {
	addNotification: PropTypes.func.isRequired,
	authenticate: PropTypes.func.isRequired,
	updateUser: PropTypes.func.isRequired,
	uploadProfilePic: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
};

ProfilePage.defaultProps = {
};


// EXPORTS //

export default ProfilePage;
