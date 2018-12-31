import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  createMaterialTopTabNavigator,
} from 'react-navigation';
import NavigatorUtils from '../navigator/NavigatorUtils';

class PopularTab extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.tabLabel}</Text>
        <Text onPress={() => {
          NavigatorUtils.goPage({}, 'DetailPage');
        }}>跳转到详情页</Text>
        <Button
          title="改变主题颜色"
          onPress={() => {
            this.props.navigation.setParams({
              theme: {
                tintColor: 'blue',
                updateTime: new Date().getTime()
              }
            });
          }}
        ></Button>
      </View>
    );
  }
}


export default class PopularPage extends Component {
  constructor(props) {
    super(props);
    this.tabNames = ['Python', 'JavaScript', 'React', 'Go', 'PHP'];
  }

  _generateTabs() {
    const tabs = {};
    this.tabNames.forEach((item, index) => {
      tabs[`tab${index}`] = {
        screen: props => <PopularTab {...props} tabLabel={item} />,
        navigationOptions: {
          title: item,
        }
      };
    });
    return createMaterialTopTabNavigator(tabs, {
      tabBarOptions: {
        upperCaseLabel: false,
        scrollEnabled: true,
        style: {
          backgroundColor: '#678',
        },
        tabStyle: styles.tabStyle,
        indicatorStyle: styles.indicatorStyle, // 标签指示器样式
        labelStyle: styles.labelStyle,  // 文字样式
      }
    });
  }

  render() {
    const TopNavigator = this._generateTabs();
    return (
      <View style={styles.container}>
        <TopNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  tabStyle: {
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: '#fff',
  },
  labelStyle: {
    fontSize: 13,
  },
});
