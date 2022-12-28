import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Button, Pressable,TouchableOpacity,ScrollView } from 'react-native';
import database from '@react-native-firebase/database';
import View1Svg from '../../src/svgFile/Naver.svg';
import MainLogoSvg from '../../src/svgFile/mainlogo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setId } from '../redux/action';

export default function HomeScreen({navigation}) {
  const {id, friendId} = useSelector(state => state.userReducer);
  const [name, Setname] = useState('')
  // database()
  // .ref('/users/-NH41wzw7H4DflcxblCD')
  // .once('value')
  // .then(snapshot => {
  //   console.log(snapshot.val())
  // });
  database()
  .ref('users/')
  .on('child_added', snapshot => {
    if (id == snapshot.val().id) console.log(snapshot.val().name)
    // console.log('User data: ', snapshot.val().name);
  });
  const move = () => {
    if(id) navigation.navigate('View2')
    else navigation.navigate('Kakaologin')
   }

    return(
       <View style={{flex:1, alignItems:'center',backgroundColor:"white"}}>

          <View style={{flex:3 ,alignItems:'flex-end', justifyContent:'center', right:67, top:70}}>
          <MainLogoSvg style={{alignItems:'center', justifyContent:'center',margin:70}}/>
          <Text style={styles.text3}>나에서 우리로,</Text>
          <Text style={styles.text5}>이음</Text>
          <Text style={styles.text4}>네이버 이음과 함께 모두를 이어보아요!</Text>


          </View>
           {/* <Text style={styles.text2}>{friendId}</Text> */}

           
           
           <View style={{flex:0.7,alignItems:'center', justifyContent:'center'}}>
           <TouchableOpacity
            style={styles.button}
            title="To User Screen"
              onPress={
                  ()=> move()
                  // () => navigation.navigate('Find')
              } >
             <Text style={styles.text}>이용 시작</Text>  
             
            </TouchableOpacity>
            
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
    width: 288,
    height: 50,
    marginTop: 125,
    alignItems: "center",
    justifyContent: "center",
    bottom:130
  },

  text: {
    alignItems: 'center' ,
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  text2: {
    alignItems: 'center' ,
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    paddingTop: -3,
  },
  text3:{
    fontSize:35,
    fontWeight:"bold",
    color:"#4E4E4E",
  },
  text5:{
    fontSize:35,
    fontWeight:"bold",
    color:"#4E4E4E",
    right:160  },
  text4:{
    fontSize:15,
    fontWeight:"bold",
    color:"#C4C4C4",
    left:30,
    top:20


  }
 })