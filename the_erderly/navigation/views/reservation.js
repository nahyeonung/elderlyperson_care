import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable} from 'react-native';
import Bus_green from '../../src/svgFile/Bus_green.svg';
import Bus2_green from '../../src/svgFile/Bus2_green.svg';
import Air_green from '../../src/svgFile/Air_green.svg';
import Trainwhite from '../../src/svgFile/train_white.svg';


export default function Reservation({navigation}){
  
  const[color,setColor] = useState("#F8F8F8");
  const[color2,setColor2] = useState("#F8F8F8");
  const[color3,setColor3] = useState("#F8F8F8");
  const[color4,setColor4] = useState("#F8F8F8");
  const[color5,setColor5] = useState("#F8F8F8");
  const[color6,setColor6] = useState("#F8F8F8");
  const[color7,setColor7] = useState("#F8F8F8");
  const[color8,setColor8] = useState("#F8F8F8");
  const[value,setValue] = useState(1)
  const[svg,setSvg] = useState(true)

  

  function onPressHandle2() {
    if(color2 == "#F8F8F8"){
      setColor2("yellow")
      setColor("#F8F8F8")
      setColor3("#F8F8F8")
      setColor4("#F8F8F8")
      
      setValue(2)

    }
    else if (color2 == "yellow"){
      setColor2("#F8F8F8");
    }
  }

  function onPressHandle() {
    if(color == "#F8F8F8"){
      setColor("yellow");
      setColor2("#F8F8F8")
      setColor3("#F8F8F8")
      setColor4("#F8F8F8")
     
      setValue(1)
    }
    else if (color == "yellow"){
      setColor("#F8F8F8");
    }
  }

  function onPressHandle3() {
    if(color3 == "#F8F8F8"){
      setColor3("yellow");
      setColor2("#F8F8F8")
      setColor("#F8F8F8")
      setColor4("#F8F8F8")
     
      setValue(3)
    }
    else if (color3 == "yellow"){
      setColor3("#F8F8F8");
    }

  }

  function onPressHandle4() {
    if(color4 == "#F8F8F8"){
      setColor4("yellow");
      setColor2("#F8F8F8")
      setColor("#F8F8F8")
      setColor3("#F8F8F8")
      
      setValue(4)
    }
    else if (color4 == "yellow"){
      setColor4("#F8F8F8");
    }
  }

  function onPressStart(){
    if(value == 2 ){
      navigation.navigate('Kakaologin');
    }
  }

return(
    <View style={{flex:1 , backgroundColor: "white"}}>
       
        <View style={{flex:1.3 , backgroundColor: "white", alignItems:'center' , justifyContent: "center"}}>
            <Text style={styles.text1}>예매하기</Text>
            <Text style={styles.text2}>카테고리에 맞는 교육 영상을 추천해 드려요</Text>
        </View>

        <View style={{flex:1.5 , backgroundColor: "white",flexDirection: 'row', alignItems:'center' , justifyContent: "center"}}>
          <Pressable style={[styles.Button,{backgroundColor:color}]} onPress={onPressHandle}>
          <Text style={styles.text3 }>기차표예매</Text>
          </Pressable>
          <Pressable style={[styles.Button,{backgroundColor:color2}]} onPress={onPressHandle2}>
          <Text style={styles.text3}>고속버스 예매</Text>
          </Pressable>
        </View>

        <View style={{flex:1.5 , backgroundColor: "white",flexDirection: 'row',alignItems:'center' , justifyContent: "center"}}>
          <Pressable style={[styles.Button,{backgroundColor:color3}]}onPress={onPressHandle3}>
          <Text style={styles.text3}>비행기 예매</Text>
          </Pressable>
          <Pressable style={[styles.Button,{backgroundColor:color4}]}onPress={onPressHandle4}>
          <Text style={styles.text3} >시외버스 예매</Text>
          </Pressable>
        </View>
        
        <View style={{flex:1 , backgroundColor: "white",alignItems:'center' , justifyContent: "center"}}>
            <Pressable style={styles.startBtn} onPress={onPressStart}>
                <Text style={styles.text3}> 배워보기</Text>
              </Pressable>
        </View>
    </View>
    
);
}




const styles = StyleSheet.create({

  text1: {fontSize:30, fontWeight:"bold", color: 'black', marginRight: 190, marginTop: 50},
  text2: {fontWeight:"bold", marginRight: 40, marginTop:30},

  text3: {fontWeight:"bold", fontSize: 13, marginBottom: 20},
 
  Button: { borderRadius: 15,  borderColor: '#F8F8F8',
           
            width: 139.57 , height: 187.94, margin: 5 , alignItems:'center' ,justifyContent: "flex-end"}, 

 startBtn: { width: 288.02, height:50.66 , borderRadius: 15, backgroundColor: "yellow", borderColor:"yellow", alignItems:'center' , justifyContent: "center" 
 ,marginBottom: 10}          
});