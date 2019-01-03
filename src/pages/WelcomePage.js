import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigatorUtils from '../navigator/NavigatorUtils';

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 1
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      NavigatorUtils.resetToHomePage({
        navigation: this.props.navigation,
      });
    }, 1);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
    this.timeInterval && clearInterval(this.timeInterval);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Page</Text>
        <Text style={styles.time}>redirect time: {this.state.time}s</Text>
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
  welcome: {
    fontSize: 40,
  },
  time: {
    fontSize: 20,
  }
});
