import React from 'react';

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"


import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';

class App extends React.Component{
  constructor(props){
    super(props);
    this.Stack = createStackNavigator()
  }
  
  render(){
    return(
      <NavigationContainer>
        <this.Stack.Navigator>
        <this.Stack.Screen options={{headerShown: false}} name="Splash" component={SplashScreen}/>
          <this.Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen}/>
        </this.Stack.Navigator>
      </NavigationContainer>
    )
  }
}


export default App;
