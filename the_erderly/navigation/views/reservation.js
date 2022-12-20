import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,TouchableOpacity} from 'react-native';
import Bus_green from '../../src/svgFile/Bus_green.svg';
import Bus2_green from '../../src/svgFile/Bus2_green.svg';
import Air_green from '../../src/svgFile/Air_green.svg';
import Trainwhite from '../../src/svgFile/train_white.svg';
import Train_green from '../../src/svgFile/Train_green.svg';
import Bus_white from '../../src/svgFile/Bus_white.svg';
import Bus2_white from '../../src/svgFile/Bus2_white.svg';
import Air_white from '../../src/svgFile/Air_white.svg';
import Home from '../../src/svgFile/homelogo.svg';
import Ar from '../../src/svgFile/ar.svg';
import Ki_g from '../../src/svgFile/ki_g.svg';
import Si_g from '../../src/svgFile/si_g.svg';
import Go_g from '../../src/svgFile/gobus_g.svg';
import Air_g from '../../src/svgFile/air_g.svg';





import Sound from 'react-native-sound';

let path = require('../../mp3/reservation_intro.mp3');
let path2 = require('../../mp3/baewu2.mp3');
let music = new Sound(path, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 
let music2 = new Sound(path2, Sound.MAIN_BUNDLE, (error) => {
  if (error) { console.log('play failed') }
}) 

export default function Reservation({navigation}){
  
  
  
  const[color,setColor] = useState("#F8F8F8");
  const[color2,setColor2] = useState("#F8F8F8");
  const[color3,setColor3] = useState("#F8F8F8");
  const[color4,setColor4] = useState("#F8F8F8");
  
  const[value,setValue] = useState(1)
  

  const[train,setTrain] =useState(true);
  const[gobus,setGobus] =useState(true);
  const[air,setAir] =useState(true);
  const[sibus,setSibus] =useState(true);

  




  function onPressHandle() {
      setSibus(true)
      setGobus(true);
      setAir(true);
      setTrain(!train);
      setValue(1);
      if(color == "#F8F8F8")
      setColor("#03CF5D")
      else if(color == "#03CF5D"){
        setColor("#F8F8F8")
      }
      setColor2("#F8F8F8")
      setColor3("#F8F8F8")
      setColor4("#F8F8F8")
    
    }
    
    function onPressHandle2() {
      setSibus(true)
      setGobus(!gobus)
      setAir(true)
      setTrain(true)
      if(color2 == "#F8F8F8"){
        setColor2("#03CF5D")
        setColor("#F8F8F8")
        setColor3("#F8F8F8")
        setColor4("#F8F8F8")
        setValue(2)
      
  
      }
      else if (color2 == "#03CF5D"){
        setColor2("#F8F8F8");
        
      }
    }
  

  function onPressHandle3() {
    setSibus(true)
    setAir(!air)
    setGobus(true)
    setTrain(true)
    if(color3 == "#F8F8F8"){
      setColor3("#03CF5D");
      setColor2("#F8F8F8")
      setColor("#F8F8F8")
      setColor4("#F8F8F8")
      setValue(3)
    
    
    }
    else if (color3 == "#03CF5D"){
      setColor3("#F8F8F8");
    
    }

  }

  function onPressHandle4() {
    setSibus(!sibus)
    setGobus(true)
    setTrain(true)
    setAir(true)
    if(color4 == "#F8F8F8"){
      setColor4("#03CF5D");
      setColor2("#F8F8F8")
      setColor("#F8F8F8")
      setColor3("#F8F8F8")
    
     
      
      setValue(4)
    }
    else if (color4 == "#03CF5D"){
      setColor4("#F8F8F8");
    
    }
  }

  function onPressStart(){
    if(value == 1 ){
      navigation.navigate('Maru');
    }
  }

return(
    <View style={{flex:1 , backgroundColor: "white"}}>
      <Home style={{position:"absolute",top:61.32,left:348}} onPress={()=> navigation.navigate("HomePage")}></Home> 
      <Ar style={{position:"absolute",top:59.82,left:19.63,}} onPress={()=> navigation.navigate("HomePage")}></Ar> 

       
            <Text style={styles.text1}>예매하기</Text>
            <Text style={styles.text2}>카테고리에 맞는 교육영상을 추천해드려요</Text>
        

          <Pressable style={[styles.Button,{backgroundColor:color,position:"absolute",top:254.41,left:61.99,}]} onPress={onPressHandle}>
          { train ?<Ki_g style={{alignSelf:"center"}}/> :
          <Trainwhite style={{alignSelf:"center"}}></Trainwhite>} 
          { train ?<Text style={styles.text3 }>기차표예매</Text>:<Text style={[styles.text3,{color:"white"}] }>기차표예매</Text>}
          </Pressable>
          <Pressable style={[styles.Button,{backgroundColor:color2, position:"absolute",top:254.41,left:210.44}]} onPress={onPressHandle2}>

          {gobus ?<Bus2_green  style={{alignSelf:"center"}}/> :
          <Bus2_white  style={{alignSelf:"center"}}/>}
          <Text style={styles.text3}>고속버스 예매</Text>
          </Pressable>

          <Pressable style={[styles.Button,{backgroundColor:color3,position:"absolute",top:453.5,left:61.99}]}onPress={onPressHandle3}>
            {air ?<Air_green style={{alignSelf:"center"}}/> :
            <Air_white style={{alignSelf:"center"}}/>}
          <Text style={[styles.text3,{top:23}]}>비행기 예매</Text>
          </Pressable>
          <Pressable style={[styles.Button,{backgroundColor:color4,position:"absolute",top:453.5,left:210.44}]}onPress={onPressHandle4}>
            {sibus ?<Bus_green style={{alignSelf:"center"}}/> :
            <Bus_white style={{alignSelf:"center"}}/>}
          <Text style={styles.text3} >시외버스 예매</Text>
          </Pressable>
        
              <TouchableOpacity style={styles.startBtn} onPress={onPressStart}>
                <Text style={styles.text4}> 배워보기</Text>
              </TouchableOpacity>
    </View>
    
);
}




const styles = StyleSheet.create({

  text1: {fontSize:25, fontWeight:"bold", color: '#4E4E4E', position:"absolute",top:128.43,left:70.06},
  text2: {fontWeight:"bold",color:"#C4C4C4",position:"absolute",top:191.5,left:70.06,fontSize:16},

  text3: {fontWeight:"bold", fontSize: 17,top:30,color:"#787878",alignSelf:"center"},
  text4: {fontWeight:"bold", fontSize: 20, alignSelf:"center",color:"white"},
 
  Button: { borderRadius: 15,  borderColor: '#F8F8F8',
           
            width: 139.57 , height: 187.94,alignItems:'center' ,justifyContent: "center"}, 

 startBtn: { width: 288.02, height:50.66 , borderRadius: 15, backgroundColor:"#03CF5D",borderColor:"#03CF5D", alignItems:'center' , justifyContent: "center",position:"absolute",top:705.81,left:61.99 
 ,}          
});