import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import view1 from './views/view1'
import kakaologin from './views/login'

const Stack = createStackNavigator();
const View1 = "view1";
const Login = "kakaologin";

export default function StackContainer() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={View1} component={view1} option={{}} />
        {/* <Stack.Screen name={Login} component={kakaologin} option={{}} /> */}
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
