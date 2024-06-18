

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; 
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';
import GifImage from '@lowkey/react-native-gif';
import firestore from '@react-native-firebase/firestore'
import uuid from 'react-native-uuid'
const logo = require("./Logo/455.png");
const facebook = require("./Logo/facebook.png");
const linkedin = require("./Logo/snapchat.png");
const tiktok = require("./Logo/instagram.png");



export default function BkScreen() {
  const navigation = useNavigation(); 

const  registerUser =()=>{
  const userId = uuid.v4();
  firestore().collection("users").doc(userId).set({
    name: name,
    email: email,
    password: password,
    mobile:mobile,
    userId:userId
  }).then(res=>{
    console.log("User Registered Successfully");
  }).catch(error =>{
    console.log(error)
  })
}
  const [email, setEmail] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordrepeat, setPasswordRepeat] = useState('')
  // const [email, setEmail] =useState('')
  const [mobile, setMobile] = useState('')
  const handleRegister = () => {
    if (!email.trim()) {
      Alert.alert("Username is required.");
      return;
    }
    if (!mobile.trim()) {
      Alert.alert("Password is required.");
      return;
    }

    if (!password.trim()) {
      Alert.alert("Password is required.");
      return;
    }

    if (!passwordrepeat.trim()) {
      Alert.alert("Password is required.");
      return;
    }

   Alert.alert('Registration done successfully')
  };

  return (
   <View  style={styles.container}>
   <ScrollView>
  
      <Image source={logo} style={styles.image} />
    
      <Text style={styles.title}>REGISTER</Text>
      <View style={styles.inputView}>
        
        <Text style = {{fontSize:15,color:'black', fontWeight:'500', marginTop:20}}>Email Address <Text style = {{ color:'red'}}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder='EMAIL-ADDRESS'
          autoCorrect={false}
          autoCapitalize='none'
          value = {email}
          onChangeText = {setEmail}
        />




        <Text style = {styles.textstyle}>Mobile Number <Text style = {{ color:'red'}}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder='MOBILE-NUMBER'
          value={mobile}
          onChangeText= {setMobile}
          autoCorrect={false}
          autoCapitalize='none'
        />


  <Text style = {styles.textstyle}>Enter Password <Text style = {{ color:'red'}}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder='PASSWORD'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize='none'

        />
          <Text style = {styles.textstyle}>Re-Enter Password <Text style = {{ color:'red'}}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder=' CONFIRM -PASSWORD'
          secureTextEntry
          value={passwordrepeat}
          onChangeText={setPasswordRepeat}
          autoCorrect={false}
          autoCapitalize='none'
        />
     
      </View>

      <View style={styles.buttonView}>
     
        <Pressable style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </Pressable>
      
      </View>

     

      <View style={styles.rememberView}>
        <View style={styles.switch}>
          <Text style={styles.remember}>Already have an account?</Text>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('NewLog')}>
            <Text style={styles.SignupTex}>Sign In</Text>
          </Pressable>
        </View>
      </View>
      </ScrollView>
      </View>
  );
}


const styles = StyleSheet.create({

  container : {
    alignItems : "center",
    flex:1,
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 'auto'
  
  },
  textstyle:{
fontSize:15,
color:'black',
 fontWeight:'500'
  },
  image : {
   height:hp(20),
   width:wp(40),
       
  },
  title : {
    fontSize : 27,
    textAlign: "center",
    color : "#035096",
    fontWeight:'700'
  },
  inputView : {
    gap : 15,
    width : "100%",
    paddingHorizontal : 40,
    marginBottom  :5
  },
  input : {
    height : 50,
    paddingHorizontal : 20,
    borderColor : "black",
    borderWidth : 1.2,
    borderRadius: 7
  },
  rememberView : {
    width : "100%",
    paddingHorizontal : 50,
    justifyContent: "space-between",
    alignItems : "center",
    flexDirection : "row",
    marginBottom : 8
  },
  switch :{
    flexDirection : "row",
    gap : 1,
    justifyContent : "center",
    alignItems : "center"
    
  },
  rememberText : {
    fontSize:15,
    color:'black',
    fontWeight:'500',
    marginTop:20
  },
  remember:{
    fontSize:15,
    color:'black',
    fontWeight:'500',
    marginLeft:30,
    marginTop:20
  },
  forgetText : {
    fontSize : 15,
    color : "red",
    fontWeight:'500',
    textDecorationLine: 'underline',
    marginTop:20
  },
  SignupTex:{
    fontSize : 18,
    color : "red",
    fontWeight:'500',
    textDecorationLine: 'underline',
    marginRight:30,
    marginTop:18
  
  },
  button : {
    backgroundColor : "#035096",
    height : 45,
    borderColor : "gray",
    borderWidth  : 1,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center",
    marginTop:25
  },
  buttonText : {
    color : "white"  ,
    fontSize: 18,
    fontWeight : "bold"
  }, 
  buttonView :{
    width :"100%",
    paddingHorizontal : 50
  },
  optionsText : {
    textAlign : "center",
    paddingVertical : 10,
    color : "gray",
    fontSize : 15,
    marginBottom : 6,
    fontWeight:'500',
    color:'black',
    
  },
  mediaIcons : {
    flexDirection : "row",
    gap : 15,
    alignItems: "center",
    justifyContent : "center",
    marginBottom : 23
  },
  icons : {
    width : 40,
    height: 40,
  },
  footerText : {
    textAlign: "center",
    color : "gray",
    fontWeight:'500',
    fontSize: 15,
    color:'black'
  },
  signup : {
    color : "red",
    fontSize : 18,
    textDecorationLine: 'underline',
    fontWeight:'500',
  }
})
















