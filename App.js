import React from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar, ImageBackground, Image, TouchableOpacity } from 'react-native';
// import Navigator from './src/navigation/Navigator';
import { createStackNavigator } from 'react-navigation-stack';

import Navigator from './src/navigation/Navigator'
import InicioScreen from "./src/screen/InicioScreen";
import RegisterScreen from "./src/screen/RegisterScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";


export default function App() {
  return (
    <Navigator />
  );
};
