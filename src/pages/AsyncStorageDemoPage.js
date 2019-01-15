import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';

const KEY = "SAVE_KEY";

export default class AsyncStorageDemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: '',
    };
  }

  doSave() {
    AsyncStorage.setItem(KEY, this.value)
      .catch(error => {
        error && console.error(error.toString());
      });
  }

  doRemove() {
    AsyncStorage.removeItem(KEY)
      .catch(error => {
        error && console.error(error.toString());
      });

  }

  getData() {
    AsyncStorage.getItem(KEY)
      .then(value => {
        this.setState(() => ({
          showText: value,
        }))
      })
      .catch(error => {
        error && console.error(error.toString());
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>AsyncStorageDemoPage</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            this.value = text;
          }}
        />

        <View style={styles.inputGroup}>
          <Text onPress={() => {
            this.doSave();
          }}>存储</Text>

          <Text onPress={() => {
            this.doRemove();
          }}>删除</Text>

          <Text onPress={() => {
            this.getData();
          }}>获取</Text>
        </View>

        <Text>{this.state.showText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 30,
    width: 300,
    borderColor: '#ccc',
    borderWidth: 2,
    marginRight: 10,
  },
  inputGroup: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});
