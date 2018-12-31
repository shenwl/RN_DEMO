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
        screen: PopularTab,
        navigationOptions: {
          title: item,
        }
      }
    });
    return createMaterialTopTabNavigator(tabs);
  }

  render() {
    const TopNavigator = this._generateTabs();
    return (
      <View style={styles.container}>
        <TopNavigator style={styles.toptab}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
