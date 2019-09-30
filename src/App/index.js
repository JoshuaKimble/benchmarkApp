import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import App from './app';

function renderApp(initialState) {
    const store = createStore(
        reducers,
        initialState
    );

    return ReactDOMServer.renderToString(
    <Provider store={store}>
        <App />
    </Provider>
    );
}

export default renderApp;
