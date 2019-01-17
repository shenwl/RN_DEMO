import {
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import {createReactNavigationReduxMiddleware, reduxifyNavigator} from 'react-navigation-redux-helpers';
import {connect} from 'react-redux';
import WelcomePage from '../pages/WelcomePage';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import FetchDemoPage from '../pages/FetchDemoPage';
import AsyncStorageDemoPage from '../pages/AsyncStorageDemoPage';
import DataStoreDemoPage from '../pages/DataStoreDemoPage';

// 设置根路由
export const rootCom = 'Init';

const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null,
    }
  }
});

const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null,
    }
  },
  DetailPage: {
    screen: DetailPage,
    navigationOptions: {
      header: null,
    }
  },
  FetchDemoPage: {
    screen: FetchDemoPage,
    navigationOptions: {
      header: null,
    }
  },
  AsyncStorageDemoPage: {
    screen: AsyncStorageDemoPage,
    navigationOptions: {
      header: null,
    }
  },
  DataStoreDemoPage: {
    screen: DataStoreDemoPage,
    navigationOptions: {
      header: null,
    }
  }
});

export const RootNavigator = createSwitchNavigator(
  {
    Init: InitNavigator,
    Main: MainNavigator,
  },
  {
    navigationOptions: {
      header: null,
    }
  }
);

export const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => {
  return {
    state: state.nav,
  };
};

export default connect(mapStateToProps)(AppWithNavigationState);


