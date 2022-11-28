import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Button, Pressable, TextInput, Alert } from 'react-native';
import database from '@react-native-firebase/database';
import RectangleSvg from '../../src/svgFile/Rectangle.svg';
import RegisterSvg from '../../src/svgFile/register.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setId } from '../redux/action';


export default function Registration({navigation}) {
    const {id} = useSelector(state => state.userReducer);
    const [number, setNumber] = useState('')
    const onChange = (e) => {
        console.log(e);
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
        database().ref('users/').orderByChild('phone').equalTo(number)
        .once('value', snapshot => {
            if(snapshot.val() == null){
                database().ref('users/' + id).update({
                    phone: number,
                });
            }else{
                database().ref('users/'+number).remove();
                database().ref('users/' + id).update({
                    phone: number,
                });
            }
        })
        
    }
    
    return(
        <View style={{flex:1}}>
            <View style={{flex: 2,alignItems:'center', justifyContent:'center'}}>
                <RegisterSvg />
            </View>
            <View style={{flex: 3,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                <TextInput style={styles.input} placeholder="-없이 전화번호를 입력해주세요." value={number}
                onChangeText={text => onChange(text)}/>
                <Pressable
                    style={styles.button}
                    title="To User Screen"
                        onPress={() => save()}>
                    <Text>다음</Text>
                </Pressable>
            </View>
            <View style={{flex: 1,alignItems:'center', justifyContent:'center'}}>
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
        height: 50,
        borderColor: '#cecece',
        backgroundColor: '#cecece',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginRight: 10
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
})