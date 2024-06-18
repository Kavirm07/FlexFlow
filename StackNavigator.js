// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScr from './screens/HomeScr';
// import WorkoutScreen from './screens/WorkoutScreen';
// import Fitscreen from './screens/Fitscreen';
// import RestScreen from './screens/RestScreen';

// const StackNavigator = () => {
//   const Stack = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScr} />
//         <Stack.Screen options={{headerShown: false}} name="Workout" component={WorkoutScreen} />
//         <Stack.Screen options={{ headerShown: false }} name="Fit" component={Fitscreen} />
//         <Stack.Screen options={{ headerShown: false }} name="Rest" component={RestScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default StackNavigator

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StackNavigator = () => {
  return (
    <View>
      <Text>StackNavigator</Text>
    </View>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})
