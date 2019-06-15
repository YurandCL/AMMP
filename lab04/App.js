import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Contador from './src/components/Contador';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Nuestro primer Componente</Text>
        <Contador valor='1'/>
        <Contador valor='2'/>
        <Contador valor='3'/>
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
  }
});
