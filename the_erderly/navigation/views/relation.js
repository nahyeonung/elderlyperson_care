import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Button, Pressable, TextInput, Alert,FontAwesome ,TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';
import Regist from '../../src/svgFile/regist.svg'
import Protect from '../../src/svgFile/protect.svg'
import RegisterSvg from '../../src/svgFile/register.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setId } from '../redux/action';
import { SelectList } from 'react-native-dropdown-select-list';


export default function Relation({route,navigation}) {
    const {pnumber} = route.params;
    const [selected, setSelected] = useState('');
    const {id} = useSelector(state => state.userReducer);
    const data = [
        {key:'1', value:'자녀(딸 혹은 아들)'},
        {key:'2', value:'부부(남편 혹은 부인)'},
        {key:'3', value:'친인척 관계'},
        {key:'5', value:'부모'},
        {key:'6', value:'기타'},
        // {key:'4', value:'Computers', disabled:true},
    ]
    const save = () =>{
        database().ref('/users/' + id).update({
            who: selected,
        })
        navigation.navigate('Find');
    }
    return(
        <View style={{flex:1}}>
            <View style={{flex: 2,alignItems:'center', justifyContent:'center'}}>
                <Text style={styles.text1}>상대에게 나는 어떤 사람인지{'\n'}알려주세요.</Text>
            </View>
            <View style={{flex: 3,alignItems:'center'}}>
                <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    boxStyles={{width:288.02,height:55}}
                    inputStyles={{color:'black',fontSize:20}}
                    dropdownTextStyles={{color:'black',fontSize:20}}
                    defaultOption={{key:'0', value:'선택하기'}}
                    save="value" />
                <TouchableOpacity
                    style={{marginRight: 10,marginTop:'10%',backgroundColor:"#787878",width:288.02,height:55,borderRadius:15,justifyContent:"center"}}
                    title="To User Screen"
                        onPress={() => save()}>
                    <Text style={{alignSelf:"center",fontSize:20,fontWeight:"bold",color:"white"}}>등록하기</Text>
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
    text1: {
        color: "#4E4E4E",
        fontWeight:"bold",
        fontSize: 25,
        position:"absolute",
        top:140.53,
        left:70.06
      },
})