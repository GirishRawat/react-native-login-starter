import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Buttons from './components/Buttons'
import TextField from './components/TextField';

export default class LoginScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TextField
          placeholder={'Email'}
        />

        <TextField
          placeholder={'Password'}
          secureTextEntry={true}
        />

        <Buttons
          type={'github'}
          shape={'round'}
          text={'Sign In'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyles: {
    color: 'orange'
  }
});
