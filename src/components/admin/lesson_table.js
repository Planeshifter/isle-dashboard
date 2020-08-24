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
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import ReactTable from 'react-table';
import capitalize from '@stdlib/string/capitalize';
import createBooleanColumn from './create_boolean_column.js';
import 'react-table/react-table.css';


// MAIN //

class LessonTable extends Component {
	constructor( props ) {
		super( props );
		this.columns = this.createColumns();
	}

	componentDidMount() {
		this.props.getAllLessons();
	}

	createColumns = () => {
		const { t } = this.props;
		console.log( this.props.admin.lessons );
		return [
			{
				Header: t('common:title'),
				id: 'title',
				accessor: 'title',
				maxWidth: 200,
				style: { marginTop: '8px', color: 'darkslategrey' }
			},
			{
				Header: t('common:course'),
				id: 'namespace',
				accessor: 'namespace.title',
				maxWidth: 200,
				style: { marginTop: '8px', color: 'darkslategrey' }
			},
			{
				Header: t('common:description'),
				id: 'description',
				accessor: 'description',
				maxWidth: 200,
				style: { marginTop: '8px', color: 'darkslategrey' }
			},
			createBooleanColumn({
				Header: capitalize( t('lesson:active') ),
				accessor: 'active',
				trueLabel: t('lesson:active'),
				falseLabel: t('lesson:inactive')
			}),
			createBooleanColumn({
				Header: capitalize( t('lesson:public') ),
				accessor: 'public',
				trueLabel: t('lesson:public'),
				falseLabel: t('lesson:private')
			}),
			{
				Header: t('last-updated'),
				accessor: 'updatedAt',
				Cell: ( row ) => {
					return new Date( row.value ).toLocaleString();
				},
				style: { marginTop: '8px', color: 'darkslategrey' },
				maxWidth: 150
			},
			{
				Header: t('created-at'),
				accessor: 'createdAt',
				Cell: ( row ) => {
					return new Date( row.value ).toLocaleString();
				},
				style: { marginTop: '8px', color: 'darkslategrey' },
				maxWidth: 150
			},
			{
				Header: t('common:actions')
			}
		];
	}

	render() {
		return (
			<Fragment>
				<ReactTable
					filterable
					data={this.props.admin.lessons}
					columns={this.columns}
					ref={(r) => {
						this.reactTable = r;
					}}
				/>
			</Fragment>
		);
	}
}


// PROPERTIES //

LessonTable.propTypes = {
	admin: PropTypes.object.isRequired,
	getAllLessons: PropTypes.func.isRequired,
	t: PropTypes.func.isRequired
};


// EXPORTS //

export default withTranslation( [ 'admin', 'lesson', 'common' ] )( LessonTable );