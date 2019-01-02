/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App'

// 禁止warning框
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
