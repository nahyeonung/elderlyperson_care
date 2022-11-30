import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {
  PERMISSIONS,
  RESULTS,
  request,
  openSettings,
} from 'react-native-permissions';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

function VoiceScreen({navigation}) {
  const audioRecorder = useRef();
  const [audioStatus, setAudioStatus] = useState(false);
  const checkRecord = async () => {
    try {
      const result = await request(PERMISSIONS.IOS.SPEECH_RECOGNITION);
      if (result === RESULTS.BLOCKED) {
        openSettings();
      }
    } catch (e) {
      console.log(`에러 \n ${e}`);
    }
  };

  useEffect(() => {
    audioRecorder.current = new AudioRecorderPlayer();
    checkRecord();
  }, []);

  const onStartRecore = async () => {
    if (audioRecorder.current) {
      setAudioStatus(true);
      await audioRecorder.current.startRecorder();
    }
  };

  const onStopRecord = async () => {
    if (audioRecorder.current) {
      setAudioStatus(false);
      await audioRecorder.current.stopRecorder();
    }
  };

  const soundStart = async () => {
    await audioRecorder.current?.startPlayer();
  };

  const pausePlay = async () => {
    await audioRecorder.current?.stopPlayer();
  };
  return (
    <View style={styles.views}>
      {audioStatus ? <Text>녹음중</Text> : <Text>녹음아님중</Text>}
      <Button onPress={onStartRecore} title="시작" />
      <Button onPress={onStopRecord} title="정지" />
      <Button onPress={soundStart} title="플레이" />
      <Button onPress={pausePlay} title="멈춰" />
    </View>
  );
}
let fileReader = new FileReader();
fileReader.onload = () => {
  console.log('노두',fileReader.result);
}
const styles = StyleSheet.create({
  views: {marginTop: 50},
});
export default VoiceScreen;