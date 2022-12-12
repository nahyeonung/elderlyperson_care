import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,Image,TouchableOpacity, Modal, Animated,PermissionsAndroid,ActivityIndicator} from 'react-native';
import Mic from '../../src/svgFile/mic_Logo';
import database from '@react-native-firebase/database';
import { useSelector, useDispatch } from 'react-redux';
import GoogleCloudSpeechToText, {
  SpeechRecognizeEvent,
  VoiceStartEvent,
  SpeechErrorEvent,
  VoiceEvent,
  SpeechStartEvent,
} from 'react-native-google-cloud-speech-to-text';
import typescript from 'react-native-svg';
// import Modal from 'react-native-simple-modal';

export default function Main({navigation}){
    const [spinner, setSpinner] = useState('');
    const [transcript, setResult] = useState('');
    const [mic,setMic] = useState(true);
    const [cate,setCate] = useState(false);
    const [letter,setLetter] = useState("편지함가기");
    const {id} = useSelector(state => state.userReducer);
    const [image,setImage] = useState('')
    const [name, setName] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
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
    console.log('이동할 곳', transcript);
    return(
        <View style={{flex:1, backgroundColor:"white"}}>
          
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
                <Text style={{color:"#636363"}}>오늘 엄마랑 같이 듣고 싶은 노래가 생겼어!</Text>
                <Text style={{color:"#636363"}}>한번 들어 봐바!!</Text>

            </Pressable>
        </View>
        <View style={{flex: 0.3,flexDirection: 'row', justifyContent:'center'}}>
         <TouchableOpacity style={styles.Button_letter} onPress={()=> {
            lett() , set()
         }}>
                <Text style={styles.text6}>{letter}</Text>
            </TouchableOpacity>
        </View>

        {!mic?(<View style={{flex: 1,flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
            <Pressable style={styles.Button2} onPress={
                   () => setModalVisible(!modalVisible)
               }>
                <Text style={styles.text7}>사랑딸</Text>
                <Text style={styles.text8}>2022.11.26</Text>
            </Pressable>
            <Pressable style={styles.Button2} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.text7}>사랑딸</Text>
                <Text style={styles.text8}>2022.11.26</Text>
            </Pressable>
        </View>): null}

        {!mic?(<View style={{flex: 1,flexDirection: 'row', alignItems:'baseline', justifyContent:'center'}}>
            <Pressable style={styles.Button2} onPress={
                   () => setModalVisible(!modalVisible)
               }>
                <Text style={styles.text7}>사랑딸</Text>
                <Text style={styles.text8}>2022.11.26</Text>
            </Pressable>
            <Pressable style={styles.Button2} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.text7}>사랑딸</Text>
                <Text style={styles.text8}>2022.11.26</Text>
            </Pressable>
        </View>): null}


        {mic ? (<View style={{flex: 1.2,flexDirection: 'row', alignItems:'baseline', justifyContent:'center', marginTop:30}}>
            <TouchableOpacity style={styles.Button} onPress={
                   () => navigation.navigate('Education')
               }>
                <Text style={styles.text4}>교육 컨텐츠</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={
                   () => navigation.navigate('VoiceScreen')}>
                <Text style={styles.text4}>찜한교육</Text>
            </TouchableOpacity>
        </View>) : null}

        {mic ?(<View style={{flex: 0.5, alignItems:'center', justifyContent:'center', backgroundColor:"#F8F8F8", borderRadius: 15}}>
            
            <TouchableOpacity onPress={startRecognizing} style={styles.Button_ce}>
              {spinner == ''?
              (<Mic></Mic>)
              :(<ActivityIndicator size="large" />)}
            </TouchableOpacity>
              
           
        </View>) : null}
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text>Open modal</Text>
        </TouchableOpacity>
        {/* <Modal
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
        </Modal> */}
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

    text1: {fontSize:30, fontWeight:"bold", color: 'black', marginRight: 100, marginTop: 0,color:"#636363"},
    text2: {fontWeight:"bold", marginRight: 40, marginTop:30},
  
    text3: {fontWeight:"bold", fontSize: 13, marginBottom: 20},
    text4: {fontWeight:"bold", fontSize: 25,color:"#636363"},
    text5: {fontWeight: "bold", fontSize:20, marginRight:10,color:"#636363"},
    text6: {fontWeight: "bold", fontSize:20, color: "white"},
    text7: {fontWeight:"bold", fontSize: 17,color:"#636363"},
    text8:{fontWeight:"bold", fontSize:13,color:"#636363"},
    textContainer:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        backgroundColor: 'yellow'
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
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },


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