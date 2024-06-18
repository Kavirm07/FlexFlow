













//############################################################## LOGIN SCREEN ##################################################################




// import { StyleSheet, Text, View, ScrollView } from 'react-native'
// import React, {useState} from 'react'
// import {Picker} from '@react-native-picker/picker'
// import { Button, Input } from 'react-native-elements';


// const Login = () => {
  
// const [selectedValue, setSelectedValue] = useState();
//   const Separator = () => <View style={styles.separator} />;
//   return (
//     <View style = {{marginTop:10,marginVertical:30}}>      
//         <Text style = {{  justifyContent:'center',fontSize:24, textAlign:'center'}}>
//          <Text style = {{color:"black"}}>Ŧlex</Text><Text style = {{color:'#1E90FF'}}>҂ʄloẇ</Text>
//          <Separator/>
        
//         </Text>

       
//        <ScrollView>

//         <View style= {styles.container}>
//         <Text style ={{fontSize:24, color:'black', marginLeft:80}}> It's time to create</Text>
//         <Text style ={{fontWeight:'bold', fontSize:30,color:'#1E90FF',marginLeft:58}}>Your Quality of Time</Text>
//         </View>

//         <View style = {styles.three}>
//           <Text style = {{color:'white', fontSize:20, fontWeight:300, }}>Achieve things you never thought you could.</Text>
//           <Text></Text>
//           <Text style = {{color:'white', fontSize:20, fontWeight:300, }}>Unique matching system with a pro to help you reach your goals</Text>
//         </View>

//         <View>
//           <Text style = {styles.reg}>Registration</Text>
//         </View>

//         <View style = {{margin:20}}>

//         <View style  = {{marginHorizontal:7}}>
//           <Text style = {{color:'black', marginTop:7,marginBottom:10}}>Select Account Type</Text>
        
//         <View style = {{borderColor:'black', borderWidth:1}}>
//           <Picker
//           selectedValue={selectedValue}
//           onValueChange={(itemValue, itemIndex)=>setSelectedValue(itemValue)}>
//             <Picker.Item  label = "Select One" value = ""/>
//             <Picker.Item  label = "Trainer/Professional" value = "Trainer/Professional"/>
//             <Picker.Item  label = "Traniee/Newbiee" value = "Traniee/Newbiee"/>
          
//           </Picker>
//         </View>
//         </View>

//          <Text style ={{color:'black', marginTop:10}}>Username</Text>
//          <Input placeholder='User Name Here'
//         />


//          <Text  style = {{color:'black'}}>Password (8 min)</Text>
//       <Input placeholder="Password" secureTextEntry={true} />

//       <Text style ={{color:'black'}}> Confirm Password</Text>
//       <Input placeholder=" Must be same as Password" secureTextEntry={true} />

//       <Text style ={{color:'black'}}>Email Address</Text>
//       <Input placeholder="Enter a valid email "  />

//       <Text style ={{color:'black'}}>Phone Number</Text>
//       <Input placeholder="Must be 10 digit" />

//       <View style  = {{marginHorizontal:7, }}>
//           <Text style = {{color:'black', marginTop:7}}>Select Gender</Text>
        
//         <View style = {{borderColor:'black', borderWidth:1}}>
//           <Picker
//           selectedValue={selectedValue}
//           onValueChange={(itemValue, itemIndex)=>setSelectedValue(itemValue)}>
//             <Picker.Item  label = "Select One" value = ""/>
//             <Picker.Item  label = "Male" value = "Male"/>
//             <Picker.Item  label = "Female" value = "Female"/>
//             <Picker.Item  label = "Other" value = "Other"/>
//             <Picker.Item  label = "Prefer Not to Say" value = "Other"/>

//           </Picker>
//         </View>
//         </View>
//         </View>
      
        
//         <View style = {{flexDirection:'row', justifyContent:'space-between', marginStart:110}}>
//         <Button 
//         title="Improve my QOL" />

        
//        </View>
//        <View style = {{marginBottom:30, marginHorizontal:40}}>
//        <Text style= {{fontSize:18, marginTop:10}}> Already have an account <Text style={styles.underline}>Login</Text></Text>
       
//        </View>

        
//         </ScrollView>
      
     
          
//     </View>


//   )
// }

// export default Login

// const styles = StyleSheet.create({
//   container:{
//   flex:1,
//   paddingBottom:15,

  
//   },
//     separator: {
//     marginVertical: 8,
//   color:'white',
//     borderBottomWidth: 10,
//   },
//   three:{
    
//     backgroundColor:'#505050',
//     fontSize:30,
//     paddingHorizontal:12,
    
//   },
//   reg:{
    
//     fontSize:25,
//     marginVertical:10,
//     marginHorizontal:110,
//      color:'#1da1f2', 
//      justifyContent:'center', 
//      alignItems:'center',
//      flex:1,
//      marginRight:30

//   },
//   underline:{textDecorationLine: 'underline',
//     color:'blue',
//     fontWeight:'bold',
//     fontSize:20
//   }
// })















































//############################################################### HOME SCREEN ###################################################################





// import { StatusBar, StyleSheet,Text, View, TextInput, TouchableOpacity} from "react-native"
// import React ,{Component} from 'react';
// import {Formik} from 'formik'
// import * as Yup from 'yup'
// import { enableLayoutAnimations } from "react-native-reanimated";
// import PasswordInputText from 'react-native-hide-show-password-input';


// const SignUpPage = Yup.object().shape({
//   Username: Yup.string()
  
//   .min(3,'Too Short!')
//   .max(50,'Too Long!')
//   .required('Please enter the username'),

//   Password: Yup.string()
//   .min(8,'Too Short!')
//   .required('Please enter your Password')
//   .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+]).{8,}$/, 'Password must contain One Uppercase, One  Lowercase, One Number and One Special Character'),
  

  
//   ConfirmPassword: Yup.string()
//   .min(8,'Too Short!')
//   .required('Please enter your Password')
//   .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+]).{8,}$/, 'Password must contain One Uppercase, One  Lowercase, One Number and One Special Character'),
 
//   Email: Yup.string()
//  .email('Invalid Email')
//  .required('Please enter your Email'),

//  Phone: Yup.number()
//  .required('Please enter your Phone Number')
//  .min(10,'Invalid Phone Number')
//  .max(10, 'Invalid Phone Number')
  
// })
// const  HomeScreen = ()=>{
//   return (
//     <Formik
//       initialValues={{
//       Username:'',
//       Password:'',
//       Confirmpassword:'',
//       Email:'',
//       Phone:''

//     }}
//     validationSchema = {SignUpPage}>
   
//       {({values,errors,touched,handleChange, setFieldTouched, isValid, handleSubmit})=>(

     
//     <View style = {styles.wrapper}>
//       <StatusBar barStyle="light-content" /> 
//       <View style = {styles.formContainer}>
    
//       <Text style = {{textAlign:'center',color:"blue", fontSize:30}}>Ŧlex<Text style = {{color:'black', fontSize:30}}>҂ʄloẇ</Text></Text>
//       </View>

//       <View style = {{marginTop:20}}>
//         <Text style = {{marginLeft:50,color:'white', fontSize:27}}>It's Time to create</Text>
//         <Text style = {{fontSize:30, color:'royalblue', marginLeft:87}}>Your Quality Of Life</Text>
//       </View>

//       <View style = {styles.formContainer}>
//       <View style = {styles.inputWrapper}>
//         <TextInput  style ={styles.inputStyle}
//          placeholder= "Username" 
//          value= {values.Username}
//          onChangeText={handleChange('Username')}/>
//          {errors.Username && (
//           <Text style = {styles.errorTxt}>{errors.Username}</Text>
//          )}
//       </View>


//       <View style = {styles.inputWrapper}>
//         <TextInput  style ={styles.inputStyle}
//          placeholder= "Password" 
//          value= {values.Password}
//          onChangeText={handleChange('Password')}/>
//          {errors.Password && (
//           <Text style = {styles.errorTxt}>{errors.Password}</Text>
//          )}
//       </View>

//       {/* <View style = {styles.inputWrapper}>
//         <TextInput  style ={styles.inputStyle}
//          placeholder= "Confirm Password"
//          value= {values.Confirmpassword}
//          onChangeText={handleChange('Confirmpassword')}/>
//          {errors.Confirmpassword && (
//           <Text style = {styles.errorTxt}>{errors.Confirmpassword}</Text>
//          )} */}
//       {/* </View> */}

//       <View style = {styles.inputWrapper}>
//         <TextInput  style ={styles.inputStyle}
//          placeholder= "Email Address"
//          value= {values.Email}
//          onChangeText={handleChange('Email')} />
//            {errors.Email && (
//           <Text style = {styles.errorTxt}>{errors.Email}</Text>
//          )}
//       </View>

//       <View style = {styles.inputWrapper}>
//         <TextInput  style ={styles.inputStyle}
//         placeholder= "Phone Number" 
//         value= {values.Phone}
//          onChangeText={handleChange('Phone')}
//         />
//         {errors.Password && (
//           <Text style = {styles.errorTxt}>{errors.Phone}</Text>
//          )}
//       </View>
     
//       <TouchableOpacity onPress={()=>{}} style = {styles.SubmitBtn}>
//           <Text style = {styles.submitBtnTxt}>LOGIN</Text>
//         </TouchableOpacity> 
//       </View>
    
//     </View>
//      )}
//     </Formik>
//   )
// }
// export default HomeScreen

// const styles = StyleSheet.create({
//   container:{
//   flex:1,
//   paddingBottom:15,
//   marginTop:30
  
//   },
//     separator: {
//     marginVertical: 8,

//     borderBottomWidth: 10,
//   },
//   three:{
//     backgroundColor:'#505050',
//     fontSize:24,
//     paddingHorizontal:30,
    
//   },
//   reg:{
    
//     fontSize:25,
//     marginVertical:10,
//     marginHorizontal:110,
//      color:'#1da1f2', 
//      justifyContent:'center', 
//      alignItems:'center',
//      flex:1,
//      marginRight:30
//   },
//   underline:{textDecorationLine: 'underline',
    
//     fontWeight:'bold',
//     fontSize:20,
//     marginLeft:210,marginTop:13
//   },
//   wrapper:{
//     flex:1,
//     justifyContent:"center",
//     alignItems:"center",
//     backgroundColor:"#2C3333",
//     paddingHorizontal:15
//   },
//   formContainer:{
//     backgroundColor:"#F5EDDC",
//     padding:20,
//     borderRadius:20,
//     width:'100%',
//     marginTop:60,
    
//   },
//   title:{
//     color:"#16213E",
//     fontSize:25,
//     fontWeight:"400",
//     marginBottom:15
//   },
//   inputWrapper:{
//     marginBottom:15
//   },
//   inputStyle:{
//     borderColor:"#16213E",
//     borderWidth:1,
//     borderRadius:10,
//     padding:10,
//     fontSize:18,
//   },
//   errorTxt:{
//     fontSize:12,
//     color:"#FF0D10"
//   },
//   SubmitBtn:{
//     backgroundColor:"#16213E",
//     padding:15,
//     borderRadius:10,
//     justifyContent:"center",
//   },
//   submitBtnTxt:{
//     color:'#fff',
//     textAlign:"center",
//     fontSize:18,
//     fontWeight:'700'
//   }
// })











































// ##################################################################### CHOOSE SCREEN ###############################################################

// import { StyleSheet, Text, View ,Image, ScrollView, TouchableOpacity} from 'react-native'
// import React from 'react'


// const ChooseSrn = () => {
//   return (
//     <View style = {styles.container}>
//       <View style = {{marginTop:20}}>
//       <Text style  = {{fontSize:24, color:'white'}}>Choose The Ultimate Way to be...</Text>
//       <Text></Text> 
//       <View style = {{ backgroundColor:'#50717b',margin:10,borderRadius:21}}> 
//       <Text style= {{fontWeight:800, fontSize:24, color:'white', marginLeft:30,margin:30}}>The BEST Version Of <Text style = {{marginRight:90, color:'#b9d4f1'}} >YourSelf...</Text></Text>
//       </View>

//       <ScrollView>
        
//         <TouchableOpacity>
//         <Image  style = {styles.imageleft }source={require('./Img/yoga.jpg')} 
//          />
//          <Text style = {{color:'white',fontSize:18}}>Yoga</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//         <Image   style = {styles.imgae } source={require('./Img/HRX.webp')}  />   
//         <Text style = {{color:'white',fontSize:18, marginLeft:220}}>At Center</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//         <Image   style = {styles.imageleft } source={require('./Img/athome.jpg')}  />
//         <Text style = {{color:'white',fontSize:18}}>At Home</Text>
//        </TouchableOpacity>
//         <TouchableOpacity>
//         <Image   style = {styles.imgae } source={require('./Img/dance.jpg')}  />   
//         <Text style = {{color:'white',fontSize:18,marginLeft:220}}>Dance</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//         <Image   style = {styles.imageleft } source={require('./Img/p1.jpg')}  />   
//         <Text style = {{color:'white',fontSize:18}}>Yoga</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//         <Image  style = {styles.imgae } source={require('./Img/p2.jpg')}  />   
//         <Text style = {{color:'white',fontSize:18,marginLeft:230}}>Yoga</Text>
//         </TouchableOpacity>
//         <TouchableOpacity> 
     
//         <Image  style = {{height:190, width:190, borderRadius:190/2, marginLeft:20,marginBottom:250, borderColor: '#a7bcb9',
//   borderWidth: 5}} source={require('./Img/p3.jpg')}  /> 
//         <Text style = {{color:'white',fontSize:18,}}>Yoga</Text> 
      
//         </TouchableOpacity>
//         {/* <TouchableOpacity>
//         <Image  style = {{height:190, width:190, borderRadius:90,marginBottom:250,marginLeft:170}}  source={require('./Img/food.jpg')} /> 
//         <Text style = {{color:'white',fontSize:18,marginBottom:300}}>Yoga</Text>
//         </TouchableOpacity> */}
       
      
//         </ScrollView>
//     </View>
//     </View>
//   )
// }

// export default ChooseSrn

// const styles = StyleSheet.create({
//   container:{
//     backgroundColor:'#36454F',
//     flex:1,
   
//   },
// imgae:{
//   height:190, 
//   width:190, 
//   borderRadius:190/2,
//   marginLeft:190,  
//   borderColor: '#a7bcb9',
//   borderWidth: 5,
//   resizeMode: 'contain',
//   alignItems:"center"
  

  
// },
// imageleft:{
//   height:190, 
//   width:190, 
//   borderRadius:190/2,
//   marginLeft:5,  
//   borderColor: '#a7bcb9',
//   borderWidth: 5,
//   position:"absolute"
// }
// })

































//############################################################### Yoga Screens ##################################################################



// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const YogaScreen = () => {
//   return (
//     <View>
//       <Text>YogaScreen</Text>
//       <Image 
//       />
//     </View>
//   )
// }

// export default YogaScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:""
//   }
// })





































// // ##################################################################################################################################################


// import { Button, ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
// import React from 'react';

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
//  import Home from './screens/Home'
// import Login from './screens/Login';
// import HomeScreen from './screens/HomeScreen'

// const Stack = createNativeStackNavigator();

// export default  function App() {
//   return (


//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home'>
//         <Stack.Screen name='Home' component={Home} />
//         <Stack.Screen name='Login' component={Login} />
//         <Stack.Screen name ='HomeScreen' component ={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>

//   )
// }

































//##################################################################################################################################################


// import React from "react";

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import {Home} from "screens/Home";
// import {Login} from "screens/Login ";
// import {HomeScreen} from "screens/HomeScreen";


// export default function App() {
//   const Stack = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         {/* home screen  */}
//         <Stack.Screen
//           name="Home"
//           options={{
//             headerShown: false,
//           }}>
       
//         </Stack.Screen>

      
//         <Stack.Screen
//           name="Home"
//           component={Home}
         
//         />

     
//         <Stack.Screen
//           name="Login"
//           component={Login}
         
//         />

//         {/* UserData Screen  */}
//         <Stack.Screen
//           name="HomeScreen"
//           component={HomeScreen}
        
//         />

    
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }































//############################ EXERCISE CHOOSE SCREEN ###################################################


// import { StyleSheet, Text, View ,Image, ScrollView, TouchableOpacity} from 'react-native'
// import React from 'react'


// const ChooseSrn = () => {
//   return (
//     <View style = {styles.container}>
//       <View style = {{marginTop:20}}>
//       <Text style  = {{fontSize:24, color:'white'}}>Choose The Ultimate Way to be...</Text>
//       <Text></Text> 
//       <View style = {{ backgroundColor:'#50717b',margin:10,borderRadius:21}}> 
//       <Text style= {{fontWeight:800, fontSize:24, color:'white', marginLeft:30,margin:30}}>The BEST Version Of <Text style = {{marginRight:90, color:'#b9d4f1'}} >YourSelf...</Text></Text>
//       </View>

//       <ScrollView>
    
//         <TouchableOpacity>
//         <Image  
//          source={require('./Img/yoga.jpg')} 
//          />
//          <Text style = {{color:'white',fontSize:18}}>Yoga</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//         <Image  style = {{height:190, width:190, borderRadius:90,marginLeft:170}} source={require('./Img/atcenter.jpg')}  />   
//         <Text style = {{color:'white',fontSize:18, marginLeft:220}}>At Center</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//         <Image  style = {{height:190, width:190, borderRadius:90, marginLeft:20}} source={require('./Img/athome.jpg')}  />
//         <Text style = {{color:'white',fontSize:18}}>At Home</Text>
//        </TouchableOpacity>
//         <TouchableOpacity>
//         <Image  style = {{height:190, width:190, borderRadius:90,marginLeft:170}} source={require('./Img/dance.jpg')}  />   
//         <Text style = {{color:'white',fontSize:18,marginLeft:220}}>Dance</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//         <Image  style = {{height:190, width:190, borderRadius:90, marginLeft:20}} source={require('./Img/p1.jpg')}  />   
//         <Text style = {{color:'white',fontSize:18}}>Yoga</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//         <Image  style = {{height:190, width:190, borderRadius:90,marginLeft:170}} source={require('./Img/p2.jpg')}  />   
//         <Text style = {{color:'white',fontSize:18,marginLeft:230}}>Yoga</Text>
//         </TouchableOpacity>
//         <TouchableOpacity> 
     
//         <Image  style = {{height:190, width:190, borderRadius:90, marginLeft:20,marginBottom:250}} source={require('./Img/p3.jpg')}  /> 
//         <Text style = {{color:'white',fontSize:18,}}>Yoga</Text> 
      
//         </TouchableOpacity>
//         {/* <TouchableOpacity>
//         <Image  style = {{height:190, width:190, borderRadius:90,marginBottom:250,marginLeft:170}}  source={require('./Img/food.jpg')} /> 
//         <Text style = {{color:'white',fontSize:18,marginBottom:300}}>Yoga</Text>
//         </TouchableOpacity> */}
       
      
//         </ScrollView>
//     </View>
//     </View>
//   )
// }

// export default ChooseSrn

// const styles = StyleSheet.create({
//   container:{
//     backgroundColor:'#36454F',
//     flex:1,
   
//   },
// imgae:{
//   height:190, 
//   width:190, 
//   borderRadius:190/2,
//   marginLeft:190,  
//   borderColor: '#a7bcb9',
//   borderWidth: 5,
//   resizeMode: 'contain',
//   alignItems:"center"
  

  
// },
// imageleft:{
//   height:190, 
//   width:190, 
//   borderRadius:190/2,
//   marginLeft:5,  
//   borderColor: '#a7bcb9',
//   borderWidth: 5,
//   position:"absolute"
// }
// })





















// import { StyleSheet, Text, View ,Image, ScrollView, TouchableOpacity} from 'react-native'
// import React from 'react'


// const ChooseSrn = () => {
//   return (
//     <View style = {styles.container}>
//       <View style = {{marginTop:20}}>
//       <Text style  = {{fontSize:24, color:'white'}}>Choose The Ultimate Way to be...</Text>
//       <Text></Text> 
//       <View style = {{ backgroundColor:'#50717b',margin:10,borderRadius:21}}> 
//       <Text style= {{fontWeight:800, fontSize:24, color:'white', marginLeft:30,margin:30}}>The BEST Version Of <Text style = {{marginRight:90, color:'#b9d4f1'}} >YourSelf...</Text></Text>
//       </View>

//       <ScrollView>
        
//         <TouchableOpacity>
//         <Image  style = {styles.imageleft }source={require('./Img/yoga.jpg')} 
//          />
//          <Text style = {{color:'white',fontSize:18}}>Yoga</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//         <Image   style = {styles.imgae } source={require('./Img/HRX.webp')}  />   
//         <Text style = {{color:'white',fontSize:18, marginLeft:220}}>At Center</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//         <Image   style = {styles.imageleft } source={require('./Img/athome.jpg')}  />
//         <Text style = {{color:'white',fontSize:18}}>At Home</Text>
//        </TouchableOpacity>
//         <TouchableOpacity>
//         <Image   style = {styles.imgae } source={require('./Img/dance.jpg')}  />   
//         <Text style = {{color:'white',fontSize:18,marginLeft:220}}>Dance</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//         <Image   style = {styles.imageleft } source={require('./Img/p1.jpg')}  />   
//         <Text style = {{color:'white',fontSize:18}}>Yoga</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//         <Image  style = {styles.imgae } source={require('./Img/p2.jpg')}  />   
//         <Text style = {{color:'white',fontSize:18,marginLeft:230}}>Yoga</Text>
//         </TouchableOpacity>
//         <TouchableOpacity> 
     
//         <Image  style = {{height:190, width:190, borderRadius:190/2, marginLeft:20,marginBottom:250, borderColor: '#a7bcb9',
//   borderWidth: 5}} source={require('./Img/p3.jpg')}  /> 
//         <Text style = {{color:'white',fontSize:18,}}>Yoga</Text> 
      
//         </TouchableOpacity>
//         {/* <TouchableOpacity>
//         <Image  style = {{height:190, width:190, borderRadius:90,marginBottom:250,marginLeft:170}}  source={require('./Img/food.jpg')} /> 
//         <Text style = {{color:'white',fontSize:18,marginBottom:300}}>Yoga</Text>
//         </TouchableOpacity> */}
       
      
//         </ScrollView>
//     </View>
//     </View>
//   )
// }

// export default ChooseSrn

// const styles = StyleSheet.create({
//   container:{
//     backgroundColor:'#36454F',
//     flex:1,
   
//   },
// imgae:{
//   height:190, 
//   width:190, 
//   borderRadius:190/2,
//   marginLeft:190,  
//   borderColor: '#a7bcb9',
//   borderWidth: 5,
//   resizeMode: 'contain',
//   alignItems:"center"
  

  
// },
// imageleft:{
//   height:190, 
//   width:190, 
//   borderRadius:190/2,
//   marginLeft:5,  
//   borderColor: '#a7bcb9',
//   borderWidth: 5,
//   position:"absolute"
// }
// })




































// ######################################################################################################


// import React, { useEffect, useCallback, useState } from 'react';
// import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
// import { useForm } from 'react-hook-form';

// const FormScreen = () => {
//   const { register, handleSubmit, setValue } = useForm();
//   const [isRegistered, setIsRegistered] = useState(false);

//   const onSubmit = useCallback((formData) => {
//     console.log(formData);
//     setIsRegistered(true);
    
//   }, []);

//   const onChangeField = useCallback((name) => (text) => {
//     setValue(name, text);
//   }, []);

//   useEffect(() => {
//     register('username');
//     register('email');
//     register('password');
//   }, [register]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>User Registration</Text>
//       <TextInput
//         style={styles.input}
//         autoCompleteType="username"
//         placeholder="Username"
//         onChangeText={onChangeField('username')}
//       />
//       <TextInput
//         style={styles.input}
//         autoCompleteType="email"
//         keyboardType="email-address"
//         textContentType="emailAddress"
//         placeholder="Email"
//         onChangeText={onChangeField('email')}
//       />
//       <TextInput
//         style={styles.input}
//         secureTextEntry
//         autoCompleteType="password"
//         placeholder="Password"
//         onChangeText={onChangeField('password')}
//       />
//       <Button title="Submit" onPress={handleSubmit(onSubmit)} style={styles.submitButton} />
//       {isRegistered && <Text style={styles.successText}>Registration successful!</Text>}

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 20, // Increased margin between boxes
//     width: '40%', // Shortened width
//   },
//   submitButton: {
//     padding: 50, // Increased button size
//   },
//   successText: {
//     color: 'green',
//     marginTop: 10,
//     fontSize: 17,
//   },
// });

// export default FormScreen;




































//#############################Bottom Navigation #########################################


// import React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {Fitness, Search} from './screens'

// const Tab = createBottomTabNavigator();

// const HomeScreen = () => {
//   return (
//     <View>
//       <Text>Home Screen</Text>
//     </View>
//   );
// };

// const SettingsScreen = () => {
//   return (
//     <View>
//       <Text>Settings Screen</Text>
//     </View>
//   );
// };



// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} icon="home" />
//         <Tab.Screen name="Settings" component={SettingsScreen} icon="settings" />
    
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


















//###############################################  NBA ##################################################



// // React Native Bottom Navigation
// // https://aboutreact.com/react-native-bottom-navigation/



// import * as React from 'react';

// import
//  MaterialCommunityIcons
// from 'react-native-vector-icons/MaterialCommunityIcons';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import HomeScreen from './pages/HomeScreen';
// import DetailsScreen from './pages/DetailsScreen';
// import ProfileScreen from './pages/ProfileScreen';
// import SettingsScreen from './pages/SettingsScreen';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function HomeStack() {
//   return (
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{headerShown: false}}
//         >
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen} />
//         <Stack.Screen
//           name="Details"
//           component={DetailsScreen} />
//       </Stack.Navigator>
//   );
// }

// function SettingsStack() {
//   return (
//     <Stack.Navigator
//       initialRouteName="Settings"
//       screenOptions={{headerShown: false}}>
//       <Stack.Screen
//         name="Settings"
//         component={SettingsScreen} />
//       <Stack.Screen
//         name="Profile"
//         component={ProfileScreen} />
//     </Stack.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="Feed"
//         screenOptions={({ route }) => ({
//           headerStyle: { backgroundColor: '#42f44b' },
//           headerTintColor: '#fff',
//           headerTitleStyle: { fontWeight: 'bold' },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             if (route.name === 'HomeStack') {
//               iconName = focused
//                 ? 'home-circle'
//                 : 'home-circle-outline';
//             } else if (route.name === 'SettingsStack') {
//               iconName = focused
//                 ? 'account-settings'
//                 : 'account-settings-outline';
//             }
//             return (
//               <
//                 name={iconName}
//                 size={size}
//                 color={color}
//               />
//             );
//           }
//         })}>
//         <Tab.Screen
//           name="HomeStack"
//           component={HomeStack}
//           options={{
//             tabBarLabel: 'Home',
//             title: 'Home',
//           }}  />
//         <Tab.Screen
//           name="SettingsStack"
//           component={SettingsStack}
//           options={{
//             tabBarLabel: 'Settings',
//             title: 'Setting'
//           }} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;



//#####################################################################################################################

// import React from 'react';

// import { NavigationContainer } from '@react-navigation/native';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { Ionicons } from '@expo/vector-icons';




// import HomeScreen from './screens/HomeScreen';

// import Login from './screens/Login';




// const Tab = createBottomTabNavigator();




// function App() {

// return (

// <NavigationContainer>
// <Tab.Navigator

// screenOptions={({ route }) => ({

// tabBarIcon: ({ focused, color, size }) => {

// let iconName;





// if (route.name === 'Home') {
// iconName = focused ? 'home' : 'home-outline';

// } else if (route.name === 'Settings') {

// iconName = focused ? 'settings' : 'settings-outline';

// }


// },

// })}

// tabBarOptions={{

// activeTintColor: 'tomato',

// inactiveTintColor: 'gray',

// }}

// >

// <Tab.Screen name="Home" component={HomeScreen} />

// <Tab.Screen name="Login" component={Login} />

// </Tab.Navigator>

// </NavigationContainer>

// );

// }

// export default App;





// /######################################################################################################

// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import {Text , View} from 'react-native';
// import Ionic from 'react-native-vector-icons/Ionicons';
// import {NavigationConatiner} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeScreen from './screens/HomeScreen';
// import SearchScreen from './screens/SearchScreen';

// import ActivityScreen from './screens/ActivityScreen';
// import Profile from './screens/Profile';




// const App = ()=>{
//     const Tab = createBottomTabNavigator();

//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//             screenOptions = {({route})=>({
//                 tabBarIcon: ({focused, size, colour})=>{
//                     let iconName;
//                     if(route.name === 'HomeScreen'){
//                         iconName = focused ? 'home' : 'home-outline';
//                     }
//                     else if (route.name === 'Search'){
//                         iconName = focused ? 'home' : 'home-outline';

//                     }else if (route.name === 'AddScreen'){
//                         iconName = focused ? 'home' : 'home-outline';
//                     }
//                     else if (route.name === 'Activity'){
//                         iconName = focused ? 'home' : 'home-outline';
//                     }
//                     else if (route.name === 'Profile'){
//                         iconName = focused ? 'home' : 'home-outline';
//                     }
//                     return <Ionic  name = {iconName} size = {size} colour= {colour} />
//                 },
//             })}>
//                 <Tab.Screen  name = "Home" component={HomeScreen}/>
//                 <Tab.Screen  name = "Search" component={SearchScreen}/>
//                 <Tab.Screen  name = "AddScreen" component={AddScreen}/>
//                 <Tab.Screen  name = "Activity" component={ActivityScreen}/>
//                 <Tab.Screen  name = "Profile" component={Profile}/>
//             </Tab.Navigator>
//         </NavigationContainer>
//     )
// }