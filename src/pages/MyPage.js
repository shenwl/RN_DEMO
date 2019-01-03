import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import actions from '../actions';

class MyPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>My Page</Text>
        <Button
          title="改变主题颜色"
          onPress={() => {
            this.props.onThemeChange('red');
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

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
