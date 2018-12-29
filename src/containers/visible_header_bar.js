// MODULES //

import React from 'react';
import { connect } from 'react-redux';
import request from 'request';
import HeaderBar from 'components/header-bar';
import server from 'constants/server';
import * as actions from 'actions';


// EXPORTS //

export default connect( mapStateToProps, mapDispatchToProps )( HeaderBar );

function mapStateToProps( state ) {
	return {
		user: state.user,
		namespace: state.namespace,
		search: state.search
	};
}

function mapDispatchToProps( dispatch ) {
	return {
		logout: () => {
			localStorage.removeItem( 'isle-dashboard' );
			dispatch( actions.loggedOut() );
		},
		setSearchPhrase: ( str ) => {
			dispatch( actions.searchPhraseSet( str ) );
		},
		setLessonOrder: ( order ) => {
			dispatch( actions.setLessonOrder( order ) );
		},
		setLessonOrderDirection: ( direction ) => {
			dispatch( actions.setLessonOrderDirection( direction ) );
		},
		onEnrolledNamespace: ({ title, description, owners, _id }) => {
			dispatch( actions.changedNamespace({
				title, description, owners, _id, userStatus: 'enrolled'
			}) );
		},
		onNamespace: ({ title, description, owners, _id }, userToken ) => {
			dispatch( actions.changedNamespace({ title, description, owners, _id, userStatus: 'owner' }) );
			request.get( server+'/get_cohorts', {
				headers: {
					'Authorization': 'JWT ' + userToken
				},
				qs: {
					namespaceID: _id
				}
			}, function onNamespace( error, response, body ) {
				if ( error ) {
					return error;
				}
				body = JSON.parse( body );
				dispatch( actions.retrievedCohorts( body.cohorts ) );
			});
		}
	};
}
