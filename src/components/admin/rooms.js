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

import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import ReactTable from 'react-table';


// MAIN //

class Rooms extends Component {
	constructor( props ) {
		super( props );
		this.columns = this.createColumns();
	}

	componentDidMount() {
		this.props.getRooms();
	}

	createColumns = () => {
		const { t } = this.props;
		return [
			{
				Header: t('common:course'),
				id: 'namespace',
				maxWidth: 200,
				accessor: d => {
					return d.name.substring( 0, d.name.indexOf( '/' ) );
				},
				style: { marginTop: '8px', color: 'darkslategrey' }
			},
			{
				Header: t('common:lesson'),
				id: 'lesson',
				maxWidth: 200,
				accessor: d => {
					return d.name.substring( d.name.indexOf( '/' )+1 );
				},
				style: { marginTop: '8px', color: 'darkslategrey' }
			},
			{
				Header: t( 'common:time' ),
				accessor: 'startTime',
				style: { marginTop: '2px', color: 'darkslategrey' },
				Cell: ( row ) => {
					if ( row.value ) {
						return new Date( row.value ).toLocaleString();
					}
					return null;
				},
				maxWidth: 150
			}
		];
	}

	render() {
		return (
			<Fragment>
				<ReactTable
					filterable
					data={this.props.admin.rooms}
					columns={this.columns}
					ref={(r) => {
						this.reactTable = r;
					}}
				/>
			</Fragment>
		);
	}
}


// EXPORTS //

export default withTranslation( [ 'admin', 'common' ] )( Rooms );