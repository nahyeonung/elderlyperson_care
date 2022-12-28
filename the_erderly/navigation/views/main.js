import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,Image,TouchableOpacity, Modal, Animated,PermissionsAndroid,ActivityIndicator,TextInput} from 'react-native';
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
import Xcode from '../../src/svgFile/xcode.svg';
import typescript from 'react-native-svg';
import { onChange } from 'react-native-reanimated';
import { setCategory } from 'react-native-sound';
// import Modal from 'react-native-simple-modal';

export default function Main({navigation}){
  const [color,setColor] = useState(false);
  const [color2,setColor2] = useState(false);
  const [color3,setColor3] = useState(false);
  const [color4,setColor4] = useState(false);
  const [color5,setColor5] = useState(false);
  const [spinner, setSpinner] = useState('');
  const [transcript, setResult] = useState('');
  const [mic,setMic] = useState(true);
  const [cate,setCate] = useState(false);
  const [letter,setLetter] = useState("편지함가기");
  const {id} = useSelector(state => state.userReducer);
  const [image,setImage] = useState('')
  const [name, setName] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [value, setValue] = useState('');
  const [write, setWrite] = useState('');
  const [id2, setId2] = useState('');
  const date = new Date();
  const minutes = String(date.getMinutes());
  const hours = String(date.getHours());
  const days = String(date.getDate());
  const months = String(date.getMonth()+1);
  const years = String(date.getFullYear());
  const data = years+'년'+months+'월'+days+'일'+hours+'시'+minutes+'분'

  function boxColor () {
    setValue('음악듣기')
    setColor(true);
    setColor2(false);
    setColor3(false);
    setColor4(false);
    setColor5(false);
  }

  function boxColor2 () {
    setValue('길찾기')
    setColor(false);
    setColor2(true);
    setColor3(false);
    setColor4(false);
    setColor5(false);
  }

  function boxColor3 () {
    setValue('예매')
    setColor(false);
    setColor2(false);
    setColor3(true);
    setColor4(false);
    setColor5(false);
  }

  function boxColor4 () {
    setValue('네이버 밴드')
    setColor(false);
    setColor2(false);
    setColor3(false);
    setColor4(true);
    setColor5(false);
  }

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
      database().ref('users/'+id)
      .once('value').then(snapshot => {
        database().ref('/users/').orderByChild('phone').equalTo(snapshot.val().f_phone).once('child_added', snapshot => {
          setId2(snapshot.val().id)
        })
      })
    }, [])
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
    const stopRecognizing = async () => {
      await GoogleCloudSpeechToText.stop();
    };

    function lett () {
        if(letter == "편지함가기"){
            setLetter("편지보내기")
        }

        else if(letter == "편지보내기"){
            setLetter("편지함가기")
        }
    }
    function set () {
        setMic(!mic);
    }
    const nextModal = () =>{
      setModalVisible(!modalVisible)
      setModalVisible2(!modalVisible2)
      setColor(false)
      setColor2(false)
      setColor3(false)
      setColor4(false)
      
    }
    const onChange2 = (text) =>{
      setWrite(text);
    }
    const send = () => {
      database().ref('/users/'+id2+'/message').once('value')
      .then(snapshot=>{
        var num = Object.keys(snapshot.val()).length
        database().ref('/users/'+id2+'/message/'+`${num}`)
        .update({
          date: data,
          data: write,
          catagory: value,
        })
      })
      setModalVisible2(!modalVisible2)
      //setWrite('')
      // setCategory('')
    }
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
                <Text style={styles.text5}>{name}님</Text>
                <Text></Text>
                <Text style={{color:"#636363"}}>부모님께 추천하는 교육 카테고리를 설정한 후, 카테고리와 관련된 추억의 편지를 적어봐요. 부모님께서 편지도 읽으시고 해당 교육도 받으실 수 있어요.</Text>
                <Text style={{color:"#636363"}}></Text>

            </Pressable>
        </View>
        <View style={{flex: 0.3,flexDirection: 'row', justifyContent:'center'}}>
         <TouchableOpacity style={styles.Button_letter} onPress={()=> {
            lett() , set()
         }}>
                <Text style={styles.text6}>{letter}</Text>
            </TouchableOpacity>
        </View>

        {/* {!mic?(<View style={{flex: 1,flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
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
        </View>): null} */}
        {!mic? (<View style={{flex: 1.2,flexDirection: 'row', alignItems:'baseline', justifyContent:'center', marginTop:30}}>
                  <Text>받은 편지가 없어요</Text>
                </View>):null}


        {mic ? (<View style={{flex: 1.2,flexDirection: 'row', alignItems:'baseline', justifyContent:'center', marginTop:30}}>
            <TouchableOpacity style={styles.Button}  onPress={() => setModalVisible(!modalVisible)
               }>
                <Text style={styles.text4}>편지쓰기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('MyPage')}>
                <Text style={styles.text4}>내 정보</Text>
            </TouchableOpacity>
        </View>) : null}

        {mic ?(<View style={{flex: 0.5, alignItems:'center', justifyContent:'center', backgroundColor:"#F8F8F8", borderRadius: 15}}>
            
            <TouchableOpacity onPress={startRecognizing} style={styles.Button_ce}>
              {spinner == ''?
              (<Mic></Mic>)
              :(<ActivityIndicator size="large" />)}
            </TouchableOpacity>
              
           
        </View>) : null}
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
            <View style={{alignSelf:"center", position:"absolute",top:"10%",height:507.32,width:358.1,borderRadius:20,backgroundColor:"#F8F8F8"}}>
              <Xcode style={{left:320,top:10}} onPress={() => setModalVisible(!modalVisible)}></Xcode>
              <Text style={{alignSelf:"center",color:"#03CF5D",fontSize:20,fontWeight:"bold",marginTop:"10%"}}>추천하실 카테고리를{"\n"}      선택해주세요</Text>
              <Pressable style={[styles.box,{backgroundColor: color ? "#03CF5D": "lightgray"}]} onPress={boxColor}><Text style={styles.text66}>음악듣기</Text></Pressable>
              <Pressable style={[styles.box,{backgroundColor: color2 ? "#03CF5D":  "lightgray"}]} onPress={boxColor2}><Text style={styles.text66}>길찾기</Text></Pressable>
              <Pressable style={[styles.box,{backgroundColor: color3 ? "#03CF5D":  "lightgray"}]} onPress={boxColor3}><Text style={styles.text66}>예매</Text></Pressable>
              <Pressable style={[styles.box,{backgroundColor: color4 ? "#03CF5D":  "lightgray"}]} onPress={boxColor4}><Text style={styles.text66}>네이버 밴드</Text></Pressable>
              <Pressable style={[styles.box,{backgroundColor:"#03CF5D",marginTop:"15%"}]} onPress={()=> nextModal()}><Text style={[styles.text66,{fontSize:20}]}>선택</Text></Pressable>                
            </View>
        </Modal>


        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible2(!modalVisible2);
            }}
        >
            <View style={{alignSelf:"center", position:"absolute",top:"10%",height:507.32,width:358.1,borderRadius:20,backgroundColor:"#F8F8F8"}}>
            <Xcode style={{left:320,top:10}} onPress={() => setModalVisible2(!modalVisible2)}></Xcode>
            <Text style={{alignSelf:"center",color:"#03CF5D",fontSize:20,fontWeight:"bold",marginTop:"10%"}}>  편지내용을{"\n"}입력해주세요</Text>
                 <TextInput style={{width:300,height:250,fontSize:15,backgroundColor:"white",alignSelf:"center",borderRadius:15,marginTop:"5%",color:"black",textAlignVertical:"top"}} 
                 placeholder="편지 내용을 입력해주세요" placeholderTextColor="gray" multiline ={true}
                 onChangeText={text => onChange2(text)} value={write} ></TextInput>
                <Pressable style={[styles.box,{backgroundColor:"#03CF5D",marginTop:"15%"}]} onPress={()=> send()}><Text style={[styles.text66,{fontSize:20}]}>보내기</Text></Pressable>                
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
    text66: {
      color:"white",
      fontWeight:"bold",
      fontSize: 16,
      alignSelf:"center"
  
    },
  
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
,
      box:{ width:288.02, height: 50.66, borderRadius:20, borderColor: "#787878",justifyContent:"center",alignSelf:"center",marginTop:"5%",
      alignContent: "center",backgroundColor:"#787878"},
  
  });