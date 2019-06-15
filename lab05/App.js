/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const people = [
      {name: 'Carlos', lastname: 'Amequita'},
      {name: 'Marta', lastname: 'Chavez'},
      {name: 'Pedro', lastname: 'Picapiedra'},
      {name: 'Lucia', lastname: 'Gonzalez'}
    ]
    return (
      <View>
        <FlatList
          //data={[{key: 'a'}, {key: 'b'}, {key: 'c'}]}
          keyExtractor = {(item, index) => index + ''}
          data = {people}
          renderItem={({item, index}) => {
            return (<Text style={index%2===0?styles.ItemEven:styles.ItemUneven}>
              {item.name}
              </Text>);
            }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ItemEven: {
    color: '#2B4B6F'
  },
  ItemUneven:{
    backgroundColor: '#D46A6A',
    color: 'white'
  }
});
