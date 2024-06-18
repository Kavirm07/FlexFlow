


import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import SixP from './SixP'; 
import BkScreen from './bk';
import NewLog from './NewLog';
import Bkm from './bkm';
import NewScr from './NewScr';
import Day1 from './Days/Day1'
import Din1 from './Days/Din1'
import ChatSrn from './screens/ChatSrn';
import ArmBeg from './ArmsWork/ArmBeg';
import Armint from './ArmsWork/ArmInt';
import ArmAdv from './ArmsWork/ArmAdv';
import Abinit from './Abs/Abinit';
import Abmid from './Abs/Abmid';
import Abadvance from './Abs/Abadvance';
import Athomeclass from './TopNavigation/Athomeclass';
import Bookclass from './TopNavigation/Bookclass';
import Weightloss from './TopNavigation/Weightloss';
import Yoga from './TopNavigation/Yoga';
import Fourmonth from './DealofDay/Fourmonth';
import TwoMonth from './DealofDay/TwoMonth';
import Twopmonth from './DealofDay/Twopmonth';
import Dodin from './TopNavigation/BookC/Dodin';
import Teendin from './TopNavigation/BookC/Teendin';
import Chardin from './TopNavigation/BookC/Chardin';
import Panchdin from './TopNavigation/BookC/Panchdin';
import LinearGradient from 'react-native-linear-gradient';
import Customizework from './Myworkout/Customizework';
import Gallery from './screens/Gallery';
import Trans from './screens/Trans';
import BBeginner from './B&B/BBegineer';
import BAdvance from './B&B/BAdvance'
import Binter from './B&B/BInter'
import ThighA from './Thigh/ThighA';
import ThighB from './Thigh/ThighB';
import ThighI from './Thigh/ThighI';

import HomeScr from './screens/HomeScr';
import WorkoutScreen from './screens/WorkoutScreen';
import Fitscreen from './screens/Fitscreen';
import RestScreen from './screens/RestScreen';
import { FitnessContext } from './Context'; 
import StackNavigator from './StackNavigator'; 

const Stack = createNativeStackNavigator(); 


function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'black', flex: 1 }}>
        <Text style={{ justifyContent: 'center', fontSize: 40, textAlign: 'center', marginTop:20 }}>
          <Text style={{ color: "#00CCFF", fontWeight: '700' }}>Flex</Text><Text style={{ color: 'white', fontWeight: '500' }}>ʄlow</Text>
        </Text>
        <View style={{ marginTop: 7 }}>
          <Image style={styles.tinyLogo} source={require('./Img/p3.jpg')} />
          <Image style={styles.logo} source={require('./Img/p2.jpg')} />
        </View>
        <View style={{ height: hp(10) }}>
          <Text style={{ fontSize: 20, textAlign: 'center', color: '#F3F2F1', marginTop: 10 }}> Welcome to the ultimate exercise library, ultimate guidance</Text>
        </View>
        <View style={styles.fixToText}>
          <Button
            title="New Gym-Goer"
            onPress={() => navigation.navigate("Bk")}
          />
          <Button
            title="Already a Gym-rat"
            onPress={() => navigation.navigate("NewLog")}
          />
        </View>
        <View style={{ height: hp(100), padding: 40 }}>
          <TouchableOpacity style={{ fontSize: 34, color: "white", fontWeight: 'bold' }}>
            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', justifyContent: 'center', fontWeight: 'bold' }}>Buckle Up Now</Text>
          </TouchableOpacity >
        </View>
      </View>
      <StatusBar style="light" backgroundColor='#000' />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />  
        <Stack.Screen name="Bk" component={BkScreen} />
       <Stack.Screen name="NewLog" component={NewLog} />
       <Stack.Screen name = "Btm" component={Bkm}/>
       <Stack.Screen name = "NewScr" component={NewScr} options={{headerShown: false}}/>
       <Stack.Screen name = "Day1" component={Day1}  />
       <Stack.Screen name = "Din1" component={Din1} />
       <Stack.Screen name = "Trans" component={Trans}/>
       <Stack.Screen name = "ChatSrn" component={ChatSrn} />
       <Stack.Screen name = "ArmBeg" component={ArmBeg} />
       <Stack.Screen name = "Armint" component={Armint} />
       <Stack.Screen name = "ArmAdv" component={ArmAdv} />
       <Stack.Screen name = "Abinit" component={Abinit} />
       <Stack.Screen name = "Abmid" component={Abmid} />
       <Stack.Screen name = "Abadvance" component={Abadvance} />
       <Stack.Screen name = "Bookclass" component={Bookclass}/>
       <Stack.Screen name = "Yoga" component={Yoga} />
       <Stack.Screen name = "Weightloss" component={Weightloss} />
       <Stack.Screen name = "Athomeclass" component={Athomeclass} />
       <Stack.Screen name = "Fourmonth" component={Fourmonth}/>
       <Stack.Screen name = "TwoMonth" component={TwoMonth} />
       <Stack.Screen name = "Twopmonth" component={Twopmonth} />
       <Stack.Screen name = "Dodin" component={Dodin}  />
       <Stack.Screen name = "Teendin" component={Teendin}  />
       <Stack.Screen name = "Chardin" component={Chardin} />
       <Stack.Screen name = "Panchdin" component={Panchdin}  />
       <Stack.Screen name = "Customizework" component = {Customizework}/>
       <Stack.Screen name = "Gallery" component={Gallery}  />
       <Stack.Screen name = "BBegineer" component={BBeginner} />
       <Stack.Screen name = "Binter" component={Binter} />
       <Stack.Screen name = "BAdvance" component={BAdvance} />
       <Stack.Screen name = "ThighA" component={ThighA} />
       <Stack.Screen name = "ThighI" component={ThighI} />
       <Stack.Screen name = "ThighB" component={ThighB} />
       <Stack.Screen name = "SixP" component={SixP}/>
       <Stack.Screen options={{headerShown: false}} name="HomeScr" component={HomeScr} />
       <Stack.Screen options={{headerShown: false}} name="Workout" component={WorkoutScreen} />
       <Stack.Screen options={{ headerShown: false }} name="Fit" component={Fitscreen} />
       <Stack.Screen options={{ headerShown: false }} name="Rest" component={RestScreen} />     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
   
    height: hp(100)
  },
  tinyLogo: {
    marginTop: 50,
    height: hp('30%'),
    width: wp('100%')
  },
  logo: {
    height: hp('30%'),
    width: wp('100%')
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderRadius: 20,
    marginBottom: -20,
    margin: 10
  },
});
