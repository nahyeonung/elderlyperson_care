import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Button, Pressable, TextInput, Alert } from 'react-native';
import database from '@react-native-firebase/database';
import RectangleSvg from '../../src/svgFile/Rectangle.svg';
import RegisterSvg from '../../src/svgFile/register.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setId } from '../redux/action';


export default function Registration({navigation}) {
    const {id} = useSelector(state => state.userReducer);
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [pnumber, setPnumber] = useState('')
    const [snumber, setSnumber] = useState('')
    const onChangeP = (e) => {
        console.log(e);
        setPnumber(e)
    }
    const onChangeS = (e) => {
        console.log(e);
        setSnumber(e)
    }
    const onChangeN = (e) => {
        console.log(e);
        setName(e)
    }
    const registration = () =>{
        database().ref('users/').orderByChild('phone').equalTo(pnumber)
        .once('value', snapshot => {
            if(snapshot.val() == null){
                database().ref('users/'+pnumber).set({
                    secret: snumber,
                    phone: pnumber,
                    name: name,
                })
            }else{
                database()
                .ref('users/')
                .on('child_added', snapshot => {
                    console.log(snapshot);
                    if(pnumber == snapshot.val().phone && snapshot.val().secret != '') {
                        Alert.alert('이미 등록되어 있습니다.')
                    }
                    else if (pnumber == snapshot.val().phone) {
                        const idx = snapshot.val().id;
                        database().ref('users/'+idx).update({
                            secret: snumber,
                        })
                      navigation.navigate('EmLogin');
                    }
                    // console.log('User data: ', snapshot.val().name);
                });
            }
        })
        
    }
    return(
        <View style={{flex:1}}>
            <View style={{flex: 1,alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize: 30, fontWeight:'bold'}}>회원가입</Text>
            </View>
            <View style={{flex: 0.5,alignItems:'center', justifyContent:'center'}}>
                <TextInput style={styles.input} placeholder="이름을 적어주세요" value={name}
                onChangeText={text => onChangeN(text)}/>
                <TextInput style={styles.input} placeholder="핸드폰번호를 적어주세요" value={pnumber}
                onChangeText={text => onChangeP(text)}/>
                <TextInput style={styles.input} placeholder="비밀번호를 적어주세요" value={snumber}
                onChangeText={text => onChangeS(text)}/>
                <Pressable
                    style={styles.button}
                    title="To User Screen"
                        onPress={() => registration()}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>회원가입하기</Text>
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