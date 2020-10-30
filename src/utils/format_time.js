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

import floor from '@stdlib/math/base/special/floor';


// MAIN //

const formatTime = ( time ) => {
	time = time / 1000;
	const hours = floor( time / ( 60*60 ) );
	time = time % ( 60*60 );
	let minutes = floor( time / 60 );
	if ( minutes < 10 ) {
		minutes = '0'+minutes;
	}
	time = time % 60;
	let seconds = floor( time );
	if ( seconds < 10 ) {
		seconds = '0'+seconds;
	}
	return hours + ':' + minutes + ':' + seconds;
};


// EXPORTS //

export default formatTime;
