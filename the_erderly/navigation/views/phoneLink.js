import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Button, Pressable, TextInput, Alert,TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';
import RectangleSvg from '../../src/svgFile/Rectangle.svg';
import RegisterSvg from '../../src/svgFile/register.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setId } from '../redux/action';


export default function PhoneLink({navigation}) {
    const {id} = useSelector(state => state.userReducer);
    const [number, setNumber] = useState('')
    const onChange = (e) => {
        setNumber(e)
    }
    const save = () =>{
        Alert.alert('번호 확인',number+'맞습니까?',
        [
            {
                text:'맞아요!',
                onPress: () => update(),
            },
            {
                text:'다시 적을래요ㅠ',
                onPress: () => console.log('다시')
            }
        ])
    }
    const update = () =>{
        database().ref('users/' + id).update({
            f_phone: number,
        });
        navigation.navigate('Find');
    }
    
    return(
        <View style={{flex:1}}>
            <View style={{flex: 1,alignItems:'center', justifyContent:'center'}}>
                <Text style={styles.text1}>연동하고 싶은{'\n'} 핸드폰 번호를 적어주세요.</Text>
            </View>
            <View style={{flex: 4,alignItems:'center', justifyContent:'center'}}>
                <TextInput style={styles.input} placeholder="전화번호를 입력해주세요." value={number}
                onChangeText={text => onChange(text)}/>
                <TouchableOpacity
                    style={{marginRight: 10,marginTop:'10%',backgroundColor:"#787878",width:288.02,height:55,borderRadius:15,justifyContent:"center"}}
                    title="To User Screen"
                        onPress={() => save()}>
                    <Text style={{alignSelf:"center",fontSize:20,fontWeight:"bold",color:"white"}}>연동하기</Text>
                </TouchableOpacity>    
            </View>
            {/* <Button onPress={() => navigation.navigate('View2')} title="넘기기" /> */}
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
    text: {
        position: 'absolute',
        width: '263px',
        height: '58px',
        left: '70px',
        top: '128px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '20px',
    },
    button: {
      backgroundColor: "#cecece",
      borderColor: '#cecece',
      paddingVertical: 10,
      borderRadius: 10,
      borderWidth: 1,
      width: "10%",
      height: 50,
      alignItems: "center",
    },
    input: {
        width: 288.02,
        height: 55,
        borderColor: '#cecece',
        backgroundColor: '#cecece',
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        marginRight: 10,
        marginBottom: 15,
        fontWeight:'bold',
        fontSize:20
      },
})