import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'reactstrap';
class Home extends React.Component{

	showDialouge(){
		alert("hi");
		console.log("console");
	}
    render(){
    	return(
    		<React.Fragment style={styles.container}>
    			<View style={styles.main}>
    				<Text style={styles.text}>some name</Text>
    				<Button 
    					color="primary"
    					onClick={this.showDialouge}>
    					{'Click Me'}
    				</Button>
    			</View>
    		</React.Fragment>
    	)
    }
}


const styles = StyleSheet.create({
	container:{
		height:"100vh",
		width: "100vw",
	},
	main:{
		alignItems: "center",
		margin: "5%"
	},
	text:{
		color: "#1976d2",
	},
});


export default Home;