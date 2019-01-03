import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import actions from '../actions';

class TrendingPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Trending Page</Text>
        <Button
          title="改变主题颜色"
          onPress={() => {
            this.props.onThemeChange('green');
          }}
        ></Button>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.theme.theme,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onThemeChange: theme => dispatch(actions.onThemeChange(theme)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
