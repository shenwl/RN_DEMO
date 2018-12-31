import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

type Props = {};
export default class MyPage extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>My Page</Text>
        <Button
          title="改变主题颜色"
          onPress={() => {
            this.props.navigation.setParams({
              theme: {
                tintColor: 'red',
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
