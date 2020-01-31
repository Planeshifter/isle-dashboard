/**
* Copyright (C) 2016-2020 The ISLE Authors
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

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';


// MAIN //

const DeleteModal = ( props ) => (
	<Modal show={props.show} onHide={props.close}>
		<Modal.Header>
			<Modal.Title>Delete?</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			Are you sure that you want to delete the lesson with the name &quot;{props.title}&quot;?
		</Modal.Body>
		<Modal.Footer>
			<Button onClick={props.close}>Cancel</Button>
			<Button variant="danger" onClick={props.delete} >Delete</Button>
		</Modal.Footer>
	</Modal>
);


// PROPERTIES //

DeleteModal.propTypes = {
	close: PropTypes.func.isRequired,
	delete: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired
};


// EXPORTS //

export default DeleteModal;
