import React from 'react';
import { StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";

import Feed from '../screens/Feeds';
import CreatePost from '../screens/CreatePost';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return(
    <Tab.Navigator
     screenOptions={({route}) => ({
      tabBarIcon: ({ focused, color, size}) => {
        let iconName;
        if(route.name ==='Feed'){
         iconName = focused ? 'book' :'book-outline'
        }
         else if(route.name==='CreatePost'){
           iconName = focused ? 'book' : 'book-outline';
         }
         return <Ionicons name={iconName} size={RFValue(25)} color={color}/>
        },
      })}
      tabBarOptions={{
        activeTintColor:'tomato',
        inactiveTintColor:'grey'
      }}
      >
      <Tab.Screen name="Feed" component={Feed}  />
      <Tab.Screen name='Create Post' component={CreatePost} />
      </Tab.Navigator>
  )
}

export default BottomTabNavigator
    
  
