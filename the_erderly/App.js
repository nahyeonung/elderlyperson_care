import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState,component } from 'react';
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';
import IntroView from './IntroView';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginview from './navigation/views/login';
import start from './navigation/views/view1';
import end from './navigation/views/view2';
import voice from './navigation/views/voice';
import register from './navigation/views/registration_phone';
import education from './navigation/views/education';
import main from './navigation/views/main';
import phone from './navigation/views/phoneLink';
import reservation from './navigation/views/reservation';
import mypage from './navigation/views/myPage';
import emlogin from './navigation/views/emLogin';
import registration from './navigation/views/registration';
import test from './navigation/views/test';
import maru from './navigation/views/maru';
import find from './navigation/views/findWay';
import bus from './navigation/views/bus_reservation';
import train from './navigation/views/train';
import train2 from './navigation/views/train2';
import em from './navigation/views/em';
import homepage from './navigation/views/homepage';
import intro from './navigation/views/intro';
import presentation from './navigation/views/presentation';








import { Provider } from 'react-redux';
import { Store } from './navigation/redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
    return(
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="View1" component={start} />
            <Stack.Screen name="View2" component={end} />
            <Stack.Screen name="Kakaologin" component={loginview} />
            <Stack.Screen name="VoiceScreen" component={voice} />
            <Stack.Screen name="registerScreen" component={register} />
            <Stack.Screen name="PhoneLink" component={phone} />
            <Stack.Screen name="Main" component={main} />
            <Stack.Screen name="Education" component={education} />
            <Stack.Screen name="Reservation" component={reservation} />
            <Stack.Screen name="Maru" component={maru} />
            <Stack.Screen name="MyPage" component={mypage} />
            <Stack.Screen name="EmLogin" component={emlogin} />
            <Stack.Screen name="Registration" component={registration} />
            <Stack.Screen name="Test" component={test} />
            <Stack.Screen name="Find" component={find} />
            <Stack.Screen name="Bus" component={bus} />
            <Stack.Screen name="Train" component={train} />
            <Stack.Screen name="Train2" component={train2} />
            <Stack.Screen name="Em" component={em} />
            <Stack.Screen name="HomePage" component={homepage} />
            <Stack.Screen name="TrainIntro" component={intro} />
            <Stack.Screen name="Presentation" component={presentation} />


           
          </Stack.Navigator>
      
        </NavigationContainer>
      </Provider>
    )
}

//   const [result, setResult] = useState<string>('');

//   const signInWithKakao = async (): Promise<void> => {
//     try {
//       const token = await login();
//       setResult(JSON.stringify(token));
//     } catch (err) {
//       console.error('login err', err);
//     }
//   };

//   const signOutWithKakao = async (): Promise<void> => {
//     try {
//       const message = await logout();

//       setResult(message);
//     } catch (err) {
//       console.error('signOut error', err);
//     }
//   };

//   const getProfile = async (): Promise<void> => {
//     try {
//       const profile = await getKakaoProfile();

//       setResult(JSON.stringify(profile));
//     } catch (err) {
//       console.error('signOut error', err);
//     }
//   };

//   const unlinkKakao = async (): Promise<void> => {
//     try {
//       const message = await unlink();

//       setResult(message);
//     } catch (err) {
//       console.error('signOut error', err);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <IntroView result={result} />
//       <Pressable
//         style={styles.button}
//         onPress={() => {
//           signInWithKakao();
//         }}
//       >
//         <Text style={styles.text}>
//           카카오 로그인
//         </Text>
//       </Pressable>
//       <Pressable
//         style={styles.button}
//         onPress={() => getProfile()}
//       >
//         <Text style={styles.text}>
//           프로필 조회
//         </Text>
//       </Pressable>
//       <Pressable
//         style={styles.button}
//         onPress={() => unlinkKakao()}
//       >
//         <Text style={styles.text}>
//           링크 해제
//         </Text>
//       </Pressable>
//       <Pressable
//         style={styles.button}
//         onPress={() => signOutWithKakao()}
//       >
//         <Text style={styles.text}>
//           카카오 로그아웃
//         </Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     height: "100%",
//     justifyContent: "flex-end",
//     alignItems: 'center',
//     paddingBottom: 100
//   },
//   button: {
//     backgroundColor: '#FEE500',
//     borderRadius: 40,
//     borderWidth: 1,
//     width: 250,
//     height: 40,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     marginTop: 10
//   },
//   text: {
//     textAlign: "center"
//   }
// });