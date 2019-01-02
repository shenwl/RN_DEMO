import {combineReducers} from 'redux';
import {rootCom, RootNavigator} from "../navigator/AppNavigator";
import theme from './theme';

// 1. 指定默认state
const navState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom));

// 2. 创建自己的navigation reducer
const navReducer = (state = navState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);
  // 如果nextState为null或未定义，只需返回原始state
  return nextState || state;
};

// 3. 合并reducer
export default combineReducers({
  nav: navReducer,
  theme,
});
