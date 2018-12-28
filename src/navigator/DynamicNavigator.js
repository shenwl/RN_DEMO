import React, {Component} from 'react';
import {createBottomTabNavigator} from "react-navigation";
import NavigatorUtils from "./NavigatorUtils";

import PopularPage from "../pages/PopularPage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TrendingPage from "../pages/TrendingPage";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FavoritePage from "../pages/FavoritePage";
import MyPage from "../pages/MyPage";

// 在这里配置页面， 在_tabNavigator取出
const TABS = {
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
};

export default class DynamicNavigator extends Component {
  _tabNavigator() {
    const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
    const tabs = {PopularPage, TrendingPage, FavoritePage}; // 根据需要配置显示的Tab
    return createBottomTabNavigator(tabs);
  }

  render() {
    NavigatorUtils.navigation = this.props.navigation;
    const Tabs = this._tabNavigator();
    return <Tabs></Tabs>;
  }
}


