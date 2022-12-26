import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,SafeAreaView,Alert,TouchableOpacity,ImageBackground} from 'react-native';

import Sound from 'react-native-sound';
import BackSvg from '../../src/svgFile/more.svg';
import Micc from '../../src/svgFile/micc.svg';
import BuySvg from '../../src/svgFile/buy.svg';




export default function Gender({navigation}){

  const [click,setClick] = useState(true);  
  const[yes,setYes] = useState(true);
  const[no,setNo] = useState(true);
  const color = () =>{
    if(yes == true){
    setYes(false);
    setNo(true);
    }
    else if(yes == false){
      setNo(true);
      
    }
  }

  const color2 = () =>{
    if(no == true){
    setNo(false);
    setYes(true);
    }
    else if(no == false){
      setNo(true);
    }
  }
  const clickBox = () => {
    setClick(false);
    navigation.navigate("Age");
  }
  return(
    
        
           
          <View style={{flex:1, flexDirection:"row", justifyContent:"center", alignContent: "center"}}>
          <Text style={styles.text1}>000님의 {"\n"}성별을 알려주세요</Text>
            <Text style={[styles.text2,{fontWeight:"bold"}]}>성별에 따라 추천 교육이 달라져요</Text>
            <TouchableOpacity style={[styles.box,{backgroundColor: yes ? "#787878" : "#03CF5D"}]} onPress={color}>
              <Text style={styles.text4}>남성</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.box3,{backgroundColor: no ? "#787878" : "#03CF5D"}]} onPress={color2}>
            <Text style={styles.text3}>여성</Text>

            </TouchableOpacity>
            
            <Pressable style={{width:288.02,height:55,borderRadius:15,backgroundColor: click ? "#787878":"#03CF5D",justifyContent:"center",position:"absolute",top:706.31,left:61.99}} onPress={clickBox}>
                <Text style={{fontSize:20,color:'white',alignSelf:"center",fontWeight:"bold"}}>다음</Text>
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
    top:140.53,
    left:70.06
  },

  text2: {
    color: "#787878",
    
    fontSize: 17,
    position:"absolute",
    top:220.53,
    left:70.74
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


  box:{ width:139.57, height: 235.4, borderRadius:15, borderColor: "#787878",justifyContent:"center", alignContent: "center",position:"absolute",top:350.12,left:61.99},

  box3:{ width:139.57, height: 235.4, borderRadius:15, borderColor: "#787878",justifyContent:"center", alignContent: "center",position:"absolute",top:350.12,left:210.44},

  box2: {
    width:288.02, height:70.66, backgroundColor:"#787878", borderRadius:30, justifyContent:"center", alignContent: "center", marginLeft: 60
  },
  header: {flex: 1,backgroundColor:"black"},
  bgImage: {width: '100%', height: '100%',tintColor: 'gray',opacity:0.3},

})