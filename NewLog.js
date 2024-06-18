

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; 
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore'
import uuid from 'react-native-uuid'


const logo = require("./Logo/yoga.png");
const facebook = require("./Logo/facebook.png");
const linkedin = require("./Logo/snapchat.png");
const tiktok = require("./Logo/instagram.png");

export default function LoginForm() {
  const navigation = useNavigation(); 
  const [click, setClick] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const  LoginUser =()=>{
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
  const handleLogin = () => {
    if (!username.trim()) {
      Alert.alert("Username is required.");
      return;
    }

    if (!password.trim()) {
      Alert.alert("Password is required.");
      return;
    }

    navigation.navigate('NewScr');
  };

  return (

   <ScrollView>
      <Image source={logo} style={styles.image} />
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputView}>
    

      <Text style = {styles.textstyle}>Enter Mobile or Email<Text style = {{ color:'red'}}>*</Text></Text>
        <TextInput
          style={styles.input}
          placeholder='EMAIL OR USERNAME'
          value={username}
          onChangeText={setUsername}
          autoCorrect={false}
          autoCapitalize='none'
        />


      <Text style = {styles.textstyle}>Password <Text style = {{ color:'red'}}>*</Text></Text>
       
        <TextInput
          style={styles.input}
          placeholder='PASSWORD'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize='none'
        />
      </View>


      <View style={styles.rememberView}>
        <View style={styles.switch}>
          <Switch
            value={click}
            onValueChange={setClick}
            trackColor={{true : "green" , false : "gray"}}
          />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>

        <View>
          <Pressable onPress={() => Alert.alert("Forget Password!")}>
            <Text style={styles.forgetText}>Forgot Password?</Text>
          </Pressable>
        </View>
      </View>


      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <Text style={styles.optionsText}>OR LOGIN WITH</Text>
      </View>


      <View style={styles.mediaIcons}>
        <Image source={facebook} style={styles.icons} />
        <Image source={tiktok} style={styles.icons} />
        <Image source={linkedin} style={styles.icons} />
      </View>


      <View style={styles.rememberView}>
        <View style={styles.switch}>
          <Text style={styles.remember}>Don't have an account?</Text>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('Bk')}>
            <Text style={styles.SignupTex}>Sign Up</Text>
          </Pressable>
        </View>
      </View>

      </ScrollView>
     
  );
}


const styles = StyleSheet.create({
 
  textstyle:{
    fontSize:15,
    color:'black',
     fontWeight:'500'
      },
  image : {
    height : 160,
    width : 170,
    marginLeft:115,
   
  },
  title : {
    fontSize : 30,
    fontWeight : "bold",
    textTransform : "uppercase",
    textAlign: "center",
    paddingVertical : 20,
    color : "#035096",
    fontWeight:'900'
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
    marginLeft:30
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
    marginRight:30
  
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

