import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import InicioScreen from "../screen/InicioScreen";
import HomeScreen from "../screen/HomeScreen";
import SearchScreen from '../screen/SearchScreen';
import UploadScreen from '../screen/UploadScreen';
import ProfileScreen from "../screen/ProfileScreen";

const HomeNavigator = createStackNavigator ({
    Home: HomeScreen,
});
const SearchNavigator = createStackNavigator ({
    Search: SearchScreen,
});
const UploadhNavigator = createStackNavigator ({
    Upload: UploadScreen,
});
const ProfileNavigator = createStackNavigator ({
    Profile: ProfileScreen,
});

const TabNavigator = createBottomTabNavigator ({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            tabBarIcon: ( tabInfo ) => {
                return (<Ionicons name={Platform.OS === 'android' ? "md-home": 'ios-home'} size={25} color={tabInfo.tintColor} />)
            }
        }
    },
    Search: {
        screen: SearchNavigator,
        navigationOptions: {
            tabBarIcon: ( tabInfo ) => {
                return (<Ionicons name={Platform.OS === 'android' ? "md-search": 'ios-search'} size={25} color={tabInfo.tintColor} />)
            }
        }
    },
    Upload: {
        screen: UploadhNavigator,
        navigationOptions: {
            tabBarIcon: ( tabInfo ) => {
                return (<Ionicons name={Platform.OS === 'android' ? "md-add-circle": 'ios-add-circle'} size={25} color={tabInfo.tintColor} />)
            }
        }
    },
    Profile: {
        screen: ProfileNavigator,
        navigationOptions: {
            tabBarIcon: ( tabInfo ) => {
                return (<Ionicons name={Platform.OS === 'android' ? "md-happy": 'ios-happy'} size={25} color={tabInfo.tintColor} />)
            }
        }
    }
})

// export default createAppContainer( 
//     createStackNavigator({
//         InicioScreen,
//         TabNavigator
//     }) 
// )
export default createAppContainer( 
    createStackNavigator({
        Home: { 
            screen: TabNavigator,
            navigationOptions: {
                headerShown: false,
            } 
        },
        Inicio: { 
            screen: InicioScreen,
            navigationOptions: {
                headerShown: false,
            } 
        },
        
        
        
    }) 
)