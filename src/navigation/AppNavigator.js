import React from "react";

import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Forget from '../Screens/Forget';
import Home from '../Screens/Home';
import AboutScreen from '../Screens/AboutScreen';
import ServiceScreen from '../Screens/ServiceScreen';
import ContactScreen from '../Screens/ContactScreen';
import GalleryScreen from '../Screens/GalleryScreen';
import AuthLoadingScreen from '../Screens/AuthLoadingScreen';
import ThemeProvider from "./ThemeProvider";
import { View, Text, StyleSheet, Image } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const icons = {
  Home: require('../Images/home.png'),       
  About: require('../Images/about.png'),     
  Services: require('../Images/customer-service.png'), 
  Contact: require('../Images/telephone.png'),   
  Gallery: require('../Images/image.png'),   
};

const HomeTabs = () => {
  return (
    <ThemeProvider>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <Image
            source={icons[route.name]}  
            style={[
              styles.icon,
              { tintColor: focused ? '#5D76A9' : 'gray' },  
            ]}
          />
        ),
        tabBarShowLabel: true, 
      })}
    >
      
          <Tab.Screen       options ={{headerShown  : false}} name="Home" component={Home} />
          <Tab.Screen        options ={{headerShown  : false}} name="About" component={AboutScreen} />
          <Tab.Screen       options ={{headerShown  : false}} name="Services" component={ServiceScreen} />
          <Tab.Screen       options ={{headerShown  : false}} name="Contact" component={ContactScreen} />
          <Tab.Screen       options ={{headerShown  : false}} name="Gallery" component={GalleryScreen} />
    </Tab.Navigator>
    </ThemeProvider>
  );
};


const CustomTabBarIcon = ({ title }) => {
  return (
    <View style={styles.iconContainer}>
      <Text style={styles.iconText}>{title}</Text>
    </View>
  );
};







export default function  AppNavigator () {
    return(
     
    <ThemeProvider>
    <Stack.Navigator   initialRouteName="Splash">

  
    <Stack.Screen
        options ={{headerShown  : false}}
        name = "Splash"
        component = {Splash}/>
      
   <Stack.Screen
        options ={{headerShown  : false}}
        name = "Login"
        component = {Login}/>
        
        <Stack.Screen
        options ={{headerShown  : false}}
        name = "AuthLoadingScreen"
        component = {AuthLoadingScreen}/>

         <Stack.Screen
        options ={{headerShown  : false}}
        name = "Signup"
        component = { Signup}/>
        <Stack.Screen
        options ={{headerShown  : false}}
        name = "Forget"
        component = {Forget}/>

<Stack.Screen
        options ={{headerShown  : false}}
        name = "Home"
        component = {HomeTabs}/>


  
        </Stack.Navigator>
        </ThemeProvider>

    );
};
const styles = StyleSheet.create({
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
   
    },
    iconText: {
      fontSize: 12,
      color:'#5D76A9',
    },
  icon:{
    width: 30,
    height:30,
    padding:0,
  },
  });
