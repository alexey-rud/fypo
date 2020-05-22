//Import React
import React from 'react';
import { HeaderHeightContext } from '@react-navigation/stack';

import { Ionicons } from '@expo/vector-icons';

//Import Navigators
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

//Import External Screens
import HomeScreen from './tabsScreens/HomeScreen';
import SearchScreen from './tabsScreens/SearchScreen';
import UploadScreen from './tabsScreens/UploadScreen';
import ProfileScreen from './tabsScreens/ProfileScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

const Home_StackNavigator = createStackNavigator({
  First: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Ionicons name={Platform.OS === 'android' ? "md-camera": 'ios-camera'} size={30} style={{paddingLeft: 10,}} color={'black'} />,
      headerTitle: 'FYPO',
      headerTitleAlign: 'center',
      headerRight: <Ionicons name={Platform.OS === 'android' ? "md-settings": 'ios-settings'} size={30} style={{paddingRight: 10,}} color={'black'} />,
      headerShown: true,
    }),
  },
});

const Search_StackNavigator = createStackNavigator({
  First: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Search Screen',   
      headerShown: false,   
    }),
  },
});

const Upload_StackNavigator = createStackNavigator({
  First: {
    screen: UploadScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Upload Screen',      
      headerShown: false,
    }),
  },
});

const Profile_StackNavigator = createStackNavigator({
  First: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile Screen',   
      headerShown: false,
    }),
  },
});

const TabNavigatorRoutes = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: Home_StackNavigator,
      navigationOptions: {
        tabBarIcon: ( tabInfo ) => {
          return (<Ionicons name={Platform.OS === 'android' ? "md-home": 'ios-home'} size={30} color={tabInfo.tintColor} />)
       } 
      },
    },
    SearchScreen: {
      screen: Search_StackNavigator,
      navigationOptions: {
        tabBarIcon: ( tabInfo ) => {
          return (<Ionicons name={Platform.OS === 'android' ? "md-search": 'ios-search'} size={30} color={tabInfo.tintColor} />)
        }
      },
    },
    UploadScreen: {
      screen: Upload_StackNavigator,
      navigationOptions: {
        tabBarIcon: ( tabInfo ) => {
          return (<Ionicons name={Platform.OS === 'android' ? "md-add-circle": 'ios-add-circle'} size={30} color={tabInfo.tintColor} />)
        }
      },
    },
    ProfileScreen: {
      screen: Profile_StackNavigator,
      navigationOptions: {
        tabBarIcon: ( tabInfo ) => {
          return (<Ionicons name={Platform.OS === 'android' ? "md-person": 'ios-person'} size={30} color={tabInfo.tintColor} />)
        }
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#f58ff3',
      showLabel: false,
      showIcon: true,
    }
  }
);
export default TabNavigatorRoutes;