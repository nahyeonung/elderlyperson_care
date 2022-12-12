import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,SafeAreaView,Alert,TouchableOpacity,ImageBackground} from 'react-native';


import Micc from '../../src/svgFile/micc.svg';
// let path = require('../../mp3/naver_pay.mp3');
// let music = new Sound(path, Sound.MAIN_BUNDLE, (error) => {
//     if (error) { console.log('play failed') }
// }) 


export default function Em({navigation}){

  // useEffect(() => {
  //   music.play();
   
  // },[])

  const[yes,setYes] = useState(true);
  const[no,setNo] = useState(true);
  const color = () =>{
    if(yes == true){
    setYes(false);
    setNo(true);
    navigation.navigate('HomePage');
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

    <View style={{flex:1, alignItems:'center',backgroundColor:"white"}}>

    <View style={{flex:3 ,alignItems:'flex-end', justifyContent:'center', right:45,top:130}}>
    <Text style={styles.text3}>000님,</Text>
    <Text style={styles.text5}>이음과 함께해요</Text>
    <Text style={styles.text4}>네이버 이음과 함께 모두를 이어보아요!</Text>


    </View>

     
     
     <View style={{flex:0.7,alignItems:'center', justifyContent:'center'}}>
     <TouchableOpacity
      style={styles.button}
      title="To User Screen"
        onPress={
            // ()=> move()
            () => navigation.navigate('HomePage')
        } >
       <Text style={styles.text}>시작 하기 </Text>  
       
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

  text: {
    alignSelf: 'center' ,
    justifyContent: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },

  text2: {
    color: "#787878",
    fontWeight:"bold",
    fontSize: 18,
    marginLeft:20,
    top:40
  },

  text3:{
    fontSize:35,
    fontWeight:"bold",
    color:"#4E4E4E",
    right:"28.5%"
  },
  text5:{
    fontSize:35,
    fontWeight:"bold",
    color:"#4E4E4E",
    left:20  },
  text4:{
    fontSize:15,
    fontWeight:"bold",
    color:"#C4C4C4",
    left:30,
    top:20


  },

  button: {
    backgroundColor: "#03CF5D",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#03CF5D",
    width: 288,
    height: 50.6,
    marginTop: 125,
    alignItems: "center",
    justifyContent: "center",
    bottom:130
  },



  box:{ width:139.57, height: 235.4, borderRadius:15, borderColor: "#787878",justifyContent:"center", alignContent: "center",marginTop: 80,
margin:20},

  box2: {
    width:288.02, height:70.66, backgroundColor:"#787878", borderRadius:30, justifyContent:"center", alignContent: "center", marginLeft: 60
  },
  header: {flex: 1,backgroundColor:"black"},
  bgImage: {width: '100%', height: '100%',tintColor: 'gray',opacity:0.3},

})