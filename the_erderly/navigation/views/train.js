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
let path = require('../../mp3/naver_pay.mp3');
let music = new Sound(path, Sound.MAIN_BUNDLE, (error) => {
    if (error) { console.log('play failed') }
}) 


export default function Train({navigation}){

  // useEffect(() => {

  //    setBackClient(false);
  //    setClient3(false);
  //    setText(true);
  //    setBackText(true);
  //  },[])
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





  const [payText,setPayText] = useState(true);
  const [arrive,setArrive] = useState(false);
  const [arriveTextInput,setArriveTextInput] = useState(false);

  function onPressText() {
  
      setText(false);
      setDepart(true);
      
    
  }

  function onPressDepart(){
      setBackText(false);
      setBackDepart(true);
      setDepart(false);
      setDepartTextInput(true);
  }
  
  function onPressDot(){

      setBackDepart(false);
      setBackText(true);
      setDepartTextInput(false);
      setArrive(true);
      setDepartColor("black");
  }

  function onPressDot2(){

    setBackArrive(false);
    setBackText(false);
    setArriveTextInput(false);
    setArriveColor("black");
    setBackTime(true);
    setTime(true);
}


function onPressArrive(){
  setBackArrive(true);
  setArriveTextInput(true);
  setBackText(false);
  setArrive(false);  
}


function onPressTime(){
  setBackTime(false);
  setBackTime2(true);
  setTime(false);
  setTime2(true);
}

function onPressTime2(){
  
  setTime2(false);
  setTime3(true);
}

function onPressTime3(){
  
  setBackTime2(false);
  setTime3(false);
  setBackAdult(true);
  setAdult(true);
}

function onPressCheck(){
  
  setBackCheck(true);
  setCheck(true);
  setBackAdult(false);
  setAdult(false);
}

function onPressCheck2(){
  setBackCheck(false);
  setCheck(false);
  setBackCheck2(true);
  setCheck2(true);
}

function onPressBuy(){
  setBackCheck2(false);
  setCheck2(false);
  setBackBuy(true);
  setBuy(true);

}

function onPressBuy2(){
  
  setBackBuy(true);
  setBuy(false);
  setBuy2(true);


}

function onPressSeat(){
  setBackBuy(false);
  setBuy2(false);
  setBackSeat(true);
  setSeat(true);
}

function onPressSeat2(){
  
  setBackSeat2(true);
  setSeat2(true);
  setBackSeat(false);
  setSeat(false);
  setMic(false);
}

function onPressSeat2(){
  
  setBackSeat2(true);
  setSeat2(true);
  setBackSeat(false);
  setSeat(false);
  setMic(false);
}

function onPressClient(){
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
}

function onPressClient3(){
  setBackClient(true);
  setClient2(false);
  setClient3(true);

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
            source={require('../../src/svgFile/train_main.png')}
          />: null}

        { backDepart?<Image
            source={require('../../src/svgFile/train_depart.png')}
          />: null}

        { backArrive?<Image
            source={require('../../src/svgFile/train_arrive.png')}
          />: null}

        { backTime?<Image
            source={require('../../src/svgFile/train_time.png')}
          />: null}

          
        { backTime2?<Image
            source={require('../../src/svgFile/train_time2.png')}
          />: null}

        { backAdult?<Image
            source={require('../../src/svgFile/train_adult.png')}
          />: null}

        { backCheck?<Image
            source={require('../../src/svgFile/train_check.png')}
          />: null}

        { backCheck2?<Image
            source={require('../../src/svgFile/train_check2.png')}
          />: null}

         { backBuy?<Image
            source={require('../../src/svgFile/train_buy.png')}
          />: null}

          { backSeat?<Image
            source={require('../../src/svgFile/train_seat.png')}
          />: null}

          { backSeat2?<Image
            source={require('../../src/svgFile/train_seat2.png')}
          />: null}

          { backClient?<Image
            source={require('../../src/svgFile/train_client.png')}
          />: null}
          {/* {text ? <View>
          <Pressable style={{width:121,height:45,backgroundColor:"white", bottom:840,left:"14%",borderRadius:12,alignItems:"center",justifyContent:"center"}} onPress ={onPressText}><Text style={{fontSize:18,color:"black",fontWeight:"bold",alignSelf:"center"}}>기차표 예매</Text></Pressable>
           <Text style={[styles.textColor,{bottom:830,left:"16%"}]}>검색창에 기차표 예매를 검색하세요!</Text>
          </View>: null} */}
          {mic ?<Micc style={{positon:"absolute",bottom:"21%"}}></Micc> :null}
          { text ?<View style={{}}>
          <TextInput style={{width:121,height:45,backgroundColor:"white", bottom:"1483%",left:"14%",borderRadius:12,alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:18,color:"black"}} onChangeText={text => {if(text == "기차표예매"){onPressText();}}} placeholder= "  기차표 예매" placeholderTextColor="black">
          </TextInput>
          <Text style={[styles.textColor,{bottom:"1480%",left:"16%"}]}>검색창에 기차표 예매를 검색하세요!</Text></View>: null}

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
                <Text style={[styles.textColor,{bottom:1000,left:40}]}>출발 기차역을 눌러주세요!</Text>
                
              
          </View>:null}


          {arrive ?<View>
                
                <Pressable style={styles.box4} onPress={onPressDepart} >
                <ArrowSvg style={{top:20,left:15}}></ArrowSvg>
                <Text style={[styles.text6,]}>출발</Text>
                <Text style={[styles.text7,{color:departColor}]}>{name}</Text>
                <DotBoSvg style={{alignSelf:"flex-end",bottom:44,right:20}}></DotBoSvg>
                </Pressable>
                <Pressable style={styles.box5} onPress={onPressArrive}>
                <RedButtonSvg style={{top:20,left:15}}></RedButtonSvg>
                <Text style={[styles.text66,]}>도착</Text>
                <Text style={[styles.text77,{color:arriveColor}]}>{name2}</Text>
                <DotBoSvg style={{alignSelf:"flex-end",bottom:44,right:20}}></DotBoSvg>
                </Pressable>
                <Text style={[styles.textColor,{bottom:810,left:50}]}>도착 기차역을 눌러주세요!</Text>
                
              
          </View>:null}

          {time ? <View>
            
                <Pressable style={styles.box8} onPress={onPressTime}>
                <DateSvg style={{top:13,left:20}}></DateSvg>
                <Text style={[styles.text8,{bottom:12, color:"#787878",fontSize:16,left:15}]}> 가는날  {years}.{months}.{days}.({dayOfWeek})  {hours}시 이후 출발</Text>
                </Pressable>
               
                <Text style={[styles.textColor,{bottom:720,left:130}]}> 가는날을 눌러 날짜를 골라주세요!</Text>
          </View>: null}




          { departTextInput? <View>
            <TextInput style={styles.input} placeholder='   출발역검색'  placeholderTextColor="#BCBCBC" onChangeText={text => setName(text)}>
            </TextInput>
            <Text style={[styles.textColor,{bottom:1060,alignSelf:"center"}]}>역 이름을 입력해주세요!</Text>
            <DotSvg style={{position:'absolute', bottom:1000,left:"80%"}} onPress={onPressDot}></DotSvg>
          </View>:null}

          { arriveTextInput? <View>
            <TextInput style={styles.input} placeholder='   도착역검색'  placeholderTextColor="#BCBCBC" onChangeText={text => setName2(text)}>
            </TextInput>
            <Text style={[styles.textColor,{bottom:1060,alignSelf:"center"}]}>역 이름을 입력해주세요!</Text>
            <DotSvg style={{position:'absolute', bottom:1000,left:"80%"}} onPress={onPressDot2}></DotSvg>
          </View>:null}

         { time2 ? <View style={{flexDirection:"row"}}>
          <Pressable style={{width:55,height:53,borderRadius:7,backgroundColor:"#5669F6",bottom:750,left:"336%"}} onPress={onPressTime2}><Text style={{alignSelf:"center",fontSize:16,fontWeight:"bold"}}>오늘</Text><Text style={{alignSelf:"center",fontSize:15}}>가는날</Text></Pressable>
          <Pressable style={{width:55,height:53,borderRadius:0,backgroundColor:"white",bottom:750,left:"336%",justifyContent:"center"}}><Text style={{alignSelf:"center",fontSize:16,fontWeight:"bold",color:"black"}}>8</Text></Pressable>
          <Pressable style={{width:55,height:53,borderRadius:0,backgroundColor:"white",bottom:750,left:"336%",justifyContent:"center"}}><Text style={{alignSelf:"center",fontSize:16,fontWeight:"bold",color:"black"}}>9</Text></Pressable>
          <Pressable style={{width:55,height:53,borderTopRightRadius:7,borderBottomRightRadius:7, backgroundColor:"white",bottom:750,left:"336%",justifyContent:"center"}}><Text style={{alignSelf:"center",fontSize:16,fontWeight:"bold",color:"black"}}>10</Text></Pressable>
          <Text style={[styles.textColor,{bottom:800,alignSelf:"center"}]}>원하는 날짜를 눌러주세요</Text>
         </View> : null} 


         {time3 ? <View>
            <ScrollView style={{bottom:487,}}horizontal = {true}>
            <Pressable style={[styles.timeBox,{marginLeft:22,backgroundColor:"#5669F6"}]}><Text style={{alignSelf:"center",fontSize:15}} onPress={onPressTime3}>13시</Text></Pressable>
            <Pressable style={styles.timeBox}><Text style={{alignSelf:"center",fontSize:15,color:"black"}}>14시</Text></Pressable>
            <Pressable style={styles.timeBox}><Text style={{alignSelf:"center",fontSize:15,color:"black"}}>15시</Text></Pressable>
            <Pressable style={styles.timeBox}><Text style={{alignSelf:"center",fontSize:15,color:"black"}}>16시</Text></Pressable>
            <Pressable style={styles.timeBox}><Text style={{alignSelf:"center",fontSize:15,color:"black"}}>17시</Text></Pressable>
            <Pressable style={styles.timeBox}><Text style={{alignSelf:"center",fontSize:15,color:"black"}}>18시</Text></Pressable>
            <Pressable style={styles.timeBox}><Text style={{alignSelf:"center",fontSize:15,color:"black"}}>19시</Text></Pressable>
            </ScrollView>
          <Text style={[styles.textColor,{bottom:560,alignSelf:"center",right:80}]}>원하는 시간을 눌러 조회하세요!</Text>
         </View>:null}
          
        {adult ? <View>
          <View style={{height:73.82,backgroundColor:"white",bottom:681,flexDirection:"row",alignContent:"center"}}>
            <View style={{left:20,alignSelf:"center"}}>
              <Text style={{fontSize:16,fontWeight:"bold",color:"black"}}>경로 1명</Text><Text style={{fontSize:14,fontWeight:"bold",color:"#787878"}}>만 65세 이상</Text>
            </View>
            <Pressable style={{borderRadius:100,borderWidth:2,borderColor:"#787878",height:30.7,width:30.7,justifyContent:"center", marginLeft:205,top:20}}><Text style={{alignSelf:"center",color:"#787878"}}>ㅡ</Text></Pressable>
            <Text style={[styles.textColor,{color:"black",fontSize:16,marginLeft:18,top:20}]}>1</Text>
            <Pressable style={{borderRadius:100,backgroundColor:"#20293A",height:30.7,width:30.7,justifyContent:"center",marginLeft:18,top:20}} onPress={onPressCheck}><Text style={{alignSelf:"center",color:"white"}}>+</Text></Pressable>

          </View>
          <Text style={[styles.textColor,{bottom:800,alignSelf:"center"}]}>예매 인원을 선택하세요</Text>
        </View>:null}

        {check ? <View>
          <TouchableOpacity style={styles.box11} onPress={onPressCheck2}>
                  <Text style={styles.text5} activeOpacity={0.8}>시간표 조회</Text>
          </TouchableOpacity>
        <Text style={[styles.textColor,{bottom:750,alignSelf:"center"}]}>입력된 내용을 확인한 뒤 {"\n"} {"\n"}시간표 조회를 눌러주세요!</Text>
        </View> : null}

        {check2 ? <View>
          <Pressable style={{width:69.78,height:37.64,borderRadius:5,borderColor:"#787878",borderWidth:2,bottom:685,left:"516%" ,backgroundColor:"white",justifyContent:"center",flexDirection:"row"}} onPress={onPressBuy}>
            <NaverSvg style={{alignSelf:"center"}}></NaverSvg>
            <Text style={{color:"black", fontWeight:"bold",alignSelf:"center",marginLeft:4}}>예매</Text>
          </Pressable>
            <Text style={[styles.textColor,{bottom:620,alignSelf:"center"}]}>원하는 시간에 기차를 예매 해보아요</Text>
          </View>: null}

         {buy ? <View>
          
          <Text style={[styles.textColor,{bottom:770,left:70,alignSelf:"center"}]}>시간과 날짜,인원을 확인해주세요</Text>
          <Pressable style={{borderRadius:5,bottom:1000,left:"1%" ,justifyContent:"center",flexDirection:"row"}}>
            <BuySvg style={{alignSelf:"center"}} onPress={onPressBuy2}></BuySvg>
          </Pressable>
         </View>: null} 

         {buy2 ? <View>
          
          <Text style={[styles.textColor,{bottom:470,left:70,alignSelf:"center"}]}>일반실과, 특실 중 고를수있어요!</Text>
          <Pressable style={{borderRadius:5,bottom:765 ,justifyContent:"center",flexDirection:"row"}} onPress={onPressSeat}>
            <GangSvg style={{alignSelf:"center"}}></GangSvg>
          </Pressable>
         </View>: null} 

         {seat ? <View>
          
          <Text style={[styles.textColor,{bottom:730,left:70,alignSelf:"center"}]}>호차를 눌러 빈자리를 볼 수있어요</Text>
          <Text style={[styles.textColor,{bottom:920,left:70,alignSelf:"center"}]}>자동으로 빈자리를 선택해드려요</Text>

          <Pressable style={{width:80.23,height:61.67,borderRadius:10,bottom:852,left:"43%" ,backgroundColor:"#5669F6",justifyContent:"center",}} onPress={onPressSeat2}>
           <View style={{flexDirection:"row",alignSelf:"center"}}>
           <Text style={{color:"white", fontWeight:"bold",alignSelf:"center" ,fontSize:20}}>17 </Text>
            <Text style={{color:"white", fontWeight:"bold",alignSelf:"center" ,fontSize:13}}>호차</Text>
           </View>
            <Text style={{color:"white",alignSelf:"center"}}>일반좌석</Text>
          </Pressable>

          <Pressable style={{width:99.42,height:34.52,borderRadius:10,bottom:970,left:"180%" ,backgroundColor:"white",justifyContent:"center",flexDirection:"row"}} onPress={onPressSeat2}>
            <CheckSvg style={{alignSelf:"center"}}></CheckSvg>
            <Text style={{color:"black", fontWeight:"bold",alignSelf:"center",marginLeft:4}}>자동배정</Text>
          </Pressable>

         
         </View>: null} 
        
         {seat2 ? <View>
          <SeatSvg style={{bottom:"150%",left:"58%"}}></SeatSvg>
          <Text style={[styles.textColor,{bottom:840,left:70,alignSelf:"center"}]}>선택된자리는 진한 파란색으로 나타나요!</Text>
          <Text style={[styles.textColor,{bottom:470,left:70,alignSelf:"center"}]}>결제하기를 눌러 결제를 완료해요!</Text>

          <Pressable style={{width:412,height:243.88, borderRadius:10,bottom:452,justifyContent:"center",flexDirection:"row"}}>
            <PaySvg onPress={onPressClient}></PaySvg>
          </Pressable>
          <Pressable style={{bottom:545,justifyContent:"center",flexDirection:"row"}}>
          <Micc style={{alignSelf:"center"}}></Micc>
          </Pressable>
          
         </View>: null} 


         {client ? <View>
        
          { payText ?<Text style={[styles.textColor,{bottom:1000,left:70,alignSelf:"center"}]}>예매자 성함을 적어주세요!</Text> :<Text style={[styles.textColor,{bottom:1000,left:70,alignSelf:"center"}]}>연락처를 적어주세요!</Text>}



          <View style={{width:329.94,height:600.27, borderRadius:15,bottom:1000,alignSelf:"center",backgroundColor:"white"}}>
           <View style={{flexDirection:"row",height:55,}}>
             <Text style={{color:"black",fontSize:18,fontWeight:"bold",alignSelf:"flex-start",left:30,top:30}}>예매 고객 정보입력</Text>
            </View>
            <View style={{flexDirection:"row",height:50,justifyContent:"center",marginTop:20}}>
              <Text style={{color:"black",fontSize:15,fontWeight:"bold",marginRight:"15%",top:10}}>예매자</Text>
              <TextInput style={{backgroundColor:"white",borderWidth:1,borderColor:"#787878",width:183.34,height:41.44,borderRadius:5,color:"black"}} onChangeText={text => {if(text.length == 3){setPayText(false);}}}></TextInput>
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
        
          <Text style={[styles.textColor,{bottom:970,left:70,alignSelf:"center"}]}>이용을 위한 정보제공 동의사항에{'\n'}              체크해주세요!!</Text> 
          
          <Pressable style={{bottom:960,left:40}}>
          <Image
            source={require('../../src/svgFile/ban.png')}
          />
          </Pressable>
        <View style={{width:329.94,height:263.27, borderBottomLeftRadius:15,borderBottomRightRadius:15,bottom:960,alignSelf:"center",backgroundColor:"white",left:2}}>
         

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
        
        <Text style={[styles.textColor,{bottom:970,left:70,alignSelf:"center"}]}>확인을 눌러 예매를 완료해주세요!</Text> 
        <Pressable style={{bottom:960,left:40}}>
          <Image
            source={require('../../src/svgFile/ban2.png')}
          />
          </Pressable>
        <View style={{width:329.94,height:89.27,left:2, borderBottomLeftRadius:15,borderBottomRightRadius:15,bottom:960,alignSelf:"center",backgroundColor:"white"}}>
         

         

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
      left:24, width:362 , height : 66, borderTopLeftRadius:15, borderTopRightRadius:15, borderColor: "white", backgroundColor: "white",bottom:"530%" ,borderWidth:2, borderBottomColor:"#BCBCBC"
      },
  
      box5:{
        left:24,  width:362 , height : 66, borderBottomLeftRadius:15, borderBottomRightRadius:15, borderColor: "white", backgroundColor: "white",bottom:"530%"  
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
          bottom:957, 
          left:"3.1%",
          backgroundColor:"white",
        },

        box7:{
           width:330.24 , height : 320, borderRadius: 15, borderColor: "white", backgroundColor: "#F8F8F8" ,justifyContent:"center", alignContent: "center"
           ,bottom:957
          },
        
          box8:{
             width:348.75 , height : 47.42, borderRadius:15, borderColor: "white", backgroundColor: "white",justifyContent:'center', alignSelf: "center",bottom:628
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