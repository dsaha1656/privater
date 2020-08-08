import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import { getItem, setItem } from '../model/StorageHandler';

class SplashScreen extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    componentDidMount(){
        setTimeout(()=>{
            this.openScreen();
        },2000)
    }
    openScreen(){
        getItem("@key", (val)=>{
            console.log("---------------->", val)
        })
        // this.props.navigation.navigate("Login");
    }
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={require('../assets/logo.png')}/>
            </View>
        );
    }
}

export default SplashScreen;

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        backgroundColor:"#fff",
        flexDirection:"column"
    },
    image:{
        width:"50%",
        height:"100%",
        resizeMode: "contain",
        justifyContent:"center",
        alignSelf:"center",
        borderRadius:120
    },
})