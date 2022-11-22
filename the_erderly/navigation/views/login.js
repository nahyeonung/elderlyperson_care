import { Pressable, StyleSheet, Text, View, Alert } from 'react-native';
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

export default function Kakaologin({navigation}) {
  const {id} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState('');
  const [photo, setPhoto] = useState('');
  const [id2, setId2] = useState('');
  console.log(nickname)
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
        }else{}
      });
      if(profile){
        navigation.navigate('registerScreen')
      }
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
    <View style={styles.container}>
      <IntroView result={nickname} />
      <Pressable
        style={styles.button}
        onPress={() => {
          signInWithKakao();
        }}
      >
        <Text style={styles.text}>
          카카오 로그인
        </Text>
      </Pressable>
      <Pressable
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
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "flex-end",
    alignItems: 'center',
    paddingBottom: 100
  },
  button: {
    backgroundColor: '#FEE500',
    borderRadius: 40,
    borderWidth: 1,
    width: 250,
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    textAlignVertical: "center"
  },
  text: {
    textAlign: "center"
  }
});