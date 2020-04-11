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

import axios from 'axios';
import contains from '@stdlib/assert/contains';
import server from 'constants/server';
import { addNotification, addErrorNotification } from 'actions/notification';
import { RETRIEVED_BADGES, USER_RECEIVED_BADGES } from 'constants/action_types.js';


// FUNCTIONS //

function createBadgeNotification({ name, description, picture }) {
	const pic = server + '/badges/' + picture;
	return {
		children: (
			<div>
				<h3>Received Badge: {name}</h3>
				<div>
					<div>
						<div className="received-badge-before" />
						<img className="received-badge" src={pic} alt="Received Badge" />
					</div>
					<p style={{ marginTop: 15 }}>You received a badge for:  <b>{description}</b></p>
				</div>
			</div>
		),
		level: 'info',
		position: 'tc',
		dismissible: 'button',
		autoDismiss: 0
	};
}


// FUNCTIONS //

export function receivedUserBadges( badges ) {
	return {
		type: USER_RECEIVED_BADGES,
		payload: {
			badges
		}
	};
}

export function retrievedBadges( badges ) {
	return {
		type: RETRIEVED_BADGES,
		payload: {
			badges
		}
	};
}

export const getUserBadges = async ( dispatch ) => {
	try {
		const res = await axios.get( server+'/get_user_badges' );
		const { badges, addedBadges } = res.data;
		dispatch( receivedUserBadges( badges ) );
		if ( addedBadges.length > 0 ) {
			for ( let i = 0; i < badges.length; i++ ) {
				const item = badges[i];
				if ( contains( addedBadges, item.name ) ) {
					addNotification( dispatch, createBadgeNotification( item ) );
				}
			}
		}
	} catch ( err ) {
		addErrorNotification( dispatch, err );
	}
};

export const getUserBadgesInjector = ( dispatch ) => {
	return () => {
		getUserBadges( dispatch );
	};
};

export const getAvailableBadges = async ( dispatch ) => {
	try {
		const res = await axios.get( server+'/get_available_badges' );
		dispatch( retrievedBadges( res.data ) );
	} catch ( err ) {
		addErrorNotification( dispatch, err );
	}
};

export const getAvailableBadgesInjector = ( dispatch ) => {
	return () => {
		getAvailableBadges( dispatch );
	};
};
