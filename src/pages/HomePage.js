import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import NavigatorUtils from '../navigator/NavigatorUtils';

import DynamicNavigator from '../navigator/DynamicNavigator';

export default class HomePage extends Component {

  render() {
    NavigatorUtils.navigation = this.props.navigation;
    return <DynamicNavigator></DynamicNavigator>;
  }
}

const styles = StyleSheet.create({

});
