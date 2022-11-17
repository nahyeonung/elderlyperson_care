import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Pressable } from 'react-native';
import View2Svg from './Naver_main.svg';
import View2_logoSvg from './revan_logo.svg';

export default function Nextpage({navigation}) {
     return(
     
      <View style={{flex:1}}>
          
          <View style={{flex: 5,alignItems:'center', justifyContent:'center'}}>
            <View2_logoSvg/>
          </View>
          <View style={{flex: 0.5, marginLeft:30}}>
             <View2Svg/>
          </View>
     
     
        <View style={{flex:2, alignItems:'center', justifyContent:'center' ,marginBottom:40}}>
            
            <Pressable
             style={styles.button}
             title="To User Screen"
               onPress={
                   ()=> navigation.navigate('Kakaologin') 
                  
               }>
                <Text style={styles.text}>다음</Text>
             </Pressable>
             
          
        </View>
        </View>
     )
   }
 
 const styles = StyleSheet.create({

  button: {
    backgroundColor: "#03CF5D",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#03CF5D",
    width: 250,
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    alignItems: "center",
  },

  text: {
    alignItems: 'center' ,
    justifyContent: "center",
    fontSize: 20,
    fontWeight:"bold",
    color:"white",
  },
 })