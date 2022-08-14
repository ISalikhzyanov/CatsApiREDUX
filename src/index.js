import React from 'react';
import ReactDOM from 'react-dom/client';
import {compose, createStore,applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import thunk from "redux-thunk";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {rootReducer} from "./redux/rootReducer";

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
