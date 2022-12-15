import { Pressable, StyleSheet, Text, View, Alert ,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
  
} from '@react-native-seoul/kakao-login';
import IntroView from './IntroView';
import database from '@react-native-firebase/database';
import { useSelector, useDispatch } from 'react-redux';
import { setId } from '../redux/action';
import EmlogoSvg from '../../src/svgFile/emlogo.svg';


export default function Kakaologin({navigation}) {
  const {id} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState('');
  const [photo, setPhoto] = useState('');
  const [id2, setId2] = useState('');
  console.log(id)
  const signInWithKakao = async ()  => {
    try {
      const token = await login();
      const profile = await getKakaoProfile();
      console.log(profile)
      dispatch(setId(profile['id']));
      setNickname(JSON.stringify(profile['nickname']));
      setPhoto(JSON.stringify(profile['profileImageUrl']))
      setId2(JSON.stringify(profile['id']))

      database()
      .ref('users/' + profile['id'])
      .on('value', snapshot => {
        if(snapshot.val() == null){
          database().ref('users/' + profile['id']).set({
            name: profile['nickname'],
            imageUri: profile['profileImageUrl'],
            id: profile['id']
          });
        }
        if(snapshot.val().phone == null){
          // navigation.navigate('registerScreen')
          navigation.navigate('View2')
        }else navigation.navigate('View2')
      });
      //setResult(JSON.stringify(token));
    } catch (err) {
      console.error('login err', err);
      
    }
  };

  const signOutWithKakao = async ()  => {
    try {
      const message = await logout();

      setNickname(message);
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  const getProfile = async ()  => {
    try {
      const profile = await getKakaoProfile();

      setNickname(JSON.stringify(profile));
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  const unlinkKakao = async ()  => {
    try {
      const message = await unlink();

      setNickname(message);
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  return (
    <View style={{flex:1,justifyContent:'center',alignContent:"center"}}>
      <EmlogoSvg style={{position:"absolute",top:131,left:71}}></EmlogoSvg>
      <Text style={{position:"absolute",top:178.92,left:70.06,color:"#4E4E4E",fontSize:25,fontWeight:"bold"}}>로그인</Text>
      <TouchableOpacity style={{backgroundColor:"#FFC700",width:290.62,height:66.99,borderRadius:15,position:"absolute",top:280.47,left:60.69,justifyContent:"center"}}  onPress={() => {
           signInWithKakao();
         }}>
        <Text style={{alignSelf:"center",fontSize:20,fontWeight:"bold",color:"white"}}>카카오 로그인</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:"#0DC540",width:290.62,height:66.99,borderRadius:15,position:"absolute",top:396.16,left:60.69,justifyContent:"center"}}>
        <Text style={{alignSelf:"center",fontSize:20,fontWeight:"bold",color:"white"}}>네이버 로그인</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:"#676767",width:290.62,height:66.99,borderRadius:15,position:"absolute",top:511.85,left:60.69,justifyContent:"center"}} onPress={() => {
           navigation.navigate('EmLogin')
         }}>
        <Text style={{alignSelf:"center",fontSize:20,fontWeight:"bold",color:"white"}}>전화번호 로그인 하기</Text>
      </TouchableOpacity>

      <Text style={{color:"#C4C4C4",position:"absolute",top:661.36,left:130.42}}>
        서비스 시작 시 사용 관련   {'\n'}    알림이 전송됩니다.
      </Text>


    </View>

  )












    // <View style={styles.container}>
    //   <Text style={{fontSize:30, fontWeight:'bold', marginTop:200, marginRight:200, color:'black'}}>로그인</Text>
    //   {/* <IntroView result={nickname} /> */}
    //   <Pressable
    //     style={styles.button}
    //     onPress={() => {
    //       signInWithKakao();
    //     }}
    //   >
    //     <Text style={{textAlign:'center', fontSize:30}}>
    //       카카오 로그인
    //     </Text>
    //   </Pressable>
    //   <Pressable
    //     style={styles.button2}
    //     onPress={() => {
    //       navigation.navigate('EmLogin')
    //     }}
    //   >
    //     <Text style={{color:'white', textAlign:'center', fontSize:30}}>
    //       이음 간편 로그인
    //     </Text>
    //   </Pressable>
      /* <Pressable
        style={styles.button}
        onPress={() => getProfile()}
      >
        <Text style={styles.text}>
          프로필 조회
        </Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => unlinkKakao()}
      >
        <Text style={styles.text}>
          링크 해제
        </Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => signOutWithKakao()}
      >
        <Text style={styles.text}>
          카카오 로그아웃
        </Text>
      </Pressable> */   
  
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FEE500',
    borderColor: '#FEE500',
    borderRadius: 15,
    borderWidth: 1,
    width: 300,
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    marginBottom: 20,
    textAlignVertical: "center"
  },
  button2: {
    backgroundColor: '#676767',
    borderColor: '#676767',
    borderRadius: 15,
    borderWidth: 1,
    width: 300,
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    marginBottom: 20,
    textAlignVertical: "center"
  },
});