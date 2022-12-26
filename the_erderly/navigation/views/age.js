import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,SafeAreaView,Alert,TouchableOpacity,ImageBackground,TextInput} from 'react-native';



export default function Age({navigation}){

  
  
  const clickBox = () => {
    navigation.navigate("Digital");
  }
  return(
    
        
           
          <View style={{flex:1, flexDirection:"row", justifyContent:"center", alignContent: "center"}}>
          <Text style={styles.text1}>000님의 {"\n"}생년월일을 알려주세요</Text>
            <Text style={[styles.text2,{fontWeight:"bold"}]}>연령에 따라 추천 교육이 달라져요</Text>
            <Text style={styles.text3}>생년월일 - 예시: 19701104</Text>
                <TextInput style={styles.textInput} placeholder='               입력해주세요'>

                </TextInput>
            
            <Pressable style={{width:288.02,height:55,borderRadius:15,backgroundColor:"#03CF5D",justifyContent:"center",position:"absolute",top:706.31,left:61.99}} onPress={clickBox}>
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
    fontSize: 25,
    justifyContent:"center", alignSelf:"center"

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


  box:{ width:139.57, height: 235.4, borderRadius:15, borderColor: "#787878",justifyContent:"center", alignContent: "center",position:"absolute",top:350.12,left:61.99},

  box3:{ width:139.57, height: 235.4, borderRadius:15, borderColor: "#787878",justifyContent:"center", alignContent: "center",position:"absolute",top:350.12,left:210.44},

  box2: {
    width:288.02, height:70.66, backgroundColor:"#787878", borderRadius:30, justifyContent:"center", alignContent: "center", marginLeft: 60
  },
  header: {flex: 1,backgroundColor:"black"},
  bgImage: {width: '100%', height: '100%',tintColor: 'gray',opacity:0.3},

})