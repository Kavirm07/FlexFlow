

import { StyleSheet, Text, View, ScrollView,TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'
import {Picker} from '@react-native-picker/picker'
import { Button, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


export default function Bkm() {
  const navigation = useNavigation(); 
const [selectedValue, setSelectedValue] = useState();
  const Separator = () => <View style={styles.separator} />;
  return (
    <View style = {{marginTop:10,marginVertical:30}}>      
        <Text style = {{  justifyContent:'center',fontSize:24, textAlign:'center'}}>
         <Text style = {{color:"black"}}>Ŧlex</Text><Text style = {{color:'#1E90FF'}}>ʄlow</Text>
         <Separator/>
        
        </Text>

       
       <ScrollView>

        <View style= {styles.container}>
        <Text style ={{fontSize:24, color:'black', marginLeft:80}}> It's time to create</Text>
        <Text style ={{fontWeight:'bold', fontSize:30,color:'#1E90FF',marginLeft:58}}>Your Quality of Time</Text>
        </View>

        <View style = {styles.three}>
          <Text style = {{color:'black', fontSize:20, fontWeight:'500',marginTop:10 }}>Achieve things you never thought you could.</Text>
          <Text></Text>
          <Text style = {{color:'black', fontSize:20, fontWeight:'500',marginBottom:10 }}>Unique matching system with a pro to help you reach your goals</Text>
        </View>

        <View>
          <Text style = {styles.reg}>Registration</Text>
        </View>

        <View style = {{margin:20}}>

        <View style  = {{marginHorizontal:7}}>
          <Text style = {{color:'black', marginTop:7,marginBottom:10}}>Select Account Type</Text>
        
        <View style = {{borderColor:'black', borderWidth:1}}>
          <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex)=>setSelectedValue(itemValue)}>
            <Picker.Item  label = "Select One" value = ""/>
            <Picker.Item  label = "Trainer/Professional" value = "Trainer/Professional"/>
            <Picker.Item  label = "Traniee/Newbiee" value = "Traniee/Newbiee"/>
          
          </Picker>
        </View>
        </View>

         <Text style ={{color:'black', marginTop:10}}>Username</Text>
         <Input placeholder='User Name Here'
        />


         <Text  style = {{color:'black'}}>Password (8 min)</Text>
      <Input placeholder="Password" secureTextEntry={true} />

      <Text style ={{color:'black'}}> Confirm Password</Text>
      <Input placeholder=" Must be same as Password" secureTextEntry={true} />

      <Text style ={{color:'black'}}>Email Address</Text>
      <Input placeholder="Enter a valid email "  />

      <Text style ={{color:'black'}}>Phone Number</Text>
      <Input placeholder="Must be 10 digit" />

      <View style  = {{marginHorizontal:7, }}>
          <Text style = {{color:'black', marginTop:7}}>Select Gender</Text>
        
        <View style = {{borderColor:'black', borderWidth:1}}>
          <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex)=>setSelectedValue(itemValue)}>
            <Picker.Item  label = "Select One" value = ""/>
            <Picker.Item  label = "Male" value = "Male"/>
            <Picker.Item  label = "Female" value = "Female"/>
            <Picker.Item  label = "Other" value = "Other"/>
            <Picker.Item  label = "Prefer Not to Say" value = "Other"/>

          </Picker>
        </View>
        </View>
        </View>
      
        
        <View style = {{flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
        <Button 
        title="Register Now" 
      />

        
       </View>
       <View style = {{justifyContent:'center',alignItems:'center',marginTop:"auto"}}>
       <Text style= {{fontSize:18, marginTop:10}}> Already have an account </Text>
       <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: "auto" }}>
         
          <TouchableOpacity onPress={() => navigation.navigate('NewLog')}>
            <Text style={styles.underline}>Login</Text>
          </TouchableOpacity>
        </View>
       </View>

        
        </ScrollView>
      
     
          
    </View>


  )
}



const styles = StyleSheet.create({
  container:{
  flex:1,
  paddingBottom:15,

  
  },
    separator: {
    marginVertical: 8,
  color:'white',
    borderBottomWidth: 10,
  },
  three:{
    margin:10,
    backgroundColor:"#CAC5C1",
    fontSize:30,
    paddingHorizontal:12,
    borderRadius:12,
    borderWidth:2,
    borderColor:'#B6AFA9'
    
  },
  reg:{
    
    fontSize:25,
    marginVertical:10,
    marginHorizontal:110,
     color:'#1da1f2', 
     justifyContent:'center', 
     alignItems:'center',
     flex:1,
     marginRight:30

  },
 
  underline: {
    textDecorationLine: 'underline',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom:20
  }
})