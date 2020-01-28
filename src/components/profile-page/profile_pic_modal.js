// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Badge, Button, Modal, Form, FormControl, Col, Row } from 'react-bootstrap';
import AvatarEditor from 'react-avatar-editor';
import path from 'path';


// FUNCTIONS //

function getResizedCanvas( canvas, newWidth, newHeight ) {
	const tmpCanvas = document.createElement( 'canvas' );
	tmpCanvas.width = newWidth;
	tmpCanvas.height = newHeight;
	const ctx = tmpCanvas.getContext( '2d' );
	ctx.drawImage( canvas, 0, 0, canvas.width, canvas.height, 0, 0, newWidth, newHeight );
	return tmpCanvas;
}


// MAIN //

class ProfilePicModal extends Component {
	constructor( props ) {
		super( props );

		let ext;
		if ( props.user.picture ) {
			ext = props.user.picture.substr( props.user.picture.lastIndexOf( '.' ) );
		} else {
			ext = null;
		}
		this.state = {
			actualFile: props.user.picture,
			zoom: 1.2,
			ext,
			rotate: 0
		};
	}

	componentDidUpdate( prevProps ) {
		if ( this.props.user.picture !== prevProps.user.picture ) {
			this.setState({
				actualFile: this.props.user.picture,
				rotate: 0,
				zoom: 1.2
			});
		}
	}

	handleUpload = () => {
		if ( this.editor ) {
			const canvas = this.editor.getImageScaledToCanvas();
			canvas.toBlob( img => {
				const avatarData = new FormData();
				const thumbnailData = new FormData();
				const tn = getResizedCanvas( canvas, 80, 80 );
				tn.toBlob( thumbnail => {
					const id = this.props.user.id;
					const filename = `${id}_${this.state.zoom}_${this.state.rotate}${this.state.ext}`;
					const thumbnailName = filename;
					avatarData.append( 'avatar', img, filename );
					thumbnailData.append( 'thumbnail', thumbnail, thumbnailName );
					this.props.uploadProfilePic({
						token: this.props.user.token,
						avatarData: avatarData,
						thumbnailData: thumbnailData
					});
				});
			});
		}
	}

	handleFileSelection = (e) => {
		const file = e.target.files[ 0 ];
		if ( file ) {
			const ext = path.extname( file.name );
			this.setState({
				actualFile: file,
				ext: ext
			});
		}
	}

	changeZoom = (e) => {
		this.setState({
			zoom: Number( e.target.value )
		});
	}

	renderAvatarEditor = () => {
		return (
			<Fragment>
				<AvatarEditor
					className="avatarEditor"
					ref={(editor) => {
						this.editor = editor;
					}}
					image={this.state.actualFile}
					width={200}
					height={200}
					border={[80, 50]}
					color={[255, 255, 255, 0.9]} // RGBA
					scale={this.state.zoom}
					rotate={0}
				/>
				<Form.Group as={Row} controlId="form-zoom">
					<Form.Label column sm="2">Zoom</Form.Label>
					<Col sm="10">
						<FormControl
							step={0.05}
							type="range"
							defaultValue={1} min={0.5} max={3}
							onChange={this.changeZoom}
						/>
					</Col>
				</Form.Group>
			</Fragment>
		);
	}

	rotateLeft = () => {
		const oldRotate = this.state.rotate;
		this.setState({
			rotate: oldRotate - 90
		});
	}

	rotateRight = () => {
		const oldRotate = this.state.rotate;
		this.setState({
			rotate: oldRotate + 90
		});
	}

	render() {
		return (
			<Modal
				onHide={this.props.onHide}
				show={this.props.show}
				dialogClassName="profile-pic-modal"
			>
				<Modal.Header closeButton >
					<Modal.Title as="h3">Profile Picture</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ paddingBottom: 0 }}>
					<Form.Group style={{ marginBottom: 0 }}>
						<Form.Label htmlFor="imageUpload" style={{ cursor: 'pointer' }}>
							<h3><Badge variant="success">Select file</Badge></h3>
						</Form.Label>
						<FormControl
							id="imageUpload"
							style={{ display: 'none' }}
							type="file"
							onChange={this.handleFileSelection}
							accept="image/*"
						/>
						<span style={{ paddingLeft: 10 }}>
							Click to upload a new profile picture.
						</span>
					</Form.Group>
					{ this.renderAvatarEditor() }
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.handleUpload}>
						Save and Close
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}


// PROPERTIES //

ProfilePicModal.propTypes = {
	onHide: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	uploadProfilePic: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
};


// EXPORTS //

export default ProfilePicModal;
