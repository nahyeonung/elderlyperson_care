import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable} from 'react-native';

export default function Education({navigation}){



return(
    <View style={{flex:1 , backgroundColor: "white"}}>
       
        <View style={{flex:1.3 , backgroundColor: "white", alignItems:'center' , justifyContent: "center"}}>
            <Text style={styles.text1}>교육 카테고리</Text>
            <Text style={styles.text2}>카테고리에 맞는 교육 영상을 추천해 드려요</Text>
        </View>

        <View style={{flex:1 , backgroundColor: "white",flexDirection: 'row', alignItems:'center' , justifyContent: "center"}}>
          <Pressable style={styles.Button}>
          <Text style={styles.text3}>기본 기능</Text>
          </Pressable>
          <Pressable style={styles.Button}>
          <Text style={styles.text3}>길찾기</Text>
          </Pressable>
        </View>

        <View style={{flex:1 , backgroundColor: "white",flexDirection: 'row',alignItems:'center' , justifyContent: "center"}}>
          <Pressable style={styles.Button}>
          <Text style={styles.text3}>예매</Text>
          </Pressable>
          <Pressable style={styles.Button}>
          <Text style={styles.text3}>네이버페이</Text>
          </Pressable>
        </View>
        <View style={{flex:1 , backgroundColor: "white",flexDirection: 'row',alignItems:'center' , justifyContent: "center"}}>
          <Pressable style={styles.Button}>
          <Text style={styles.text3}>밴드</Text>
          </Pressable>
          <Pressable style={styles.Button}>
          <Text style={styles.text3}>쇼핑</Text>
          </Pressable>
        </View>
        <View style={{flex:1 , backgroundColor: "white",flexDirection: 'row',alignItems:'center' , justifyContent: "center"}}>
          <Pressable style={styles.Button}>
          <Text style={styles.text3}>예약</Text>
          </Pressable>
          <Pressable style={styles.Button}>
          <Text style={styles.text3}>기타</Text>
          </Pressable>
        </View>
        <View style={{flex:1 , backgroundColor: "white",alignItems:'center' , justifyContent: "center"}}>
            <Pressable style={styles.startBtn}>
                <Text style={styles.text3}> 배워보기</Text>
              </Pressable>
        </View>
    </View>
    
);
}

const styles = StyleSheet.create({

  text1: {fontSize:30, fontWeight:"bold", color: 'black', marginRight: 130, marginTop: 50},
  text2: {fontWeight:"bold", marginRight: 40, marginTop:30},

  text3: {fontWeight:"bold"},
 
  Button: { borderRadius: 8,  borderColor: '#F8F8F8',
           backgroundColor: '#F8F8F8'
           , width: 139.57 , height: 88.8, margin: 5 , alignItems:'center' , justifyContent: "center" }, 

 startBtn: { width: 288.02, height:50.66 , borderRadius: 15, backgroundColor: "yellow", borderColor:"yellow", alignItems:'center' , justifyContent: "center" 
 ,marginBottom: 10}          
});