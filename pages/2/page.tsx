import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from 'react-native';
import { useEffect, useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function SecondPage() {
  const [timer, setTimer] = useState(false)

  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const navigation = useNavigation<NavigationProps>();


  const [fonts] = useFonts({
    'MonumentRegular': require('../../assets/MonumentExtendedRegular.otf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fonts) {
      await SplashScreen.hideAsync();
    }
  }, [fonts]);

  if (!fonts) {
    return null;
  }

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(timer){
        setSeconds(seconds+1)
      }
    }, 1000)
    return ()=>clearInterval(interval)
  })

  if(seconds == 60){
    setSeconds(0)
    setMinutes(minutes+1)
  }
  if(minutes == 60){
    setMinutes(0)
    setHours(hours+1)
  }

  return (
    <>
      <View style={screen_two.con}>
              <ImageBackground style={{right: 375/2}} source={require('../../img/background_2.png')}></ImageBackground>
              <View style={screen_two.nav}>
                <Image source={require('../../img/ellipsis_2.png')}></Image>
                <Pressable onPress={() => navigation.navigate("Third")}><Image source={require('../../img/man_2.png')}></Image></Pressable>
                
              </View>
              <View style={screen_two.section_1}>
                <Text style={{color: 'white', fontFamily: "MonumentRegular", fontSize: 24, letterSpacing: 24*0.02, lineHeight: 24*1.08}}>{hours}:{minutes}:{seconds}</Text>
                <Text style={{color: '#B5B5B5', fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>Duration</Text>
              </View>
              <View style={screen_two.section_2}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color: 'white', fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08, marginRight: 4}}>GPS</Text>
                  <Image source={require('../../img/connect_2.png')} style={{marginBottom: 2}}></Image>
                </View>
                <View>
                  <Text style={{color: 'white', fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>FENIX</Text>
                </View>
              </View>
              <View style={{height: 400}}>
                <Image source={require('../../img/path_2.png')} style={{top: 147}}></Image>
              </View>
              <View style={screen_two.section_4}>
                <Text style={{color: '#5A5757', fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>PACE: </Text>
                <Text style={{color: 'white', fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>04:34 MIN/KM</Text>
              </View>
              <View style={screen_two.section_5}>
                <View style={{backgroundColor: 'white', width: 154, height: 139, borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{width: 64, height: 64, borderRadius: 64, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
                    <Pressable onPress={()=>setTimer(timer == false ? true : false)}><Image source={require('../../img/pause_2.png')}></Image></Pressable> 
                  </View>
                  <Text style={{marginTop: 16, fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>Start</Text>
                </View>
                <View style={{backgroundColor: '#2B2626', width: 154, height: 139, borderRadius: 30}}>
                  <View style={{width: 97, height: 35, justifyContent: 'space-between', flexDirection: 'column', alignItems: 'flex-start', marginTop: 23, marginLeft: 30.5}}>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'white', fontFamily: "MonumentRegular", fontSize: 20, letterSpacing: 20*0.02, lineHeight: 20*1.08}}>7.20</Text>
                    <Text style={{color: 'white', fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08, paddingTop: 2}}> KM</Text>
                    </View>
                    <Text style={{color: '#555353', fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>Distance</Text>
                  </View>
                  <View style={{width: 97, height: 35, justifyContent: 'space-between', flexDirection: 'column', alignItems: 'flex-start', marginTop: 23, marginLeft: 30.5}}>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'white', fontFamily: "MonumentRegular", fontSize: 20, letterSpacing: 20*0.02, lineHeight: 20*1.08}}>453</Text>
                    <Text style={{color: 'white', fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08, paddingTop: 2}}> KCAL</Text>
                    </View>
                    <Text style={{color: '#555353', fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>Calories</Text>
                  </View>
                </View>
              </View>
            </View>
      </>
    )
}

const screen_two = StyleSheet.create({
  con: {
    width: 375,
    height: 812,
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    alignItems: "center",
    flexDirection: 'column',
    marginRight: 24
  },
  nav: {
    width: 327,
    height: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20
  },
  section_1: {
    marginTop: 40,
    height: 42,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column'
  },
  section_2: {
    marginTop: 40,
    width: 326,
    height: 11,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  section_3: {

  },
  section_4: {
    marginTop: 4,
    height: 11,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  section_5: {
    width: 328,
    height: 139,
    marginTop: 55,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
})
