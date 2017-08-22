// MODULES //

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import {
	Button, FormGroup, FormControl, Glyphicon, InputGroup,
	Overlay, OverlayTrigger, Popover, ListGroupItem, ListGroup, Tooltip
} from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import icon from './../../public/profile_icon.png';


// VARIABLES //

const RadiumLink = Radium( Link );

const createCourseTooltip = <Tooltip>Create a new course</Tooltip>;
const galleryTooltip = <Tooltip>Open gallery</Tooltip>;
const selectCourseTooltip = <Tooltip>Select course</Tooltip>;


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

	render() {

		const containerStyle = {
			borderLeft: '1px solid rgba(255, 255, 255, 0.06)',
			float: 'left',
			position: 'relative',
			height: '52px',
			width: 'auto'
		};
		const spanStyle = {
			float: 'left',
			marginTop: '16px',
			marginLeft: '10px',
			position: 'relative',
			marginRight: '10px',
			cursor: 'pointer',
			color: 'silver',
			':hover': {
				color: 'white'
			}
		};

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

		return (
			<header style={{
				width: '100%',
				height: '52px',
				position: 'fixed',
				top: 0,
				left: 0,
				background: '#2a3e54',
				zIndex: 100
			}}>
				<h1 style={{
					float: 'left',
					fontSize: '22px',
					marginTop: '15px',
					position: 'relative',
					marginLeft: '10px',
					color: 'white'
				}}>
					ISLE {this.state.location}
				</h1>
				<div style={{
					marginLeft: '30px',
					marginTop: '8px',
					float: 'left',
					position: 'relative',
				}}>
					<OverlayTrigger placement="right" overlay={selectCourseTooltip}>
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
								{this.props.namespace.title}
							</small>
						</Button>
					</OverlayTrigger>
					<Overlay
						show={this.state.showNamespacesOverlay}
						target={this.overlayTarget}
						placement="bottom"
					>
						{namespacePopover( this.props.user.namespaces, this.namespaceClickFactory.bind( this ) )}
					</Overlay>
					<Button
						style={{ float: 'left', marginRight: '6px' }}
						onClick={this.goToCoursePage.bind( this )}
						disabled={!this.props.namespace.title}
					>
						<Glyphicon glyph="edit" />
					</Button>
					<OverlayTrigger placement="bottom" overlay={createCourseTooltip}>
						<Button
							style={{ float: 'left', marginRight: '6px' }}
							onClick={this.goToCreateCoursePage.bind( this )}
						>
							<Glyphicon glyph="pencil" />
						</Button>
					</OverlayTrigger>
					<FormGroup style={{ width: '500px' }}>
						<InputGroup>
							<FormControl style={{
								background: 'silver',
								color: '#2a3e54'
							}} type="text" placeholder="Search" />
							<OverlayTrigger placement="bottom" overlay={galleryTooltip}>
								<InputGroup.Button>
									<Button onClick={this.goToGallery.bind( this )}>
										<Glyphicon glyph="search" />
									</Button>
								</InputGroup.Button>
							</OverlayTrigger>
						</InputGroup>
					</FormGroup>
				</div>
				<div style={{
					float: 'right',
					position: 'relative',
					fontSize: '15px',
					marginRight: '10px'
				}}>
					<div style={containerStyle}>
						<div key="help" style={spanStyle} >
							<a href="http://isledocs.com/" target="_blank" style={{
								color: 'silver',
								textDecoration: 'none',
								':hover': {
									color: 'white'
								}
							}}>Help</a>
						</div>
					</div>
					<div style={containerStyle}>
						<Image src={icon} circle style={{
							width: '32px',
							height: 'auto',
							float: 'left',
							position: 'relative',
							marginLeft: '10px',
							marginTop: '10px'
						}}></Image>
						<div key="account" style={spanStyle} >
							<RadiumLink to="/profile" style={{
								color: 'silver',
								textDecoration: 'none',
								':hover': {
									color: 'white'
								}
							}}>{this.props.user.name}</RadiumLink>
						</div>
					</div>
					<div style={containerStyle}>
						<div key="logout" style={spanStyle} >
							<a
								key="logoutButton"
								href="#"
								style={{
									color: 'silver',
									textDecoration: 'none',
									':hover': {
										color: 'white'
									}
								}}
								onClick={this.props.logout}
							> Log out </a>
						</div>
					</div>
				</div>
			</header>
		);
	}
}


// EXPORTS //

export default Radium( HeaderBar );
