import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,SafeAreaView,Alert,TextInput,ScrollView,TouchableOpacity} from 'react-native';


export default function Bus({navigation}){

 const [depart,setDepart] = useState(true)
 const [departPage,setDepartPage] = useState(false)
 const [arrive,setArrive] = useState(false)
 const [day,setDay] = useState(false)
 const [adult,setAdult] =useState(false)
 const [seat,setSeat] =useState(false)
 const [schedule,setSchedule] = useState(false)

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
        {adult ?  <Button title="성인!" onPress={onPressAdult2}></Button> : null}
        {seat ?  <Button title="좌석!"  onPress={onPressSeat2} ></Button> : null}
        {schedule ?  <Button title="시간표 조회!!"></Button> : null}

        {arrive ? <View style={{flex:1, borderTopRightRadius:30, borderTopLeftRadius:30, backgroundColor: "white", top:20,borderColor:"white",}}>
                          <View  style={{flex:0.2,flexDirection: "row", backgroundColor:"#F8F8F8",borderTopRightRadius:30, borderTopLeftRadius:30,}}>
                            <Text style={styles.text9}>도착지 선택</Text>
                            <Pressable style={styles.box12} onPress={onPressArrive2}>
                              <Text style={styles.text10}>X</Text>
                            </Pressable>

                            <TextInput style={styles.input} placeholder='도착역 검색'  placeholderTextColor="gray"></TextInput>
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
                <Text style={styles.text8}>어른1명</Text>
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