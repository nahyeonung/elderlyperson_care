import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,SafeAreaView,Alert,TouchableOpacity,ImageBackground,Image,TextInput,ScrollView} from 'react-native';
import ArrowSvg from '../../src/svgFile/Vector 28.svg';
import RedButtonSvg from '../../src/svgFile/Group 39.svg';
import Sound from 'react-native-sound';
import BackSvg from '../../src/svgFile/more.svg';
import DotBoSvg from '../../src/svgFile/dotbo.svg';
import NaverSvg from '../../src/svgFile/naver_pay.svg';
import Micc from '../../src/svgFile/micc.svg';
import DotSvg from '../../src/svgFile/dot.svg';
import DateSvg from '../../src/svgFile/date_range.svg';
import BuySvg from '../../src/svgFile/buy.svg';
import CheckSvg from '../../src/svgFile/cch.svg';
import SeatSvg from '../../src/svgFile/seat.svg';
import PaySvg from '../../src/svgFile/pay.svg';
import GangSvg from '../../src/svgFile/gang.svg';
import PersonSvg from '../../src/svgFile/person.svg';
import WindowSvg from '../../src/svgFile/window.svg';
import Miclogo from '../../src/svgFile/miclogo.svg';
import AirPersonSvg from '../../src/svgFile/airline_seat_recline_extra.svg';
import Xcodu from '../../src/svgFile/xcodu.svg';
import Arr from '../../src/svgFile/arrow.svg';


import BouncyCheckbox from "react-native-bouncy-checkbox";





  const data = new Date();
  const hours = String(data.getHours());
  const days = String(data.getDate());
  const months = String(data.getMonth()+1);
  const years = String(data.getFullYear());

  // 요일 한글로 바꾸기
  let week =  ['일','월','화','수','목','금','토'];
  let dayOfWeek = week[data.getDay()];
  const daysTo = String(data.getDate());



//음성 파일
let path = require('../../mp3/music.mp3');
let music = new Sound(path, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path1 = require('../../mp3/music1.mp3');
let music1 = new Sound(path1, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path2 = require('../../mp3/music2.mp3');
let music2 = new Sound(path2, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path3 = require('../../mp3/music3.mp3');
let music3 = new Sound(path3, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path4 = require('../../mp3/music4.mp3');
let music4 = new Sound(path4, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path5 = require('../../mp3/music5.mp3');
let music5 = new Sound(path5, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path6 = require('../../mp3/music6.mp3');
let music6 = new Sound(path6, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path7 = require('../../mp3/music7.mp3');
let music7 = new Sound(path7, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path8 = require('../../mp3/music8.mp3');
let music8 = new Sound(path8, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path9 = require('../../mp3/music9.mp3');
let music9 = new Sound(path9, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path10 = require('../../mp3/music10.mp3');
let music10 = new Sound(path10, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path11 = require('../../mp3/music11.mp3');
let music11 = new Sound(path11, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path12 = require('../../mp3/music12.mp3');
let music12 = new Sound(path12, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path13 = require('../../mp3/music13.mp3');
let music13 = new Sound(path13, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path14 = require('../../mp3/music14.mp3');
let music14 = new Sound(path14, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path15 = require('../../mp3/auto.mp3');
let music15 = new Sound(path15, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path16 = require('../../mp3/music16.mp3');
let music16 = new Sound(path16, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path17 = require('../../mp3/music17.mp3');
let music17 = new Sound(path17, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path18 = require('../../mp3/music18.mp3');
let music18 = new Sound(path18, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path19 = require('../../mp3/music19.mp3');
let music19 = new Sound(path19, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path20 = require('../../mp3/music20.mp3');
let music20 = new Sound(path20, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path21 = require('../../mp3/music21.mp3');
let music21 = new Sound(path21, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path22 = require('../../mp3/music22.mp3');
let music22 = new Sound(path22, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 

let path80 = require('../../mp3/ho.mp3');
let music80 = new Sound(path80, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 


















export default function Train({navigation}){

   useEffect(() => {
      music.play();
    },[])
  const[text,setText] = useState(true);
  const[backText,setBackText] = useState(true);
  const[depart,setDepart] = useState(false);
  const[time,setTime] = useState(false);
  const [backDepart,setBackDepart] = useState(false);
  const [backArrive,setBackArrive] = useState(false);
  const [backTime,setBackTime] = useState(false);
  const [departTextInput,setDepartTextInput] = useState(false);
  const [name,setName] = useState("출발기차역")
  const [name2,setName2] = useState("도착기차역")
  const [departColor,setDepartColor] =useState("#BCBCBC");
  const [arriveColor,setArriveColor] =useState("#BCBCBC");
  const [backTime2,setBackTime2] = useState(false);
  const [time2,setTime2] = useState(false);
  const [time3,setTime3] = useState(false);
  const [backAdult,setBackAdult] = useState(false);
  const [adult,setAdult] = useState(false);
  const [backCheck,setBackCheck]= useState(false);
  const [check,setCheck] = useState(false);
  const [departColor2,setDepartColor2] =useState("#BCBCBC");
  const [backCheck2,setBackCheck2]= useState(false);
  const [check2,setCheck2] = useState(false);

  const [backBuy,setBackBuy]= useState(false);
  const [buy,setBuy] = useState(false);
  const [buy2,setBuy2] = useState(false);

  const [backSeat,setBackSeat]= useState(false);
  const [seat,setSeat] = useState(false);

  const [backSeat2,setBackSeat2]= useState(false);
  const [seat2,setSeat2] = useState(false);

  const [mic,setMic] = useState(true);

  const [backClient,setBackClient]= useState(false);
  const [client,setClient] = useState(false);
  const [client2,setClient2] = useState(false);
  const [client3,setClient3] = useState(false);
  const [percent,setPercent] = useState("180%");

  const [auto,setAuto] = useState(false);
  const [ho,setHo] =useState(false);



  const [departTT,setDepartTT] = useState(false);
  const [departTT2,setDepartTT2] = useState(false);

  const [window,setWindow] = useState(false);

  const [payText,setPayText] = useState(true);
  const [arrive,setArrive] = useState(false);
  const [arriveTextInput,setArriveTextInput] = useState(false);
  const [arr,setArr] = useState(false);
  // 상태 카운트
  const[count,setCount] = useState(0);
  //음성 목록

  function onPressText() {
  
      setText(false);
      setDepart(true);
      setCount(1);
      setArr(true);
      
      
    
  }

  function onPressDepart(){
      setBackText(false);
      setBackDepart(true);
      setDepart(false);
      setDepartTextInput(true);
      setCount(2);
      music2.play();
      music1.stop();
  }
  
  function onPressDot(){

      setBackDepart(false);
      setBackText(true);
      setDepartTextInput(false);
      setArrive(true);
      setDepartColor("black");
      setCount(4);
      music4.play();
      music3.stop();
  }

  function onPressDot2(){

    setBackArrive(false);
    setBackText(false);
    setArriveTextInput(false);
    setArriveColor("black");
    setBackTime(true);
    setTime(true);
    setDepartColor2("black")
    setCount(7);
    music7.play();
    music6.stop();
}


function onPressArrive(){
  setBackArrive(true);
  setArriveTextInput(true);
  setBackText(false);
  setArrive(false);  
  setCount(5);
  music5.play();
  music4.stop();
}


function onPressTime(){
  setBackTime(false);
  setBackTime2(true);
  setTime(false);
  setTime2(true);
  music8.play();
  music7.stop();
  setCount(8)
}

function onPressTime2(){
  setCount(9);
  music8.stop();
  music9.play();
  setTime2(false);
  setTime3(true);
}

function onPressTime3(){
  setCount(10);
  music9.stop();
  music10.play();
  setBackTime2(false);
  setTime3(false);
  setBackAdult(true);
  setAdult(true);
}

function onPressCheck(){
  setCount(11);
  music11.play();
  music10.stop();
  setBackCheck(true);
  setCheck(true);
  setBackAdult(false);
  setAdult(false);
}

function onPressCheck2(){
  setCount(12);
  music12.play();
  music11.stop();
  setBackCheck(false);
  setCheck(false);
  setBackCheck2(true);
  setCheck2(true);
}

function onPressBuy(){
  setCount(13);
  music13.play();
  music12.stop();
  setBackCheck2(false);
  setCheck2(false);
  setBackBuy(true);
  setBuy(true);

}

function onPressBuy2(){
  setCount(14);
  music14.play();
  music13.stop();
  setBackBuy(true);
  setBuy(false);
  setBuy2(true);


}

function onPressSeat(){
  setAuto(true);
  setCount(80);
  music15.play();
  music14.stop();
  setBackBuy(false);
  setBuy2(false);
  setBackSeat(true);
  setSeat(true);
  
}

// function onPressSeat2(){
  
//   setBackSeat2(true);
//   setSeat2(true);
//   setBackSeat(false);
//   setSeat(false);
//   setMic(false);
// }

function onPressSeat3(){
  setCount(17);
  music17.play();
  music16.stop();
  setBackSeat2(true);
  setSeat2(true);
  setBackSeat(false);
  setSeat(false);
  setMic(false);
  setWindow(false);
  setPercent("180%");
  setAuto(false);
}

function onPressSeat2(){
  setCount(16);
  music16.play();
  music15.stop();
  setWindow(true);
  setPercent("140%");
}

function onPressAuto(){
  setCount(15);
  setWindow(false);
  setHo(true);
  music15.stop();
  music80.play();
}


function onPressClient(){
  setCount(18);
  music18.play();
  music17.stop();
  setBackSeat2(false);
  setSeat2(false);
  setMic(true);
  setBackClient(true);
  setClient(true);
}

function onPressClient2(){
  setBackClient(true);
  setClient(false);
  setClient2(true);
  setCount(20);
  music20.play();
  music19.stop();
}

function onPressClient3(){
  setBackClient(true);
  setClient2(false);
  setClient3(true);
  setCount(21);
  music21.play();
  music20.stop();

}

function back(){
  if(count == 1){
    setCount(0)
    setText(true);
      setDepart(false);
      setArr(false);
  }
  else if(count ==2){
    setCount(1);
    setBackText(true);
    setBackDepart(false);
    setDepart(true);
    setDepartTextInput(false);

  }

  else if (count == 4){
    setBackDepart(true);
    setBackText(false);
    setDepartTextInput(true);
    setArrive(false);
    setDepartColor("gray");
    setCount(2);
  }
  else if (count == 5){

    setBackArrive(false);
  setArriveTextInput(false);
  setBackText(true);
  setArrive(true);  
  setCount(4);
    
    
}

else if (count == 7){


  setBackArrive(true);
  setBackText(false);
  setArriveTextInput(true);
  setArriveColor("gray");
  setBackTime(false);
  setTime(false);
  setDepartColor2("gray")
  setCount(6);
}

else if (count == 8){


  setBackTime(true);
  setBackTime2(false);
  setTime(true);
  setTime2(false);
  setCount(7)
}

else if (count == 9){


  setCount(8);
  setTime2(true);
  setTime3(false);
}

else if (count == 10){


  setCount(9);
  setBackTime2(true);
  setTime3(true);
  setBackAdult(false);
  setAdult(false);
}

else if (count == 11){
    setCount(10);
    setBackCheck(false);
    setCheck(false);
    setBackAdult(true);
    setAdult(true);
}

else if (count == 12){


  setCount(11);
  setBackCheck(true);
  setCheck(true);
  setBackCheck2(false);
  setCheck2(false);
}

else if (count == 13){
  setCount(12);
  setBackCheck2(true);
  setCheck2(true);
  setBackBuy(false);
  setBuy(false);
}

else if (count == 14){


  setCount(13);
  setBackBuy(true);
  setBuy(true);
  setBuy2(false);
}

else if (count == 15){


  setCount(14);
  setBackBuy(true);
  setBuy2(true);
  setBackSeat(false);
  setSeat(false);
  setAuto(false);
}

else if (count == 16){


  setCount(15);
  setWindow(false);
  setPercent("140%");

}

else if (count == 17){

  setCount(16);
  setBackSeat2(false);
  setSeat2(false);
  setBackSeat(true);
  setSeat(true);
  setMic(true);
  setWindow(true);
  setPercent("180%");
  setAuto(true);
}

else if (count == 18){


  setCount(17);
  setBackSeat2(true);
  setSeat2(true);
  setMic(false);
  setBackClient(false);
  setClient(false);
}

else if (count == 20){

  setBackClient(true);
  setClient(true);
  setClient2(false);
  setCount(18);
}

else if (count == 21){


  setBackClient(true);
  setClient2(true);
  setClient3(false);
  setCount(20);
}

}




function replay(){
  if(count == 0)
  {
    music.play();
  }
  else if(count == 1){
    music1.play();
  }

  else if(count == 2){
    music2.play();
  }
  
  else if(count == 3){
    music3.play();
  }

  else if(count == 4){
    music4.play();
  }

  else if(count == 5){
    music5.play();
  }

  else if(count == 6){
    music6.play();
  }
  else if(count == 7){
    music7.play();
  }
  else if(count == 8){
    music8.play();
  }
  else if(count == 9){
    music9.play();
  }
  else if(count == 10){
    music10.play();
  }

  else if(count == 11){
    music11.play();
  }
  else if(count == 12){
    music12.play();
  }
  else if(count == 13){
    music13.play();
  }

  else if(count == 14){
    music14.play();
  }
  else if(count == 15){
    music80.play();
  }
  else if(count == 16){
    music16.play();
  }
  else if(count == 17){
    music17.play();
  }
  else if(count == 18){
    music18.play();
  }
  else if(count == 19){
    music19.play();
  }
  else if(count == 20){
    music20.play();
  }
  else if(count == 21){
    music21.play();
  }

  else if(count == 80){
    music15.play();
  }
}


  
  return(
    // <View style={{flex:1}}>
    //   <BackSvg>    
    //   </BackSvg>
    //   <View><Pressable style={{backgroundColor:"white", width:120, height:40, bottom:780,left:"14%"}}>
    //       <Text style={{color:"black"}}>오우쮓</Text>
    //     </Pressable></View>
    //   <Micc style={{bottom:"13%"}}></Micc>
    // </View>
    
    <View style={[styles.row, styles.header]}>
        
        { backText?<Image
            source={require('../../src/svgFile/back1.png')}
          />: null}

        { backDepart?<Image
            source={require('../../src/svgFile/back2.png')}
          />: null}

        { backArrive?<Image
            source={require('../../src/svgFile/back3.png')}
          />: null}

        { backTime?<Image
            source={require('../../src/svgFile/back4.png')}
          />: null}

          
        { backTime2?<Image
            source={require('../../src/svgFile/back5.png')}
          />: null}

        { backAdult?<Image
            source={require('../../src/svgFile/back6.png')}
          />: null}

        { backCheck?<Image
            source={require('../../src/svgFile/back7.png')}
          />: null}

        { backCheck2?<Image
            source={require('../../src/svgFile/back8.png')}
          />: null}

         { backBuy?<Image
            source={require('../../src/svgFile/back9.png')}
          />: null}

          { backSeat?<Image
            source={require('../../src/svgFile/back10.png')}
          />: null}

          { backSeat2?<Image
            source={require('../../src/svgFile/back11.png')}
          />: null}

          { backClient?<Image
            source={require('../../src/svgFile/back12.png')}
          />: null}
          {/* {text ? <View>
          <Pressable style={{width:121,height:45,backgroundColor:"white", bottom:840,left:"14%",borderRadius:12,alignItems:"center",justifyContent:"center"}} onPress ={onPressText}><Text style={{fontSize:18,color:"black",fontWeight:"bold",alignSelf:"center"}}>기차표 예매</Text></Pressable>
           <Text style={[styles.textColor,{bottom:830,left:"16%"}]}>검색창에 기차표 예매를 검색하세요!</Text>
          </View>: null} */}
          { auto ? <Pressable style={{width:99.42,height:34.52,borderRadius:10,backgroundColor:"white",justifyContent:"center",flexDirection:"row",position:"absolute",top:225,left:260.52}} onPress={onPressAuto}>
            <CheckSvg style={{alignSelf:"center"}}></CheckSvg>
            <Text style={{color:"black", fontWeight:"bold",alignSelf:"center",marginLeft:4}}>자동배정</Text>
          </Pressable> : null}
          {auto ?
            <Text style={[styles.textColor,{position:"absolute",top:185,left:160.52,alignSelf:"center"}]}>자동으로 빈자리를 선택해드려요</Text>
          : null}
          { arr ? <Arr style={{position:"absolute",top:52,left:16.63}} onPress={back}></Arr> : null}
          <Xcodu style={{position:"absolute",top:51.09,left:370.13}} onPress={() => navigation.navigate("Maru")}></Xcodu>

          {mic ?<Miclogo style={{positon:"absolute",bottom:"21%"}} onPress={replay}></Miclogo> :null}
          { text ?<View style={{}}>
          <TextInput style={{width:121,height:45,backgroundColor:"white", bottom:"1510%",left:"14%",borderRadius:12,alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:18,color:"black"}} 
          onChangeText={text => {if(text == "zz"){onPressText(); music1.play();}}} placeholder= "  기차표 예매" placeholderTextColor="black">
          </TextInput>
          <Text style={[styles.textColor,{bottom:"1500%",left:"16%"}]}>검색창에 기차표 예매를 검색하세요!</Text></View>: null}

         {depart ?<View>
                
                <Pressable style={styles.box4} onPress={onPressDepart} >
                <ArrowSvg style={{top:20,left:15}}></ArrowSvg>
                <Text style={[styles.text6,]}>출발</Text>
                <Text style={[styles.text7,{color:departColor}]}>{name}</Text>
                <DotBoSvg style={{alignSelf:"flex-end",bottom:44,right:20}}></DotBoSvg>
                </Pressable>
                <Pressable style={styles.box5}>
                <RedButtonSvg style={{top:20,left:15}}></RedButtonSvg>
                <Text style={[styles.text66,]}>도착</Text>
                <Text style={[styles.text77,]}>{name2}</Text>
                <DotBoSvg style={{alignSelf:"flex-end",bottom:44,right:20}}></DotBoSvg>
                </Pressable>
                <Text style={[styles.textColor,{bottom:1030,left:40}]}>출발 기차역을 눌러주세요!</Text>
                
              
          </View>:null}


          {arrive ?<View>
                
                <Pressable style={styles.box4} >
                <ArrowSvg style={{top:20,left:15}}></ArrowSvg>
                <Text style={[styles.text6,]}>출발</Text>
                <Text style={[styles.text7,{color:departColor}]}>{name}</Text>
                <DotBoSvg style={{alignSelf:"flex-end",bottom:50,right:20}}></DotBoSvg>
                </Pressable>
                <Pressable style={styles.box5} onPress={onPressArrive}>
                <RedButtonSvg style={{top:20,left:15}}></RedButtonSvg>
                <Text style={[styles.text66,]}>도착</Text>
                <Text style={[styles.text77,{color:arriveColor}]}>{name2}</Text>
                <DotBoSvg style={{alignSelf:"flex-end",bottom:50,right:20}}></DotBoSvg>
                </Pressable>
                <Text style={[styles.textColor,{bottom:810,left:50}]}>도착 기차역을 눌러주세요!</Text>
                
              
          </View>:null}

          {time ? <View>
            
                <TouchableOpacity style={styles.box8} onPress={onPressTime}>
                <DateSvg style={{top:13,left:10}}></DateSvg>
                <Text style={[styles.text8,{bottom:12, color:"#787878",fontSize:16,left:12}]}> 가는날  {years}.{months}.{days}.({dayOfWeek})  {hours}시 이후 출발</Text>
                </TouchableOpacity>
               
                <Text style={[styles.textColor,{bottom:740,left:130}]}> 가는날을 눌러 날짜를 골라주세요!</Text>
          </View>: null}




          { departTextInput? <View>
            <TextInput style={styles.input} placeholder='   출발역검색'  placeholderTextColor="#BCBCBC" onChangeText={text => {if(text.length == 3){ music3.play(); music2.stop();setCount(3);setName(text)}}}>
            </TextInput>
            <Text style={[styles.textColor,{bottom:1080,alignSelf:"center"}]}>역 이름을 입력해주세요!</Text>
            <DotSvg style={{position:'absolute', bottom:1070,left:"80%"}} onPress={onPressDot}></DotSvg>
           <Text style={[styles.textColor,{bottom:870,alignSelf:"center"}]}>최근 검색한 역을 볼 수 있어요!</Text>
           <Text style={[styles.textColor,{bottom:690,alignSelf:"center",right:"10%"}]}>가까운 역을 볼 수 있어요!</Text>

          </View>:null}

          { arriveTextInput? <View>
            <TextInput style={styles.input} placeholder='   도착역검색'  placeholderTextColor="#BCBCBC" onChangeText={text => {if(text.length == 3){ music6.play(); music5.stop();setCount(6);setName2(text)}}}>
            </TextInput>
            <Text style={[styles.textColor,{bottom:1080,alignSelf:"center"}]}>역 이름을 입력해주세요!</Text>
            <DotSvg style={{position:'absolute', bottom:1070,left:"80%"}} onPress={onPressDot2}></DotSvg>
            <Text style={[styles.textColor,{bottom:870,alignSelf:"center"}]}>최근 검색한 역을 볼 수 있어요!</Text>
           <Text style={[styles.textColor,{bottom:690,alignSelf:"center",right:"10%"}]}>가까운 역을 볼 수 있어요!</Text>

          </View>:null}

         { time2 ? <View style={{flexDirection:"row"}}>
          <TouchableOpacity style={{width:55,height:53,borderRadius:7,backgroundColor:"#5669F6",bottom:770,left:"336%"}} onPress={onPressTime2}><Text style={{alignSelf:"center",fontSize:16,fontWeight:"bold"}}>오늘</Text><Text style={{alignSelf:"center",fontSize:15}}>가는날</Text></TouchableOpacity>
          <Pressable style={{width:55,height:53,borderRadius:0,backgroundColor:"white",bottom:770,left:"336%",justifyContent:"center"}}><Text style={{alignSelf:"center",fontSize:16,fontWeight:"bold",color:"black"}}>8</Text></Pressable>
          <Pressable style={{width:55,height:53,borderRadius:0,backgroundColor:"white",bottom:770,left:"336%",justifyContent:"center"}}><Text style={{alignSelf:"center",fontSize:16,fontWeight:"bold",color:"black"}}>9</Text></Pressable>
          <Pressable style={{width:55,height:53,borderTopRightRadius:7,borderBottomRightRadius:7, backgroundColor:"white",bottom:770,left:"336%",justifyContent:"center"}}><Text style={{alignSelf:"center",fontSize:16,fontWeight:"bold",color:"black"}}>10</Text></Pressable>
          <Text style={[styles.textColor,{bottom:820,alignSelf:"center"}]}>원하는 날짜를 눌러주세요</Text>
         </View> : null} 


         {time3 ? <View>
            <ScrollView style={{bottom:507,}}horizontal = {true}>
            <TouchableOpacity style={[styles.timeBox,{marginLeft:22,backgroundColor:"#5669F6"}]}><Text style={{alignSelf:"center",fontSize:15}} onPress={onPressTime3}>13시</Text></TouchableOpacity>
            <TouchableOpacity style={styles.timeBox}><Text style={{alignSelf:"center",fontSize:15,color:"black"}}>14시</Text></TouchableOpacity>
            <TouchableOpacity style={styles.timeBox}><Text style={{alignSelf:"center",fontSize:15,color:"black"}}>15시</Text></TouchableOpacity>
            <Pressable style={styles.timeBox}><Text style={{alignSelf:"center",fontSize:15,color:"black"}}>16시</Text></Pressable>
            <Pressable style={styles.timeBox}><Text style={{alignSelf:"center",fontSize:15,color:"black"}}>17시</Text></Pressable>
            <Pressable style={styles.timeBox}><Text style={{alignSelf:"center",fontSize:15,color:"black"}}>18시</Text></Pressable>
            <Pressable style={styles.timeBox}><Text style={{alignSelf:"center",fontSize:15,color:"black"}}>19시</Text></Pressable>
            </ScrollView>
          <Text style={[styles.textColor,{bottom:580,alignSelf:"center",right:80}]}>원하는 시간을 눌러 조회하세요!</Text>
         </View>:null}
          
        {adult ? <View>
          <View style={{height:73.82,backgroundColor:"white",bottom:940,flexDirection:"row",alignContent:"center"}}>
            <View style={{left:20,alignSelf:"center"}}>
              <Text style={{fontSize:16,fontWeight:"bold",color:"black"}}>어른 1명</Text><Text style={{fontSize:14,fontWeight:"bold",color:"#787878"}}>만 13세 이상</Text>
            </View>
            <Pressable style={{borderRadius:100,borderWidth:2,borderColor:"#787878",height:30.7,width:30.7,justifyContent:"center", marginLeft:205,top:20}}><Text style={{alignSelf:"center",color:"#787878"}}>ㅡ</Text></Pressable>
            <Text style={[styles.textColor,{color:"black",fontSize:16,marginLeft:18,top:20}]}>1</Text>
            <TouchableOpacity style={{borderRadius:100,backgroundColor:"#20293A",height:30.7,width:30.7,justifyContent:"center",marginLeft:18,top:20}} onPress={onPressCheck}><Text style={{alignSelf:"center",color:"white"}}>+</Text></TouchableOpacity>

          </View>
          <Text style={[styles.textColor,{bottom:920,alignSelf:"center"}]}>예매 인원을 선택하세요</Text>
        </View>:null}

        {check ? <View>

          <View style={{width:391.53,height:167.03,borderRadius:10,backgroundColor:"#F8F8F8",bottom:875, justifyContent:"center",alignSelf:"center"}}>
          <Pressable style={[styles.box4,{bottom:0,alignSelf:'center',left:0,top:10}]} onPress={onPressDepart} >
                <ArrowSvg style={{top:20,left:15}}></ArrowSvg>
                <Text style={[styles.text6,]}>출발</Text>
                <Text style={[styles.text7,{color:departColor}]}>{name}</Text>
                <DotBoSvg style={{alignSelf:"flex-end",bottom:44,right:20}}></DotBoSvg>
                </Pressable>
                <Pressable style={[styles.box5,{bottom:0,alignSelf:'center',left:0,top:10}]}>
                <RedButtonSvg style={{top:20,left:15}}></RedButtonSvg>
                <Text style={[styles.text66,]}>도착</Text>
                <Text style={[styles.text77,{color:departColor2}]}>{name2}</Text>
                <DotBoSvg style={{alignSelf:"flex-end",bottom:44,right:20}}></DotBoSvg>
                </Pressable>
                <Text style={[styles.textColor,{bottom:1000,left:40}]}>출발 기차역을 눌러주세요!</Text>
          </View>
          <View style={{width:391.29,height:244.86,borderRadius:15,bottom:860,backgroundColor:"#F8F8F8",alignSelf:"center"}}>
            <View style={{flexDirection:"row",width:391.29,height:40,}}>
              <Text style={{color:"black",alignSelf:"flex-start",top:10,left:20}}>일정 인원 선택</Text>
              <Text style={{color:"black",alignSelf:"flex-end",bottom:10,left:250}}>왕복</Text>
            </View>
            <TouchableOpacity style={[styles.box8,{bottom:0,top:0}]} onPress={onPressTime}>
                <DateSvg style={{top:13,left:10}}></DateSvg>
                <Text style={[styles.text8,{bottom:12, color:"#787878",fontSize:16,left:12,}]}> 가는날  {years}.{months}.{days}.({dayOfWeek})  {hours}시 이후 출발</Text>
                </TouchableOpacity>

              <View style={{flexDirection:"row",width:391.29,height:70,top:0,justifyContent:"center"}}>
               <Pressable style={{width:169.99,height:47.42,borderRadius:15,borderWidth:2,borderColor:"#787878",alignSelf:"center",justifyContent:"center",margin:5,backgroundColor:"white"}}>
               <PersonSvg style={{top:15,left:30}}></PersonSvg>
               <Text style={{alignSelf:"center",color:"#787878",fontWeight:"bold",fontSize:20,bottom:10,left:15}}>
                
                일반 1명
               </Text>
               </Pressable>
               <Pressable style={{width:169.99,height:47.42,borderRadius:15,borderWidth:2,borderColor:"#787878",alignSelf:"center",justifyContent:"center",margin:5,backgroundColor:"white"}}>
               <AirPersonSvg style={{top:15,left:30}}></AirPersonSvg>
               <Text style={{alignSelf:"center",color:"#787878",fontWeight:"bold",fontSize:20,bottom:12,left:15}}>
                일반좌석
               </Text>
               </Pressable>

            </View>

          <TouchableOpacity style={[styles.box11,{bottom:0,top:10,backgroundColor:"#03CF5D"}]} onPress={onPressCheck2}>
                  <Text style={styles.text5} activeOpacity={0.8}>시간표 조회</Text>
          </TouchableOpacity>
          </View>
         
        <Text style={[styles.textColor,{bottom:1330,alignSelf:"center"}]}>입력된 내용을 확인해주세요!</Text>
        <Text style={[styles.textColor,{bottom:870,alignSelf:"center"}]}>조회를 눌러 기차표를 확인하세요!</Text>
        </View> : null}

        {check2 ? <View>
          <Pressable style={{width:69.78,height:37.64,borderRadius:5,borderColor:"#787878",borderWidth:2,bottom:706,left:"516%" ,backgroundColor:"white",justifyContent:"center",flexDirection:"row"}} onPress={onPressBuy}>
            <NaverSvg style={{alignSelf:"center"}}></NaverSvg>
            <Text style={{color:"black", fontWeight:"bold",alignSelf:"center",marginLeft:4}}>예매</Text>
          </Pressable>
            <Text style={[styles.textColor,{bottom:640,alignSelf:"center"}]}>원하는 시간에 기차를 예매 해보아요</Text>
          </View>: null}

         {buy ? <View>
          
          <Text style={[styles.textColor,{bottom:790,left:70,alignSelf:"center"}]}>시간과 날짜,인원을 확인해주세요</Text>
          <Pressable style={{borderRadius:5,bottom:1025,left:"1%" ,justifyContent:"center",flexDirection:"row"}}>
            <BuySvg style={{alignSelf:"center"}} onPress={onPressBuy2}></BuySvg>
          </Pressable>
         </View>: null} 

         {buy2 ? <View>
          
          <Text style={[styles.textColor,{bottom:490,left:70,alignSelf:"center"}]}>일반실과, 특실 중 고를수있어요!</Text>
          <Pressable style={{borderRadius:5,bottom:788 ,justifyContent:"center",flexDirection:"row"}} onPress={onPressSeat}>
            <GangSvg style={{alignSelf:"center"}}></GangSvg>
          </Pressable>
         </View>: null} 

         {seat ? <View>
          
          { ho ?<Text style={[styles.textColor,{bottom:750,left:70,alignSelf:"center"}]}>호차를 눌러 빈자리를 볼 수있어요</Text>:null}         
          { ho ?<Pressable style={{width:80.23,height:61.67,borderRadius:10,bottom:847,left:"43%" ,backgroundColor:"#5669F6",justifyContent:"center",}} onPress={onPressSeat2}>
           <View style={{flexDirection:"row",alignSelf:"center"}}>
           <Text style={{color:"white", fontWeight:"bold",alignSelf:"center" ,fontSize:20}}>17 </Text>
            <Text style={{color:"white", fontWeight:"bold",alignSelf:"center" ,fontSize:13}}>호차</Text>
           </View>
            <Text style={{color:"white",alignSelf:"center"}}>일반좌석</Text>
          </Pressable> : null}

          { window ?
          
          <Pressable style={{width:99.42,height:34.52,borderRadius:10,bottom:640,left:"120%",justifyContent:"center",flexDirection:"row"}} onPress={onPressSeat3}>
            <WindowSvg style={{alignSelf:"center"}}></WindowSvg>
          </Pressable>: null}



         
         </View>: null} 

        
         {seat2 ? <View>
          <SeatSvg style={{bottom:"144%",left:"58%"}}></SeatSvg>
          <Text style={[styles.textColor,{bottom:820,left:50,alignSelf:"center"}]}>선택된자리는 진한 파란색으로 나타나요!</Text>
          <Text style={[styles.textColor,{bottom:470,left:70,alignSelf:"center"}]}>결제하기를 눌러 결제를 완료해요!</Text>

          <Pressable style={{width:412,height:243.88, borderRadius:10,bottom:452,justifyContent:"center",flexDirection:"row"}}>
            <PaySvg onPress={onPressClient}></PaySvg>
          </Pressable>
          <Pressable style={{bottom:545,justifyContent:"center",flexDirection:"row"}}>
          <Miclogo style={{alignSelf:"center"}} onPress={replay}></Miclogo>
          </Pressable>
          
         </View>: null} 


         {client ? <View>
        
          { payText ?<Text style={[styles.textColor,{bottom:1020,left:70,alignSelf:"center"}]}>예매자 성함을 적어주세요!</Text> :<Text style={[styles.textColor,{bottom:1020,left:70,alignSelf:"center"}]}>연락처를 적어주세요!</Text>}
          


          <View style={{width:329.94,height:600.27, borderRadius:15,bottom:1020,alignSelf:"center",backgroundColor:"white"}}>
           <View style={{flexDirection:"row",height:55,}}>
             <Text style={{color:"black",fontSize:18,fontWeight:"bold",alignSelf:"flex-start",left:30,top:30}}>예매 고객 정보입력</Text>
            </View>
            <View style={{flexDirection:"row",height:50,justifyContent:"center",marginTop:20}}>
              <Text style={{color:"black",fontSize:15,fontWeight:"bold",marginRight:"15%",top:10}}>예매자</Text>
              <TextInput style={{backgroundColor:"white",borderWidth:1,borderColor:"#787878",width:183.34,height:41.44,borderRadius:5,color:"black"}} onChangeText={text => {if(text.length == 3){setPayText(false);setCount(19),music19.play(); music18.stop();}}}></TextInput>
            </View>
            <View style={{flexDirection:"row",height:50,justifyContent:"center",marginTop:20}}>
              <Text style={{color:"black",fontSize:15,fontWeight:"bold",marginRight:"15%",top:10}}>연락처</Text>
              <TextInput style={{backgroundColor:"white",borderWidth:1,borderColor:"#787878",width:183.34,height:41.44,borderRadius:5,color:"black"}} onChangeText={text => {if(text.length == 11){setPayText(true); onPressClient2();}}}></TextInput>
            </View>
            <View style={{flexDirection:"row",height:50,justifyContent:"center",marginTop:20}}>
              <Text style={{color:"black",fontSize:15,fontWeight:"bold",marginRight:"11%",top:10}}>비밀번호</Text>
              <TextInput style={{backgroundColor:"white",borderWidth:1,borderColor:"#787878",width:183.34,height:41.44,borderRadius:5,}} placeholder="  숫자 5자리 " placeholderTextColor="#787878"></TextInput>
            </View>

            <View style={{flexDirection:"row",height:50,justifyContent:"center",marginTop:20}}>
              <Text style={{color:"black",fontSize:15,fontWeight:"bold",marginRight:"2%",top:10}}>비밀번호 확인</Text>
              <TextInput style={{backgroundColor:"white",borderWidth:1,borderColor:"#787878",width:183.34,height:41.44,borderRadius:5,}} placeholder="  숫자 5자리 " placeholderTextColor="#787878"></TextInput>
            </View>

            <View style={{width:282.56,height:172.83,borderRadius:10,alignSelf:"center",marginTop:10}}>
              <View style={{justifyContent:"center",borderBottomColor:"#78787833",borderBottomWidth:2,height:60,backgroundColor:"#F8F9FE",borderTopLeftRadius:10,borderTopRightRadius:10}}>
              <BouncyCheckbox
                              style={{alignSelf:"flex-start",top:23, left: 5}}
                              size={25}
                              fillColor="#03CF5D"
                              unfillColor="#FFFFFF"
                              iconStyle={{ borderColor: "#787878" }}
                              textStyle={{ fontFamily: "JosefinSans-Regular" }}
                              
                        />
                <Text style={{color:"black",alignSelf:"center",bottom:10,right:15}}>개인정보 수집 및 이용 동의</Text>
                <Text style={{color:"#787878",alignSelf:"center",bottom:10,right:80}}>(필수)</Text>
              </View>
              <View style={{justifyContent:"center",borderBottomColor:"#78787833",borderBottomWidth:2,height:55,backgroundColor:"#F8F9FE"}}>
              <BouncyCheckbox
                              style={{alignSelf:"flex-start",top:10, left: 5}}
                              size={25}
                              fillColor="#03CF5D"
                              unfillColor="#FFFFFF"
                              iconStyle={{ borderColor: "#787878" }}
                              textStyle={{ fontFamily: "JosefinSans-Regular" }}
                              
                        />
                <Text style={{color:"black",alignSelf:"center",bottom:10,right:23}}>개인정보 제공동의 (필수)</Text>
              </View>
              <View style={{justifyContent:"center",height:55,backgroundColor:"#F8F9FE",borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
              <BouncyCheckbox
                              style={{alignSelf:"flex-start",top:10, left: 5}}
                              size={25}
                              fillColor="#03CF5D"
                              unfillColor="#FFFFFF"
                              iconStyle={{ borderColor: "#787878" }}
                              textStyle={{ fontFamily: "JosefinSans-Regular" }}
                              
                        />
                <Text style={{color:"black",alignSelf:"center",bottom:10,}}>제 3자 개인정보 제공동의 (필수)</Text>
              </View>
            </View>
            


            <View style={{width:282.56,height:50.83,borderRadius:5,alignSelf:"center",justifyContent:"center",marginTop:10,flexDirection:'row'}}>
              <Pressable style={{width:138,height:46.44,borderRadius:6,backgroundColor:"#F8F8F8",justifyContent:"center",marginRight:15}}>
                <Text style={{alignSelf:'center',color:"#787878"}}>예매취소</Text>
              </Pressable>
              <Pressable style={{width:138,height:46.44,borderRadius:6,backgroundColor:"#5669F6",justifyContent:"center"}}>
                <Text style={{alignSelf:'center',color:"white"}}>확인</Text>
              </Pressable>
            </View>
          </View>

         </View>: null} 





         {client2 ? <View>
        
          <Text style={[styles.textColor,{bottom:990,left:70,alignSelf:"center"}]}>이용을 위한 정보제공 동의사항에{'\n'}              체크해주세요!!</Text> 
          
          <Pressable style={{bottom:985,left:40}}>
          <Image
            source={require('../../src/svgFile/ban.png')}
          />
          </Pressable>
        <View style={{width:329.94,height:263.27, borderBottomLeftRadius:15,borderBottomRightRadius:15,bottom:985,alignSelf:"center",backgroundColor:"white",left:2}}>
         

          <View style={{width:282.56,height:172.83,borderRadius:10,alignSelf:"center",marginTop:10}}>
            <View style={{justifyContent:"center",borderBottomColor:"#78787833",borderBottomWidth:2,height:60,backgroundColor:"#F8F9FE",borderTopLeftRadius:10,borderTopRightRadius:10}}>
            <BouncyCheckbox
                            style={{alignSelf:"flex-start",top:23, left: 5}}
                            size={25}
                            fillColor="#03CF5D"
                            unfillColor="#FFFFFF"
                            iconStyle={{ borderColor: "#787878" }}
                            textStyle={{ fontFamily: "JosefinSans-Regular" }}
                            
                      />
              <Text style={{color:"black",alignSelf:"center",bottom:10,right:15}}>개인정보 수집 및 이용 동의</Text>
              <Text style={{color:"#787878",alignSelf:"center",bottom:10,right:80}}>(필수)</Text>
            </View>
            <View style={{justifyContent:"center",borderBottomColor:"#78787833",borderBottomWidth:2,height:55,backgroundColor:"#F8F9FE"}}>
            <BouncyCheckbox
                            style={{alignSelf:"flex-start",top:10, left: 5}}
                            size={25}
                            fillColor="#03CF5D"
                            unfillColor="#FFFFFF"
                            iconStyle={{ borderColor: "#787878" }}
                            textStyle={{ fontFamily: "JosefinSans-Regular" }}
                            
                      />
              <Text style={{color:"black",alignSelf:"center",bottom:10,right:23}}>개인정보 제공동의 (필수)</Text>
            </View>
            <View style={{justifyContent:"center",height:55,backgroundColor:"#F8F9FE",borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
            <BouncyCheckbox
                            style={{alignSelf:"flex-start",top:10, left: 5}}
                            size={25}
                            fillColor="#03CF5D"
                            unfillColor="#FFFFFF"
                            iconStyle={{ borderColor: "#787878" }}
                            textStyle={{ fontFamily: "JosefinSans-Regular" }}
                            onPress={onPressClient3}
                            
                      />
              <Text style={{color:"black",alignSelf:"center",bottom:10,}}>제 3자 개인정보 제공동의 (필수)</Text>
            </View>
          </View>
          


          <View style={{width:282.56,height:50.83,borderRadius:5,alignSelf:"center",justifyContent:"center",marginTop:10,flexDirection:'row'}}>
            <Pressable style={{width:138,height:46.44,borderRadius:6,backgroundColor:"#F8F8F8",justifyContent:"center",marginRight:15}}>
              <Text style={{alignSelf:'center',color:"#787878"}}>예매취소</Text>
            </Pressable>
            <Pressable style={{width:138,height:46.44,borderRadius:6,backgroundColor:"#5669F6",justifyContent:"center"}}>
              <Text style={{alignSelf:'center',color:"white"}}>확인</Text>
            </Pressable>
          </View>
        </View>

       </View>: null} 


       {client3 ? <View>
        
        <Text style={[styles.textColor,{bottom:990,left:70,alignSelf:"center"}]}>확인을 눌러 예매를 완료해주세요!</Text> 
        <Pressable style={{bottom:980,left:40}}>
          <Image
            source={require('../../src/svgFile/ban2.png')}
          />
          </Pressable>
        <View style={{width:329.94,height:89.27,left:2, borderBottomLeftRadius:15,borderBottomRightRadius:15,bottom:980,alignSelf:"center",backgroundColor:"white"}}>
         

         

          <View style={{width:282.56,height:50.83,alignSelf:"center",justifyContent:"center",marginTop:10,flexDirection:'row'}}>
            <Pressable style={{width:138,height:46.44,borderRadius:6,backgroundColor:"#F8F8F8",justifyContent:"center",marginRight:15}}>
              <Text style={{alignSelf:'center',color:"#787878"}}>예매취소</Text>
            </Pressable>
            <Pressable style={{width:138,height:46.44,borderRadius:6,backgroundColor:"#5669F6",justifyContent:"center"}} 
              onPress={() => { navigation.navigate('Train2'); setBackClient(false); setClient3(false); setText(true); setBackText(true);}}>
              <Text style={{alignSelf:'center',color:"white"}}>확인</Text>
            </Pressable>
          </View>
        </View>

       </View>: null} 




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
    top:40
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
    fontSize: 23,
    justifyContent:"center", 
    alignSelf:"center"
  },

  text7: {
    color:"white",
    fontWeight:"bold",
    fontSize: 18,
    justifyContent:"center", alignContent: "center",
    marginLeft: 100

  },

  textColor:{fontSize:16,color:"white",fontWeight:"800"},


  box:{ width:139.57, height: 235.4, borderRadius:15, borderColor: "#787878",justifyContent:"center", alignContent: "center",marginTop: 80,
margin:20},

  box2: {
    width:288.02, height:70.66, backgroundColor:"#787878", borderRadius:30, justifyContent:"center", alignContent: "center", marginLeft: 60
  },

  box3:{
    left:25, width:330.24 , height : 160, borderRadius: 15, borderColor: "white", backgroundColor: "#F8F8F8" , bottom:"520%"
    },
  
    box4:{
      left:24, width:362 , height : 66, borderTopLeftRadius:15, borderTopRightRadius:15, borderColor: "white", backgroundColor: "white",bottom:"542%" ,borderWidth:2, borderBottomColor:"#BCBCBC"
      },
  
      box5:{
        left:24,  width:362 , height : 66, borderBottomLeftRadius:15, borderBottomRightRadius:15, borderColor: "white", backgroundColor: "white",bottom:"542%"  
        },

      box6:{
        width:31.42,height:31.42,borderRadius:8,backgroundColor:"#20293A"
        },
        text6: {
          color:"#787878",
          fontWeight:"bold",
          fontSize: 14,
          justifyContent:"center",
          left:60,
          bottom:15
          
      
      
          
      
        },

        box11:{
          width:366 , height : 55, borderRadius:30, borderColor: "white", backgroundColor: "#5669F6",
          bottom:500, justifyContent:'center',alignSelf:"center" 
         },
        text66: {
          color:"#787878",
          fontWeight:"bold",
          fontSize: 14,
          justifyContent:"center",
          left:60,
          bottom:15
          
      
      
          
      
        },
      
        text7: {
          color:"#BCBCBC",
          fontWeight:"bold",
          fontSize: 20,
          justifyContent:"center", alignContent: "center",
          left:60,
          bottom:15
          
      
        },
        text77: {
          color:"#BCBCBC",
          fontWeight:"bold",
          fontSize: 20,
          justifyContent:"center", alignContent: "center",
          left:60,
          bottom:15
          
          
          
      
        },

        input: {
          borderRadius:15,
          fontSize:20,
          fontWeight:"bold",
          width:387,
          height: 60.2,
          borderColor: "#03CF5D",
          borderWidth: 3,
          color:"black",
          bottom:978, 
          left:"3.1%",
          backgroundColor:"white",
        },

        box7:{
           width:330.24 , height : 320, borderRadius: 15, borderColor: "white", backgroundColor: "#F8F8F8" ,justifyContent:"center", alignContent: "center"
           ,bottom:957
          },
        
          box8:{
             width:348.75 , height : 47.42, borderRadius:15, borderColor: "white", backgroundColor: "white",justifyContent:'center',
              alignSelf: "center",bottom:648, borderWidth:2,
              borderColor:"#787878"
            },

            
        text8: {
        color:"#636363",
        fontWeight:"bold",
        fontSize: 20,
        alignSelf:"center"
       
    

        },

        timeBox:{width:56.85,height:37.39,borderRadius:18.69,backgroundColor:"white",justifyContent:"center",marginLeft:5},
  
  header: {flex: 1,backgroundColor:"black"},
  bgImage: {width: '100%', height: '100%',tintColor: 'gray',opacity:0.3},

})