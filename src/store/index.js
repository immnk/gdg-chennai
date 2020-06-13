import createStore from 'redux-zero';
import { connect } from 'redux-zero/devtools';
import { applyMiddleware } from 'redux-zero/middleware';

const initialState = {};

const middlewares = connect ? applyMiddleware(initialState) : [];
const store = createStore(initialState, middlewares);

export default store;
