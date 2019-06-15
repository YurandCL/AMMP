import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class HomeScreen extends React.Component{
  render(){
    return(
      <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
        <Text>Hola Mundo!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component{
  render(){
    return(
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home:{
    screen: Home,
    path: 'home/',
    navigationOptions:{
      title: 'Esta es la Home'
    }
  },
  Details: DetailsScreen
},
{
  initialRoutName: "Home"
});

export default createAppContainer(AppNavigator);
