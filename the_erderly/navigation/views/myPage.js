import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Pressable, Image, Alert } from 'react-native';
import database from '@react-native-firebase/database';
import { useSelector, useDispatch } from 'react-redux';
import { setId, setFriendId, setSign } from '../redux/action';
import { logout } from '@react-native-seoul/kakao-login';
export default function MyPage({navigation}){
    const {id} = useSelector(state => state.userReducer);
    const {sign} = useSelector(state => state.userReducer);
    const [image,setImage] = useState('')
    const [name, setName] = useState('')
    const [msg, setMsg] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    database()
    .ref('/users/'+id)
    .once('value')
    .then(snapshot => {
      setImage(snapshot.val().imageUri)
      setName(snapshot.val().name)
    });
    // useEffect(() => {
    //     if(msg != ''){
    //         dispatch(setId(''));
    //         dispatch(setFriendId(''));
    //         navigation.navigate('View1')
    //     }
    // },[msg])
    const signOutWithKakao = async ()  => {
        try {
          if(sign == 0){
            const message = await logout();
            dispatch(setId(''));
            dispatch(setFriendId(''));
            setLoading(!loading);
            setMsg(message);
            console.log(message);
            database()
            .ref('users/')
            .once('value')
            .then(snapshot => {
              if(snapshot.val()){
                navigation.navigate('View1');
              }
            })
            // navigation.navigate('View1');
          }else if(sign == 1){
            dispatch(setId(''));
            dispatch(setFriendId(''));
            navigation.navigate('View1');
          }
        } catch (err) {
          console.error('signOut error', err);
        }
      };
    return(
        <View style={{flex:1}}>
            <Text style={{marginTop:80, marginLeft:"20%", marginBottom:10, fontSize:30,fontWeight:"bold", color:'black'}}>프로필 설정</Text>
            {loading == true? 
            <View></View>
            : 
            <View style={{justifyContent:'center', flexDirection: 'row', alignItems:'center'}}>
                <View style={styles.back}>
                    <View style={{flexDirection:'row', marginTop: 20, marginLeft: 10, marginBottom:30}}>
                        <Image style={styles.image} source={{uri : image}}></Image>
                        <Text style={{fontSize:20, marginTop:50,marginLeft: 10, fontWeight:"bold", color:'black'}}>{name}님</Text>
                    </View>
                    <Pressable
                    onPress={signOutWithKakao}
                    style={styles.button}>
                        <Text style={styles.text}>로그아웃</Text>
                    </Pressable>
                    <Pressable
                    style={styles.button}>
                        <Text style={styles.text}>이름 변경</Text>
                    </Pressable>
                    <Pressable
                    style={styles.button}>
                        <Text style={styles.text}>연동 변경</Text>
                    </Pressable>
                </View>
            </View>
            }
        </View>

    )
}
const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        fontWeight:"bold",
        color: "black"
    },
    back: {
        width:300,
        height: 500,
        backgroundColor:'E5E5E5',
        borderRadius: 20,
        borderColor:'#E5E5E5',
        borderWidth: 3,
    },
    image:{
        width: 150,
        height: 150,
        resizeMode: "cover",
        borderRadius: 100,
        borderWidth: 3,
      },
    button: {
      backgroundColor: "#E5E5E5",
      borderRadius: 20,
      borderWidth: 3,
      borderColor: "#E5E5E5",
      width: 250,
      height: 60,
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginTop: 20,
      marginLeft: 20,
      alignItems: "center",
    },
    
})