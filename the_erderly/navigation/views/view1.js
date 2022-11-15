import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function View1({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title='카카오톡으로 로그인 하기' onPress={() => navigation.navigate('login')}/>
    </View>
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
