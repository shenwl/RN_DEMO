/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppNavigator from './src/navigator/AppNavigator'

// 禁止warning框
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => AppNavigator);
