import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Button, Pressable, Image, Alert } from 'react-native';
import database from '@react-native-firebase/database';
import { useSelector, useDispatch } from 'react-redux';
import { setId } from '../redux/action';

export default function MyPage(navigation){
    const {id} = useSelector(state => state.userReducer);
    const [image,setImage] = useState('')
    const [name, setName] = useState('')
      database()
    .ref('/users/'+id)
    .once('value')
    .then(snapshot => {
      setImage(snapshot.val().imageUri)
      setName(snapshot.val().name)
    });
    return(
        <View style={{flex:1}}>
            <Text style={{marginTop:80, marginLeft:"20%", marginBottom:10, fontSize:30,fontWeight:"bold"}}>프로필 설정</Text>
            <View style={{justifyContent:'center', flexDirection: 'row', alignItems:'center'}}>
                <View style={styles.back}>
                    <View style={{flexDirection:'row', marginTop: 10, marginLeft: 10}}>
                        <Image style={styles.image} source={{uri : image}}></Image>
                        <Text style={{fontSize:20, marginTop:50,marginLeft: 10, fontWeight:"bold"}}>{name}님</Text>
                    </View>
                    <Button title='로그아웃'></Button>
                </View>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    back: {
        width:300,
        height: 500,
        backgroundColor:'E5E5E5',
        borderRadius: 20,
        borderColor:'#E5E5E5',
        borderWidth: 3
    },
    image:{
        width: 150,
        height: 150,
        resizeMode: "cover",
        borderRadius: 100,
        borderWidth: 3,
      }
})