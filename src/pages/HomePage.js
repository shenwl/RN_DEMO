import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import NavigatorUtils from '../navigator/NavigatorUtils';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';
import {connect} from 'react-redux';

class HomePage extends Component {
  /**
   * 处理Android中的物理返回键
   * @returns {boolean}
   */
  onBackPress = () => {
    const {dispatch, nav} = this.props;
    if (nav.routes[0].index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    NavigatorUtils.navigation = this.props.navigation;
    return <DynamicTabNavigator />;
  }
}

const mapStateToProps = state => {
  return {
    nav: state.nav,
  };
};


export default connect(mapStateToProps)(HomePage);

