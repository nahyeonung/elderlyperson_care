import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable} from 'react-native';


export default function Education({navigation}){
  
  const[color,setColor] = useState("#F8F8F8");
  const[color2,setColor2] = useState("#F8F8F8");
  const[color3,setColor3] = useState("#F8F8F8");
  const[color4,setColor4] = useState("#F8F8F8");
  const[color5,setColor5] = useState("#F8F8F8");
  const[color6,setColor6] = useState("#F8F8F8");
  const[color7,setColor7] = useState("#F8F8F8");
  const[color8,setColor8] = useState("#F8F8F8");
  const[value,setValue] = useState(1)
  

  function onPressHandle2() {
    if(color2 == "#F8F8F8"){
      setColor2("yellow")
      setColor("#F8F8F8")
      setColor3("#F8F8F8")
      setColor4("#F8F8F8")
      setColor5("#F8F8F8")
      setColor6("#F8F8F8")
      setColor7("#F8F8F8")
      setColor8("#F8F8F8")
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
      setColor5("#F8F8F8")
      setColor6("#F8F8F8")
      setColor7("#F8F8F8")
      setColor8("#F8F8F8")
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
      setColor5("#F8F8F8")
      setColor6("#F8F8F8")
      setColor7("#F8F8F8")
      setColor8("#F8F8F8")
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
      setColor5("#F8F8F8")
      setColor6("#F8F8F8")
      setColor7("#F8F8F8")
      setColor8("#F8F8F8")
      setValue(4)
    }
    else if (color4 == "yellow"){
      setColor4("#F8F8F8");
    }
  }

  function onPressHandle5() {
    if(color5 == "#F8F8F8"){
      setColor5("yellow");
      setColor2("#F8F8F8")
      setColor("#F8F8F8")
      setColor3("#F8F8F8")
      setColor4("#F8F8F8")
      setColor6("#F8F8F8")
      setColor7("#F8F8F8")
      setColor8("#F8F8F8")
      setValue(5)
    }
    else if (color5 == "yellow"){
      setColor5("#F8F8F8");
    }
  }

  function onPressHandle6() {
    if(color6 == "#F8F8F8"){
      setColor6("yellow");
      setColor2("#F8F8F8")
      setColor("#F8F8F8")
      setColor3("#F8F8F8")
      setColor4("#F8F8F8")
      setColor5("#F8F8F8")
      setColor7("#F8F8F8")
      setColor8("#F8F8F8")
      setValue(6)
    }
    else if (color6 == "yellow"){
      setColor6("#F8F8F8");
    }
  }

  function onPressHandle7() {
    if(color7 == "#F8F8F8"){
      setColor7("yellow");
      setColor2("#F8F8F8")
      setColor("#F8F8F8")
      setColor3("#F8F8F8")
      setColor4("#F8F8F8")
      setColor6("#F8F8F8")
      setColor5("#F8F8F8")
      setColor8("#F8F8F8")
      setValue(7)
    }
    else if (color7 == "yellow"){
      setColor7("#F8F8F8");
    }
  }

  function onPressHandle8() {
    if(color8 == "#F8F8F8"){
      setColor8("yellow");
      setColor2("#F8F8F8")
      setColor("#F8F8F8")
      setColor3("#F8F8F8")
      setColor4("#F8F8F8")
      setColor6("#F8F8F8")
      setColor7("#F8F8F8")
      setColor5("#F8F8F8")
      setValue(8)
    }
    else if (color8 == "yellow"){
      setColor8("#F8F8F8");
    }
  }

  function onPressStart(){
    if(value == 3 ){
      navigation.navigate('Reservation');
    }
      else if(value == 2){
        navigation.navigate('Find');
      }
 
  }

return(
    <View style={{flex:1 , backgroundColor: "white"}}>
       
        <View style={{flex:1.3 , backgroundColor: "white", alignItems:'center' , justifyContent: "center"}}>
            <Text style={styles.text1}>교육 카테고리</Text>
            <Text style={styles.text2}>카테고리에 맞는 교육 영상을 추천해 드려요</Text>
        </View>

        <View style={{flex:1 , backgroundColor: "white",flexDirection: 'row', alignItems:'center' , justifyContent: "center"}}>
          <Pressable style={[styles.Button,{backgroundColor:color}]} onPress={onPressHandle}>
          <Text style={styles.text3 }>예약기능</Text>
          </Pressable>
          <Pressable style={[styles.Button,{backgroundColor:color2}]} onPress={onPressHandle2}>
          <Text style={styles.text3}>길찾기</Text>
          </Pressable>
        </View>

        <View style={{flex:1 , backgroundColor: "white",flexDirection: 'row',alignItems:'center' , justifyContent: "center"}}>
          <Pressable style={[styles.Button,{backgroundColor:color3}]}onPress={onPressHandle3}>
          <Text style={styles.text3}>예매</Text>
          </Pressable>
          <Pressable style={[styles.Button,{backgroundColor:color4}]}onPress={onPressHandle4}>
          <Text style={styles.text3} >네이버페이</Text>
          </Pressable>
        </View>
        <View style={{flex:1 , backgroundColor: "white",flexDirection: 'row',alignItems:'center' , justifyContent: "center"}}>
          <Pressable style={[styles.Button,{backgroundColor:color5}]}onPress={onPressHandle5}>
          <Text style={styles.text3}>밴드</Text>
          </Pressable>
          <Pressable style={[styles.Button,{backgroundColor:color6}]}onPress={onPressHandle6}>
          <Text style={styles.text3}>쇼핑</Text>
          </Pressable>
        </View>
        <View style={{flex:1 , backgroundColor: "white",flexDirection: 'row',alignItems:'center' , justifyContent: "center"}}>
          <Pressable style={[styles.Button,{backgroundColor:color7}]}onPress={onPressHandle7}>
          <Text style={styles.text3}>예약</Text>
          </Pressable>
          <Pressable style={[styles.Button,{backgroundColor:color8}]}onPress={onPressHandle8}>
          <Text style={styles.text3}>기타</Text>
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

  text1: {fontSize:30, fontWeight:"bold", color: 'black', marginRight: 130, marginTop: 50},
  text2: {fontWeight:"bold", marginRight: 40, marginTop:30},

  text3: {fontWeight:"bold", fontSize: 25},
 
  Button: { borderRadius: 8,  borderColor: '#F8F8F8',
           
            width: 139.57 , height: 88.8, margin: 5 , alignItems:'center' , justifyContent: "center" }, 

 startBtn: { width: 288.02, height:50.66 , borderRadius: 15, backgroundColor: "yellow", borderColor:"yellow", alignItems:'center' , justifyContent: "center" 
 ,marginBottom: 10}          
});