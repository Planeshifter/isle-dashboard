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

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import badges from './badges';
import cohorts from './cohorts';
import namespace from './namespace';
import notification from './notification';
import gallery from './gallery';
import search from './search';
import user from './user';


// EXPORTS //

export default ( history ) => combineReducers({
	badges,
	cohorts,
	gallery,
	namespace,
	notification,
	router: connectRouter( history ),
	search,
	user
});
