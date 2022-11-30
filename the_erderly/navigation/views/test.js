import { useEffect, useState } from 'react';
import {WebView} from 'react-native-webview';
import { StyleSheet, Text, View, Button, Alert, ScrollView, Dimensions, ActivityIndicator } from 'react-native';

export default function Test({navigation}) {
    const GOOGLE = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EB%84%A4%EC%9D%B4%EB%B2%84+%EA%B8%B8%EC%B0%BE%EA%B8%B0";
    return(
    <View style={styles.container}>
      <View style={{width: "100%", height: "100%"}}>
        <WebView
          source={{uri : GOOGLE}}
          onLoad={console.log('hi')}
          />
      </View>
    </View>
    )
}  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "tomato",
    },
  });
  