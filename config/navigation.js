import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Signup from '../pages/Signup';
import Login from '../pages/Login';
import InputMenu from '../pages/InputMenu';
import ListMenu from '../pages/ListMenu';
import ViewMenu from '../pages/ViewMenu';
import Splash from '../pages/Splash';

const NavStack = createStackNavigator();
const NavStackScreen = () => (
    <NavStack.Navigator 
      screenOptions={{
        headerShown: false
      }} 
      initialRouteName="Landing">
      <NavStack.Screen name="Splash" component={Splash} />
      <NavStack.Screen name="Signup" component={Signup} />
      <NavStack.Screen name="Login" component={Login} />
      <NavStack.Screen name="InputMenu" component={InputMenu} />
      <NavStack.Screen name="ListMenu" component={ListMenu} />
      <NavStack.Screen name="ViewMenu" component={ViewMenu} />
      <NavStack.Screen name="Home" component={NavTabScreen} />
      
    </NavStack.Navigator>
)

const NavTab = createMaterialTopTabNavigator();
const NavTabScreen = () => (
  <NavTab.Navigator 
    screenOptions={{
      headerShown: false
    }} 
    initialRouteName="ListMenu">
    <NavTab.Screen name="List_Menu" component={ListMenu} />
    <NavTab.Screen name="Input_Menu" component={InputMenu} />
  </NavTab.Navigator>
)


const Navigation = () => (
  <NavigationContainer>
    <NavStackScreen />
  </NavigationContainer>
)

export default Navigation;