import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import {middleware} from "../navigator/AppNavigator";


const middleWares = [
  middleware,
  thunk
];

export default createStore(reducers, applyMiddleware(...middleWares));
