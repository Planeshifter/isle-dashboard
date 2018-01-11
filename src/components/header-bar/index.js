// MODULES //

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Button, FormGroup, FormControl, Glyphicon, Image, InputGroup,
	Overlay, OverlayTrigger, Popover, ListGroupItem, ListGroup, Tooltip
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import icon from './../../../public/profile_icon.png';
import './header_bar.css';


// VARIABLES //

const createCourseTooltip = <Tooltip id="new_course">Create a new course</Tooltip>;
const editCourseTooltip = <Tooltip id="edit_course">Edit course</Tooltip>;
const galleryTooltip = <Tooltip id="open_gallery">Open gallery</Tooltip>;
const selectCourseTooltip = <Tooltip id="select_course">Select course</Tooltip>;

const namespacePopover = ( namespaces, clickFactory ) => (
	<Popover id="popover-positioned-bottom">
		<ListGroup>
			{namespaces.map( ( x, id ) => (
				<ListGroupItem
					key={id}
					style={{ padding: '5px 10px' }}
				><Link to="/lessons" onClick={clickFactory( id )}>{x.title}</Link></ListGroupItem>
			) )}
		</ListGroup>
	</Popover>
);


// MAIN //

class HeaderBar extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			showNamespacesOverlay: false,
			location: 'Dashboard'
		};
	}

	namespaceClickFactory( id ) {
		let out = () => {
			this.props.onNamespace( this.props.user.namespaces[ id ], this.props.user.token );
			this.setState({
				showNamespacesOverlay: false,
				location: 'Course'
			});
		};
		return out;
	}

	goToCreateCoursePage() {
		this.props.history.replace( '/create-namespace' );
		this.setState({
			location: 'Dashboard'
		});
	}

	goToCoursePage() {
		this.props.history.replace( '/edit-namespace' );
		this.setState({
			location: 'Dashboard'
		});
	}

	goToGallery() {
		this.props.history.replace( '/gallery' );
		this.setState({
			location: 'Gallery'
		});
	}

	handleTextChange = ( event ) => {
		if ( !this.debouncedChange ) {
			this.debouncedChange = debounce( ( value ) => {
				this.props.setSearchPhrase( value );
			}, 750 );
		}
		const { value } = event.target;
		this.debouncedChange( value );
	}

	renderCreateButton() {
		if ( !this.props.user.writeAccess ) {
			return null;
		}
		return ( <OverlayTrigger placement="bottom" overlay={createCourseTooltip}>
			<Button
				style={{ float: 'left', marginRight: '24px' }}
				onClick={this.goToCreateCoursePage.bind( this )}
			>
				<Glyphicon glyph="pencil" />
			</Button>
		</OverlayTrigger> );
	}

	renderEditButton() {
		return (
			<OverlayTrigger placement="bottom" overlay={editCourseTooltip}>
				<Button
					style={{ float: 'left', marginRight: '6px' }}
					onClick={this.goToCoursePage.bind( this )}
					disabled={!this.props.namespace.title}
				>
					<Glyphicon glyph="edit" />
				</Button>
			</OverlayTrigger>
		);
	}

	renderGalleryButton() {
		return (
			<OverlayTrigger placement="bottom" overlay={galleryTooltip}>
				<Button
					onClick={this.goToGallery.bind( this )}
					style={{
						float: 'left',
						marginRight: '18px',
						marginLeft: '6px'
					}}
				>
					<Glyphicon glyph="eye-open" />
					<small style={{ marginLeft: '5px' }}>Gallery</small>
				</Button>
			</OverlayTrigger>
		);
	}

	renderCoursesButton() {
		return ( <OverlayTrigger placement="right" overlay={selectCourseTooltip}>
			<Button
				ref={( button ) => { this.overlayTarget = button; }}
				style={{
					float: 'left',
					marginRight: '6px',
					marginLeft: '6px'
				}}
				onClick={() => {
					this.setState({
						showNamespacesOverlay: !this.state.showNamespacesOverlay
					});
				}}
				disabled={!this.props.user.namespaces.length}
			>
				<Glyphicon glyph="align-justify" />
				<small style={{ marginLeft: '5px' }}>
					{this.props.namespace.title || 'Your Courses'}
				</small>
			</Button>
		</OverlayTrigger> );
	}

	renderSearchField() {
		return ( <FormGroup style={{ width: '50vw'}}>
			<InputGroup>
				<FormControl
					style={{
						background: 'silver',
						color: '#2a3e54'
					}}
					type="text"
					placeholder="Search"
					onChange={this.handleTextChange}
				/>
					<InputGroup.Button>
						<Button disabled style={{ cursor: 'auto' }}>
							<Glyphicon glyph="search" />
						</Button>
					</InputGroup.Button>
			</InputGroup>
		</FormGroup> );
	}

	render() {
		return (
			<header className="header-bar">
				<h1 className="header-bar-title">
					ISLE {this.state.location}
				</h1>
				<div className="header-bar-buttons" >
					{this.renderGalleryButton()}
					{this.renderCoursesButton()}
					<Overlay
						show={this.state.showNamespacesOverlay}
						target={this.overlayTarget}
						placement="bottom"
					>
						{namespacePopover( this.props.user.namespaces, this.namespaceClickFactory.bind( this ) )}
					</Overlay>
					{this.renderEditButton()}
					{this.renderCreateButton()}
					{this.renderSearchField()}
				</div>
				<div style={{
					float: 'right',
					position: 'relative',
					fontSize: '15px',
					marginRight: '10px'
				}}>
					<div className="header-bar-container">
						<div key="help" className="header-bar-link-div" >
							<a
								href="http://isledocs.com/" target="_blank"
								className="header-bar-link"
							>Help</a>
						</div>
					</div>
					<div className="header-bar-container">
						<Image src={icon} circle className="header-bar-icon"></Image>
						<div key="account" className="header-bar-link-div" >
							<Link to="/profile" className="header-bar-link">{this.props.user.name}</Link>
						</div>
					</div>
					<div className="header-bar-container">
						<div key="logout" className="header-bar-link-div" >
							<a
								key="logoutButton"
								href="#"
								className="header-bar-link"
								onClick={this.props.logout}
							> Log out </a>
						</div>
					</div>
				</div>
			</header>
		);
	}
}


// PROPERTY TYPES //

HeaderBar.propTypes = {
	history: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired,
	namespace: PropTypes.object.isRequired,
	onNamespace: PropTypes.func.isRequired,
	setSearchPhrase: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
};


// EXPORTS //

export default HeaderBar;
