import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import {middleware} from "../navigator/AppNavigator";

// 自定义中间件
const logger = store => next => action => {
  if (typeof action === 'function') {
    console.log('dispatching a function');
  } else {
    console.log('dispatching ', action);
  }
  const result = next(action);
  console.log('next state', store.getState());
};

const middleWares = [
  middleware,
  thunk,
  logger,
];

export default createStore(reducers, applyMiddleware(...middleWares));
