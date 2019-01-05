// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Select from 'react-select';
import saveAs from 'utils/file_saver.js';
import './actions_page.css';


// MAIN //

class ActionsPage extends Component {
	constructor( props ) {
		super( props );

		const cohortOptions = props.cohorts.map( cohort => {
			return { label: cohort.title, value: cohort };
		});

		let displayedMembers = [];
		for (var i = 0; i < props.cohorts.length; i++) {
			displayedMembers = displayedMembers.concat( props.cohorts[i].members);
		}

		this.state = {
			cohortOptions: cohortOptions,
			selectedCohorts: cohortOptions,
			displayedMembers: displayedMembers,
			lessonActionsPage: false,
			actualLesson: null,
			anonymized: true
		};
	}

	retrieveActions = () => {
		this.props.getNamespaceActions({
			namespaceID: this.props.namespace._id,
			token: this.props.user.token
		}, ( err, res, body ) => {
			const blob = new Blob([ body ], {
				type: 'application/json'
			});
			const name = `actions_${this.props.namespace.title}.json`;
			saveAs( blob, name );
		});
	}

	handleRadioChange = ( val ) => {
		this.setState({
			anonymized: !this.state.anonymized
		});
	}

	handleCohortChange = ( cohorts ) => {
		let members = [];
		for ( let i = 0; i < cohorts.length; i++ ) {
			members = members.concat( cohorts[ i ].value.members );
		}
		this.setState({
			selectedCohorts: cohorts,
			displayedMembers: members
		}, () => {
			console.log( 'MEMBERS: ');
			console.log( this.state.displayedMembers );
			console.log( this.state.selectedCohorts );
		});
	}

	renderCohorts() {
		return (
			<Fragment>
				<div className="actions-page-cohorts">
					<div style={{ width: '400px', height: '40px' }}>
						<Select
							value={this.state.selectedCohorts}
							isMulti
							name="cohorts"
							options={this.state.cohortOptions}
							onChange={this.handleCohortChange}
						/>
					</div>
				</div>
			</Fragment>
		);
	}

	renderLessonActionsPage() {
		return (
			<div className="actions-page-lesson-action-page">
				<div className="lesson-action-page-resize">	&#x1f5d6;</div>
				<div onClick={this.hideLessonActions} className="lesson-action-page-exit">&#10005;</div>
				<div className="lesson-action-page-title">{ this.state.actualLesson.title}</div>
				<div className="lesson-action-page-filter">
					{this.renderCohorts() }
				</div>
			</div>
		);
	}


	hideLessonActions = () => {
		this.setState({
			lessonActionsPage: false
		});
	}

	showLessonActions = (lesson) => {
		this.setState({
			lessonActionsPage: true,
			actualLesson: lesson
		});
	}

	renderLesson(lesson, id) {
		return (
			<div onClick={()=>this.showLessonActions(lesson)} className="actions-page-lesson">
				<div className="actions-page-lesson-title">{lesson.title}</div>
			</div>
		);
	}

	renderLessons() {
		let lessons = this.props.namespace.lessons;
		let list = [];

		for (var i = 0; i < lessons.length; i++) {
			list.push(
				this.renderLesson(lessons[i], i)
			);
		}


		return (
			<div className="actions-page">
				<div className="actions-page-export">
				{ this.renderExportSection() }
				</div>
				<div className="actions-page-lessons">
					{ list }
				</div>
			</div>
		);
	}

	renderExportSection() {
		return (
		<Fragment>
			<div className="actions-page-export-title">Export Actions</div>
			<ToggleButtonGroup
				name="options"
				onChange={this.handleRadioChange}
				type="radio"
				size="small"
				value={this.state.anonymized}
			>
				<ToggleButton
					size="sm"
					variant="light"
					value={false}
					style={{
						fontSize: '12px',
						color: this.state.anonymized ? '#A9A9A9' : 'black'
					}}
				>Original</ToggleButton>
				<ToggleButton
					size="sm"
					variant="light"
					value={true}
					style={{
						fontSize: '12px',
						color: this.state.anonymized ? 'black' : '#A9A9A9'
					}}
				>Anonymized</ToggleButton>
			</ToggleButtonGroup>
			<Button onClick={this.retrieveActions}>Save all namespace actions</Button>
		</Fragment>
		);
	}


	render() {
		return ( <div className="namespace-data-page">
			{ this.renderLessons() }
			{ this.state.lessonActionsPage ? this.renderLessonActionsPage() : null }
		</div> );
	}
}


// PROPERTIES //

ActionsPage.propTypes = {
	cohorts: PropTypes.array.isRequired,
	getNamespaceActions: PropTypes.func.isRequired,
	namespace: PropTypes.object.isRequired
};

ActionsPage.defaultProps = {
};


// EXPORTS //

export default ActionsPage;
