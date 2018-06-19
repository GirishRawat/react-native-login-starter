import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Buttons from './components/Buttons'
import LoginScreen from './LoginScreen';

export default class App extends React.Component {
  render() {
    return (
      <LoginScreen>
      </LoginScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyles: {
    height: 40,
    width: 200,
    backgroundColor: 'red'
  },
  textStyles: {
    color: 'orange'
  }
});
