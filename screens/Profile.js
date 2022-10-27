import React , {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class Profile extends Component{
  render (){
    return(
      <View 
      style={{
        flex:1,
        justifyContent:'centre',
        alignItems:'centre'
      }}>
      <Text>Profile</Text>
      </View>
    )
  }
}