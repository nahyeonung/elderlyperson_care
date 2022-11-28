import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Button, Pressable, TextInput, Alert } from 'react-native';
import database from '@react-native-firebase/database';
import RectangleSvg from '../../src/svgFile/Rectangle.svg';
import RegisterSvg from '../../src/svgFile/register.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setId } from '../redux/action';
import { setSign } from '../redux/action';


export default function EmLogin({navigation}) {
    const {id} = useSelector(state => state.userReducer);
    const {sign} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const [pnumber,setPnumber] = useState('');
    const [number, setNumber] = useState('');
    const onChange = (e) => {
        console.log(e);
        setNumber(e)
    }
    const onChangeP = (e) => {
        console.log(e);
        setPnumber(e)
    }
    const login = () =>{
        database().ref('users/').orderByChild('phone').equalTo(pnumber)
        .once('child_added', snapshot => {
            if(snapshot.val() == null){
                Alert.alert('아이디가 잘못되었습니다.')
            }
            else if(snapshot.val().secret != number){
                Alert.alert('비밀번호가 잘못되었습니다.')
            }
            else if(snapshot.val().secret == number){
                if(snapshot.val().id == null){
                    dispatch(setId(snapshot.val().phone))
                    dispatch(setSign(1))
                    navigation.navigate('View2')  
                }else{
                    dispatch(setId(snapshot.val().id))
                    dispatch(setSign(1))
                    navigation.navigate('View2')
                }
            }
            
            
        })
        // database().ref('users/').on('child_added', snapshot => {
        //     if(snapshot.val().phone == pnumber && snapshot.val().secret == number){
        //         if(snapshot.val().id == null){
        //             dispatch(setId(snapshot.val().phone))
        //             navigation.navigate('View2')
        //         }else {
        //             dispatch(setId(snapshot.val().id))
        //             navigation.navigate('View2')
        //         }
        //     }else{
        //         Alert.alert('아이디 또는 비밀번호가 틀렸어요')
        //     }
        // })
    }
    
    return(
        <View style={{flex:1}}>
            <View style={{flex: 1,alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize: 30, fontWeight:'bold'}}>로그인</Text>
            </View>
            <View style={{flex: 0.5,alignItems:'center', justifyContent:'center'}}>
                <TextInput style={styles.input} placeholder="아이디" value={pnumber}
                onChangeText={text => onChangeP(text)}/>
                <TextInput style={styles.input} placeholder="비밀번호" value={number}
                onChangeText={text => onChange(text)}/>
                <Pressable
                    style={styles.button}
                    title="To User Screen"
                        onPress={() => login()}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>로그인</Text>
                </Pressable>
            </View>
            <View style={{flex: 1,alignItems:'center', justifyContent:'center'}}>
                <Pressable
                    style={styles.button}
                    title="To User Screen"
                        onPress={() => navigation.navigate('Registration')}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>회원가입 하기</Text>
                </Pressable>
            </View>
            <Button onPress={() => navigation.navigate('View2')} title="넘기기" />
        </View>
    )
}

const styles = StyleSheet.create({
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
    input: {
        width: "70%",
        height: 60,
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
    button: {
        width: "70%",
        height: 60,
        borderColor: '#03CF5D',
        backgroundColor: '#03CF5D',
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        marginRight: 10,
        marginBottom: 15,
        fontWeight:'bold',
        alignItems:'center',
    },
})