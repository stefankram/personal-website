import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialReducer from './initialReducer';

const middleware = [];

export default createStore(initialReducer, composeWithDevTools(
  applyMiddleware(...middleware),
));
