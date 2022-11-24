import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,Container} from 'react-native';
import Mic from '../../src/svgFile/mic_Logo';

export default function Main({navigation}){

    return(
        <View style={{flex:1, backgroundColor: "white"}}>
          
        <View style={{flex: 0.2,alignItems:'center', justifyContent:'center', backgroundColor: "yellow"}}>
         <Text>네비게이션 탭 자리</Text>
        </View>

        <View style={{flex: 0.4,alignItems:'center', justifyContent:'center'}}>
             <Text style={styles.text1}>000님, 안녕하세요!</Text>
        </View>
       
        <View style={{flex: 1,flexDirection: 'row', backgroundColor:"#F8F8F8", width:343, height: 140, marginLeft: 35,borderTopRightRadius:15, borderTopLeftRadius:15, justifyContent:"center", alignContent:"center"}}>
           
           
            <Pressable style={styles.Button_img}>
                <Text>img쓸곳.</Text>
            </Pressable>
            <Pressable style={styles.Button_div}>
                <Text style={styles.text5}>사랑하는 딸</Text>
                <Text></Text>
                <Text>작은 텍스트</Text>
            </Pressable>
        </View>
        <View style={{flex: 0.3,flexDirection: 'row', justifyContent:'center'}}>
         <Pressable style={styles.Button_letter}>
                <Text style={styles.text5}>편지함가기</Text>
            </Pressable>
        </View>


        <View style={{flex: 1.2,flexDirection: 'row', alignItems:'baseline', justifyContent:'center', marginTop:30}}>
            <Pressable style={styles.Button} onPress={
                   () => navigation.navigate('Education')
               }>
                <Text style={styles.text4}>교육 컨텐츠</Text>
            </Pressable>
            <Pressable style={styles.Button}>
                <Text style={styles.text4}>아구찜</Text>
            </Pressable>
        </View>

        <View style={{flex: 0.5, alignItems:'center', justifyContent:'center', backgroundColor:"#F8F8F8", borderRadius: 15}}>
            
            <Pressable style={styles.Button_ce}>
                <Mic></Mic>
            </Pressable>
              
           
        </View>


        </View>
       
    )
}


const styles = StyleSheet.create({

    text1: {fontSize:30, fontWeight:"bold", color: 'black', marginRight: 100, marginTop: 0},
    text2: {fontWeight:"bold", marginRight: 40, marginTop:30},
  
    text3: {fontWeight:"bold", fontSize: 13, marginBottom: 20},
    text4: {fontWeight:"bold", fontSize: 25},
    text5: {fontWeight: "bold", fontSize:20},
    Button: { borderRadius: 15,  borderColor: '#F8F8F8', backgroundColor:"#F8F8F8",
             
              width: 160.79 , height: 180.79, margin: 5 , alignItems:'center' ,justifyContent: "center"},
              
              
    Button_ce: { borderRadius: 100,  borderColor: '', backgroundColor:"white",
             
              width: 138 , height: 139, margin: 5 , alignItems:'center' ,justifyContent: "center", marginBottom: 100},


    Button_img: { borderRadius: 100,  borderColor: '', backgroundColor:"#D9D9D9",
             
              width: 110 , height: 110, margin: 5 , alignItems:'center' ,justifyContent: "center" ,margin:50},
                                   
     Button_div: { borderRadius: 15,  borderColor: '', backgroundColor:"#D9D9D9", 
             
              width: 140, height: 150, margin: 5 , alignItems:'center' ,justifyContent: "center",marginRight:50},                    
    
    
     Button_letter: { borderBottomLeftRadius:15, borderBottomRightRadius:15, borderColor: '', backgroundColor:"#03CF5D", 
             
              width: 343, height: 64.1, alignItems:'center' ,justifyContent: "center"},               


    div:{
        width:412  , height:168.18 , borderRadius:20 , backgroundColor: "#F8F8F8" 
    }
  
  });