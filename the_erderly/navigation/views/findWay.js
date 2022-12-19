import React, { Component,useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable} from 'react-native';
import VideoPlayer from "react-native-video-player";


export default function Find({navigation}){
   
    return(

        <View style={styles.container}>
        <VideoPlayer video={require('../../mp3/motion.mp4')}
        autoplay={true} style={styles.fullScreen}
        videoHeight={50} videoWidth={50}
        resizeMode={"cover"} hideControlsOnStart={true}
        onEnd={() => navigation.navigate('HomePage')}
        ></VideoPlayer>
      </View>
      
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"white"
    },
    fullScreen: {
      position: "absolute",
      backgroundColor:"white",
      top: 250,
      left: 0,
      bottom: 0,
      right: 0,
    }
  });