import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import DataStore from '../utils/dao/DataStore';

export default class DataStoreDemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: '',
    };
    this.dataStore = new DataStore();
  }

  loadData() {
    let url = `https://api.github.com/search/repositories?q=${this.value}`;
    this.dataStore.fetchData(url).then(data => {
      let showData = `初次加载时间 ${new Date(data.timestamp)}\n ${JSON.stringify(data.data)}`;
      this.setState({
        showText: showData,
      })
    }).catch(error => {
      error && console.log(error.toString());
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>离线缓存框架测试页</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            this.value = text;
          }}
        />
        <View style={styles.inputGroup}>
          <Text onPress={() => {
            this.loadData();
          }}>获取数据</Text>
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
