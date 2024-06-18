import React from 'react';
import { FitnessContext } from './Context';  // Correct import using curly braces for named export

import StackNavigator from './StackNavigator';  // Assuming StackNavigator is correctly imported

import { StatusBar } from 'expo-status-bar';  // Ensure StatusBar is imported correctly
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScr from './screens/HomeScr';
import WorkoutScreen from './screens/WorkoutScreen';
import Fitscreen from './screens/Fitscreen';
import RestScreen from './screens/RestScreen';

export default function SixP() {
  const Stack = createNativeStackNavigator(); 
  return (
    <FitnessContext>
      <StatusBar style="light" backgroundColor='#000' />
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScr} />
        <Stack.Screen options={{headerShown: false}} name="Workout" component={WorkoutScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Fit" component={Fitscreen} />
        <Stack.Screen options={{ headerShown: false }} name="Rest" component={RestScreen} />
      </Stack.Navigator>
    </FitnessContext>
  );
}
