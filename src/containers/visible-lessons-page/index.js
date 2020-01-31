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

import React from 'react';
import { connect } from 'react-redux';
import request from 'request';
import server from 'constants/server';
import LessonsPage from 'components/lessons-page';
import * as actions from 'actions';


// EXPORTS //

const VisibleLessonsPage = connect( mapStateToProps, mapDispatchToProps )( LessonsPage );

function mapStateToProps( state ) {
	return {
		search: state.search,
		user: state.user,
		namespace: state.namespace
	};
}

function mapDispatchToProps( dispatch ) {
	return {
		addNotification: ( notification ) => {
			dispatch( actions.addNotification( notification ) );
		},
		showLessonInGallery: ({ lessonName, namespaceName, token }) => {
			request.get( server+'/show_lesson', {
				qs: {
					namespaceName,
					lessonName
				},
				headers: {
					'Authorization': 'JWT ' + token
				}
			}, function onShow( err, res ) {
				if ( err ) {
					return dispatch( actions.addNotification({
						message: err.message,
						level: 'error'
					}) );
				}
				dispatch( actions.addNotification({
					message: JSON.parse( res.body ).message,
					level: 'success'
				}) );
				dispatch( actions.updatedLesson( lessonName, { public: true }) );
			});
		},
		hideLessonInGallery: ({ lessonName, namespaceName, token }) => {
			request.get( server+'/hide_lesson', {
				qs: {
					namespaceName,
					lessonName
				},
				headers: {
					'Authorization': 'JWT ' + token
				}
			}, function onHide( err, res ) {
				if ( err ) {
					return dispatch( actions.addNotification({
						message: err.message,
						level: 'error'
					}) );
				}
				dispatch( actions.addNotification({
					message: JSON.parse( res.body ).message,
					level: 'success'
				}) );
				dispatch( actions.updatedLesson( lessonName, { public: false }) );
			});
		},
		activateLesson: ({ lessonName, namespaceName, token }) => {
			request.get( server+'/activate_lesson', {
				qs: {
					namespaceName,
					lessonName
				},
				headers: {
					'Authorization': 'JWT ' + token
				}
			}, function onActivate( err, res ) {
				if ( err ) {
					return dispatch( actions.addNotification({
						message: err.message,
						level: 'error'
					}) );
				}
				dispatch( actions.addNotification({
					message: JSON.parse( res.body ).message,
					level: 'success'
				}) );
				dispatch( actions.updatedLesson( lessonName, { active: true }) );
			});
		},
		deactivateLesson: ({ lessonName, namespaceName, token }) => {
			request.get( server+'/deactivate_lesson', {
				qs: {
					namespaceName,
					lessonName
				},
				headers: {
					'Authorization': 'JWT ' + token
				}
			}, function onDeactivate( err, res ) {
				if ( err ) {
					return dispatch( actions.addNotification({
						message: err.message,
						level: 'error'
					}) );
				}
				dispatch( actions.addNotification({
					message: JSON.parse( res.body ).message,
					level: 'success'
				}) );
				dispatch( actions.updatedLesson( lessonName, { active: false }) );
			});
		},
		updateLesson: ({ lessonName, namespaceName, newTitle, newDescription, token }, clbk ) => {
			if ( namespaceName && lessonName ) {
				request.get( server+'/update_lesson', {
					qs: {
						namespaceName,
						lessonName,
						newTitle,
						newDescription
					},
					headers: {
						'Authorization': 'JWT ' + token
					}
				}, function onUpdate( err, res ) {
					if ( err ) {
						return dispatch( actions.addNotification({
							message: err.message,
							level: 'error'
						}) );
					}
					let msg = JSON.parse( res.body ).message;
					if ( res.statusCode >= 400 ) {
						return dispatch( actions.addNotification({
							message: msg,
							level: 'error'
						}) );
					}
					dispatch( actions.deletedLesson( lessonName ) );
					dispatch( actions.addNotification({
						message: msg,
						level: 'success'
					}) );
					clbk();
				});
			}
		},
		deleteLesson: ({ lessonName, namespaceName, token }) => {
			if ( namespaceName && lessonName ) {
				request.get( server+'/delete_lesson', {
					qs: {
						namespaceName,
						lessonName
					},
					headers: {
						'Authorization': 'JWT ' + token
					}
				}, function onDelete( err, res ) {
					if ( err ) {
						return dispatch( actions.addNotification({
							message: err.message,
							level: 'error'
						}) );
					}
					let msg = JSON.parse( res.body ).message;
					if ( res.statusCode >= 400 ) {
						return dispatch( actions.addNotification({
							message: msg,
							level: 'error'
						}) );
					}
					dispatch( actions.deletedLesson( lessonName ) );
					dispatch( actions.addNotification({
						message: msg,
						level: 'success'
					}) );
				});
			}
		},
		getLessons: ( namespaceName ) => {
			if ( namespaceName ) {
				request.get( server+'/get_lessons', {
					qs: {
						namespaceName
					}
				}, function onLessons( error, response, body ) {
					if ( error ) {
						return error;
					}
					body = JSON.parse( body );
					let lessons = body.lessons;
					lessons = lessons.map((lesson, index) => {
						lesson.colorIndex = index % 20;
						lesson.url = server+'/'+namespaceName+'/'+lesson.title;
						if ( !lesson.createdAt ) {
							lesson.createdAt = new Date( 0 ).toLocaleString();
						}
						if ( !lesson.updatedAt ) {
							lesson.updatedAt = lesson.createdAt;
						}
						return lesson;
					});
					dispatch( actions.retrievedLessons({ lessons, namespaceName }) );
				});
			}
		},
		getIsleFile: ({ lessonName, namespaceName, token, callback }) => {
			request.get( server+'/get_isle_file', {
				qs: {
					lessonName,
					namespaceName
				},
				headers: {
					'Authorization': 'JWT ' + token
				}
			}, function onResponse( error, response, body ) {
				if ( error ) {
					return callback( error );
				}
				return callback( null, body );
			});
		}
	};
}

export default VisibleLessonsPage;
