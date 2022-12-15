import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Image,Pressable,SafeAreaView,Alert,TouchableOpacity,Modal,ImageBackground,ScrollView,PermissionsAndroid,ActivityIndicator} from 'react-native';
import Mic from '../../src/svgFile/mic_Logo';
import Sound from 'react-native-sound';
import BackSvg from '../../src/svgFile/more.svg';
import OneSvg from '../../src/svgFile/hanso.svg';
import Micc from '../../src/svgFile/micc.svg';
import Em from '../../src/svgFile/em.svg';
import Home from '../../src/svgFile/home.svg';
import Home2 from '../../src/svgFile/home2.svg';
import Xcode from '../../src/svgFile/xcode.svg';
import Sta from '../../src/svgFile/sta.svg';
import Pro from '../../src/svgFile/pro.svg';
import Ddot from '../../src/svgFile/ddot.svg';
import Sam from '../../src/svgFile/sam.svg';



import database from '@react-native-firebase/database';
import { useSelector, useDispatch } from 'react-redux';

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
const {id} = useSelector(state => state.userReducer);
const [image,setImage] = useState('')
const [name, setName] = useState('')
const [modalVisible, setModalVisible] = useState(false);
const[mic,setMiC] = useState(true);
const [spinner, setSpinner] = useState('');
const [transcript, setResult] = useState('');
database()
.ref('/users/'+id)
.once('value')
.then(snapshot => {
  setImage(snapshot.val().imageUri)
  setName(snapshot.val().name)
});

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
  else if(transcript == '예매하기'){
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

  const gihyeok = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('Reservation');
  }


  return(
      
        <View style={{flex:1}}>
          
          
          <View style={{flex:0.15,backgroundColor:"black"}}></View>
          <ScrollView style={{}}>
          <Ddot style={{position:"absolute",top:20,left:319}}></Ddot>
          <Sam style={{position:"absolute",top:20,left:24}}></Sam>
          <Pro style={{position:"absolute",top:20,left:360}}></Pro>
            <View style={{height:100,justifyContent:"center"}}>
              <Text style={{fontSize:25,fontWeight:"bold",color:"#4E4E4E",alignSelf:"center",right:"10%",top:40}}>{name}님, 안녕하세요 !</Text>
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

            <View style={{height:300}}>
              <Text style={{alignSelf:"flex-start",color:"#4E4E4E",fontWeight:"bold",fontSize:20,left:40}}>편지함</Text>
              <ScrollView style={{alignSelf:"center"}}horizontal={true}>
              <Text></Text>
              <View style={{width:305,height:130.82,borderRadius:15,backgroundColor:"white",alignSelf:"center",bottom:50,justifyContent:"center",marginLeft:40}}>
                <Image style={styles.image} source={{uri : image}}></Image>
                <View style={{flexDirection:"row", alignSelf:"center",left:30,bottom:55}}>
                <Text style={{color:'#636363',fontSize:15,alignSelf:"center",fontWeight:"bold"}}>사랑하는 우리딸</Text>
                <Text style={{color:"#636363",fontSize:14,alignSelf:"center"}}>   읽음</Text>
                </View>
                <Text style={{color:'black',fontSize:14,alignSelf:"center",left:46,bottom:35}}>2022. 12. 14(월) 오후:{hours}:28분</Text>
                <TouchableOpacity style={{width:88.44,height:31.2,backgroundColor:"#03CF5D",borderRadius:8,justifyContent:"center",alignSelf:"flex-end",bottom:20, right:20}}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{fontSize:16,color:"white",alignSelf:"center"}}>편지 보기</Text>
                </TouchableOpacity>
              </View>
              <View style={{width:305,height:130.82,borderRadius:15,backgroundColor:"white",alignSelf:"center",bottom:50,justifyContent:"center",marginLeft:20}}>
                <Image style={styles.image} source={{uri : image}}></Image>
                <View style={{flexDirection:"row", alignSelf:"center",left:30,bottom:55}}>
                <Text style={{color:'#636363',fontSize:15,alignSelf:"center",fontWeight:"bold"}}>사랑하는 우리딸</Text>
                <Text style={{color:"#636363",fontSize:14,alignSelf:"center"}}>   읽음</Text>
                </View>
                <Text style={{color:'black',fontSize:14,alignSelf:"center",left:46,bottom:35}}>2022. 12. 07(수) 오후:{hours}:46분</Text>
                <TouchableOpacity style={{width:88.44,height:31.2,backgroundColor:"#03CF5D",borderRadius:8,justifyContent:"center",alignSelf:"flex-end",bottom:20, right:20}}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{fontSize:16,color:"white",alignSelf:"center"}}>편지 보기</Text>
                </TouchableOpacity>
              </View>
              <View style={{width:305,height:130.82,borderRadius:15,backgroundColor:"white",alignSelf:"center",bottom:50,justifyContent:"center",marginLeft:20}}>
                <Image style={styles.image} source={{uri : image}}></Image>
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
            <View style={{height:300}}>
              <Text style={{color:"#787878",fontSize:15,alignSelf:"flex-start",left:50}}>기차표 예매에 관심이 많으시군요!</Text>
              <Text style={{color:"#4E4E4E",fontSize:20,alignSelf:"flex-start",left:50,top:10}}>교육통계</Text>
              <Sta style={{alignSelf:"center",top:30}}></Sta>

            </View>
          </ScrollView>

            <View style={{height:175, alignItems:'center',borderTopLeftRadius:15, borderBottomRightRadius:15,top:30}}>
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


          <View style={{width:358.16,height:429.52,backgroundColor:"white",alignSelf:"center",borderTopLeftRadius:15,borderTopRightRadius:15, top:80}}>
            <View style={{height:150,flexDirection:"row"}}>
              <Xcode style={{left:320,top:10}} onPress={() => setModalVisible(!modalVisible)}></Xcode>
             <Image style={[styles.modalImage,{position:"absolute",left:"9.51%",top:"21.64%",bottom:"73.67%"}]} source={{uri: image}}></Image>
             <View style={{alignSelf:"flex-end",left:110,bottom:40}}>
               <Text style={{color:"#636363",fontSize:25,fontWeight:"700",}}>사랑하는 우리딸</Text>
              <Text style={{color:"#636363",fontSize:15,fontWeight:"400",marginTop:5}}>2022.12.14.(수) 오후 4:28</Text>
             </View>
            </View>
            <View style={{backgroundColor:"white",borderTopWidth:1,borderColor:"#787878",height:34.32,width:317.82,alignSelf:"center",justifyContent:"center"}}><Text style={{fontSize:16,alignSelf:"flex-start",color:"#636363",color:"#636363",left:10}}>엄마, 요새 엄마가 좋아하는 임영웅 노래만</Text></View>
            <View style={{backgroundColor:"white",borderTopWidth:1,borderColor:"#787878",height:34.32,width:317.82,alignSelf:"center",justifyContent:"center"}}><Text style={{fontSize:16,alignSelf:"flex-start",color:"#636363",color:"#636363",left:10}}>많이 듣길래 내가 다른 노래 추천해주려고!</Text></View>
            <View style={{backgroundColor:"white",borderTopWidth:1,borderColor:"#787878",height:34.32,width:317.82,alignSelf:"center",justifyContent:"center"}}><Text style={{fontSize:16,alignSelf:"flex-start",color:"#636363",color:"#636363",left:10}}>사실 내가 좋아하는 노래 추천하는거니까</Text></View>
            <View style={{backgroundColor:"white",borderTopWidth:1,borderColor:"#787878",height:34.32,width:317.82,alignSelf:"center",justifyContent:"center"}}><Text style={{fontSize:16,color:"#636363",alignSelf:"flex-start",color:"#636363",left:10}}>듣고 어땠는지 말해주기!!</Text></View>
            <View style={{backgroundColor:"white",borderTopWidth:1,borderColor:"#787878",height:34.32,width:317.82,alignSelf:"center",justifyContent:"center"}}><Text style={{fontSize:16,alignSelf:"flex-start",color:"#636363"}}></Text></View>
            <View style={{backgroundColor:"white",borderTopWidth:1,borderColor:"#787878",height:34.32,width:317.82,alignSelf:"center",justifyContent:"center"}}><Text style={{fontSize:16,alignSelf:"flex-start",color:"#636363",left:10}}>이번주에 꼭 내려갈게요!</Text></View>
            <View style={{backgroundColor:"white",borderTopWidth:1,borderColor:"#787878",height:34.32,width:317.82,alignSelf:"center",justifyContent:"center"}}><Text style={{fontSize:16,alignSelf:"flex-start",color:"#636363",left:10}}>저녁에 맛있는거 먹으러가요♥</Text></View>
            
           
            
  
          </View>
          <Pressable style={{width:358.16,height:77.8,backgroundColor:"#03CF5D",borderBottomRightRadius:15,borderBottomLeftRadius:15,left:27,top:77,justifyContent:"center"}} onPress={() => gihyeok()}>
            <Text style={{color:"white",fontWeight:"bold",fontSize:20,alignSelf:"center"}} >학습하러 가기</Text>
          </Pressable>
            {/* <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{flexDirection:'row'}}>
                  <Image style={styles.modalImage} source={{uri: image}}></Image>
                  <View>
                    <Text style={{fontSize:30, fontWeight:'bold',color:"black"}}>사랑하는 우리 딸</Text>
                    <Text style={{marginLeft:10, fontWeight:'bold',color:"black"}}>2022.12.06 (화) 16:00</Text>
                  </View>
                </View>
                <Text style={styles.modalText}>
                엄마, 요새 엄마가 좋아하는 임영웅 노래만
                많이 듣길래 내가 다른 노래 추천해주려고!
                사실 내가 좋아하는 노래 추천하는거니까
                듣고 어땠는지 말해주{'\n'}기 !!{'\n\n'}
                이번주에 꼭 내려갈게요! 기혁이 사랑해♥</Text>
                <View style={{flexDirection:'row'}}>
                  <Pressable
                    style={[styles.button, styles.buttonMove]}
                    onPress={() => navigation.navigate('Reservation')}
                  >
                    <Text style={styles.textStyle}>학습하러가기</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonClose, styles.gin]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>창 닫기</Text>
                  </Pressable>
                </View>

              </View>
            </View> */}
        </Modal>

            
        </View>
  )    
}

const styles = StyleSheet.create({
  gin: {
    marginLeft: 30
  },

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
    textAlign: "center",
    fontSize:20
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
    color:"black",
    textDecorationLine: 'underline',
    marginTop:10,
    marginBottom: 15,
    fontWeight:'bold',
    fontSize: 17,
    alignSelf:"center"
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  buttonMove: {
    backgroundColor: "#03CF5D",
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

  image: {
    left:5,
    top:37,
    width:89.75,
    height:89.75,
    borderRadius:100,
  },
  modalImage: {
    width:89.75,
    height:89.75,
    borderRadius:100,
  }

})