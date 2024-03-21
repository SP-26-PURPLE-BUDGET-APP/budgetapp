import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";

import SignupScreen from "./screens/SignupScreen";
import SigninScreen from "./screens/SigninScreen";
import ResetPassScreen from "./screens/ResetPassScreen";

const Stack= createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" component={HomeScreen}/>
        <Stack.Screen name="signin" component={SigninScreen}/>
        <Stack.Screen name="signup" component={SignupScreen}/>
        <Stack.Screen name="resetpassword" component={ResetPassScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


