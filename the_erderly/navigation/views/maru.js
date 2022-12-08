import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,SafeAreaView,Alert,TouchableOpacity} from 'react-native';
import Sound from 'react-native-sound';

let path = require('../../mp3/naver_pay.mp3');
let music = new Sound(path, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 


export default function Maru({navigation}){

  useEffect(() => {
    music.play();
   
  },[])

  const[yes,setYes] = useState(true);
  const[no,setNo] = useState(true);
  const color = () =>{
    if(yes == true){
    setYes(false);
    setNo(true);
    navigation.navigate('Bus');
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
        <View style={{flex:1,backgroundColor:"white",}}>
          <View style={{flex:0.5,justifyContent:'flex-end', alignContent: "center",bottom:100, left:30}}>
            <Text style={styles.text1}>잠깐!</Text>
            <Text style={styles.text2}>네이버페이 등록이 되어있나요??</Text>

          </View>
          <View style={{flex:1, flexDirection:"row", justifyContent:"center", alignContent: "center"}}>
            <TouchableOpacity style={[styles.box,{backgroundColor: yes ? "#787878" : "#03CF5D"}]} onPress={color}>
              <Text style={styles.text4}>예</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.box,{backgroundColor: no ? "#787878" : "#03CF5D"}]} onPress={color2}>
            <Text style={styles.text3}>아니오</Text>
            </TouchableOpacity>

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
    top:40
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

  text5: {
    
    fontWeight:"bold",
    fontSize: 18,
    justifyContent:"center", 
    alignContent: "center",
    marginLeft: 117,

  },


  box:{ width:139.57, height: 235.4, borderRadius:15, borderColor: "#787878",justifyContent:"center", alignContent: "center",marginTop: 80,
margin:20},

  box2: {
    width:288.02, height:70.66, backgroundColor:"#787878", borderRadius:30, justifyContent:"center", alignContent: "center", marginLeft: 60
  }

})