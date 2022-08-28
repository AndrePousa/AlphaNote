import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import ClientRegistration from '../pages/ClientRegistration';

const Stack = createStackNavigator();

const MainStack = () => {
  return(
    <Stack.Navigator screenOptions={{
      headerTitleAlign:'center'
    }}>
      <Stack.Screen name="Login" component={Login} 
        options={{
          title:'Inicio',
      }}/>
      <Stack.Screen name="ClientRegistration" component={ClientRegistration} 
        options={{
          title:'Adestrador ou Tutor',
      }}/>
    </Stack.Navigator>
  );
}
export default MainStack;
 



 
 

