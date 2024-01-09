import React, { useState } from 'react';
import {
 View,
 Text,
 TextInput,
 Button,
 TouchableOpacity,
 StyleSheet,
} from 'react-native';


const LoginScreen = () => {
 const [email, setEmail] = useState('');
 const [otp, setOtp] = useState('');

 const handleSubmit = () => {
    console.log('Email:', email);
    console.log('OTP:', otp);
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title1}>My</Text>
      <Text style={styles.title2}>ALUMNI</Text>
      <Text style={styles.title3}>NETWORK</Text>

      <Text style={styles.title4}>Let's get started</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email*"
        onChangeText={setEmail}
        value={email}
      />

   <TouchableOpacity style={styles.otpButton} onPress={() => {}}>
        <Text style={styles.otpButtonText}>Request OTP</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.loginwithpass} onPress={() => {}}>
        <Text style={styles.loginwithpass1}>Login with Password</Text>
   </TouchableOpacity>
   
   
   <TouchableOpacity style={styles.googleButton} onPress={() => {}}>
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      

    </View>
 );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 30,
      paddingTop: 50,
   },
   title1: {
      fontSize: 38,
      color: '#000',
      // display:'flex',
      // position: 'relative',
      // top: '20%',
      marginTop:130,
   },
   title2: {
      fontSize: 40,
      fontWeight: '800',
      color: '#000',
      // position: 'relative',
      // top: '20%',
      // marginTop:10,
   },
   title3: {
      fontSize: 38,
      color: '#000',
      // position: 'relative',
      // top: '20%',
   },
   title4: {
      fontSize: 25,
      color: '#000',
      fontWeight:'bold',
      // position: 'relative',
      // top: '30%',
      // left:'20%',
      marginTop:60,
      marginLeft:50,
   },
   subtitle: {
      fontSize: 18,
      color: '#666',
      marginTop: 10,
   },
   input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginTop:20,
   },
   otpButton: {
      backgroundColor: '#007BFF',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:30,
      padding:15,
      marginTop: 20,
   },
   otpButtonText: {
      color: '#fff',
      fontSize:16,
      fontWeight:'bold',
   },
   loginwithpass:{
      backgroundColor: 'none',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      marginTop: 20,

   },
   loginwithpass1:{
      color:'#007BFF',
      fontWeight:'bold',
      fontSize:15,
   },
   btnlogin:{
      backgroundColor:'none',

   },
   googleButton: {
      backgroundColor: '#fff',
      display:'flex',
      alignItems:'center', 
      justifyContent:'center',
      borderRadius:30,
      borderWidth:1,
      padding:15,
      marginTop: 20,
   },
   googleButtonText: {
      color: '#000',
      fontSize: 16,
      fontWeight:'bold',
   },
  });

export default LoginScreen;