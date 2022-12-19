import { useEffect, useState } from 'react';
import {WebView} from 'react-native-webview';
import { StyleSheet, Text, View, Button, Alert, ScrollView, Dimensions, ActivityIndicator } from 'react-native';

export default function Test({navigation}) {
    const GOOGLE = "https://search.naver.com/search.naver?ie=UTF-8&sm=whl_hty&query=%EA%B8%B0%EC%B0%A8%ED%91%9C%EC%98%88%EB%A7%A4";
    return(
    <View style={styles.container}>
      <View style={{width: "100%", height: "100%"}}>
        <WebView
          source={{uri : GOOGLE}}
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
  