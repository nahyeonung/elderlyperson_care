import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable} from 'react-native';
import Bus_green from '../../src/svgFile/Bus_green.svg';
import Bus2_green from '../../src/svgFile/Bus2_green.svg';
import Air_green from '../../src/svgFile/Air_green.svg';
import Trainwhite from '../../src/svgFile/train_white.svg';
import Train_green from '../../src/svgFile/Train_green.svg';
import Bus_white from '../../src/svgFile/Bus_white.svg';
import Bus2_white from '../../src/svgFile/Bus2_white.svg';
import Air_white from '../../src/svgFile/Air_white.svg';


export default function Reservation({navigation}){
  
  const[color,setColor] = useState("#F8F8F8");
  const[color2,setColor2] = useState("#F8F8F8");
  const[color3,setColor3] = useState("#F8F8F8");
  const[color4,setColor4] = useState("#F8F8F8");
  
  const[value,setValue] = useState(1)
  const[width,setWidth] = useState("0")
  const[height,setHeight] = useState("0")
  const[width2,setWidth2] = useState("100")
  const[height2,setHeight2] = useState("100")

  const[width3,setWidth3] = useState("0")
  const[height3,setHeight3] = useState("0")
  const[width4,setWidth4] = useState("100")
  const[height4,setHeight4] = useState("100")

  const[width5,setWidth5] = useState("0")
  const[height5,setHeight5] = useState("0")
  const[width6,setWidth6] = useState("100")
  const[height6,setHeight6] = useState("100")

  const[width7,setWidth7] = useState("0")
  const[height7,setHeight7] = useState("0")
  const[width8,setWidth8] = useState("100")
  const[height8,setHeight8] = useState("100")

  


  function onPressHandle2() {
    if(color2 == "#F8F8F8"){
      setColor2("#03CF5D")
      setColor("#F8F8F8")
      setColor3("#F8F8F8")
      setColor4("#F8F8F8")
      setWidth("100")
      setHeight("100")
      setWidth2("0")
      setHeight2("0")
      setValue(2)
      setWidth5("0")
      setHeight5("0")
      setWidth6("100")
      setHeight6("100")
      setWidth7("0")
      setHeight7("0")
      setWidth8("100")
      setHeight8("100")
      setWidth3("0")
      setHeight3("0")
      setWidth4("100")
      setHeight4("100")

    }
    else if (color2 == "yellow"){
      setColor2("#F8F8F8");
      
      setWidth("0")
      setHeight("0")
      setWidth2("100")
      setHeight2("100")
    }
  }

  function onPressHandle() {
    if(color == "#F8F8F8"){
      setColor("yellow");
      setColor2("#F8F8F8")
      setColor3("#F8F8F8")
      setColor4("#F8F8F8")
      setWidth3("100")
      setHeight3("100")
      setWidth4("0")
      setHeight4("0")
      setWidth("0")
      setHeight("0")
      setWidth2("100")
      setHeight2("100")
      setValue(1)
      setWidth5("0")
      setHeight5("0")
      setWidth6("100")
      setHeight6("100")
      setWidth7("0")
      setHeight7("0")
      setWidth8("100")
      setHeight8("100")
      
    }
    else if (color == "yellow"){
      setColor("#F8F8F8");
      setWidth3("0")
      setHeight3("0")
      setWidth4("100")
      setHeight4("100")
    }
  }

  function onPressHandle3() {
    if(color3 == "#F8F8F8"){
      setColor3("yellow");
      setColor2("#F8F8F8")
      setColor("#F8F8F8")
      setColor4("#F8F8F8")
      setValue(3)
      setWidth5("100")
      setHeight5("100")
      setWidth6("0")
      setHeight6("0")
      setWidth7("0")
      setHeight7("0")
      setWidth8("100")
      setHeight8("100")
      setWidth("0")
      setHeight("0")
      setWidth2("100")
      setHeight2("100")
      setWidth3("0")
      setHeight3("0")
      setWidth4("100")
      setHeight4("100")
    
    }
    else if (color3 == "yellow"){
      setColor3("#F8F8F8");
      setWidth5("0")
      setHeight5("0")
      setWidth6("100")
      setHeight6("100")
    }

  }

  function onPressHandle4() {
    if(color4 == "#F8F8F8"){
      setColor4("yellow");
      setColor2("#F8F8F8")
      setColor("#F8F8F8")
      setColor3("#F8F8F8")
      setWidth7("100")
      setHeight7("100")
      setWidth8("0")
      setHeight8("0")
      setWidth("0")
      setHeight("0")
      setWidth2("100")
      setHeight2("100")
      setWidth5("0")
      setHeight5("0")
      setWidth6("100")
      setHeight6("100")
      setWidth3("0")
      setHeight3("0")
      setWidth4("100")
      setHeight4("100")
     
      
      setValue(4)
    }
    else if (color4 == "yellow"){
      setColor4("#F8F8F8");
      setWidth7("0")
      setHeight7("0")
      setWidth8("100")
      setHeight8("100")
    }
  }

  function onPressStart(){
    if(value == 2 ){
      navigation.navigate('Maru');
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
          <Trainwhite  height = {height3} width ={width3}/>
          <Train_green  height = {height4} width ={width4}/>
          <Text style={styles.text3 }>기차표예매</Text>
          </Pressable>
          <Pressable style={[styles.Button,{backgroundColor:color2}]} onPress={onPressHandle2}>
          <Bus2_green height = {height2} width ={width2}/>
          <Bus2_white height = {height} width ={width}/>
          <Text style={styles.text3}>고속버스 예매</Text>
          </Pressable>
        </View>

        <View style={{flex:1.5 , backgroundColor: "white",flexDirection: 'row',alignItems:'center' , justifyContent: "center"}}>
          <Pressable style={[styles.Button,{backgroundColor:color3}]}onPress={onPressHandle3}>
          <Air_white height = {height5} width ={width5}/>
          <Air_green height = {height6} width ={width6}/>
          <Text style={styles.text3}>비행기 예매</Text>
          </Pressable>
          <Pressable style={[styles.Button,{backgroundColor:color4}]}onPress={onPressHandle4}>
          <Bus_white height = {height7} width ={width7}/>
          <Bus_green height = {height8} width ={width8}/>
          <Text style={styles.text3} >시외버스 예매</Text>
          </Pressable>
        </View>
        
        <View style={{flex:1 ,alignItems:'center' , justifyContent: "center"}}>
              <Pressable style={styles.startBtn} onPress={onPressStart}>
                <Text style={styles.text4}> 배워보기</Text>
              </Pressable>
        </View>
    </View>
    
);
}




const styles = StyleSheet.create({

  text1: {fontSize:30, fontWeight:"bold", color: 'black', marginRight: 190, marginTop: 50},
  text2: {fontWeight:"bold", marginRight: 40, marginTop:30},

  text3: {fontWeight:"bold", fontSize: 13, marginBottom: 20},
  text4: {fontWeight:"bold", fontSize: 13},
 
  Button: { borderRadius: 15,  borderColor: '#F8F8F8',
           
            width: 139.57 , height: 187.94, margin: 5 , alignItems:'center' ,justifyContent: "flex-end"}, 

 startBtn: { width: 288.02, height:50.66 , borderRadius: 15, backgroundColor:"#03CF5D",borderColor:"#03CF5D", alignItems:'center' , justifyContent: "center" 
 ,marginBottom: 10}          
});