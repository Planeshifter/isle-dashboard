// MODULES //

import * as types from './../constants/action_types.js';


// EXPORTS //

export function loggedIn({ email, name, token, id }) {
	return {
		type: types.LOGGED_IN,
		payload: {
			email,
			name,
			token,
			id
		}
	};
}

export function loggedOut() {
	return {
		type: types.LOGGED_OUT
	};
}

export function changedNamespace({ title, owners, description, _id }) {
	return {
		type: types.CHANGED_NAMESPACE,
		payload: {
			title,
			description,
			owners,
			_id
		}
	};
}

export function retrievedNamespaces( namespaces ) {
	return {
		type: types.RETRIEVED_NAMESPACES,
		payload: {
			namespaces
		}
	};
}

export function deletedCurrentNamespace() {
	return {
		type: types.DELETED_CURRENT_NAMESPACE
	};
}

export function updateCurrentNamespace({ title, owners, description, _id }) {
	return {
		type: types.UPDATE_CURRENT_NAMESPACE,
		payload: {
			title,
			description,
			owners,
			_id
		}
	};
}

export function addNotification({ message, level }) {
	return {
		type: types.ADD_NOTIFICATION,
		payload: {
			message,
			level
		}
	};
}

export function updateUser({ name }) {
	return {
		type: types.USER_UPDATED,
		payload: {
			name
		}
	};
}
