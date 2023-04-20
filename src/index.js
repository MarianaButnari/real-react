import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers} from "redux";
import {createLogger} from "redux-logger/src";
import thunkMiddleware from 'redux-thunk';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./containers/app/app";
import {searchRobots, requestRobots} from "./reducers";

const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
