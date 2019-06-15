import React,{Component} from 'react';
import{
  View,
  Text
}from 'react-native';

class Contador extends Component {
  state = {
    valor: 0
  }
  render() {
    return(<View>
      <Text>Mi Contador: {this.props.valor}</Text>
    </View>);
  }
}

export default Contador;
