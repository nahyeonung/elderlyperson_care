import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,SafeAreaView,Alert,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Bus({navigation}){

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
  }
  else if (depart == false){
    setDepart(true);
    setDepartPage(false)
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
 }

 const onPressDay = () => {
  if(depart == true){
    setDepart(false)
    setDay(true)
  }
  else if (depart == false){
    setDepart(true);
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
 }
 const onPressSeat = () => {
  if(depart == true){
    setDepart(false)
    setSeat(true)
  }
  else if (depart == false){
    setDepart(true);
  }
 }

 const onPressDepartPage = () => {
  if(departPage == true){
    setDepartPage(false)
    setDepart(true)
  }
  else if (departPage == false){
    setDepartPage(true)
    setDepart(false)
  }
 }

 const onPressArrive2 = () => {
  if(arrive == true){
    setDepart(true)
    setArrive(false)
  }
  else if (depart == false){
    setDepart(true);
  }
 }

 const onPressDay2 = () => {
  if(day == true){
    setDepart(true)
    setDay(false)
  }
  else if (depart == false){
    setDepart(true);
  }
 }

 const onPressAdult2 = () => {
  if(adult == true){
    setDepart(true)
    setAdult(false)
  }
  else if (depart == false){
    setDepart(true);
  }
 }

 const onPressSeat2 = () => {
  if(seat == true){
    setDepart(true)
    setSeat(false)
  }
  else if (depart == false){
    setDepart(true);
  }
 }
 
 
  return(
        <View style={{flex:1, backgroundColor: "white"}}>
        {day ?  <Button title="가는날!" onPress={onPressDay2}></Button> : null}
        
        
        {adult ?  <View style={{flex:1, backgroundColor:"white",borderTopRightRadius:30, borderTopLeftRadius:30,}}>
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
                        <Pressable style={styles.minusBox}><Text style={{color:"white", fontWeight:"bold", alignSelf:"center",fontSize:13}} onPress={onDecreaseAd}>ㅡ</Text></Pressable>
                        <Text style={styles.text19}>{ad}</Text>
                        <Pressable style={styles.plusBox}><Text style={{color:"white", fontWeight:"bold", alignSelf:"center",fontSize:13}} onPress={onIncreaseAd}>+</Text></Pressable>
                        </View>
                      </View>
                      <View style={{flex:0.1, backgroundColor:"white",alignItems:"center",justifyContent:"flex-start",flexDirection:"row",borderColor:"gray", borderBottomWidth:2}}>
                        <View style={{justifyContent:"center",alignItems:"center"}}><Text style={styles.text17}>어린이 {ua}명</Text>
                        <Text style={styles.text18}>만 6~12세</Text>
                        </View>
                        <View style={{flexDirection:"row", alignSelf:"center",left:"45%"}}>
                        <Pressable style={styles.minusBox}><Text style={{color:"white", fontWeight:"bold", alignSelf:"center",fontSize:13}} onPress={uaDecreaseAd}>ㅡ</Text></Pressable>
                        <Text style={styles.text19}>{ua}</Text>
                        <Pressable style={styles.plusBox}><Text style={{color:"white", fontWeight:"bold", alignSelf:"center",fontSize:13}} onPress={uaIncreaseAd}>+</Text></Pressable>
                        </View>
                        
                      </View>
                      <View style={{flex:0.1, backgroundColor:"white",alignItems:"center",justifyContent:"flex-start",flexDirection:"row",borderColor:"gray", borderBottomWidth:2}}>
                        <View style={{justifyContent:"center",alignItems:"center"}}><Text style={styles.text17}>유아 {baby}명</Text>
                        <Text style={styles.text18}>만 8세 미만</Text>
                        </View>
                        <View style={{flexDirection:"row", left:"50%"}}>
                        <Pressable style={styles.minusBox}><Text style={{color:"white", fontWeight:"bold", alignSelf:"center",fontSize:13}} onPress={babyDecreaseAd}>ㅡ</Text></Pressable>
                        <Text style={styles.text19}>{baby}</Text>
                        <Pressable style={styles.plusBox}><Text style={{color:"white", fontWeight:"bold", alignSelf:"center",fontSize:13}} onPress={uaIncreaseAd}>+</Text></Pressable>
                        </View>
                        
                      </View>

                      <View style={{flex:0.1, backgroundColor:"white",alignItems:"center",justifyContent:"flex-start",flexDirection:"row",borderColor:"gray", borderBottomWidth:2}}>
                        <View style={{justifyContent:"center",alignItems:"center"}}><Text style={styles.text17}>경로 {gyon}명</Text>
                        <Text style={styles.text18}>만 65세이상</Text>
                        </View>
                        <View style={{flexDirection:"row", left:"50%"}}>
                        <Pressable style={styles.minusBox}><Text style={{color:"white", fontWeight:"bold", alignSelf:"center",fontSize:13}} onPress={gyonDecreaseAd}>ㅡ</Text></Pressable>
                        <Text style={styles.text19}>{gyon}</Text>
                        <Pressable style={styles.plusBox}><Text style={{color:"white", fontWeight:"bold", alignSelf:"center",fontSize:13}} onPress={gyonIncreaseAd}>+</Text></Pressable>
                        </View>
                      </View>

                      <View style={{flex:0.1, backgroundColor:"white",alignItems:"center",justifyContent:"flex-start",flexDirection:"row",borderColor:"gray", borderBottomWidth:2}}>
                        <View style={{justifyContent:"center",alignItems:"center"}}><Text style={styles.text17}>중증 장애인 {jang}명</Text>
                        <Text style={styles.text18}>장애 1~3급</Text>
                        </View>
                        <View style={{flexDirection:"row", left:"35%"}}>
                        <Pressable style={styles.minusBox}><Text style={{color:"white", fontWeight:"bold", alignSelf:"center",fontSize:13}} onPress={jangDecreaseAd}>ㅡ</Text></Pressable>
                        <Text style={styles.text19}>{jang}</Text>
                        <Pressable style={styles.plusBox}><Text style={{color:"white", fontWeight:"bold", alignSelf:"center",fontSize:13}} onPress={jangIncreaseAd}>+</Text></Pressable>
                        </View>
                      </View>
                      <View style={{flex:0.1, backgroundColor:"white",alignItems:"center",justifyContent:"flex-start",flexDirection:"row",borderColor:"gray", borderBottomWidth:2}}>
                        <View style={{justifyContent:"center",alignItems:"center"}}><Text style={styles.text17}>경증 장애인 {jang2}명</Text>
                        <Text style={styles.text18}>장애 4~6 급</Text>
                        </View>
                        <View style={{flexDirection:"row", left:"35%"}}>
                        <Pressable style={styles.minusBox}><Text style={{color:"white", fontWeight:"bold", alignSelf:"center",fontSize:13}} onPress={jang2DecreaseAd}>ㅡ</Text></Pressable>
                        <Text style={styles.text19}>{jang2}</Text>
                        <Pressable style={styles.plusBox}><Text style={{color:"white", fontWeight:"bold", alignSelf:"center",fontSize:13}} onPres={jang2IncreaseAd}>+</Text></Pressable>
                        </View>
                      </View>
                      <View style ={{flex:0.2 , justifyContent:"center",alignItems:"center"}}>
                        <TouchableOpacity style={styles.box11} onPress={onPressAdult2}>
                           <Text style={styles.text20} activeOpacity={0.8}> {count} 명 예약</Text>
                        </TouchableOpacity>
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
                        />
                        <Text style={styles.text21}>휠체어석</Text>
                        <Text style={styles.text22}>휠체어석과 일행을 위한 일반좌석이 자동배정됩니다.</Text>
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
                        />
                        <Text style={styles.text21}>전동휠체어석</Text>
                        <Text style={styles.text22}>전동휠체어석과 일행을 위한 일반좌석이 자동배정됩니다.</Text>
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
                        />
                        <Text style={styles.text21}>2층석</Text>
                        <Text style={styles.text22}>ITX 청춘 열차에만 존재하는 좌석입니다.</Text>
                        </View>
                        
                      </View>

                        <View style ={{flex:0.2 , justifyContent:"center",alignItems:"center"}}>
                            <TouchableOpacity style={styles.box11} onPress={onPressAdult2}>
                               <Text style={styles.text20} activeOpacity={0.8}>일반좌석 적용</Text>
                            </TouchableOpacity>
                         </View>
                      </View>
                       : null}
        
        
        
        
        
        
        
        
        
        
        
        
        
        {schedule ?  <Button title="시간표 조회!!"></Button> : null}

        {arrive ? <View style={{flex:1, borderTopRightRadius:30, borderTopLeftRadius:30, backgroundColor: "white", top:20,borderColor:"white",}}>
                          <View  style={{flex:0.2,flexDirection: "row", backgroundColor:"#F8F8F8",borderTopRightRadius:30, borderTopLeftRadius:30,}}>
                            <Text style={styles.text9}>도착지 선택</Text>
                            <Pressable style={styles.box12} onPress={onPressArrive2}>
                              <Text style={styles.text10}>X</Text>
                            </Pressable>

                            <TextInput style={styles.input} placeholder='도착역'  placeholderTextColor="gray"></TextInput>
                          </View>
                          <View style={{flex:0.1,flexDirection: "row", backgroundColor:"#F8F8F8",justifyContent:"center", alignContent:"center"}}>
                            <Text style={[styles.text12,{color:"blue"}]}>지역순</Text>
                            
                            <Text style={[styles.text12,{color:"blue"}]}>가나다순</Text>
                          </View>

                          <View style={{flex:0.09,flexDirection: "row", backgroundColor:"#F8F8F8",}}>
                          <ScrollView style={{flexDirection: "row",backgroundColor:"#F8F8F8",}} horizontal={true}>

                           <Pressable style={styles.box13}>
                              <Text style={styles.text13}>최근|주변</Text>
                           </Pressable>

                           <Pressable style={styles.box13}>
                              <Text style={styles.text14}>인천</Text>
                           </Pressable>
                           <Pressable style={styles.box13}>
                              <Text style={styles.text14}>대전</Text>
                           </Pressable>
                           <Pressable style={styles.box13}>
                              <Text style={styles.text14}>서울</Text>
                           </Pressable>

                          </ScrollView>
                          </View>
                          <View style={{flex: 0.008, backgroundColor: "lightgray"}}></View>
                          
                          <View style={{flex: 0.08, backgroundColor:"white", borderBottomWidth:2, borderColor: "gray", flexDirection:"row"}}>
                           <Text style={{fontSize:20, fontWeight:"bold", margin:20}}>대덕구 오정동</Text>
                           <Text style={{fontSize:15, fontWeight:"bold", margin:23, left: 90}}>내위치</Text>
                           <Text style={{fontSize:15, fontWeight:"bold", margin:23,left: 90}}>변경</Text>

                          </View>

                          <View style={{flex: 0.08, backgroundColor:"white", flexDirection:"row",borderBottomWidth:2, borderColor:"gray"}}>
                           <Text style={{fontSize:20, fontWeight:"bold", margin:15,}}>대전역</Text>
                           <Pressable style={styles.KtxBox}>
                            <Text style={{color:"white", fontSize:15, left:5,  top:4, fontWeight:"bold"}}>KTX</Text>
                           </Pressable>
                           
                          </View>

                          <View style={{flex: 0.08, backgroundColor:"white", flexDirection:"row",borderBottomWidth:2, borderColor:"gray"}}>
                           <Text style={{fontSize:20, fontWeight:"bold", margin:15}}>서대전역</Text>
                           <Pressable style={styles.KtxBox}>
                            <Text style={{color:"white", fontSize:15, left:5,  top:4, fontWeight:"bold"}}>KTX</Text>
                           </Pressable>
                           
                          </View>

                          <View style={{flex: 0.08, backgroundColor:"white", flexDirection:"row",borderBottomWidth:2, borderColor:"gray"}}>
                           <Text style={{fontSize:20, fontWeight:"bold", margin:15}}>신탄진역</Text>
                           <Pressable style={styles.KtxBox}>
                            <Text style={{color:"white", fontSize:15, left:5,  top:4, fontWeight:"bold"}}>KTX</Text>
                           </Pressable>
                           
                          </View>
                          <View style={{flex: 0.08, backgroundColor:"white", flexDirection:"row",borderBottomWidth:2, borderColor:"gray"}}>
                           <Text style={{fontSize:20, fontWeight:"bold", margin:15}}>역전할매</Text>
                           <Pressable style={styles.KtxBox}>
                            <Text style={{color:"white", fontSize:15, left:5,  top:4, fontWeight:"bold"}}>KTX</Text>
                           </Pressable>
                           
                          </View>

                      </View> : null}




        {departPage ? <View style={{flex:1, borderTopRightRadius:30, borderTopLeftRadius:30, backgroundColor: "white", top:20,borderColor:"white",}}>
                          <View  style={{flex:0.2,flexDirection: "row", backgroundColor:"#F8F8F8",borderTopRightRadius:30, borderTopLeftRadius:30,}}>
                            <Text style={styles.text9}>출발지 선택</Text>
                            <Pressable style={styles.box12} onPress={onPressDepartPage}>
                              <Text style={styles.text10}>X</Text>
                            </Pressable>

                            <TextInput style={styles.input} placeholder='출발역 검색'  placeholderTextColor="gray"></TextInput>
                          </View>
                          <View style={{flex:0.1,flexDirection: "row", backgroundColor:"#F8F8F8",justifyContent:"center", alignContent:"center"}}>
                            <Text style={[styles.text12,{color:"#add8e6"}]}>지역순</Text>
                            
                            <Text style={[styles.text12,{color:"#add8e6"}]}>가나다순</Text>
                          </View>

                          <View style={{flex:0.09,flexDirection: "row", backgroundColor:"#F8F8F8",}}>
                          <ScrollView style={{flexDirection: "row",backgroundColor:"#F8F8F8",}} horizontal={true}>

                           <Pressable style={styles.box13}>
                              <Text style={styles.text13}>최근|주변</Text>
                           </Pressable>

                           <Pressable style={styles.box13}>
                              <Text style={styles.text14}>인천</Text>
                           </Pressable>
                           <Pressable style={styles.box13}>
                              <Text style={styles.text14}>대전</Text>
                           </Pressable>
                           <Pressable style={styles.box13}>
                              <Text style={styles.text14}>서울</Text>
                           </Pressable>

                          </ScrollView>
                          </View>
                          <View style={{flex: 0.008, backgroundColor: "lightgray"}}></View>
                          
                          <View style={{flex: 0.08, backgroundColor:"white", borderBottomWidth:2, borderColor: "#d3d3d3", flexDirection:"row"}}>
                           <Text style={{fontSize:20, fontWeight:"bold", margin:20, color:"black"}}>대덕구 오정동</Text>
                           <Text style={{fontSize:15, fontWeight:"bold", margin:23, left: 90, color:"black"}}>내위치</Text>
                           <Text style={{fontSize:15, fontWeight:"bold", margin:23,left: 90, color:"black"}}>변경</Text>

                          </View>

                          <View style={{flex: 0.08, backgroundColor:"white", flexDirection:"row",borderBottomWidth:2, borderColor:"#d3d3d3"}}>
                           <Text style={{fontSize:20, fontWeight:"bold", margin:15,}}>대전역</Text>
                           <Pressable style={styles.KtxBox}>
                            <Text style={styles.text15}>KTX</Text>
                           </Pressable>
                           
                          </View>

                          <View style={{flex: 0.08, backgroundColor:"white", flexDirection:"row",borderBottomWidth:2, borderColor:"#d3d3d3"}}>
                           <Text style={{fontSize:20, fontWeight:"bold", margin:15}}>서대전역</Text>
                           <Pressable style={styles.KtxBox}>
                            <Text style={styles.text15}>KTX</Text>
                           </Pressable>
                           
                          </View>

                          <View style={{flex: 0.08, backgroundColor:"white", flexDirection:"row",borderBottomWidth:2, borderColor:"#d3d3d3"}}>
                           <Text style={{fontSize:20, fontWeight:"bold", margin:15}}>신탄진역</Text>
                           <Pressable style={styles.KtxBox}>
                            <Text style={styles.text15}>KTX</Text>
                           </Pressable>
                           
                          </View>
                          <View style={{flex: 0.08, backgroundColor:"white", flexDirection:"row",borderBottomWidth:2, borderColor:"#d3d3d3"}}>
                           <Text style={{fontSize:20, fontWeight:"bold", margin:15}}>역전할매</Text>
                           <Pressable style={styles.KtxBox}>
                            <Text style={styles.text15}>KTX</Text>
                           </Pressable>
                           
                          </View>

                      </View> : null}









        { depart ? (<View style={{flex:0.34, justifyContent:'center', alignContent: "center",backgroundColor:"#03CF5D"}}>
            <Pressable style={{justifyContent:'center', alignSelf: "center"}}>
            <Text style={{fontSize:25,fontWeight:"700",color:"white",}}>기차 조회 & 예매</Text>
            </Pressable>

          </View>) : null}
        
        { depart ? (<View style={{flex:1, justifyContent:"center", alignContent: "center",width:379.24,height:465.76, left: 16.38, position:'absolute', marginTop:250 }}>
            <Pressable style={styles.box2}>
              <Pressable style={styles.box3}>
                <Pressable style={styles.box4} onPress={onPressDepart}>
                <Text style={styles.text6}>출발</Text>
                <Text style={styles.text7}>출발 기차역</Text>
                </Pressable>
                <Pressable style={styles.box5} onPress={onPressArrive}>
                <Text style={styles.text6}>도착</Text>
                <Text style={styles.text7}>도착 기차역</Text>
                </Pressable>
              </Pressable>

              <Pressable style={styles.box7}>
                <Pressable style={styles.box8} onPress={onPressDay}>
                <Text style={styles.text8}>가는날</Text>
                </Pressable>
                <Pressable style={styles.box9} onPress={onPressAdult}>
                <Text style={styles.text8}>어른{count}명</Text>
                </Pressable>

                <Pressable style={styles.box10} onPress={onPressSeat}>
                  <Text style={styles.text8}>일반좌석</Text>
                </Pressable>

                <TouchableOpacity style={styles.box11}>
                  <Text style={styles.text5} activeOpacity={0.8}>시간표 조회</Text>
                </TouchableOpacity>

             
              </Pressable>
            </Pressable>

            
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
    justifyContent:"center", alignContent: "center",
    left:16,
    marginTop:7
    

  },

  text7: {
    color:"#636363",
    fontWeight:"bold",
    fontSize: 13,
    justifyContent:"center", alignContent: "center",
    left:16
    

  },

  text8: {
    color:"#636363",
    fontWeight:"bold",
    fontSize: 13,
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
    
    fontWeight:"",
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
       
        box12:{
          width:40 , height : 40,justifyContent:"center", alignContent: "center", left:200, top:10
         },
        box13:{
          width:100, height:40,backgroundColor:"#e6e6fa", borderRadius:10,margin:20, justifyContent:"center", alignSelf: "center"
        },

        KtxBox:{
          backgroundColor:"blue", width:40, height: 30, borderRadius: 4 , top: 16,
        },
        fellBox:{
          backgroundColor:"gray", borderRadius:100, width:20 ,height:20, left:10
        },

        plusBox:{
          backgroundColor:"gray", borderRadius:100, width:20 ,height:20,left:10 
        },

        minusBox:{
          backgroundColor:"gray", borderRadius:100, width:20 ,height:20,
        },
        













        
         input: {
          borderRadius:15,
          fontSize:25,
          top:90,
          right:150,
          width:380,
          height: 60,
          borderColor: "#03CF5D",
          borderWidth: 2,
          color:"black"
        },
      

})