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

import 'react-dates/initialize';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage
import { PersistGate } from 'redux-persist/integration/react';
import { createHashHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from 'reducers';
import App from 'containers/app.js';
import 'css/animations.css';
import 'css/index.css';


// VARIABLES //

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [ 'router' ]
};
const history = createHashHistory();
const rootReducer = createRootReducer( history );
const persistedReducer = persistReducer( persistConfig, rootReducer );


// Apply the middleware to the store
const middleware = routerMiddleware( history );
const store = createStore( persistedReducer, applyMiddleware( middleware ) );
const persistor = persistStore( store );


// MAIN //

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App history={history} />
		</PersistGate>
	</Provider>,
	document.getElementById( 'root' )
);
