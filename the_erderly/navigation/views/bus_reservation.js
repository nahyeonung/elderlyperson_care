import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,SafeAreaView,Alert} from 'react-native';

export default function Bus({navigation}){

  const[yes,setYes] = useState(true);
  const[no,setNo] = useState(true);
  const color = () =>{
    if(yes == true){
    setYes(false);
    setNo(true);
    navigation.navigate('maru');
    }
    else if(yes == false){
      setNo(true);
      
    }
  }

  const color2 = () =>{
    if(no == true){
    setNo(false);
    setYes(true);
    Alert.alert("만들러갈래?");
    }
    else if(no == false){
      setNo(true);
    }
  }
  return(
        <View style={{flex:1,backgroundColor:"green"}}>
          <View style={{flex:0.5,justifyContent:'flex-end', alignContent: "center"}}>
            <Text style={styles.text1}>잠깐!!</Text>
            <Text style={styles.text2}>네이버페이 등록이 되어있나요??</Text>

          </View>
          <View style={{flex:1, flexDirection:"row", justifyContent:"center", alignContent: "center"}}>

          </View>

          <View style={{flex:0.2}}>
          
          </View>
          
        </View>
  )    
}

const styles = StyleSheet.create({

  text1: {
    color: "#4E4E4E",
    fontWeight:"bold",
    fontSize: 30,
    marginLeft:20,
  },

  text2: {
    color: "#787878",
    fontWeight:"bold",
    fontSize: 18,
    marginLeft:20,
  },

  text3: {
    
    fontWeight:"bold",
    fontSize: 18,
    justifyContent:"center", alignContent: "center",
    marginLeft: 43

  },

  text4: {
    
    fontWeight:"bold",
    fontSize: 18,
    justifyContent:"center", alignContent: "center",
    marginLeft: 60

  },

  box:{ width:139.57, height: 235.4, borderRadius:15, borderColor: "#787878",justifyContent:"center", alignContent: "center",marginTop: 80,
margin:20},

})