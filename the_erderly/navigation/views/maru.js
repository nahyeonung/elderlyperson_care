import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,SafeAreaView,Alert,TouchableOpacity,ImageBackground} from 'react-native';

import Sound from 'react-native-sound';
import BackSvg from '../../src/svgFile/more.svg';
import Micc from '../../src/svgFile/micc.svg';
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
    navigation.navigate('Train2');
    }
    else if(no == false){
      setNo(true);
    }
  }
  return(
    // <View style={{flex:1}}>
    //   <BackSvg>    
    //   </BackSvg>
    //   <View><Pressable style={{backgroundColor:"white", width:120, height:40, bottom:780,left:"14%"}}>
    //       <Text style={{color:"black"}}>오우쮓</Text>
    //     </Pressable></View>
    //   <Micc style={{bottom:"13%"}}></Micc>
    // </View>
    
//     <View style={[styles.row, styles.header]}>
//   <ImageBackground source={require("../../src/svgFile/back.svg")} style={styles.bgImage}>
//   <View><Pressable style={{backgroundColor:"white", width: 121, height:45.7,borderRadius:15,left:40,top:10}}><Text style={{color:"black",fontSize:20}}>기차표예매</Text></Pressable>
//   <Text >검색창에 기차표 예매를 검색하세요!</Text>
//   </View>
//   </ImageBackground>
// </View>
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
  },
  header: {flex: 1,backgroundColor:"black"},
  bgImage: {width: '100%', height: '100%',tintColor: 'gray',opacity:0.3},

})