import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Button, Pressable, Image, Alert } from 'react-native';
import View2Svg from '../../src/svgFile/Naver_main.svg';
import View2_logoSvg from '../../src/svgFile/revan_logo.svg';
import database from '@react-native-firebase/database';
import { useSelector, useDispatch } from 'react-redux';
import { setId } from '../redux/action';

export default function Nextpage({navigation}) {
  const {id} = useSelector(state => state.userReducer);  // redux스토어에서 아이디값  가져오기..!
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  database()
  .ref('/users/'+id+"/imageUri")
  .once('value')
  .then(snapshot => {
    setImage(snapshot.val())
  });
  const call = () =>{
      database()
    .ref('/users/'+id+"/f_phone")
    .once('value')
    .then(snapshot => {
      if(snapshot.val() == null) navigation.navigate('PhoneLink');
      else {
        Alert.alert('이미 연동된 핸드폰이 있어요!!')
        navigation.navigate('Education');
      }
    });
  }
     return(
     
      <View style={{flex:1}}>
          <Pressable style={{backgroundColor: "#03CF5D", width:50, height:50, marginTop: 10, 
            marginLeft:'80%', borderColor: "#03CF5D",}}
            onPress={() => navigation.navigate('MyPage')}>
            <Text style={{fontWeight:"bold",color:"black",}}>마이{'\n'}페이지</Text>
          </Pressable>
          <View style={{flex: 3,alignItems:'center', justifyContent:'center'}}>
            <View2_logoSvg/>
          </View>
          <View style={{flex: 2,alignItems:'center', justifyContent:'center'}}>
            <Image
              style={styles.image} 
              source={{uri : image}} />
            <Text style={styles.text}>{id}</Text>
          </View>
          <View style={{flex: 0.5, marginLeft:30}}>
             <View2Svg/>
          </View>
     
     
        <View style={{flex:2, alignItems:'center', justifyContent:'center' ,marginBottom:40}}>
            
            <Pressable
             style={styles.button}
             title="To User Screen"
               onPress={
                   () => navigation.navigate('Education')
               }>
                <Text style={styles.text}>시작하기</Text>
             </Pressable>
             <Pressable
             style={styles.button}
             title="To User Screen"
               onPress={
                   () => call()
               }>
                <Text style={styles.text}>자식 핸드폰 연동하기</Text>
             </Pressable>
             
          
        </View>
        </View>
     )
   }
 
 const styles = StyleSheet.create({

  button: {
    backgroundColor: "#03CF5D",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#03CF5D",
    width: 250,
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    alignItems: "center",
  },

  text: {
    alignItems: 'center' ,
    justifyContent: "center",
    fontSize: 20,
    fontWeight:"bold",
    color:"black",
  },
  image:{
    width: 200,
    height: 200,
    resizeMode: "cover",
  }
 })