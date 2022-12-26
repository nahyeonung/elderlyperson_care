import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Button, Pressable, TextInput, Alert, TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';
import Regist from '../../src/svgFile/regist.svg'
import Protect from '../../src/svgFile/protect.svg'
import RegisterSvg from '../../src/svgFile/register.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setId } from '../redux/action';


export default function Registration({navigation}) {
    const {id} = useSelector(state => state.userReducer);
    const [number, setNumber] = useState('')
    const onChange = (e) => {
        setNumber(e)
    }
    const save = () =>{
        Alert.alert('번호 확인',number+'맞습니까?',
        [
            {
                text:'맞아요',
                onPress: () => update(),
            },
            {
                text:'틀려요',
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
                navigation.navigate('Age');
            }else{
                database().ref('users/'+number).once('value').then(snapshot=>{
                    if(snapshot.val().message != null){
                        database().ref('users/'+id).update({
                            phone:number,
                            secret:snapshot.val().secret,
                            message:''
                        })
                    }else{
                        database().ref('users/'+id).update({
                            phone:number,
                            secret:snapshot.val().secret,
                            message:snapshot.val().message,
                        })
                    }
                } )

                database().ref('users/'+number).remove();
                // database().ref('users/' + id).update({
                //     phone: number,
                //     secret: secret,
                //     message: message,
                // });
            }
        })
        //navigation.navigate('Age');
        
    }
    return(
        <View style={{flex:1}}>
            <View style={{flex: 2,alignItems:'center', justifyContent:'center'}}>
                <Regist style={{marginRight:'10%'}}/>
                <Protect style={{marginRight:'24%'}}/>
            </View>
            <View style={{flex: 3,alignItems:'center'}}>
                <TextInput style={styles.input} placeholder="핸드폰번호를 적어주세요" value={number}
                onChangeText={text => onChange(text)}/>
                <TouchableOpacity
                    style={{marginRight: 10,marginTop:'10%',backgroundColor:"#787878",width:288.02,height:55,borderRadius:15,justifyContent:"center"}}
                    title="To User Screen"
                        onPress={() => save()}>
                    <Text style={{alignSelf:"center",fontSize:20,fontWeight:"bold",color:"white"}}>번호 등록하기</Text>
                </TouchableOpacity>    
            </View>
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