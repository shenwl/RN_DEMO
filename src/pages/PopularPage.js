import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  createMaterialTopTabNavigator,
} from 'react-navigation';

class PopularTab extends Component<Props> {
  render() {
    return (
      <View>
        <Text>PopularTab1</Text>
      </View>
    );
  }
}


export default class PopularPage extends Component {
  _topNavigator() {
    return createMaterialTopTabNavigator({
      PopularTab1: {
        screen: PopularTab,
        navigationOptions: {
          title: 'Tab1'
        }
      },
      PopularTab2: {
        screen: PopularTab,
        navigationOptions: {
          title: 'Tab2'
        }
      },
    });
  }

  render() {
    const TopNavigator = this._topNavigator();
    return (
      <View style={styles.container}>
        <TopNavigator />
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
