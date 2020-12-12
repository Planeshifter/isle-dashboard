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

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';


// MAIN //

i18n.use( Backend )
	.use( LanguageDetector )
	.use( initReactI18next )
	.init({
		debug: false,
		lng: localStorage.getItem( 'i18nextLng' ) || 'en',
		fallbackLng: 'en',
		backend: {
			loadPath: './locales/{{lng}}/{{ns}}.json'
		},
		react: {
			useSuspense: false
		},
		interpolation: {
			escapeValue: false // Not needed for React!
		}
	});


// EXPORTS //

export default i18n;
