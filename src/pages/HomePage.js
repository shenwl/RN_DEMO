import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import NavigatorUtils from '../navigator/NavigatorUtils';

import DynamicTabNavigator from '../navigator/DynamicTabNavigator';

export default class HomePage extends Component {

  render() {
    NavigatorUtils.navigation = this.props.navigation;
    return <DynamicTabNavigator></DynamicTabNavigator>;
  }
}

const styles = StyleSheet.create({

});
