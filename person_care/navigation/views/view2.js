import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function View2( {navigation }) {
  return (
    <View style={styles.container}>
      <Text>why!</Text>
      <Button title='back' onPress={() => navigation.navigate('view1')}/>
      <StatusBar style="auto" />
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
