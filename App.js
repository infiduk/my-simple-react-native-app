import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen.js';
import DetailsScreen from './screens/DetailsScreen.js';
import ModalScreen from './screens/ModalScreen.js';
import { activate } from 'expo-keep-awake';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const MainStack = createStackNavigator (
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f0a1bc',
      },
      headerTintColor: '#513548',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const RootStack = createBottomTabNavigator (
  {
    Main: {
      screen: MainStack
    },
    Details: {
      screen: DetailsScreen
    },
    MyModal: {
      screen: ModalScreen
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon:({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if(routeName === 'Main') {
          iconName = `ios-home`;
        } else if (routeName === 'Details') {
          iconName = `ios-options`;
        } else if (routeName === 'MyModal') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'grey',
    },
  },
);

const AppContainer = createAppContainer(RootStack);