

import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Store from './screens/Store';
import Search from './screens/Search';
import Transformation from './screens/Transformation';

import AtHome from './screens/AtHome';
import Traning from './screens/Traning';


function FirstScreen() {
  return <AtHome />;
}

function SecondScreen() {
  return <Traning/>;
}
function ThirdScreen() {
  return <Search />;
}

function FourthScreen() {
  return <Store />;
}

function FifthScreen() {
  return <Transformation />;
}



const Tab = createBottomTabNavigator();

export default function NewScr() {
  return (
   
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

           
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Traning') {
              iconName = focused ? 'dumbbell' : 'dumbbell-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'magnify' : 'magnify';
            } else if (route.name === 'Store') {
              iconName = focused ? 'store' : 'store-outline';
            } else if (route.name === 'Transmute') {
              iconName = focused ? 'transform' : 'transform';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
       
        >
        <Tab.Screen name="Home" component={FirstScreen} />
        <Tab.Screen name="Traning" component={SecondScreen} />
        <Tab.Screen name="Search" component={ThirdScreen} />
        <Tab.Screen name="Store" component={FourthScreen} />
        <Tab.Screen name="Transmute" component={FifthScreen} />
      
      </Tab.Navigator>
    
  );
}


