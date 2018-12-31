import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class TrendingPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Trending Page</Text>
        <Button
          title="改变主题颜色"
          onPress={() => {
            this.props.navigation.setParams({
              theme: {
                tintColor: 'green',
                updateTime: new Date().getTime()
              }
            })
          }}
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
