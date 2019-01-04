import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import {NavigationActions} from 'react-navigation';
import NavigatorUtils from '../navigator/NavigatorUtils';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';
import {connect} from 'react-redux';

class HomePage extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  /**
   * 处理Android中的物理返回键
   * @returns {boolean}
   */
  onBackPress = () => {
    const {dispatch, nav} = this.props;
    // 如果RootNavigator中的MainNavigator的index为0，则不处理返回事件
    if (nav.routes[1].index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    NavigatorUtils.navigation = this.props.navigation;
    return <DynamicTabNavigator/>;
  }
}

const mapStateToProps = state => {
  return {
    nav: state.nav,
  };
};


export default connect(mapStateToProps)(HomePage);

