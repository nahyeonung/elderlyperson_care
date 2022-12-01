import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,Image,TouchableOpacity} from 'react-native';
import Mic from '../../src/svgFile/mic_Logo';
import database from '@react-native-firebase/database';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-native-simple-modal';

export default function Main({navigation}){
    const [mic,setMic] = useState(true);
    const [cate,setCate] = useState(false);
    const [letter,setLetter] = useState("편지함가기");
    const {id} = useSelector(state => state.userReducer);
    const [image,setImage] = useState('')
    const [name, setName] = useState('')
    const [state, setState] = useState(false);
      database()
    .ref('/users/'+id)
    .once('value')
    .then(snapshot => {
      setImage(snapshot.val().imageUri)
      setName(snapshot.val().name)
    });

    function lett () {
        if(letter == "편지함가기"){
            setLetter("미션확인하기")
        }

        else if(letter == "미션확인하기"){
            setLetter("편지함가기")
        }
    }
    function set () {
        setMic(!mic);
    }
    console.log(state);
    return(
        <View style={{flex:1, backgroundColor: "white"}}>
          
        {/* <View style={{flex: 0.2,alignItems:'center', justifyContent:'center', backgroundColor: "yellow"}}>
         <Text>네비게이션 탭 자리</Text>
        </View> */}

        <View style={{flex: 0.4,alignItems:'center', justifyContent:'center'}}>
             <Text style={styles.text1}>{name}님 안녕하세요!</Text>
        </View>
       
        <View style={{flex: 1,flexDirection: 'row', backgroundColor:"#F8F8F8", width:343, height: 140, marginLeft: 35,borderTopRightRadius:15, borderTopLeftRadius:15, justifyContent:"center", alignContent:"center"}}>
           
           
        <Image style={styles.image} source={{uri : image}}></Image>
            <Pressable style={styles.Button_div}>
                <Text style={styles.text5}>사랑하는 딸</Text>
                <Text></Text>
                <Text>오늘 엄마랑 같이 듣고 싶은 노래가 생겼어!</Text>
                <Text>한번 들어 봐바!!</Text>

            </Pressable>
        </View>
        <View style={{flex: 0.3,flexDirection: 'row', justifyContent:'center'}}>
         <Pressable style={styles.Button_letter} onPress={()=> {
            lett() , set()
         }}>
                <Text style={styles.text6}>{letter}</Text>
            </Pressable>
        </View>

        {!mic?(<View style={{flex: 1,flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
            <Pressable style={styles.Button2} onPress={
                   () => setState(!state)
               }>
                <Text style={styles.text7}>사랑딸</Text>
                <Text style={styles.text8}>2022.11.26</Text>
            </Pressable>
            <Pressable style={styles.Button2} onPress={() => setState(!state)}>
                <Text style={styles.text7}>사랑딸</Text>
                <Text style={styles.text8}>2022.11.26</Text>
            </Pressable>
        </View>): null}

        {!mic?(<View style={{flex: 1,flexDirection: 'row', alignItems:'baseline', justifyContent:'center'}}>
            <Pressable style={styles.Button2} onPress={
                   () => setState(!state)
               }>
                <Text style={styles.text7}>사랑딸</Text>
                <Text style={styles.text8}>2022.11.26</Text>
            </Pressable>
            <Pressable style={styles.Button2} onPress={() => setState(!state)}>
                <Text style={styles.text7}>사랑딸</Text>
                <Text style={styles.text8}>2022.11.26</Text>
            </Pressable>
        </View>): null}


        {mic ? (<View style={{flex: 1.2,flexDirection: 'row', alignItems:'baseline', justifyContent:'center', marginTop:30}}>
            <Pressable style={styles.Button} onPress={
                   () => navigation.navigate('Education')
               }>
                <Text style={styles.text4}>교육 컨텐츠</Text>
            </Pressable>
            <Pressable style={styles.Button} onPress={
                   () => navigation.navigate('VoiceScreen')}>
                <Text style={styles.text4}>찜한교육</Text>
            </Pressable>
        </View>) : null}

        {mic ?(<View style={{flex: 0.5, alignItems:'center', justifyContent:'center', backgroundColor:"#F8F8F8", borderRadius: 15}}>
            
            <Pressable style={styles.Button_ce}>
                <Mic></Mic>
            </Pressable>
              
           
        </View>) : null}
        <TouchableOpacity onPress={() => setState(!state)}>
            <Text>Open modal</Text>
        </TouchableOpacity>
        <Modal
            offset={100}
            open={state}
            modalDidOpen={() => console.log('modal did open')}
            modalDidClose={() => setState(!state)}
            style={{alignItems: 'center', borderColor:'yellow'}}>
            <View style={{height:'100%', color:'black'}}>
              <Text style={{fontSize: 30, marginBottom: 10}}>사랑하는 우리 딸</Text>
              <Text style={{fontSize: 20, marginBottom: 10}}>우리 딸 학교다니느라 많이 힘들지?{'\n'}조금만 더 힘내</Text>
              <Button title='헬로'></Button>
            </View>
        </Modal>


        </View>
       
    )
}


const styles = StyleSheet.create({

    text1: {fontSize:30, fontWeight:"bold", color: 'black', marginRight: 100, marginTop: 0},
    text2: {fontWeight:"bold", marginRight: 40, marginTop:30},
  
    text3: {fontWeight:"bold", fontSize: 13, marginBottom: 20},
    text4: {fontWeight:"bold", fontSize: 25},
    text5: {fontWeight: "bold", fontSize:20, marginRight:10},
    text6: {fontWeight: "bold", fontSize:20, color: "white"},
    text7: {fontWeight:"bold", fontSize: 17,},
    text8:{fontWeight:"bold", fontSize:13},


    Button: { borderRadius: 15,  borderColor: '#F8F8F8', backgroundColor:"#F8F8F8",
             
              width: 160.79 , height: 180.79, margin: 5 , alignItems:'center' ,justifyContent: "center"},
    
    Button2: { borderRadius: 15,  borderColor: '#F8F8F8', backgroundColor:"#F8F8F8",
             
              width: 160.79 , height: 133.77, margin: 5 , alignItems:'center' ,justifyContent: "center"},
              
              
    Button_ce: { borderRadius: 100,  borderColor: '', backgroundColor:"white",
             
              width: 138 , height: 139, margin: 5 , alignItems:'center' ,justifyContent: "center", marginBottom: 100},


    Button_img: { borderRadius: 100,  borderColor: '', backgroundColor:"#D9D9D9",
             
              width: 110 , height: 110, margin: 5 , alignItems:'center' ,justifyContent: "center" ,margin:50},
                                   
     Button_div: { borderRadius: 15,  borderColor: '', backgroundColor:"#F8F8F8", 
             
              width: 140, height: 150, margin: 5 , alignItems:'center' ,justifyContent: "center",marginRight:60 ,marginTop:40},                    
    
    
     Button_letter: { borderBottomLeftRadius:15, borderBottomRightRadius:15, borderColor: '', backgroundColor:"#03CF5D", 
             
              width: 343, height: 64.1, alignItems:'center' ,justifyContent: "center"},               


    div:{
        width:412  , height:168.18 , borderRadius:20 , backgroundColor: "#F8F8F8" 
    },
    image:{
        width: 110,
        height: 110,
        resizeMode: "cover",
        borderRadius: 100,
        borderWidth: 3,
        alignItems:'center' ,
        justifyContent: "center" ,
        margin:50
      }
  
  });