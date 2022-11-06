import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Alert } from 'react-native';
import {WebView} from 'react-native-webview';

export default function Login( {navigation }) {
  const YOUTUBE = "https://www.youtube.com/watch?v=yiZZeK-y6cI"
  return (
    <View style={styles.container}>
      <View style={{width: "100%", height: "100%"}}>
        <WebView
        source={{uri: YOUTUBE}}
        onLoad={console.log('hi')}
      />
      </View>
      {/* <WebView 
          source={{html}}
          onMessage={(event)=> Alert.alert(event.nativeEvent.data) }
        /> */}
      {/* <Text>why!</Text>
      <Button title='back' onPress={() => navigation.navigate('view1')}/>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const html = `
    <script>
      function send(){
        window.ReactNativeWebView.postMessage('hello!!');
      }
    </script>
    <button onclick="send()">Send</button>
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
