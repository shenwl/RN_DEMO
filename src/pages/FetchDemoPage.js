import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';

export default class FetchDemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: '',
    };
  }

  loadData() {
    let url = `https://api.github.com/search/repositories?q=${this.searchKey}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        throw new Error('Network response was not ok.');
      })
      .then(responseText => this.setState({showText: responseText}))
      .catch(error => {
        this.setState({
          showText: error.toString(),
        })
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Fetch Demo</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            this.searchKey = text;
          }}
        />
        <Button
          title="搜索"
          onPress={() => {
            this.loadData();
          }}
        ></Button>
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
    width: 200,
    borderColor: '#ccc',
    borderWidth: 2,
    marginRight: 10,
  }
});
