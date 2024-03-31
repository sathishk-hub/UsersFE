import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { type RootStackParams } from './RootStackParams';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Report from '../pages/Report';

const Stack = createStackNavigator<RootStackParams>();

const routes: Array<React.ComponentProps<typeof Stack.Screen>> = [
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Report',
    component: Report,
  },

];


function RootStack(): JSX.Element {

  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      {routes.map(routeConfig => (
        <Stack.Screen key={routeConfig.name} {...routeConfig} />
      ))}
    </Stack.Navigator>
  );
}

export default RootStack;
