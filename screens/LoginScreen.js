import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image
  } from 'react-native';

class LoginScreen extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        <View style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
            <Text style={styles.headerText}>Login to Privater</Text>
          </View>
          <View style={styles.form}>
            <TextInput 
              style={styles.input} 
              placeholder={"Enter your mobile no..."}
            />
            <TextInput 
              secureTextEntry={true}
              style={styles.input} 
              placeholder={"Enter your password..."}
            />
            <Text style={styles.button}>Login</Text>
          </View>
        </View>
      )
    }
  }
  
  
  const styles = StyleSheet.create({
    container: {
      width:"100%",
      height:"100%",
      justifyContent:"center",
      backgroundColor:"#fff"
    },
    header:{
      padding:10
    },
    logo:{
        width:"100%",
        height:150,
        resizeMode: "contain",
        alignSelf:"center",
        borderRadius:120,
    },
    headerText:{
      textAlign:"center",
      fontSize:24
    },
    form:{
      width:"100%",
    },
    input:{
      borderWidth:0.7,
      width:"80%",
      alignSelf:"center",
      padding:5,
      paddingLeft:20,
      paddingRight:20,
      margin:10,
      borderRadius:5
    },
    button:{
      borderColor:"green",
      borderWidth:2,
      width:"40%",
      fontSize:15,
      color:"green",
      alignSelf:"center",
      padding:5,
      paddingLeft:20,
      paddingRight:20,
      margin:10,
      textAlign:"center",
      borderRadius:5
    }
  });
  
  export default LoginScreen;
  