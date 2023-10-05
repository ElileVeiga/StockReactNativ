import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SignIn from './src/screens/signIn/signIn';
import SignUp from './src/screens/signUp/SignUp';
import Home from './src/screens/home/Home';
import Estoque_almox from './src/screens/estoque_almox/Estoque_almox';

const Stack = createStackNavigator();



function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='estoque_almox'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="signIn" component={SignIn} />
      <Stack.Screen name="signUp"  component={SignUp} />
      <Stack.Screen name="home"  component={Home}  />
      <Stack.Screen name="estoque_almox"  component={Estoque_almox}  />
    </Stack.Navigator>
  </NavigationContainer>
  )
}



export default App;
