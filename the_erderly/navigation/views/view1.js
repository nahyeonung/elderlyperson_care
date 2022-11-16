import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Button, Pressable } from 'react-native';
import database from '@react-native-firebase/database';

export default function HomeScreen({navigation}) {
  const [name, Setname] = useState('')
  // database()
  // .ref('/users')
  // .once('value')
  // .then(snapshot => {
  //   Setname(snapshot.val())
  // });

    return(
       <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
           <Pressable
            style={styles.button}
            title="To User Screen"
              onPress={
                  ()=> navigation.navigate('Kakaologin')  
              } >
             <Text style={styles.text}>{name}</Text>
             
            </Pressable>
            
         
       </View>
    )
 }
 
 const styles = StyleSheet.create({

  button: {
    backgroundColor: "#03CF5D",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "white",
    width: 300,
    height: 150,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    alignItems: "center",
  },

  text: {
    alignItems: 'center' ,
    justifyContent: "center",
    fontSize: 45,
    paddingTop: 25,
  }
 })