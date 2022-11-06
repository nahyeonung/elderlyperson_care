import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import view1 from './views/view1'
import login from './views/login'

const Stack = createStackNavigator();
const View1 = "view1";
const Login = "login";

export default function StackContainer() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={View1} component={view1} option={{}} />
        <Stack.Screen name={Login} component={login} option={{}} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
