import React, { Component,useEffect, useRef, useState,useMemo,props} from 'react';
import {View, Text, Button, StyleSheet, Pressable,SafeAreaView,Alert,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ArrowSvg from '../../src/svgFile/Vector 28.svg';
import RedButtonSvg from '../../src/svgFile/Group 39.svg';
import DateSvg from '../../src/svgFile/date_range.svg';
import PersonSvg from '../../src/svgFile/person.svg';
import MicSvg from '../../src/svgFile/miclogo.svg';
import DotSvg from '../../src/svgFile/dot.svg';
import DotgraySvg from '../../src/svgFile/dotgray.svg';
import AirPersonSvg from '../../src/svgFile/airline_seat_recline_extra.svg';
import NaverSvg from '../../src/svgFile/naver_pay.svg';

import { Calendar,CalendarList, Agenda } from "react-native-calendars";
import {LocaleConfig} from 'react-native-calendars';
import Day from 'react-native-calendars/src/calendar/day';
import Sound from 'react-native-sound';
//음성 목록
let path = require('../../mp3/train_intro.mp3');;
let music = new Sound(path, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path2 = require('../../mp3/depart.mp3');;
let music2 = new Sound(path2, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 
let path3 = require('../../mp3/text_depart.mp3');;
let music3 = new Sound(path3, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path4 = require('../../mp3/arrive.mp3');;
let music4 = new Sound(path4, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path5 = require('../../mp3/arrive2.mp3');;
let music5 = new Sound(path5, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path6 = require('../../mp3/text_arrive.mp3');;
let music6 = new Sound(path6, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path7 = require('../../mp3/goday.mp3');;
let music7 = new Sound(path7, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path8 = require('../../mp3/goday2.mp3');;
let music8 = new Sound(path8, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 
let path9 = require('../../mp3/goadult.mp3');;
let music9 = new Sound(path9, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path10 = require('../../mp3/goadult2.mp3');;
let music10 = new Sound(path10, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 
let path11 = require('../../mp3/goseat.mp3');;
let music11 = new Sound(path11, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path12 = require('../../mp3/goseat2.mp3');;
let music12 = new Sound(path12, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 
let path13 = require('../../mp3/honzza.mp3');;
let music13 = new Sound(path13, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path12_1 = require('../../mp3/nomal.mp3');;
let music12_1 = new Sound(path12_1, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let gotime = require('../../mp3/gotime.mp3');;
let musictime = new Sound(gotime, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

// 캘린더
LocaleConfig.locales['fr'] = {
  monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['일', '월','화','수','목','금','토'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';
export default function Bus({navigation}){
  // 음성 시작할떄 인트로.
  useEffect(() => {
    music.play();
   
  },[])
  const [depart,setDepart] = useState(true)
  const [departPage,setDepartPage] = useState(false)
  const [arrive,setArrive] = useState(false)
  const [day,setDay] = useState(false)
  const [adult,setAdult] =useState(false)
  const [seat,setSeat] =useState(false)
  const [schedule,setSchedule] = useState(false)
  const [count, setCount] = useState(0);
  const [ad,setAd] = useState(0);
  const [ua,setUa] = useState(0);
  const [baby,setBaby] = useState(0);
  const [gyon,setGyon] = useState(0);
  const [jang,setJang] = useState(0);
  const [jang2,setJang2] = useState(0);
  const [vava,setVava]= useState("일반좌석");
  const [name, setName] = useState('출발 기차역')
  const [name2, setName2] = useState('도착 기차역')
  const [pay,setPay] = useState(false);
  //글자 색
  const [departColor,setDepartColor] = useState("red");
  const [textColor,setTextColor] = useState("red");
  const [arriveColor,setArriveColor] = useState("#636363");
  const [textColor2,setTextColor2] = useState("red");
  const [dayColor,setDayColor] = useState("#636363");
  const [adultColor,setAdultColor] = useState("#636363");
  const [adlutPlusBotton,setAdultPlusBotton] = useState("blue");
  const [seatColor,setSeatColor] = useState("#636363");

  //날짜
  const data = new Date();
  const hours = String(data.getHours());
  const days = String(data.getDate());
  const months = String(data.getMonth()+1);
  const years = String(data.getFullYear());

  // 요일 한글로 바꾸기
  let week =  ['일','월','화','수','목','금','토'];
  let dayOfWeek = week[data.getDay()];
  const daysTo = String(data.getDate());


  //보더라인 및 음성 
  const [eduCount,setEduCount] = useState(0)
  const [station,setStation] = useState("black");
  const [station2,setStation2] = useState("black")
  
function dayPlus() {
  parseInt(1+daysTo);
}

  const uaIncreaseAd = () => {
    setCount(prevCount => prevCount + 1);
    setUa(prevCount => prevCount + 1);
    
  };
  const uaDecreaseAd = () => {
    setCount(prevCount => prevCount - 1);
    setUa(prevCount => prevCount - 1);
  };

  const babyIncreaseAd = () => {
    setCount(prevCount => prevCount + 1);
    setBaby(prevCount => prevCount + 1);
    
  };
  const babyDecreaseAd = () => {
    setCount(prevCount => prevCount - 1);
    setBaby(prevCount => prevCount - 1);
  };

  const gyonIncreaseAd = () => {
    setCount(prevCount => prevCount + 1);
    setGyon(prevCount => prevCount + 1);
    music13.play();
    setEduCount(50);
    
  };
  const gyonDecreaseAd = () => {
    setCount(prevCount => prevCount - 1);
    setGyon(prevCount => prevCount - 1);
  };

  const jangIncreaseAd = () => {
    setCount(prevCount => prevCount + 1);
    setJang(prevCount => prevCount + 1);
    
  };
  const jangDecreaseAd = () => {
    setCount(prevCount => prevCount - 1);
    setJang(prevCount => prevCount - 1);
  };

  const jang2IncreaseAd = () => {
    setCount(prevCount => prevCount + 1);
    setJang2(prevCount => prevCount + 1);
    
  };
  const jang2DecreaseAd = () => {
    setCount(prevCount => prevCount - 1);
    setJang2(prevCount => prevCount - 1);
  };

  const onIncreaseAd = () => {
    setCount(prevCount => prevCount + 1);
    setAd(prevCount => prevCount + 1);
    
  };
  const onDecreaseAd = () => {
    setCount(prevCount => prevCount - 1);
    setAd(prevCount => prevCount - 1);
  };


 const onPressDepart = () => {
  if(depart == true){
    setDepart(false)
    setDepartPage(true)
    setDepartColor("#636363");
    
  }
  else if (depart == false){
    setDepart(true);
    setDepartPage(false)
  }
  if(eduCount == 0){
    setEduCount(1)
    music2.play()
  }
  if(eduCount == 3){
    setEduCount(3);
  }
  
 }

 const onPressArrive = () => {
  if(depart == true){
    setDepart(false)
    setArrive(true)
   
  }
  else if (depart == false){
    setDepart(true);
  }
  if (eduCount == 3){
    music5.play();
    setEduCount(4);
  }
  if(eduCount == 6){
    setEduCount(6)
  }
 }

 const onPressDay = () => {
  if(depart == true){
    setDepart(false)
    setDay(true)
  }
  else if (depart == false){
    setDepart(true);
  }
  if (eduCount == 6){
    music8.play();
    setEduCount(7);
  }
  if(eduCount == 9){
    setEduCount(9)
  }
 }

 const onPressAdult = () => {
  if(depart == true){
    setDepart(false)
    setAdult(true)
  }
  else if (depart == false){
    setDepart(true);
  }
  if (eduCount == 9){
    music10.play();
    setEduCount(10);
  }
  if(eduCount == 11){
    setEduCount(11)
  }
 }
 const onPressSeat = () => {
  if(depart == true){
    setDepart(false)
    setSeat(true)
  }
  else if (depart == false){
    setDepart(true);
  }
  if (eduCount == 11){
    music12.play();
    setEduCount(12);
  }
  if(eduCount == 12){
    setEduCount(12)
  }
 }

 const onPressSchedule = () => {
  if(depart == true){
    setDepart(false)
    setSchedule(true)
  }
  else if (depart == false){
    setDepart(true);
  }
  if (eduCount == 13){
    music2.play();
    setEduCount(14);
  }
 }

 const onPressPay = () => {
  if(schedule == true){
    setSchedule(false)
    setPay(true)
  }
  if (eduCount == 14){
    music2.play();
    setEduCount(15);
  }
 }

 const onPressDepartPage = () => {
  if(departPage == true){
    setDepartPage(false)
    setDepart(true)
    setTextColor("gray");
    setArriveColor("red");
    setStation("black");
   
  }
  else if (departPage == false){
    setDepartPage(true)
    setDepart(false)
  }

  if(eduCount == 2){
    music4.play();
    setStation("black");
    setEduCount(3)
  }
 }

 const onPressArrive2 = () => {
  if(arrive == true){
    setDepart(true)
    setArrive(false)
    setTextColor2("gray");
    setStation2("black");
    setArriveColor("#636363");
    setDayColor("red");
  }
  else if (depart == false){
    setDepart(true);
  }
  if(eduCount == 5){
    music7.play();
    setEduCount(6)
    setStation("black")
  }
  
 }

 const onPressDay2 = () => {
  if(day == true){
    setDepart(true)
    setDay(false)
    setDayColor("#636363");
    setAdultColor("red");
  }
  else if (depart == false){
    setDepart(true);
  }
  if(eduCount == 7){
    music9.play();
    setEduCount(9)
  }
 }

 const onPressAdult2 = () => {
  if(adult == true){
    setDepart(true)
    setAdult(false)
    setAdultColor("#636363");
    setSeatColor("red");
  }
  else if (depart == false){
    setDepart(true);
  }
  if(eduCount == 50){
    music11.play();
    setEduCount(11)
  }
 }

 const onPressSeat2 = () => {
  if(seat == true){
    setDepart(true)
    setSeat(false)
    setSeatColor("#636363");
  }
  else if (depart == false){
    setDepart(true);
  }
  if(eduCount == 51){
    musictime.play();
    setEduCount(13)
  }
 }

 const onPressSchedule2 = () => {
  if(schedule == true){
    setDepart(true)
    setSchedule(false)
  }
  else if (depart == false){
    setDepart(true);
  }
  // if(eduCount == 12){
  //   music2.play();
  //   setEduCount(13)
  // }
 }
 const [dates, setDates] = useState(['2022-01-05', '2022-12-30']);


//다시듣기 함수
function replay() {
  console.log(eduCount);

  if(eduCount == 0){
    music.play();
  }
  else if(eduCount == 1){
    music2.play();
  }
  else if(eduCount == 2){
    music3.play();
  }
  else if(eduCount == 3){
    music4.play();
  }
  else if(eduCount == 4){
    music5.play();
  }
  else if(eduCount == 5){
    music6.play();
  }
  else if(eduCount == 6){
    music7.play();
  }
  else if(eduCount == 7){
    music8.play();
  }
  else if(eduCount == 9){
    music9.play();
  }
  else if(eduCount == 9){
    music9.play();
  }
  else if(eduCount == 10){
    music10.play();
  }
  else if(eduCount == 50){
    music13.play();
  }

  else if(eduCount == 11){
    music11.play();
  }
  else if(eduCount == 51){
    music12_1.play();
  }

  else if(eduCount == 12){
    music12.play();
  }

  else if(eduCount == 13){
    musictime.play();
  }


}
 
 
  return(
        <View style={{flex:1, backgroundColor: "white"}}>
        {day ?  <View style={{flex:1, backgroundColor:"white",borderTopRightRadius:30, borderTopLeftRadius:30,}}>
                <View style={{flex:0.15, backgroundColor:"#F8F8F8",borderTopRightRadius:30, top:30,borderTopLeftRadius:30, borderBottomWidth:3, borderColor:"black", justifyContent:"center"}}>
                  <Text  style={{color:"black", fontSize:20, fontWeight:"bold", left: "3%",bottom:20}}>가는날 선택</Text>
                </View>
                <View style={{flex:0.15, backgroundColor:"#03CF5D", justifyContent:"center"}}>
                  <Text style={{color:"white", fontSize:20, fontWeight:"bold", left: "5%"}}>{years}.{months}.{daysTo}.({dayOfWeek})</Text>
                  <Text style={{color:"white", fontSize:15, fontWeight:"bold", left: "5%"}}>{hours}시 이후 출발</Text>
                </View>
                <View style={{flex:0.4,marginTop:40 }}>
                    <Calendar style={{fontSize:30}}onDayPress={(day) => {console.log(day.day)}}/>
                </View>
                <View style={{flex:0.17,backgroundColor:"#F8F8F8"}}></View>
                <View style={{flex:0.2,backgroundColor:"white",flexDirection:"row",justifyContent:"center"}}>
                        <TouchableOpacity style={[styles.box111,{backgroundColor:"#F8F8F8",borderColor:"#F8F8F8",borderWidth:3}]} onPress={replay}>
                           <Text style={[styles.text20,{color:"gray"}]} activeOpacity={0.8}>취소</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box111} onPress={onPressDay2}>
                           <Text style={[styles.text20,{color:"white"}]} activeOpacity={0.8}>적용</Text>
                        </TouchableOpacity>
                </View> 
                </View>
                 : null}


          { pay ? <View style={{flex:1,alignContent:"center",alignContent:"center"}}>
                    <View style={{backgroundColor:"#4E5CFB",flex:0.17 ,alignItems:"flex-start"}}>
                      <Text style={{color:"white",fontWeight:"bold",fontSize:20,left:20,top:20}}> &lt; 예매하기</Text>
                    </View>
                    <View style={{width:393.99,height:197.53,backgroundColor:"black",position:"absolute", left:9.01,top:104.09,borderRadius:15}}></View>

                    <View style={{width:392.72,height:245.11,backgroundColor:"black",position:"absolute", left:8.99,top:345.13,borderRadius:15}}></View>

                   </View> :null}







        {schedule ? <View style={{backgroundColor:"#F8F8F8",flex:1,alignContent:"center"}}>

                          <View style={{backgroundColor:"white" ,flex:0.1,marginTop:30,width:"100%",alignSelf:"center",justifyContent:"center"}}>
                            <Text style={[styles.text16,{}]}>{name} &rarr; {name2} </Text>
                          </View>
                          <View style={{backgroundColor:"#F8F8F8" ,flex:0.1,justifyContent:"center"}}>
                          {/* <TouchableOpacity style={[styles.plusBox,{width:30,height:30,alignSelf:"center",backgroundColor:"white",left:0,right:"80%"}]}>
                              <Text style={{color:"gray", fontWeight:"bold", alignSelf:"center",fontSize:20}}>&lt;</Text>
                            </TouchableOpacity> */}
                            
                            <Text style={[styles.text16,{alignSelf:"center",left:0}]}>{years}.{months}.{daysTo} ({dayOfWeek})</Text>

                            {/* <TouchableOpacity style={[styles.plusBox,{width:30,height:30,alignSelf:"center",backgroundColor:"white",left:"50%"}]} onPress={dayPlus}>
                              <Text style={{color:"gray", fontWeight:"bold", alignSelf:"center",fontSize:20}}>&gt;</Text>
                            </TouchableOpacity> */}
                          </View>
                          <View style={{backgroundColor:"white" ,flex:0.065,width:"95%",alignSelf:"center",borderBottomColor:"#F8F8F8",borderBottomWidth:3,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                            <Text style={[styles.text16,{margin:8,left:0,color:"black"}]}>전체</Text>
                            <Text style={[styles.text16,{margin:8,left:0,color:"gray"}]}>KTX</Text>
                            <Text style={[styles.text16,{margin:8,left:0,color:"gray"}]}>새마을</Text>
                            <Text style={[styles.text16,{margin:8,left:0,color:"gray"}]}>무궁화</Text>
                            <Text style={[styles.text16,{margin:8,left:0,color:"gray"}]}>SRT</Text>



                          </View>
                          <View style={{backgroundColor:"white" ,flex:0.065,width:"95%",borderBottomColor:"#F8F8F8",borderBottomWidth:15,justifyContent:"center",alignSelf:"center"}}>
                            <Text style={[styles.text16,{alignSelf:"flex-start",left:20}]}>{hours}시 이후 출발</Text>                            
                          </View>

                          <View style={{backgroundColor:"white" ,flex:0.15,width:"95%",alignSelf:"center",borderBottomColor:"#F8F8F8",borderBottomWidth:15}}>
                            <View style={{flexDirection:"row"}}>
                                <Pressable style={[styles.KtxBox,{height:25,bottom:10,top:5,marginLeft:22,marginBottom:10,backgroundColor:"#3858A2"}]}>
                                  <Text style={{color:"white", fontSize:15, left:5, fontWeight:"bold"}}>KTX</Text>
                                </Pressable>
                                <Text style={{color:"blue", top:7, left: 15}}>034</Text>
                              </View>
                            <View style={{flexDirection:"row"}}>
                              <Text style={{color:"black", fontSize:25, fontWeight:"bold",marginLeft:20}}>{1+parseInt(hours)}:28</Text>
                              <Text style={{color:"#636363", fontSize:25, fontWeight:"bold"}}>  &rarr;</Text>
                              <Text style={{color:"black", fontSize:25}}>  {3+parseInt(hours)}:28 </Text>
                              <Text style={{color:"#636363",top:10}}>2시간 6분 </Text> 
                              <Pressable style={{width:69.78,height:37.64,borderRadius:5,borderColor:"#787878",borderWidth:2,backgroundColor:"white",justifyContent:"center",flexDirection:"row",left:20,top:10}} onPress={onPressPay}>
                                <NaverSvg style={{alignSelf:"center"}}></NaverSvg>
                                <Text style={{color:"black", fontWeight:"bold",alignSelf:"center",marginLeft:4}}>예매</Text>
                              </Pressable>
                            </View>
                            <View style={{flexDirection:"row",marginTop:5}}>
                              
                            <Pressable style={{borderColor:"#636363", borderWidth:1 ,width:35, borderRadius:3,marginLeft:20,justifyContent:"center"}}>
                                <Text style={{color:"black",alignSelf:"center"}}>일반</Text></Pressable>
                            
                                 <Text style={{color:"#636363",marginLeft:5}}>예매가능</Text>
                           
                                 <Pressable style={{borderColor:"#636363", borderWidth:1 ,width:20, borderRadius:3,marginLeft:10,justifyContent:"center"}}>
                                <Text style={{color:"black",alignSelf:"center"}}>특</Text></Pressable>                              
                              <Text style={{color:"red",marginLeft:5}}>매진</Text>
                            </View>
                          </View>

                          <View style={{backgroundColor:"white" ,flex:0.15,width:"95%",alignSelf:"center",borderBottomColor:"#F8F8F8",borderBottomWidth:15}}>
                          <View style={{flexDirection:"row"}}>
                                <Pressable style={[styles.KtxBox,{height:25,bottom:10,top:5,marginLeft:22,marginBottom:10,width:50,backgroundColor:"orange"}]}>
                                  <Text style={{color:"white", fontSize:13, left:5, fontWeight:"bold",top:2}}>무궁화</Text>
                                </Pressable>
                                <Text style={{color:"orange", top:7, left: 10}}>028</Text>
                              </View>
                            <View style={{flexDirection:"row"}}>
                              <Text style={{color:"black", fontSize:25, fontWeight:"bold",marginLeft:20}}>{3+parseInt(hours)}:28</Text>
                              <Text style={{color:"#636363", fontSize:25, fontWeight:"bold"}}>  &rarr;</Text>
                              <Text style={{color:"black", fontSize:25}}>  {5+parseInt(hours)}:50 </Text>
                              <Text style={{color:"#636363",top:10}}>2시간 6분 </Text> 
                              <Pressable style={{width:69.78,height:37.64,borderRadius:5,borderColor:"#787878",borderWidth:2,backgroundColor:"white",justifyContent:"center",flexDirection:"row",left:20,top:10}}>
                                <NaverSvg style={{alignSelf:"center"}}></NaverSvg>
                                <Text style={{color:"black", fontWeight:"bold",alignSelf:"center",marginLeft:4}}>예매</Text>
                              </Pressable>
                            </View>
                            <View style={{flexDirection:"row",marginTop:5}}>
                              
                            <Pressable style={{borderColor:"#636363", borderWidth:1 ,width:35, borderRadius:3,marginLeft:20,justifyContent:"center"}}>
                                <Text style={{color:"black",alignSelf:"center"}}>일반</Text></Pressable>
                            
                                 <Text style={{color:"#636363",marginLeft:5}}>예매가능</Text>
                           
                                 <Pressable style={{borderColor:"#636363", borderWidth:1 ,width:20, borderRadius:3,marginLeft:10,justifyContent:"center"}}>
                                <Text style={{color:"black",alignSelf:"center"}}>특</Text></Pressable>                              
                              <Text style={{color:"red",marginLeft:5}}>매진</Text>
                            </View>
                          </View>

                          <View style={{backgroundColor:"white" ,flex:0.15,width:"95%",alignSelf:"center",borderBottomColor:"#F8F8F8",borderBottomWidth:15}}>
                          <View style={{flexDirection:"row"}}>
                          <Pressable style={[styles.KtxBox,{height:25,bottom:10,top:5,marginLeft:22,marginBottom:10,backgroundColor:"#3858A2"}]}>
                                  <Text style={{color:"white", fontSize:15, left:5, fontWeight:"bold"}}>KTX</Text>
                                </Pressable>
                                <Text style={{color:"blue", top:7, left: 15}}>034</Text>
                              </View>
                            <View style={{flexDirection:"row"}}>
                              <Text style={{color:"black", fontSize:25, fontWeight:"bold",marginLeft:20}}>{5+parseInt(hours)}:45</Text>
                              <Text style={{color:"#636363", fontSize:25, fontWeight:"bold"}}>  &rarr;</Text>
                              <Text style={{color:"black", fontSize:25}}>  {7+parseInt(hours)}:34 </Text>
                              <Text style={{color:"#636363",top:10}}>2시간 6분 </Text> 
                              <Pressable style={{width:69.78,height:37.64,borderRadius:5,borderColor:"#787878",borderWidth:2,backgroundColor:"white",justifyContent:"center",flexDirection:"row",left:20,top:10}}>
                                <NaverSvg style={{alignSelf:"center"}}></NaverSvg>
                                <Text style={{color:"black", fontWeight:"bold",alignSelf:"center",marginLeft:4}}>예매</Text>
                              </Pressable>
                            </View>
                            <View style={{flexDirection:"row",marginTop:5}}>
                              
                                <Pressable style={{borderColor:"#636363", borderWidth:1 ,width:35, borderRadius:3,marginLeft:20,justifyContent:"center"}}>
                                <Text style={{color:"black",alignSelf:"center"}}>일반</Text></Pressable>
                            
                                 <Text style={{color:"#636363",marginLeft:5}}>예매가능</Text>
                           
                                 <Pressable style={{borderColor:"#636363", borderWidth:1 ,width:20, borderRadius:3,marginLeft:10,justifyContent:"center"}}>
                                <Text style={{color:"black",alignSelf:"center"}}>특</Text></Pressable>                              
                              <Text style={{color:"red",marginLeft:5}}>매진</Text>
                            </View>
                          </View>
                          <MicSvg style={{position:"absolute" ,top: 700}} onPress={replay}></MicSvg>
                        




                    </View> : null}
          
















        
        
        {adult ?  <View style={{flex:1, backgroundColor:"#F8F8F8",borderTopRightRadius:30, borderTopLeftRadius:30,}}>
                      <View style={{flex:0.1, backgroundColor:"#F8F8F8",borderTopRightRadius:30, top:30,borderTopLeftRadius:30, borderBottomWidth:3, borderColor:"black", justifyContent:"center"}}>
                        <Text style={styles.text16}>인원선택</Text>
                      </View>
                      <View style={{flex:0.1, backgroundColor:"#F8F8F8",top:30, flexDirection:"row",alignItems:"center",justifyContent:"flex-start"}}>
                        <Pressable style={styles.fellBox}><Text style={{color:"white", fontWeight:"bold", alignSelf:"center"}}>!</Text></Pressable>
                        <Text style={{color:"black", fontWeight:"bold", left:15 }}>1~9명까지 선택 가능합니다.</Text>
                      </View>
                      

                      <View style={{flex:0.1, backgroundColor:"white",alignItems:"center",justifyContent:"flex-start",flexDirection:"row",borderColor:"gray", borderBottomWidth:2}}>
                        <View style={{justifyContent:"center",alignItems:"center"}}><Text style={styles.text17}>어른 {ad}명</Text>
                        <Text style={styles.text18}>만 13세 이상</Text>
                        </View>
                        <View style={{flexDirection:"row",alignSelf:"center",left:"50%"}}>
                        <Pressable style={styles.minusBox}><Text style={{color:"white", fontWeight:"bold", fontSize:18,alignSelf:"center"}} onPress={onDecreaseAd}>ㅡ</Text></Pressable>
                        <Text style={[styles.text19,{marginLeft:6,marginRight:6,fontSize:18}]}>{ad}</Text>
                        <Pressable style={styles.plusBox}><Text style={{color:"white", fontWeight:"bold", fontSize:18,alignSelf:"center"}} onPress={onIncreaseAd}>+</Text></Pressable>
                        </View>
                      </View>
                    

                      <View style={{flex:0.1, backgroundColor:"white",alignItems:"center",justifyContent:"flex-start",flexDirection:"row",borderColor:"gray", borderBottomWidth:2}}>
                        <View style={{justifyContent:"center",alignItems:"center"}}><Text style={styles.text17}>경로 {gyon}명</Text>
                        <Text style={styles.text18}>만 65세이상</Text>
                        </View>
                        <View style={{flexDirection:"row", left:"50%"}}>
                        <Pressable style={styles.minusBox}><Text style={{color:"white", fontWeight:"bold", fontSize:18,alignSelf:"center"}} onPress={gyonDecreaseAd}>ㅡ</Text></Pressable>
                        <Text style={[styles.text19,{marginLeft:6,marginRight:6,fontSize:18}]}>{gyon}</Text>
                        <TouchableOpacity style={styles.plusBox}><Text style={{color:"white", fontWeight:"bold", fontSize:18,alignSelf:"center"}} onPress={gyonIncreaseAd}>+</Text></TouchableOpacity>
                        </View>
                      </View>

                      <View style={{flex:0.1, backgroundColor:"white",alignItems:"center",justifyContent:"flex-start",flexDirection:"row",borderColor:"gray", borderBottomWidth:2}}>
                        <View style={{justifyContent:"center",alignItems:"center"}}><Text style={styles.text17}>중증 장애인 {jang}명</Text>
                        <Text style={styles.text18}>장애 1~3급</Text>
                        </View>
                        <View style={{flexDirection:"row", left:"35%"}}>
                        <Pressable style={styles.minusBox}><Text style={{color:"white", fontWeight:"bold", alignSelf:"center",fontSize:18,alignSelf:"center"}} onPress={jangDecreaseAd}>ㅡ</Text></Pressable>
                        <Text style={[styles.text19,{marginLeft:6,marginRight:6,fontSize:18}]}>{jang}</Text>
                        <Pressable style={styles.plusBox}><Text style={{color:"white", fontWeight:"bold", alignSelf:"center",fontSize:18,alignSelf:"center"}} onPress={jangIncreaseAd}>+</Text></Pressable>
                        </View>
                      </View>
                      <View style={{flex:0.1, backgroundColor:"white",alignItems:"center",justifyContent:"flex-start",flexDirection:"row",borderColor:"gray", borderBottomWidth:2}}>
                        <View style={{justifyContent:"center",alignItems:"center"}}><Text style={styles.text17}>경증 장애인 {jang2}명</Text>
                        <Text style={styles.text18}>장애 4~6 급</Text>
                        </View>
                        <View style={{flexDirection:"row", left:"35%"}}>
                        <Pressable style={styles.minusBox}><Text style={{color:"white", fontWeight:"bold", fontSize:18,alignSelf:"center"}} onPress={jang2DecreaseAd}>ㅡ</Text></Pressable>
                        <Text style={[styles.text19,{marginLeft:6,marginRight:6,fontSize:18}]}>{jang2}</Text>
                        <Pressable style={styles.plusBox}><Text style={{color:"white", fontWeight:"bold", fontSize:18,alignSelf:"center"}} onPres={jang2IncreaseAd}>+</Text></Pressable>
                        </View>
                      </View>
                      <View style ={{flex:0.2 , justifyContent:"center",alignItems:"center"}}>
                        <TouchableOpacity style={styles.box11} onPress={onPressAdult2}>
                           <Text style={styles.text20} activeOpacity={0.8}> {count} 명 예약</Text>
                        </TouchableOpacity>
                        <MicSvg style={{position:"absolute" ,top: 150}} onPress={replay}></MicSvg>
                      </View>
                    
                  </View> : null}
        
        
        
        
        
        
        {seat ? <View style={{flex:1, backgroundColor:"#F8F8F8",borderTopRightRadius:30, borderTopLeftRadius:30,}}>
                      <View style={{flex:0.1, backgroundColor:"white",borderTopRightRadius:30, top:30,borderTopLeftRadius:30, borderBottomWidth:3, borderColor:"black", justifyContent:"center"}}>
                        <Text style={styles.text16}>좌석유형 선택</Text>
                      </View>
                      <View style={{flex:0.1, backgroundColor:"white",top:30, flexDirection:"row",alignItems:"center",justifyContent:"flex-start"}}>
                        <Pressable style={styles.fellBox}><Text style={{color:"white", fontWeight:"bold", alignSelf:"center"}}>!</Text></Pressable>
                        <Text style={{color:"black", fontWeight:"bold", left:15 }}>선택한 유형의 좌석으로 기차를 조회하고 예매합니다.</Text>
                      </View>
                      <View style={{flex:0.1, backgroundColor:"white",alignItems:"center",justifyContent:"flex-start",flexDirection:"row",borderColor:"gray", borderBottomWidth:2}}>
                        
                        <View style={{justifyContent:"center",alignItems:"flex-start"}}>
                        <BouncyCheckbox
                              style={{alignSelf:"flex-start",top: 35, left: 5}}
                              size={25}
                              fillColor="#03CF5D"
                              unfillColor="#FFFFFF"
                              iconStyle={{ borderColor: "#03CF5D" }}
                              textStyle={{ fontFamily: "JosefinSans-Regular" }}
                              onPress={()=> {setVava("일반좌석"); if(eduCount == 12){music12_1.play(); setEduCount(51);}}}
                        />
                        <Text style={styles.text21}>일반좌석</Text>
                        <Text style={styles.text22}>1인 기본 좌석 입니다.</Text>
                        </View>
                        
                      </View>

                      <View style={{flex:0.1, backgroundColor:"white",alignItems:"center",justifyContent:"flex-start",flexDirection:"row",borderColor:"gray", borderBottomWidth:2}}>
                        
                        <View style={{justifyContent:"center",alignItems:"flex-start"}}>
                        <BouncyCheckbox
                              style={{alignSelf:"flex-start",top: 35, left: 5}}
                              size={25}
                              fillColor="#03CF5D"
                              unfillColor="#FFFFFF"
                              iconStyle={{ borderColor: "#03CF5D" }}
                              textStyle={{ fontFamily: "JosefinSans-Regular" }}
                              onPress={()=> setVava("유아동반석")}
                        />
                        <Text style={styles.text21}>유아동반석</Text>
                        <Text style={styles.text22}>유아동반 또는 편화대화 객차입니다..</Text>
                        </View>
                        
                      </View>
                      
                      <View style={{flex:0.1, backgroundColor:"white",alignItems:"center",justifyContent:"flex-start",flexDirection:"row",borderColor:"gray", borderBottomWidth:2}}>
                        
                        <View style={{justifyContent:"center",alignItems:"flex-start"}}>
                        <BouncyCheckbox
                              style={{alignSelf:"flex-start",top: 35, left: 5}}
                              size={25}
                              fillColor="#03CF5D"
                              unfillColor="#FFFFFF"
                              iconStyle={{ borderColor: "#03CF5D" }}
                              textStyle={{ fontFamily: "JosefinSans-Regular" }}
                              onPress={()=> {setVava("휠체어석")}}
                        />
                        <Text style={styles.text21}>휠체어석</Text>
                        <Text style={styles.text22}>휠체어석과 일행을 위한 일반좌석이 자동배정됩니다.</Text>
                        </View>
                        
                      </View>
                        <View style ={{flex:0.2 , justifyContent:"center",alignItems:"center"}}>
                            <TouchableOpacity style={styles.box11} onPress={onPressSeat2}>
                               <Text style={styles.text20} activeOpacity={0.8}>{vava} 적용</Text>
                            </TouchableOpacity>
                         </View>
                         <MicSvg style={{position:"absolute" ,top: 660}} onPress={replay}></MicSvg>
                      </View>
                       : null}
        
        
        
        
        
        
        
          {/* <TextInput style={styles.input} placeholder='도착역'  placeholderTextColor={textColor2} onChangeText={text => {if(text == "ii"){if (eduCount == 4){music6.play(); setEduCount(5); setStation2("red"); setName2(text);}}}}></TextInput> */}
        
        
        
        
        

        {arrive ? <View style={{flex:1, backgroundColor: "white",borderColor:"white",}}>
                          <View  style={{flex:0.2,flexDirection: "row", backgroundColor:"white"}}>
                            <Text style={[styles.text9,{marginTop:10}]}>출발지 선택</Text>
                            <Pressable style={[styles.box12,{marginTop:10}]} onPress={onPressArrive2}>
                              <Text style={styles.text10}>X</Text>
                            </Pressable>
                            <DotSvg style={{position:'absolute', top:"78%" , left: "80%"}}></DotSvg>
                            <TextInput style={styles.input} placeholder='   도착역검색'  placeholderTextColor={textColor2} onChangeText={text => {if(text == "ii"){if (eduCount == 4){music6.play(); setEduCount(5); setStation2("red"); setName2(text);}}}}></TextInput>
                          </View>
                          <View style={{flex:0.1,flexDirection: "row", backgroundColor:"white",justifyContent:"center", alignContent:"center"}}>
                            <Text style={[styles.text12,{color:"#5669F6",fontSize:25}]}>지역순</Text>
                            
                            <Text style={[styles.text12,{color:"#787878",fontSize:25}]}>가나다순</Text>
                          </View>

                          <View style={{flex:0.05,flexDirection: "row", backgroundColor:"white",}}>
                          <ScrollView style={{flexDirection: "row",backgroundColor:"white",}} horizontal={true}>

                           <Pressable style={[styles.box13,{width:95.46,height:37.15,backgroundColor:"#5669F6"}]}>
                              <Text style={[styles.text13,{fontSize:17,color:"white"}]}>최근.주변</Text>
                           </Pressable>

                           <Pressable style={[styles.box13,{width:56.89,height:37.15,backgroundColor:"white",borderColor:"#787878",borderWidth:1}]}>
                              <Text style={[styles.text14,{color:"black",fontSize:17}]}>대전</Text>
                           </Pressable>
                           
                           <Pressable style={[styles.box13,{width:56.89,height:37.15,backgroundColor:"white",borderColor:"#787878",borderWidth:1}]}>
                              <Text style={[styles.text14,{color:"black",fontSize:17}]}>인천</Text>
                           </Pressable>
                           
                           <Pressable style={[styles.box13,{width:56.89,height:37.15,backgroundColor:"white",borderColor:"#787878",borderWidth:1}]}>
                              <Text style={[styles.text14,{color:"black",fontSize:17}]}>서울</Text>
                           </Pressable>

                           <Pressable style={[styles.box13,{width:56.89,height:37.15,backgroundColor:"white",borderColor:"#787878",borderWidth:1}]}>
                              <Text style={[styles.text14,{color:"black",fontSize:17}]}>대구</Text>
                           </Pressable>

                           <Pressable style={[styles.box13,{width:56.89,height:37.15,backgroundColor:"white",borderColor:"#787878",borderWidth:1}]}>
                              <Text style={[styles.text14,{color:"black",fontSize:17}]}>부산</Text>
                           </Pressable>

                          </ScrollView>
                          </View>
                          <View style={{flex: 0.002, backgroundColor: "#787878",marginTop:20}}></View>
                          
                          <View style={{flex: 0.08, backgroundColor:"white", borderBottomWidth:2, borderColor: "white", flexDirection:"row"}}>
                           <Text style={{fontSize:15, fontWeight:"bold", alignSelf:"center",left:"15%", color:"#787878"}}>최근 조회</Text>
                           <Text style={{fontSize:15, fontWeight:"bold", alignSelf:"center", left:"400%", color:"#787878"}}>전체삭제</Text>

                          </View>
                          <View style={{flex: 0.08, backgroundColor:"white", flexDirection:"row",borderBottomWidth:2, borderColor:"white",alignItems:"center",justifyContent:"center"}}>
                           <DotgraySvg style={{right:"100%"}}></DotgraySvg>
                           <Text style={{fontSize:16, fontWeight:"700",margin:15,color:"black",right:"110%"}}>천안역</Text>
                           <Pressable style={[styles.KtxBox,{width:27.33, height:16,borderRadius:2,backgroundColor:"#3858A2",marginRight:5,right:"110%",top:0}]}>
                            <Text style={[styles.text15,{fontSize:11}]}>KTX</Text>
                           </Pressable>
                           <Pressable style={[styles.KtxBox,{width:27.33, height:16,borderRadius:2,backgroundColor:"#951136",right:"110%",top:0}]}>
                            <Text style={[styles.text15,{fontSize:11}]}>SRT</Text>
                           </Pressable>
                           <Text style={{color:"black",left:"70%"}}>12.07       X</Text>
                           
                          </View>

                          <View style={{flex: 0.08, backgroundColor:"white", flexDirection:"row",borderBottomWidth:2, borderColor:"white",alignItems:"center",justifyContent:"center"}}>
                           <DotgraySvg style={{right:"100%"}}></DotgraySvg>
                           <Text style={{fontSize:16, fontWeight:"700",margin:15,color:station2,right:"110%"}} onPress={onPressArrive2}>서울역</Text>
                           <Pressable style={[styles.KtxBox,{width:27.33, height:16,borderRadius:2,backgroundColor:"#3858A2",marginRight:5,right:"110%",top:0}]}>
                            <Text style={[styles.text15,{fontSize:11}]}>KTX</Text>
                           </Pressable>
                           <Pressable style={[styles.KtxBox,{width:27.33, height:16,borderRadius:2,backgroundColor:"#951136",right:"110%",top:0}]}>
                            <Text style={[styles.text15,{fontSize:11}]}>SRT</Text>
                           </Pressable>
                           <Text style={{color:"black",left:"70%"}}>12.07       X</Text>
                           
                          </View>

                          <View style={{flex: 0.08, backgroundColor:"white", flexDirection:"row",borderBottomWidth:2, borderColor:"#d3d3d3",alignItems:"center",justifyContent:"center"}}>
                           <DotgraySvg style={{right:"100%"}}></DotgraySvg>
                           <Text style={{fontSize:16, fontWeight:"700",margin:15,color:"black",right:"110%"}}>부산역</Text>
                           <Pressable style={[styles.KtxBox,{width:27.33, height:16,borderRadius:2,backgroundColor:"#3858A2",marginRight:5,right:"110%",top:0}]}>
                            <Text style={[styles.text15,{fontSize:11}]}>KTX</Text>
                           </Pressable>
                           <Pressable style={[styles.KtxBox,{width:27.33, height:16,borderRadius:2,backgroundColor:"#951136",right:"110%",top:0}]}>
                            <Text style={[styles.text15,{fontSize:11}]}>SRT</Text>
                           </Pressable>
                           <Text style={{color:"black",left:"70%"}}>12.07       X</Text>
                    
                          </View>
                          <MicSvg style={{position:"absolute",top:"75%"}} onPress={replay}></MicSvg>
                      </View> : null}




        {departPage ? <View style={{flex:1, backgroundColor: "white",borderColor:"white",}}>
                          <View  style={{flex:0.2,flexDirection: "row", backgroundColor:"white"}}>
                            <Text style={[styles.text9,{marginTop:10}]}>출발지 선택</Text>
                            <Pressable style={[styles.box12,{marginTop:10}]} onPress={onPressDepartPage}>
                              <Text style={styles.text10}>X</Text>
                            </Pressable>
                            <DotSvg style={{position:'absolute', top:"78%" , left: "80%"}}></DotSvg>
                            <TextInput style={styles.input}  placeholder='    출발역 검색'  placeholderTextColor= {textColor} onChangeText={text => {if(text == "zz"){if (eduCount == 1){music3.play(); setEduCount(2); setStation("red"); setName(text);}}}}></TextInput>
                          </View>
                          {/* onChangeText={text => setName(text)} */}
                          <View style={{flex:0.1,flexDirection: "row", backgroundColor:"white",justifyContent:"center", alignContent:"center"}}>
                            <Text style={[styles.text12,{color:"#5669F6",fontSize:25}]}>지역순</Text>
                            
                            <Text style={[styles.text12,{color:"#787878",fontSize:25}]}>가나다순</Text>
                          </View>

                          <View style={{flex:0.05,flexDirection: "row", backgroundColor:"white",}}>
                          <ScrollView style={{flexDirection: "row",backgroundColor:"white",}} horizontal={true}>

                           <Pressable style={[styles.box13,{width:95.46,height:37.15,backgroundColor:"#5669F6"}]}>
                              <Text style={[styles.text13,{fontSize:17,color:"white"}]}>최근.주변</Text>
                           </Pressable>

                           <Pressable style={[styles.box13,{width:56.89,height:37.15,backgroundColor:"white",borderColor:"#787878",borderWidth:1}]}>
                              <Text style={[styles.text14,{color:"black",fontSize:17}]}>대전</Text>
                           </Pressable>
                           
                           <Pressable style={[styles.box13,{width:56.89,height:37.15,backgroundColor:"white",borderColor:"#787878",borderWidth:1}]}>
                              <Text style={[styles.text14,{color:"black",fontSize:17}]}>인천</Text>
                           </Pressable>
                           
                           <Pressable style={[styles.box13,{width:56.89,height:37.15,backgroundColor:"white",borderColor:"#787878",borderWidth:1}]}>
                              <Text style={[styles.text14,{color:"black",fontSize:17}]}>서울</Text>
                           </Pressable>

                           <Pressable style={[styles.box13,{width:56.89,height:37.15,backgroundColor:"white",borderColor:"#787878",borderWidth:1}]}>
                              <Text style={[styles.text14,{color:"black",fontSize:17}]}>대구</Text>
                           </Pressable>

                           <Pressable style={[styles.box13,{width:56.89,height:37.15,backgroundColor:"white",borderColor:"#787878",borderWidth:1}]}>
                              <Text style={[styles.text14,{color:"black",fontSize:17}]}>부산</Text>
                           </Pressable>

                          </ScrollView>
                          </View>
                          <View style={{flex: 0.002, backgroundColor: "#787878",marginTop:20}}></View>
                          
                          <View style={{flex: 0.08, backgroundColor:"white", borderBottomWidth:2, borderColor: "white", flexDirection:"row"}}>
                           <Text style={{fontSize:15, fontWeight:"bold", alignSelf:"center",left:"15%", color:"#787878"}}>최근 조회</Text>
                           <Text style={{fontSize:15, fontWeight:"bold", alignSelf:"center", left:"400%", color:"#787878"}}>전체삭제</Text>

                          </View>
                          <View style={{flex: 0.08, backgroundColor:"white", flexDirection:"row",borderBottomWidth:2, borderColor:"white",alignItems:"center",justifyContent:"center"}}>
                           <DotgraySvg style={{right:"100%"}}></DotgraySvg>
                           <Text style={{fontSize:16, fontWeight:"700",margin:15,color:"black",right:"110%"}}>오송역</Text>
                           <Pressable style={[styles.KtxBox,{width:27.33, height:16,borderRadius:2,backgroundColor:"#3858A2",marginRight:5,right:"110%",top:0}]}>
                            <Text style={[styles.text15,{fontSize:11}]}>KTX</Text>
                           </Pressable>
                           <Pressable style={[styles.KtxBox,{width:27.33, height:16,borderRadius:2,backgroundColor:"#951136",right:"110%",top:0}]}>
                            <Text style={[styles.text15,{fontSize:11}]}>SRT</Text>
                           </Pressable>
                           <Text style={{color:"black",left:"70%"}}>12.07       X</Text>
                           
                          </View>

                          <View style={{flex: 0.08, backgroundColor:"white", flexDirection:"row",borderBottomWidth:2, borderColor:"white",alignItems:"center",justifyContent:"center"}}>
                           <DotgraySvg style={{right:"100%"}}></DotgraySvg>
                           <Text style={{fontSize:16, fontWeight:"700",margin:15,color:station,right:"110%"}} onPress={onPressDepartPage}>대전역</Text>
                           <Pressable style={[styles.KtxBox,{width:27.33, height:16,borderRadius:2,backgroundColor:"#3858A2",marginRight:5,right:"110%",top:0}]}>
                            <Text style={[styles.text15,{fontSize:11}]}>KTX</Text>
                           </Pressable>
                           <Pressable style={[styles.KtxBox,{width:27.33, height:16,borderRadius:2,backgroundColor:"#951136",right:"110%",top:0}]}>
                            <Text style={[styles.text15,{fontSize:11}]}>SRT</Text>
                           </Pressable>
                           <Text style={{color:"black",left:"70%"}}>12.07       X</Text>
                           
                          </View>

                          <View style={{flex: 0.08, backgroundColor:"white", flexDirection:"row",borderBottomWidth:2, borderColor:"#d3d3d3",alignItems:"center",justifyContent:"center"}}>
                           <DotgraySvg style={{right:"100%"}}></DotgraySvg>
                           <Text style={{fontSize:16, fontWeight:"700",margin:15,color:"black",right:"110%"}}>대구역</Text>
                           <Pressable style={[styles.KtxBox,{width:27.33, height:16,borderRadius:2,backgroundColor:"#3858A2",marginRight:5,right:"110%",top:0}]}>
                            <Text style={[styles.text15,{fontSize:11}]}>KTX</Text>
                           </Pressable>
                           <Pressable style={[styles.KtxBox,{width:27.33, height:16,borderRadius:2,backgroundColor:"#951136",right:"110%",top:0}]}>
                            <Text style={[styles.text15,{fontSize:11}]}>SRT</Text>
                           </Pressable>
                           <Text style={{color:"black",left:"70%"}}>12.07       X</Text>
                    
                          </View>
                        <MicSvg style={{position:"absolute",top:"75%"}} onPress={replay}></MicSvg>

                      </View> : null}









        { depart ? (<View style={{flex:0.34, justifyContent:'center', alignContent: "center",backgroundColor:"#03CF5D"}}>
            <Pressable style={{justifyContent:'center', alignSelf: "center"}}>
            <Text style={{fontSize:25,fontWeight:"700",color:"white",bottom:50}}>기차 조회 & 예매</Text>
            </Pressable>

          </View>) : null}
        
        { depart ? (<View style={{flex:0.3, justifyContent:"center", alignContent: "center",width:379.24,height:465.76, left: 16.38, position:'absolute', marginTop:210, }}>
            <Pressable style={styles.box2}>
             
              <Pressable style={styles.box3}>
                <Pressable style={styles.box4} onPress={onPressDepart}>
                <ArrowSvg style={{top:20,left:15}}></ArrowSvg>
                <Text style={[styles.text6,{color:departColor}]}>출발</Text>
                <Text style={[styles.text7,{color: departColor}]}>{name}</Text>
                </Pressable>
                <Pressable style={styles.box5} onPress={onPressArrive}>
                <RedButtonSvg style={{top:20,left:15}}></RedButtonSvg>
                <Text style={[styles.text66,{color:arriveColor}]}>도착</Text>
                <Text style={[styles.text77,{color:arriveColor}]}>{name2}</Text>
                </Pressable>
              </Pressable>

              <Pressable style={styles.box7}>
                <Text style={{color:"#636363", fontSize:15, fontWeight:"bold",bottom:"3%",left:"8%"}}>일정.인원 선택</Text>
                <Pressable style={styles.box8} onPress={onPressDay}>
                <DateSvg style={{top:15,left:15}}></DateSvg>
                <Text style={[styles.text8,{bottom:12, color:dayColor}]}>  가는날    {years}.{months}.{days}({dayOfWeek})</Text>
                </Pressable>
                <Pressable style={styles.box9} onPress={onPressAdult}>
                <PersonSvg  style={{top:15,left:13}}></PersonSvg>
                <Text style={[styles.text8,{bottom:10,left:10, color:adultColor}]}>어른{count}명</Text>
                </Pressable>

                <Pressable style={styles.box10} onPress={onPressSeat}>
                  <AirPersonSvg style={{top:15,left:13}}></AirPersonSvg>
                  <Text style={[styles.text8,{left:10,bottom:10,color:seatColor}]}>{vava}</Text>
                </Pressable>

                <TouchableOpacity style={styles.box11} onPress={onPressSchedule}>
                  <Text style={styles.text5} activeOpacity={0.8}>시간표 조회</Text>
                </TouchableOpacity>

             
              </Pressable>
            </Pressable>
            <View style={{flex: 0.3,alignItems:"center"}}>
            <MicSvg style={{bottom:50}} onPress={replay}></MicSvg>
            </View>
          </View>) : null }

        
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

  text2: {
    color: "#787878",
    fontWeight:"bold",
    fontSize: 18,
    marginLeft:20,
  },

  text3: {
    
    fontWeight:"bold",
    fontSize: 18,
    justifyContent:"center", alignContent: "center",
    marginLeft: 43

  },

  text4: {
    
    fontWeight:"bold",
    fontSize: 18,
    justifyContent:"center", alignContent: "center",
    marginLeft: 60

  },

  text5: {
    color:"white",
    fontWeight:"bold",
    fontSize: 18,
    justifyContent:"center", alignContent: "center",
    marginLeft: 100

  },

  text6: {
    color:"#636363",
    fontWeight:"bold",
    fontSize: 16,
    justifyContent:"center",
    left:60,
    bottom:10
    


    

  },
  text66: {
    color:"#636363",
    fontWeight:"bold",
    fontSize: 16,
    justifyContent:"center",
    left:60,
    bottom:15
    


    

  },

  text7: {
    color:"#636363",
    fontWeight:"bold",
    fontSize: 13,
    justifyContent:"center", alignContent: "center",
    left:60,
    bottom:10
    

  },
  text77: {
    color:"#636363",
    fontWeight:"bold",
    fontSize: 13,
    justifyContent:"center", alignContent: "center",
    left:60,
    bottom:15
    
    
    

  },


  text8: {
    color:"#636363",
    fontWeight:"bold",
    fontSize: 20,
    alignSelf:"center"
    

  },

  text9: {
    color:"#636363",
    fontWeight:"bold",
    fontSize: 25,
    left:15,
    color: "black",
    top:15,
  },

  text10: {
    
  
    fontSize: 25,
    color: "black",
    
  },
  
  text12: {

    fontSize:28,
    fontWeight:"bold",
    margin:25,

  },

  text13: {

    fontSize:20,
    fontWeight:"bold",
    color:"black",
    alignSelf: "center",

  },
  text14: {

    fontSize:20,
    fontWeight:"bold",
    alignSelf: "center",
    color:"black"

  },

  text15: {
    color:"white", fontSize:17,fontWeight:"bold", justifyContent:"center",alignSelf:"center"
  },

  text16:{
    color:"black", fontSize:20, justifyContent:"center", alignSelf:"flex-start",left:20,fontWeight:"bold"
  },
  text17:{
    color:"black",fontSize:20, fontWeight:"bold",left:15
  },
  text18:{
    color:"gray",fontSize:13, fontWeight:"bold",alignSelf:"flex-start", left:15
  },

  text19:{
    color:"black",fontSize:15, fontWeight:"bold",left:5, bottom:2
  },

  text20: {
    color:"white",
    fontWeight:"bold",
    fontSize: 18,
    justifyContent:"center",
    alignSelf:"center"

  },

  text21:{
    color:"black",fontSize:20, fontWeight:"bold",left:40,alignSelf:"flex-start"
  },
  text22:{
    color:"gray",fontSize:13, fontWeight:"bold",alignSelf:"flex-start", left:40
  },



  box:{ width:139.57, height: 235.4, borderRadius:15, borderColor: "#F8F8F8",justifyContent:"center", alignContent: "center",marginTop: 80,
margin:20},

  box2:{
    width:379.24 , height : 600.76, borderRadius: 15, 
  },
  box3:{
  left:25, width:330.24 , height : 160, borderRadius: 15, borderColor: "white", backgroundColor: "#F8F8F8" , top:20
  },

  box4:{
    left:16, width:300 , height : 60, borderTopLeftRadius:15, borderTopRightRadius:15, borderColor: "white", backgroundColor: "white",top:18 
    },

    box5:{
      left:16,  width:300 , height : 60, borderBottomLeftRadius:15, borderBottomRightRadius:15, borderColor: "white", backgroundColor: "white",top:19   
      },

   box6:{
    width:379.24 , height : 465.76, borderRadius: 15, borderColor: "white", backgroundColor: "white" 
  },
  box7:{
  left:25, width:330.24 , height : 320, borderRadius: 15, borderColor: "white", backgroundColor: "#F8F8F8" , top:35,justifyContent:"center", alignContent: "center"
  },

  box8:{
     width:290 , height : 60, borderRadius:15, borderColor: "white", backgroundColor: "white",justifyContent:'center', alignSelf: "center"
    },

    box9:{
       width:145 , height : 60,  borderRadius:15,borderColor: "white", backgroundColor: "white",top: 20 ,justifyContent:"center", alignContent: "center",left:20,  
      },
      box10:{
        width:145 , height : 60,  borderRadius:15,borderColor: "white", backgroundColor: "white",left:170,bottom:40,justifyContent:"center", alignContent: "center"
        },
      

       box11:{
         width:290 , height : 60, borderRadius:30, borderColor: "white", backgroundColor: "#03CF5D",top:5, justifyContent:'center', alignSelf: "center"
        },
      box111:{
          width:170 , height : 50, borderRadius:10, borderColor: "white", backgroundColor: "#03CF5D",top:5, justifyContent:'center', alignSelf: "center",margin:20
         },
       
        box12:{
          width:40 , height : 40,justifyContent:"center", alignContent: "center", left:200, top:10
         },
        box13:{
          width:100, height:40,backgroundColor:"#e6e6fa", borderRadius:10,margin:7, justifyContent:"center", alignSelf: "center"
        },

        KtxBox:{
          backgroundColor:"blue", width:40, height: 30, borderRadius: 4 , top: 16,
        },
        fellBox:{
          backgroundColor:"gray", borderRadius:100, width:20 ,height:20, left:10
        },

        plusBox:{
          backgroundColor:"#5669F6", borderRadius:100, width:30 ,height:30,left:10
        },

        minusBox:{
          backgroundColor:"gray", borderRadius:100, width:30 ,height:30,
        },
        
         input: {
          borderRadius:15,
          fontSize:20,
          alignSelf:"flex-end",
          right:"93.5%",
          width:387,
          height: 60.2,
          borderColor: "#03CF5D",
          borderWidth: 2,
          color:"black"
        },
      

})