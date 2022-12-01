import React, { Component,useEffect, useRef, useState} from 'react';
import {SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  TouchableOpacity,
  FlatList,} from 'react-native';
import {
  PERMISSIONS,
  RESULTS,
  request,
  openSettings,
} from 'react-native-permissions';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { CachesDirectoryPath, writeFile, readDir, stat, readFile, unlink,createReadStream } from 'react-native-fs';
import * as RNFS from 'react-native-fs';



const LoadingView = () => (
  <View style={styles.loading}>
    <Text style={styles.body}>Loading...</Text>
  </View>
);

const FileView = ({ file, onClose }) => {
  const [ready, setReady] = useState(false);
  const [contents, setContents] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const fileStat = await stat(file.path);

        if (fileStat.isFile()) {
          const fileData = await readFile(fileStat.path, 'utf8');
          console.log(fileStat.path)
          setContents(fileData);
          setReady(true);
        }
      } catch (e) {
        console.log('e', e);
      }
    })();

    return () => null;
  }, [file]);

  const deleteFile = async () => {
    try {
      await unlink(file.path);
      onClose();
    } catch (e) {
      console.log('e', e);
    }
  };

  if (!ready) return <LoadingView />;

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.body}>&lt; Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <Text style={styles.title}>{file.name}</Text>
        <Text style={styles.body}>{contents}</Text>
      </View>
      <Button title="Delete File" onPress={deleteFile} color="red" />
    </>
  );
};

const CreateView = ({ setCreateViewActive }) => {
  const [fileText, setFileText] = useState('');

  const saveFile = async () => {
    const path = `${CachesDirectoryPath}/${Date.now()}.txt`;

    try {
      await writeFile(path, fileText, 'utf8');
      setCreateViewActive(false);
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <>
      <View style={styles.main}>
        <Text style={styles.title}>Enter text for your file:</Text>
        <TextInput
          value={fileText}
          onChangeText={setFileText}
          style={styles.textArea}
          multiline
          textAlignVertical="top"
        />
      </View>
      <Button title="Save File" onPress={saveFile} />
    </>
  );
};

const ListView = ({ setCreateViewActive, selectFile }) => {
  const [ready, setReady] = useState(false);
  const [files, setFiles] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const filesArr = await readDir(CachesDirectoryPath);

        setFiles(filesArr);
        setReady(true);
      } catch (e) {
        console.log('error', e);
      }
    })();

    return () => null;
  }, []);

  if (!ready) return <LoadingView />;

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.file} onPress={() => selectFile(item)}>
      <Text style={styles.body}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.main}>
        {files.length > 0 ? (
          <FlatList data={files} renderItem={renderItem} keyExtractor={(item) => item.name} />
        ) : (
          <Text>No files</Text>
        )}
      </View>
      <Button title="Create new file" onPress={() => setCreateViewActive(true)} />
    </>
  );
};

//language => 언어 코드 ( Kor, Jpn, Eng, Chn )
// function stt(Kor, filePath) { 
//   const clientId = 'fwbc1tczj7';
//   const clientSecret = '9LDr0E0287DdZmzsOmjhZn1HCCe9s3VHsINP58Xs';
//   const header = {
//     'Content-Type': 'application/octet-stream',
//     'X-NCP-APIGW-API-KEY-ID': clientId,
//     'X-NCP-APIGW-API-KEY': clientSecret,
//   };
//   const url = `https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=${Kor}`;
//   const body= readFile('data/user/0/com.the_erderly/cache/sound.mp3');
//   axios.post(`https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=${Kor}`,{body:body},{headers:header})
//   .then((response) => {
//       console.log(response.data);
//   })
//   .catch((err) =>
//                     console.log('>>> [HOME] ❌ ERROR', err.message),
//                 );
  
// };


function stt(Kor,filePath) {
  const clientId = 'fwbc1tczj7';
  const clientSecret = '9LDr0E0287DdZmzsOmjhZn1HCCe9s3VHsINP58Xs';
  const test = fetch(`https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=${Kor}`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/octet-stream',
            'X-NCP-APIGW-API-KEY-ID': clientId,
            'X-NCP-APIGW-API-KEY': clientSecret,
        },
          body: RNFS.read(filePath)
      
        })
console.log('리두',test)
      
      }

const read = () => {
  const rea = readDir(CachesDirectoryPath);
  console.log(rea);
}
const api =() => {
  stt('Kor', 'data/user/0/com.the_erderly/cache/sound.mp3');
}



function VoiceScreen({navigation}) {
  const [createViewActive, setCreateViewActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [documentsFolder, setDocumentsFolder] = useState('');
  const getFileContent = async (path) => {
    const reader = await RNFS.readDir(path);
  }
  const getCurrentView = () => {
    if (createViewActive) {
      return <CreateView setCreateViewActive={setCreateViewActive} />;
    }

    if (selectedFile) {
      return <FileView file={selectedFile} onClose={() => setSelectedFile(null)} />;
    }

    return <ListView setCreateViewActive={setCreateViewActive} selectFile={setSelectedFile} />;
  };
  

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
    // const path = Platform.select({
    //     ios: 'hello.m4a',
    //     android: `${this.dirs.CacheDir}/hello.mp3`,
    //   });
    const path = 'data/user/0/com.the_erderly/cache/sound.mp3'
    if (audioRecorder.current) {
      setAudioStatus(true);
      await audioRecorder.current.startRecorder(path);
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

  const read = async() => {
   const a = await RNFS.read('/data/user/0/com.the_erderly/cache/sound.mp3');
   
   console.log(a);

  }

  
  return (
    <SafeAreaView style={styles.wrapper}>
    <View style={styles.container}>{getCurrentView()}</View>
    {audioStatus ? <Text>녹음중</Text> : <Text>녹음아님중</Text>}

      <Button onPress={onStartRecore} title="시작" />
      <Button onPress={onStopRecord} title="정지" />
      <Button onPress={soundStart} title="플레이" />
      <Button onPress={pausePlay} title="멈춰" />
      <Button onPress={tes} title="API" />
      <Button onPress={read} title="read" />


  </SafeAreaView>
    
  );
}
let fileReader = new FileReader();
fileReader.onload = () => {
  console.log('노두',fileReader.result);
}
const styles = StyleSheet.create({
  views: {marginTop: 50},
  wrapper: {backgroundColor:"black"}
});
export default VoiceScreen;