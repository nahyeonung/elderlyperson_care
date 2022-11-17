import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Button, Pressable } from 'react-native';
import database from '@react-native-firebase/database';
import View1Svg from './Naver.svg';
export default function HomeScreen({navigation}) {
  const [name, Setname] = useState('')
  // database()
  // .ref('/users/-NH41wzw7H4DflcxblCD')
  // .once('value')
  // .then(snapshot => {
  //   console.log(snapshot.val())
  // });
  database()
  .ref('/users')
  .on('value', snapshot => {
    console.log('User data: ', snapshot.val());
  });

    return(
       <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
           <View1Svg/>
           <Pressable
            style={styles.button}
            title="To User Screen"
              onPress={
                  ()=> navigation.navigate('Kakaologin')  
              } >
             <Text style={styles.text}>이용 시작</Text>  
             
            </Pressable>
            
         
       </View>
    )
 }
 
 const styles = StyleSheet.create({

  button: {
    backgroundColor: "#03CF5D",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#03CF5D",
    width: 200,
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 125,
    alignItems: "center",
  },

  text: {
    alignItems: 'center' ,
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    paddingTop: -3,
  }
 })