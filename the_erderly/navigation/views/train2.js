import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,SafeAreaView,Alert,TouchableOpacity,ImageBackground} from 'react-native';

import Sound from 'react-native-sound';
import BackSvg from '../../src/svgFile/more.svg';
import Micc from '../../src/svgFile/micc.svg';
import BuySvg from '../../src/svgFile/buy.svg';
import ArrowSvg from '../../src/svgFile/arrow.svg';
import XcoduSvg from '../../src/svgFile/xcodu.svg';
import { set } from 'react-native-reanimated';


let path = require('../../mp3/sugo.mp3');
let music = new Sound(path, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 


export default function Train2({navigation}){

   useEffect(() => {
   setTimeout(() => {
    music.setSpeed(0.85)
   }, 500);
   
   },[])

  const[yes,setYes] = useState(true);
  const[no,setNo] = useState(true);
  const color = () =>{
    if(yes == true){
    setYes(false);
    setNo(true);
    navigation.navigate('Train');
    }
    else if(yes == false){
      setNo(true);
      
    }
  }

  const color2 = () =>{
    if(no == true){
    setNo(false);
    setYes(true);
    navigation.navigate('Test');
    }
    else if(no == false){
      setNo(true);
    }
  }
  return(
    
        <View style={{flex:1,backgroundColor:"white",}}>
          <View style={{flex:0.5,justifyContent:'flex-end', alignContent: "center", left:30}}>
            <Text style={styles.text1}>교육을 완료했어요</Text>
            <Text style={styles.text2}>수고많으셨어요 !</Text>
            <Text></Text>
            <Text style={styles.text2}>아직 사용이 어렵다면,</Text>
            <Text style={[styles.text2,{fontWeight:"bold"}]}>한번더 같이 복습해 볼까요?</Text>

          </View>
          <View style={{flex:1, flexDirection:"row", justifyContent:"center", alignContent: "center"}}>
            <TouchableOpacity style={[styles.box,{backgroundColor: yes ? "#787878" : "#03CF5D"}]} onPress={color}>
              <Text style={styles.text4}>복습하기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.box,{backgroundColor: no ? "#787878" : "#03CF5D"}]} onPress={color2}>
            <Text style={styles.text3}>예매하러</Text>
            <Text style={styles.text3}>가기</Text>

            </TouchableOpacity>

          </View>

          
        </View>
  )    
}

const styles = StyleSheet.create({

  text1: {
    color: "#03CF5D",
    fontWeight:"bold",
    fontSize: 25,
    marginLeft:20,
  },

  text2: {
    color: "#787878",
    
    fontSize: 18,
    marginLeft:20,
    top:40
  },

  text3: {
    color:"white",
    fontWeight:"bold",
    fontSize: 25,
    justifyContent:"center", alignSelf: "center",

  },

  text4: {
    color:"white",
    fontWeight:"bold",
    fontSize: 25,
    justifyContent:"center", alignSelf:"center"

  },

  text5: {
    
    fontWeight:"bold",
    fontSize: 18,
    justifyContent:"center", 
    alignSelf: "center",

  },


  box:{ width:139.57, height: 235.4, borderRadius:15, borderColor: "#787878",justifyContent:"center", alignContent: "center",marginTop: 80,
margin:20},

  box2: {
    width:288.02, height:70.66, backgroundColor:"#787878", borderRadius:30, justifyContent:"center", alignContent: "center", marginLeft: 60
  },
  header: {flex: 1,backgroundColor:"black"},
  bgImage: {width: '100%', height: '100%',tintColor: 'gray',opacity:0.3},

})