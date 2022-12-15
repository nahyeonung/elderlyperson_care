import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,SafeAreaView,Alert,TouchableOpacity,ImageBackground,Image} from 'react-native';
import Sound from 'react-native-sound';
import BackSvg from '../../src/svgFile/more.svg';
import Micc from '../../src/svgFile/micc.svg';
import Start from '../../src/svgFile/start.svg';
import Train from './train';
import TrainIntro from './intro';

let path = require('../../mp3/naver_pay.mp3');
let music = new Sound(path, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 


export default function Maru({navigation}){
  
  

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
        <View>
          <Image
          source={require('../../src/svgFile/start.png')}
         />
        <Pressable style={{width:288.02,height:55,borderRadius:15,backgroundColor:"#03CF5D",justifyContent:"center",position:"absolute",top:706.31,left:61.99}}>
          <Text style={{fontSize:20,color:'white',alignSelf:"center",fontWeight:"bold"}} onPress={() => navigation.navigate(TrainIntro)}>예매 시작하기</Text>
        </Pressable>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

})