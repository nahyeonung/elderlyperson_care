import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,SafeAreaView,Alert,TouchableOpacity,ImageBackground,TextInput} from 'react-native';



export default function Digital({navigation}){

  const [color,setColor] = useState(false);
  const [color2,setColor2] = useState(false);
  const [color3,setColor3] = useState(false);
  const [color4,setColor4] = useState(false);
  const [color5,setColor5] = useState(false);
  

  function boxColor () {
    setColor(true);
    setColor2(false);
    setColor3(false);
    setColor4(false);
    setColor5(false);
  }

  function boxColor2 () {
    setColor(false);
    setColor2(true);
    setColor3(false);
    setColor4(false);
    setColor5(false);
  }

  function boxColor3 () {
    setColor(false);
    setColor2(false);
    setColor3(true);
    setColor4(false);
    setColor5(false);
  }

  function boxColor4 () {
    setColor(false);
    setColor2(false);
    setColor3(false);
    setColor4(true);
    setColor5(false);
  }

  function boxColor5 () {
    setColor(false);
    setColor2(false);
    setColor3(false);
    setColor4(false);
    setColor5(true);
  }
  
  const clickBox = () => {
    navigation.navigate("Active");
  }
  return(
    
        
           
          <View style={{flex:1, flexDirection:"row", justifyContent:"center", alignContent: "center"}}>
          <Text style={styles.text1}>000님의 {"\n"}디지털 기기 활용도를{"\n"}알려주세요</Text>
            <Text style={[styles.text2,{fontWeight:"bold"}]}>연령에 따라 추천 교육이 달라져요</Text>

                <Pressable style={[styles.box,{backgroundColor: color ? "#03CF5D": "#787878"}]} onPress={boxColor}><Text style={styles.text4}>앱 다운로드가 가능해요</Text></Pressable>
                <Pressable style={[styles.box,{top:355 ,left:61.99,backgroundColor: color2 ? "#03CF5D": "#787878"}]} onPress={boxColor2}><Text style={styles.text4}>앱을 원하는대로 사용할 수 있어요</Text></Pressable>
                <Pressable style={[styles.box,{top:420.67 ,left:61.99,backgroundColor: color3 ? "#03CF5D": "#787878"}]} onPress={boxColor3}><Text style={styles.text4}>누군가에게 잘 알려줄 정도로 잘 활용해요 </Text></Pressable>
                <Pressable style={[styles.box,{top:486.33 ,left:61.99,backgroundColor: color4 ? "#03CF5D": "#787878"}]} onPress={boxColor4}><Text style={styles.text4}>스마트폰 외의 다른 기기의 활용은 어려워요 </Text></Pressable>
                <Pressable style={[styles.box,{top:552 ,left:61.99,backgroundColor: color5 ? "#03CF5D": "#787878"}]} onPress={boxColor5}><Text style={styles.text4}>잘 다루지 못해요</Text></Pressable>

           
            <Pressable style={{width:288.02,height:55,borderRadius:15,backgroundColor:"#03CF5D",justifyContent:"center",position:"absolute",top:706.31,left:61.99}} onPress={clickBox}>
                <Text style={{fontSize:20,color:'white',alignSelf:"center",fontWeight:"bold"}}>완료 </Text>
             </Pressable>

          </View>

       
       
  )    
}

const styles = StyleSheet.create({

  text1: {
    color: "#4E4E4E",
    fontWeight:"bold",
    fontSize: 25,
    position:"absolute",
    top:128.43,
    left:70.06
  },

  text2: {
    color: "#787878",
    
    fontSize: 17,
    position:"absolute",
    top:240.1,
    left:70.74
  },

  text3: {
    color:"#787878",
    fontWeight:"bold",
    fontSize: 15,
    position:"absolute",
    top:284.84,
    left:70.06,

  },

  text4: {
    color:"white",
    fontWeight:"bold",
    fontSize: 14,
    alignSelf:"center"

  },

  textInput: {
    marginTop:"10%",
    fontWeight:"bold",
    fontSize: 20,
    justifyContent:"center", 
    alignSelf: "center",
    borderRadius:20,
    backgroundColor:"#787878",
    width:288.02,
    height:60.66,
    position:"absolute",
    top:308.84,
    left:61.99,

  },

  


  box:{ width:288.02, height: 50.66, borderRadius:15, borderColor: "#787878",justifyContent:"center",
        alignContent: "center",position:"absolute",top:289.34,left:61.99,backgroundColor:"#787878"},

  box3:{ width:139.57, height: 235.4, borderRadius:15, borderColor: "#787878",justifyContent:"center", alignContent: "center",position:"absolute",top:350.12,left:210.44},

  box2: {
    width:288.02, height:70.66, backgroundColor:"#787878", borderRadius:30, justifyContent:"center", alignContent: "center", marginLeft: 60
  },
  header: {flex: 1,backgroundColor:"black"},
  bgImage: {width: '100%', height: '100%',tintColor: 'gray',opacity:0.3},

})