import React, {Component} from 'react';
import {createBottomTabNavigator} from "react-navigation";
import {BottomTabBar} from 'react-navigation-tabs';
import {connect} from 'react-redux';

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

class TabBarComponent extends Component {
  constructor(props) {
    super(props);
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime()
    };
  }

  render() {
    const {routes, index} = this.props.navigation.state;
    if (routes[index].params) {
      const {theme} = routes[index].params;
      if (theme && theme.updateTime > this.theme.updateTime) {
        this.theme = theme;
      }
    }
    return (
      <BottomTabBar
        {...this.props}
        activeTintColor={this.theme.tintColor || this.props.activeTintColor}
      ></BottomTabBar>
    );
  }
}

class DynamicTabNavigator extends Component {
  _tabNavigator() {
    const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
    const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage}; // 根据需要配置显示的Tab
    return createBottomTabNavigator(tabs, {
      tabBarComponent: props => {
        return <TabBarComponent theme={this.props.theme} {...props} />
      },
    });
  }

  render() {
    NavigatorUtils.navigation = this.props.navigation;
    const Tabs = this._tabNavigator();
    return <Tabs />;
  }
}

const mapStateToProps = state => {
  return {
    theme: state.theme.theme,
  };
};

export default connect(mapStateToProps)(DynamicTabNavigator)


