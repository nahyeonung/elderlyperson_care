import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,SafeAreaView,Alert,TouchableOpacity,ImageBackground,TextInput} from 'react-native';
import { setId } from '../redux/action';
import database from '@react-native-firebase/database';
import { useSelector, useDispatch } from 'react-redux';



export default function Link({navigation}){
  const [name, setName] = useState('')
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
    navigation.navigate("Digital");
  }
  return(
    
        <View style={{flex:1}}>
           
            <View style={{flex:1, justifyContent:"center", alignContent: "center"}}>
                <Text style={styles.text1}>{name}님과 이음을 함께 할{"\n"}사람이 있나요?</Text>
                <Text style={[styles.text2,{fontWeight:"bold"}]}>연동을 통해 다양한 소식을 공유할 수 있{"\n"}어요</Text>
            </View>
            <View style={{flex:1.5, flexDirection:"row",justifyContent:"center"}}>
                <Pressable style={{marginLeft:10,marginRight:10,width:"33%",height:"50%",borderRadius:15,backgroundColor:"#E4E4E4",justifyContent:"center"}} onPress={clickBox}>
                    <Text style={{fontSize:20,color:'white',alignSelf:"center",fontWeight:"bold"}}>예</Text>
                </Pressable>
                <Pressable style={{width:"33%",height:"50%",borderRadius:15,backgroundColor:"#E4E4E4",justifyContent:"center"}} onPress={() => navigation.navigate('Find')}>
                    <Text style={{fontSize:20,color:'white',alignSelf:"center",fontWeight:"bold"}}>아니오</Text>
                </Pressable>
            </View>
            
            <Pressable style={{marginLeft:5,width:288.02,height:55,borderRadius:15,backgroundColor:"#03CF5D",justifyContent:"center",position:"absolute",top:706.31,left:61.99}} onPress={clickBox}>
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