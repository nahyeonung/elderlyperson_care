import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import Sound from 'react-native-sound';
import Home from '../../src/svgFile/homelogo.svg';
import Ar from '../../src/svgFile/ar.svg';
let path = require('../../mp3/education_intro.mp3');
let path2 = require('../../mp3/baewu.mp3');
let music = new Sound(path, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 
let music2 = new Sound(path2, Sound.MAIN_BUNDLE, (error) => {
  if (error) { console.log('play failed') }
}) 


export default function Active({navigation}){
  
 
  const[color,setColor] = useState("#F8F8F8");
  const[color2,setColor2] = useState("#F8F8F8");
  const[color3,setColor3] = useState("#F8F8F8");
  const[color4,setColor4] = useState("#F8F8F8");
  const[color5,setColor5] = useState("#F8F8F8");
  const[color6,setColor6] = useState("#F8F8F8");
  const[color7,setColor7] = useState("#F8F8F8");
  const[color8,setColor8] = useState("#F8F8F8");
  const[value,setValue] = useState(1)


  const[text1,setText1]= useState("#787878")
  const[text2,setText2]= useState("#787878")
  const[text3,setText3]= useState("#787878")
  const[text4,setText4]= useState("#787878")
  const[text5,setText5]= useState("#787878")
  const[text6,setText6]= useState("#787878")
  const[text7,setText7]= useState("#787878")
  const[text8,setText8]= useState("#787878")





  function onPressHandle2() {
    if(color2 == "#F8F8F8"){
      setColor2("#03CF5D")
      setValue(2)
      setText2("white")
    }
    else if (color2 == "#03CF5D"){
      setColor2("#F8F8F8");
      setText2("#787878")

    }
  }

  function onPressHandle() {
    if(color == "#F8F8F8"){
      setColor("#03CF5D");
      setValue(1)
      setText1("white")
    }
    else if (color == "#03CF5D"){
      setColor("#F8F8F8");
      setText1("#787878");

    }
  }

  function onPressHandle3() {
    if(color3 == "#F8F8F8"){
      setColor3("#03CF5D");
      setValue(3)
      setText3("white")
    }
    else if (color3 == "#03CF5D"){
      setColor3("#F8F8F8");
      setText3("#787878")

    }
  }

  function onPressHandle4() {
    if(color4 == "#F8F8F8"){
      setColor4("#03CF5D");
      setValue(4)
      setText4("white")
    }
    else if (color4 == "#03CF5D"){
      setColor4("#F8F8F8");
      setText4("#787878")

    }
  }

  function onPressHandle5() {
    if(color5 == "#F8F8F8"){
      setColor5("#03CF5D");
      setValue(5)
      setText5("white")
     
    }
    else if (color5 == "#03CF5D"){
      setColor5("#F8F8F8");
      setText5("#787878")

    }
  }

  function onPressHandle6() {
    if(color6 == "#F8F8F8"){
      setColor6("#03CF5D");
      setValue(6)
      setText6("white")
    }
    else if (color6 == "#03CF5D"){
      setColor6("#F8F8F8");
      setText6("#787878")

    }
  }

  function onPressHandle7() {
    if(color7 == "#F8F8F8"){
      setColor7("#03CF5D");
      setValue(7)
      setText7("white")
    }
    else if (color7 == "#03CF5D"){
      setColor7("#F8F8F8");
      setText7("#787878")

    }
  }

  function onPressHandle8() {
    if(color8 == "#F8F8F8"){
      setColor8("#03CF5D");
      setValue(8)
      setText8("white")
    }
    else if (color8 == "#03CF5D"){
      setColor8("#F8F8F8");
      setText8("#787878")

    }
  }

  function onPressStart(){
    // if(value == 3 ){
    //   navigation.navigate('Reservation');
    // }
    //   else if(value == 2){
    //   }
      
    navigation.navigate('Link');
  }

return(
    <View style={{flex:1 , backgroundColor: "white"}}>
            <Home style={{position:"absolute",top:61.32,left:348}} onPress={()=> navigation.navigate("HomePage")}></Home> 
             <Ar style={{position:"absolute",top:59.82,left:19.63,}} onPress={()=> navigation.navigate("HomePage")}></Ar> 
            <Text style={styles.text1}>이음과 함께 배우고 싶은 {"\n"}활동을 모두 골라주세요!</Text>
            <Text style={styles.text2}>활동에 맞는 교육을 추천해드려요!</Text>

          <TouchableOpacity style={[styles.Button,{backgroundColor:color,top:254.41,left:61.99}]} onPress={onPressHandle}>
          <Text style={[styles.text3,{color:text1}] }>음악듣기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.Button,{backgroundColor:color2,top:254.41,left:210.44}]} onPress={onPressHandle2}>
          <Text style={[styles.text3,{color:text2}]}>영화예매</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.Button,{backgroundColor:color3,top:351.43,left:61.99}]}onPress={onPressHandle3}>
          <Text style={[styles.text3,{color:text3}]}>검색하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.Button,{backgroundColor:color4,top:351.43,left:210.44}]}onPress={onPressHandle4}>
          <Text style={[styles.text3,{color:text4}]} >버스노선검색</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.Button,{backgroundColor:color5,top:448.46,left:61.99}]}onPress={onPressHandle5}>
          <Text style={[styles.text3,{color:text5}]}>  인터넷 {"\n"}쇼핑하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.Button,{backgroundColor:color6,top:448.46,left:210.44}]}onPress={onPressHandle6}>
          <Text style={[styles.text3,{color:text6}]}>카메라 활용</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.Button,{backgroundColor:color7,top:545.48,left:61.99}]}onPress={onPressHandle7}>
          <Text style={[styles.text3,{color:text7}]}>사진공유</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.Button,{backgroundColor:color8,top:545.48,left:210.44}]}onPress={onPressHandle8}>
          <Text style={[styles.text3,{color:text8}]}>음식주문</Text>
          </TouchableOpacity>
            <TouchableOpacity style={styles.startBtn} onPress={onPressStart}>
                <Text style={styles.text4}> 다음</Text>
              </TouchableOpacity>
    </View>
    
);
}




const styles = StyleSheet.create({

  text1: {fontSize:25, fontWeight:"bold", color: '#4E4E4E',position:"absolute",top:128.43,left:70.06 },
  text2: {fontWeight:"bold",color:"#C4C4C4", fontSize:15,top:210.1,left:70.06},

  text3: {fontWeight:"bold", fontSize: 20,color:"#787878"},
  text4: {fontWeight:"bold", fontSize: 25,color:"white"},
 
  Button: { borderRadius: 15,  borderColor: '#F8F8F8',
           
            width: 139.57 , height: 88.8, alignItems:'center' , justifyContent: "center",position:"absolute" }, 

 startBtn: { width: 288.02, height:55 , borderRadius: 15, backgroundColor: "#03CF5D", borderColor:"#03CF5D", alignItems:'center' , justifyContent: "center"
                
             ,position:"absolute",top:705.81,left:61.99 }          
});