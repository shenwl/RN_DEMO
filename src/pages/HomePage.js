/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  createBottomTabNavigator,
} from 'react-navigation';

type Props = {};
import PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';
import FavoritePage from './FavoritePage';
import MyPage from './MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HomePage extends Component<Props> {
  _tabNavigator() {
    return createBottomTabNavigator({
      PopularPage: {
        screen: PopularPage,
        navigationOptions: {
          tabBarLabel: '最热',
          tabBarIcon({tintColor, focused}) {
            return (
              <MaterialCommunityIcons
                name={'fire'}
                size={26}
                style={{color: tintColor}}
              />
            );
          }
        },
      },
      TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
          tabBarLabel: '趋势',
          tabBarIcon({tintColor, focused}) {
            return (
              <MaterialIcons
                name={'show-chart'}
                size={26}
                style={{color: tintColor}}
              />
            );
          }
        },
      },
      FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
          tabBarLabel: '收藏',
          tabBarIcon({tintColor, focused}) {
            return (
              <MaterialIcons
                name={'star-border'}
                size={26}
                style={{color: tintColor}}
              />
            );
          },
        },
      },
      MyPage: {
        screen: MyPage,
        navigationOptions: {
          tabBarLabel: '我的',
          tabBarIcon({tintColor, focused}) {
            return (
              <MaterialIcons
                name={'person-outline'}
                size={26}
                style={{color: tintColor}}
              />
            );
          }
        },
      },
    });
  }

  render() {
    const Tabs = this._tabNavigator();
    return <Tabs></Tabs>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
