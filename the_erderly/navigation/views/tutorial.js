import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,SafeAreaView,Alert,TouchableOpacity,ImageBackground,TextInput} from 'react-native';
import { setId } from '../redux/action';
import database from '@react-native-firebase/database';
import { useSelector, useDispatch } from 'react-redux';
import Em from '../../src/svgFile/emlogo.svg';
import Save from '../../src/svgFile/safe.svg';




export default function Tutorial({navigation}){
  const [name, setName] = useState('')
  const [button,setButton] = useState("#787878");
  const {id} = useSelector(state => state.userReducer);
  useEffect(() => {
    database()
    .ref('/users/'+id)
    .once('value')
    .then(snapshot => {
    setName(snapshot.val().name)
    });
  },[])
  const clickBox = () => {
    navigation.navigate("Tutorial2");
    setButton("#03CF5D")
  }
  return(
    
        
           
          <View style={{flex:1, flexDirection:"row", justifyContent:"center", alignContent: "center"}}>
            <Em style={{position:"absolute",top:68}}></Em>
          <Text style={styles.text1}>{name}님</Text>
            <Text style={[styles.text2,{fontWeight:"bold"}]}>이음은{"\n"}개인에 대한 계좌 및 개인정보를{"\n"}묻지않아요!</Text>
             <Save style={{position:"absolute",top:411.28}}></Save>
            
            <Pressable style={{width:288.02,height:55,borderRadius:15,backgroundColor:button,justifyContent:"center",position:"absolute",top:706.31,left:61.99}} onPress={clickBox}>
                <Text style={{fontSize:20,color:'white',alignSelf:"center",fontWeight:"bold"}}>다음으로</Text>
             </Pressable>

          </View>

       
       
  )    
}

const styles = StyleSheet.create({

  text1: {
    color: "#03CF5D",
    fontWeight:"bold",
    fontSize: 25,
    position:"absolute",
    top:128.43,
    left:70.4
  },

  text2: {
    color: "#787878",
    
    fontSize: 18,
    position:"absolute",
    top:237.89,
    left:70.34
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