import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,SafeAreaView,Alert,TouchableOpacity,Modal,ImageBackground,ScrollView,PermissionsAndroid,ActivityIndicator} from 'react-native';
import Mic from '../../src/svgFile/mic_Logo';
import Sound from 'react-native-sound';
import BackSvg from '../../src/svgFile/more.svg';
import OneSvg from '../../src/svgFile/hanso.svg';
import Micc from '../../src/svgFile/micc.svg';
import Em from '../../src/svgFile/em.svg';
import Home from '../../src/svgFile/home.svg';
import Home2 from '../../src/svgFile/home2.svg';

import { color } from 'react-native-reanimated';
import GoogleCloudSpeechToText, {
  SpeechRecognizeEvent,
  VoiceStartEvent,
  SpeechErrorEvent,
  VoiceEvent,
  SpeechStartEvent,
} from 'react-native-google-cloud-speech-to-text';
// let path = require('../../mp3/naver_pay.mp3');
// let music = new Sound(path, Sound.MAIN_BUNDLE, (error) => {
//     if (error) { console.log('play failed') }
// }) 



const data = new Date();
  const hours = String(data.getHours());
  const days = String(data.getDate());
  const months = String(data.getMonth()+1);
  const years = String(data.getFullYear());

  // 요일 한글로 바꾸기
  let week =  ['일','월','화','수','목','금','토'];
  let dayOfWeek = week[data.getDay()];
  const daysTo = String(data.getDate());


export default function HomePage({navigation}){
const [modalVisible, setModalVisible] = useState(false);
const[mic,setMiC] = useState(true);
const [spinner, setSpinner] = useState('');
const [transcript, setResult] = useState('');

useEffect(() => {
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, {
    title: 'Cool Photo App Camera Permission',
    message:
      'Cool Photo App needs access to your camera ' +
      'so you can take awesome pictures.',
    buttonNeutral: 'Ask Me Later',
    buttonNegative: 'Cancel',
    buttonPositive: 'OK',
  });
}, []);
useEffect(() => {
  GoogleCloudSpeechToText.setApiKey('AIzaSyBMnUbVg1fC9fuhiffj_5OoQYYtLn6Uzvc');
  GoogleCloudSpeechToText.onVoice(onVoice);
  GoogleCloudSpeechToText.onVoiceStart(onVoiceStart);
  GoogleCloudSpeechToText.onVoiceEnd(onVoiceEnd);
  GoogleCloudSpeechToText.onSpeechError(onSpeechError);
  GoogleCloudSpeechToText.onSpeechRecognized(onSpeechRecognized);
  GoogleCloudSpeechToText.onSpeechRecognizing(onSpeechRecognizing);
  return () => {
    GoogleCloudSpeechToText.removeListeners();
  };
}, []);
useEffect(() => {
  if(transcript == '예매'){
    navigation.navigate('Reservation');
  }
  setSpinner('');
  setResult('');
}, [transcript]);

const onSpeechError = (_error) => {
  console.log('onSpeechError: ', _error);
};

const onSpeechRecognized = (result) => {
  console.log('onSpeechRecognized: ', result);
  setResult(result.transcript);
  stopRecognizing();
};

const onSpeechRecognizing = (result) => {
  console.log('onSpeechRecognizing: ', result);
  // setResult(result.transcript);
  // stopRecognizing();
};

const onVoiceStart = (_event) => {
  console.log('onVoiceStart', _event);
};

const onVoice = (_event) => {
  console.log('onVoice', _event);
};

const onVoiceEnd = () => {
  console.log('onVoiceEnd: ');
};

const startRecognizing = async () => {
  setSpinner('1');
  const result = await GoogleCloudSpeechToText.start({
    speechToFile: true,
    languageCode: 'ko'
  });
  console.log('startRecognizing', result);
};
console.log('스피너',spinner);
const stopRecognizing = async () => {
  await GoogleCloudSpeechToText.stop();
};
  
function onPressMic(){
  setMiC(!mic);
}
  // useEffect(() => {
  //   music.play();
   
  // },[])

  const[yes,setYes] = useState(true);
  const[no,setNo] = useState(true);
  const color = () =>{
    if(yes == true){
    setYes(false);
    setNo(true);
    navigation.navigate('Train');
    }
    else if(yes == false){
      setNo(true);
      
    }
  }

  const color2 = () =>{
    if(no == true){
    setNo(false);
    setYes(true);
    navigation.navigate('Train2');
    }
    else if(no == false){
      setNo(true);
    }
  }


  return(
    
        <View style={{flex:1}}>
          <View style={{flex:0.15,backgroundColor:"black"}}></View>
          <ScrollView style={{}}>
            <View style={{height:100,justifyContent:"center"}}>
              <Text style={{fontSize:30,fontWeight:"bold",color:"#4E4E4E",alignSelf:"center",right:"10%"}}>000님, 안녕하세요 !</Text>
            </View>


            <View style={{height:300,alignContent:"center",justifyContent:"center"}}>
              <View style={{height:184.7,width:380,borderTopRightRadius:15,borderTopLeftRadius:15,backgroundColor:"white",alignSelf:"center"}}>
                <Text style={{color:"#636363",alignSelf:"center",top:15,fontSize:15}}>어제는 많이 바쁘셨나봐요.. 오늘은 즐거운 이음해요!!</Text>
                <Text style={{color:"#636363",alignSelf:"flex-start",top:30,fontSize:20, fontWeight:"bold",left:25}}>{months}월 {days}일 이음체크</Text>
                <Em style={{alignSelf:"center",top:"28%"}}></Em>
              </View>
              <Pressable style={{backgroundColor:"#03CF5D",height:65,width:380,borderBottomLeftRadius:15,borderBottomRightRadius:15,alignSelf:"center",justifyContent:"center"}} onPress={() => {navigation.navigate('Education');}}><Text style={{color:"white",fontSize:25,alignSelf:"center",fontWeight:"bold"}}>학습하러가기</Text></Pressable>
            </View>
            <View style={{height:110}}>
              <Text style={{alignSelf:"flex-start",color:"#787878",fontWeight:"bold",fontSize:20,top:15,left:20}}>오늘의 추천 콘텐츠 키워드 !</Text>
              <ScrollView style={{}}horizontal={true}>
                <Pressable style={styles.key}>
                  <Text style={styles.text99}>길찾기</Text>
                </Pressable>
                <Pressable style={styles.key}>
                  <Text style={styles.text99}>음악듣기</Text>
                </Pressable>
                <Pressable style={styles.key} onPress={() => {navigation.navigate('Reservation')}}>
                  <Text style={styles.text99}>예매하기</Text>
                </Pressable>
                <Pressable style={styles.key}>
                  <Text style={styles.text99} >기본기능</Text>
                </Pressable>
                <Pressable style={styles.key}>
                  <Text style={styles.text99}>쇼핑</Text>
                </Pressable>
                <Pressable style={styles.key}>
                  <Text style={styles.text99}>밴드</Text>
                </Pressable>
                <Pressable style={styles.key}>
                  <Text style={styles.text99}>예약</Text>
                </Pressable>
              </ScrollView>
            </View>

            <View style={{height:300,}}>
              <Text style={{alignSelf:"flex-start",color:"#4E4E4E",fontWeight:"bold",fontSize:20,left:40}}>편지함</Text>
              <ScrollView style={{alignSelf:"center"}}horizontal={true}>
              <Text></Text>
              <View style={{width:305,height:130.82,borderRadius:15,backgroundColor:"white",alignSelf:"center",bottom:50,justifyContent:"center",marginLeft:40}}>
                <OneSvg style={{left:"4%",top:35}}></OneSvg>
                <View style={{flexDirection:"row", alignSelf:"center",left:30,bottom:55}}>
                <Text style={{color:'#636363',fontSize:15,alignSelf:"center",fontWeight:"bold"}}>사랑하는 우리딸</Text>
                <Text style={{color:"#636363",fontSize:14,alignSelf:"center"}}>   읽음</Text>
                </View>
                <Text style={{color:'black',fontSize:14,alignSelf:"center",left:46,bottom:35}}>2022. 12. 14(수) 오후:{hours}:28분</Text>
                <TouchableOpacity style={{width:88.44,height:31.2,backgroundColor:"#03CF5D",borderRadius:8,justifyContent:"center",alignSelf:"flex-end",bottom:20, right:20}}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{fontSize:16,color:"white",alignSelf:"center"}}>편지 보기</Text>
                </TouchableOpacity>
              </View>
              <View style={{width:305,height:130.82,borderRadius:15,backgroundColor:"white",alignSelf:"center",bottom:50,justifyContent:"center",marginLeft:20}}>
                <OneSvg style={{left:"4%",top:35}}></OneSvg>
                <View style={{flexDirection:"row", alignSelf:"center",left:30,bottom:55}}>
                <Text style={{color:'#636363',fontSize:15,alignSelf:"center",fontWeight:"bold"}}>사랑하는 우리딸</Text>
                <Text style={{color:"#636363",fontSize:14,alignSelf:"center"}}>   읽음</Text>
                </View>
                <Text style={{color:'black',fontSize:14,alignSelf:"center",left:46,bottom:35}}>2022. 12. 14(수) 오후:{hours}:28분</Text>
                <TouchableOpacity style={{width:88.44,height:31.2,backgroundColor:"#03CF5D",borderRadius:8,justifyContent:"center",alignSelf:"flex-end",bottom:20, right:20}}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{fontSize:16,color:"white",alignSelf:"center"}}>편지 보기</Text>
                </TouchableOpacity>
              </View>
              <View style={{width:305,height:130.82,borderRadius:15,backgroundColor:"white",alignSelf:"center",bottom:50,justifyContent:"center",marginLeft:20}}>
                <OneSvg style={{left:"4%",top:35}}></OneSvg>
                <View style={{flexDirection:"row", alignSelf:"center",left:30,bottom:55}}>
                <Text style={{color:'#636363',fontSize:15,alignSelf:"center",fontWeight:"bold"}}>사랑하는 우리딸</Text>
                <Text style={{color:"#636363",fontSize:14,alignSelf:"center"}}>   읽음</Text>
                </View>
                <Text style={{color:'black',fontSize:14,alignSelf:"center",left:46,bottom:35}}>2022. 12. 14(수) 오후:{hours}:28분</Text>
                <TouchableOpacity style={{width:88.44,height:31.2,backgroundColor:"#03CF5D",borderRadius:8,justifyContent:"center",alignSelf:"flex-end",bottom:20, right:20}}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{fontSize:16,color:"white",alignSelf:"center"}}>편지 보기</Text>
                </TouchableOpacity>
              </View>
              
              
              
              </ScrollView>
            </View>
          </ScrollView>

            <View style={{height:175, alignItems:'center',borderTopLeftRadius:15, borderBottomRightRadius:15}}>
              <TouchableOpacity onPress={startRecognizing} style={styles.Button_ce}>
                {spinner == ''?
                (<Home></Home>)
                :(<ActivityIndicator size="large" />)}
              </TouchableOpacity>
            </View> 
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
        </Modal>

            
        </View>
  )    
}

const styles = StyleSheet.create({

  text1: {
    color: "#4E4E4E",
    fontWeight:"bold",
    fontSize: 30,
    marginLeft:20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  Button_ce: { borderRadius: 100,  borderColor: '', backgroundColor:"white",           
  width: 138 , height: 139, margin: 5 , alignItems:'center' ,justifyContent: "center", marginBottom: 100},
  text2: {
    color: "#787878",
    fontWeight:"bold",
    fontSize: 18,
    marginLeft:20,
    top:40
  },

  text3:{
    fontSize:35,
    fontWeight:"bold",
    color:"#4E4E4E",
    right:"28.5%"
  },

  text4: {
    
    fontWeight:"bold",
    fontSize: 18,
    justifyContent:"center", alignContent: "center",
    marginLeft: 60

  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },

  text5: {
    
    fontWeight:"bold",
    fontSize: 18,
    justifyContent:"center", 
    alignContent: "center",
    marginLeft: 117,

  },


  box:{ width:139.57, height: 235.4, borderRadius:15, borderColor: "#787878",justifyContent:"center", alignContent: "center",marginTop: 80,
margin:20},

  box2: {
    width:288.02, height:70.66, backgroundColor:"#787878", borderRadius:30, justifyContent:"center", alignContent: "center", marginLeft: 60
  },
  header: {flex: 1,backgroundColor:"black"},
  bgImage: {width: '100%', height: '100%',tintColor: 'gray',opacity:0.3},

  key:{backgroundColor:"white",height:36.93,width:86.34,borderRadius:30,justifyContent:"center",alignSelf:'center',marginLeft:20},
  text99:{
    alignSelf:"center",
    fontSize:18,
    fontWeight:"bold",
    color:"#03CF5D"
  },

})