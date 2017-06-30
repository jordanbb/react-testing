// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "./App";
// import './App.scss';
//
// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// );

import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';

const userReducer = (state = {
    name: "jordan",
    age: 28
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};

const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;
};

const store = createStore(
    combineReducers({userReducer, mathReducer}),
    {},
    applyMiddleware(logger)
);

store.subscribe(() => {
    console.log("Store Updated!", store.getState())
});

store.dispatch({
    type: "ADD",
    payload: 10
});
store.dispatch({
    type: "ADD",
    payload: 20
});
store.dispatch({
    type: "ADD",
    payload: 55
});
store.dispatch({
    type: "SUBTRACT",
    payload: 100
});

const hash = window.btoa('ryan:test');
console.log(hash);

const myHeaders = new Headers();
//myHeaders.append("Content-Type", "text/plain");
myHeaders.append( 'Authorization', `Basic ${hash}`);

const myInit = {
    method: "GET",
    headers: myHeaders
};

function login() {
    fetch('http://pms.blueiqtest.com:25834/blueserver/api', myInit)
        .then(
            console.log('Log in failed')
        )
}

login();
