import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {createAPI} from './api';
import reducer from './reducer/reducer';

import {Operation as CatalogOperation} from './reducer/catalog/reducer';
import {AuthorizationStatus, ActionCreator, Operation as UserOperation} from './reducer/user/reducer';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';

// Выносим код в отдельную функцию, чтобы развязать циклическую зависимость:
// `store` зависит от `api`, а `api` зависит от `store`.
const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        (window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f)
    )
);

store.dispatch(CatalogOperation.loadFilms());
store.dispatch(CatalogOperation.loadPromoFilm());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
