// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'react-bootstrap';
import FilesPage from './files_page.js';
import RecentActivityPage from './recent_activity_page.js';
import StatisticsPage from './statistics_page.js';
import './namespace_data.css';


// MAIN //

class NamespaceData extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			activePage: 1,
			files: null
		};
	}

	handleSelect = ( selectedKey ) => {
		if ( selectedKey === 4 ) {
			this.props.getFiles({
				namespaceName: this.props.namespace.title,
				token: this.props.user.token
			}, ( err, files ) => {
				const lessons = this.props.namespace.lessons;
				files = files.map( file => {
					file.updatedAt = new Date( file.updatedAt );
					for ( let i = 0; i < lessons.length; i++ ) {
						if ( lessons[ i ]._id === file.lesson ) {
							file.lesson = lessons[ i ];
							break;
						}
					}
					return file;
				});
				console.log( files );
				this.setState({
					activePage: selectedKey,
					files: files
				});
			});
		} else {
			this.setState({
				activePage: selectedKey
			});
		}
	}

	renderStatisticsPage() {
		return ( <div className="namespace-data-page">
			<h1>Statistics</h1>
		</div> );
	}

	renderPage() {
		switch ( this.state.activePage ) {
			case 1:
				return <RecentActivityPage />;
			case 2:
				return <StatisticsPage />;
			case 4:
				return <FilesPage files={this.state.files} />;
		}
	}

	render() {
		const page = this.renderPage();
		return (
			<div className="namespace-data-div">
				<div className="namespace-data-navbar">
					<Nav NamebsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
						<NavItem eventKey={1} title="Recent Activity">
							Recent Activity
						</NavItem>
						<NavItem eventKey={2} title="Statistics">
							Statistics
						</NavItem>
						<NavItem eventKey={3} disabled title="Cohorts">
							Cohorts
						</NavItem>
						<NavItem eventKey={4} title="Files">
							Files
						</NavItem>
						<NavItem eventKey={5} disabled title="Actions">
							Actions
						</NavItem>
					</Nav>
				</div>
				{page}
			</div>
		);
	}
}

// PROPERTY TYPES //

NamespaceData.propTypes = {
	getFiles: PropTypes.func.isRequired,
	namespace: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired
};

NamespaceData.defaultProps = {
};


// EXPORTS //

export default NamespaceData;
