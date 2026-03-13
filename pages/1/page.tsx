import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Pressable } from 'react-native';
import { useEffect, useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function FirstPage() {
    const [image, setImage] = useState(require('../../img/watch_1.png'))
    let boom = '../../img/watch_1.png'

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

  return (
    <>
      <View style={screen_one.con}>
        <View style={screen_one.nav}>
          <Text onLayout={onLayoutRootView} style={{fontFamily: "MonumentRegular", fontSize: 11, letterSpacing: 11*0.02, lineHeight: 11*1.08}}>GARMIN</Text>
          <Pressable onPress={() => navigation.navigate("Second")}><Image source={require('../../img/burger_1.png')}></Image></Pressable> 
        </View>
        <View style={screen_one.topText}>
          <Text style={{fontFamily: "MonumentRegular", fontSize: 14, letterSpacing: 14*0.02, lineHeight: 14*1.08}}>Garmin Fenix 5s Plus</Text>
          <Text style={{fontFamily: "MonumentRegular", fontSize: 10, color: '#B5B5B5', letterSpacing: 10*0.02, lineHeight: 10*1.08}}>RUNNING GPS UNITS</Text>
        </View>
        <View>
            
          <Image source={image} style={{marginTop: 20, width: 356, height: 346}}></Image>
        </View>
        <View style={screen_one.section_3}>
          <View style={{width: 80, height: 15}}>
            <Text style={{fontFamily: "MonumentRegular", fontSize: 14, letterSpacing: 14*0.02, lineHeight: 14*1.08}}>$469.95</Text>
          </View>
          <View style={{width: 186, height: 40, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
            <Image source={require('../../img/arrowLeft_1.png')} style={{marginRight: 10}}></Image>
            <Pressable onPress={() => setImage(require('../../img/watch_mini_1.png'))}><Image source={require('../../img/watch_mini_1.png')}></Image></Pressable>
            <Pressable onPress={() => setImage(require('../../img/watch_mini_2.png'))}><Image source={require('../../img/watch_mini_2.png')}></Image></Pressable>
            <Pressable onPress={() => setImage(require('../../img/watch_mini_3.png'))}><Image source={require('../../img/watch_mini_3.png')}></Image></Pressable>
            <Pressable onPress={() => setImage(require('../../img/watch_mini_4.png'))}><Image source={require('../../img/watch_mini_4.png')}></Image></Pressable>
          </View>
        </View>
        <View style={screen_one.section_4}>
          <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginBottom: 10}}>
            <Text style={{width: 138, fontFamily: "MonumentRegular", fontSize: 10, color: '#B5B5B5', letterSpacing: 10*0.02, lineHeight: 10*1.08}}>Brand</Text>
            <Text style={{fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>Garmin</Text>
          </View>
          <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginBottom: 10}}>
            <Text style={{width: 138, height: 18, fontFamily: "MonumentRegular", fontSize: 10, color: '#B5B5B5', letterSpacing: 10*0.02, lineHeight: 10*1.08}}>Color</Text>
            <Text style={{fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>Silver W/White Band</Text>
          </View>
          <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginBottom: 10}}>
            <Text style={{width: 138, fontFamily: "MonumentRegular", fontSize: 10, color: '#B5B5B5', letterSpacing: 10*0.02, lineHeight: 10*1.08}}>Display Size</Text>
            <Text style={{fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>1.2 Inches</Text>
          </View>
          <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>
            <Text style={{width: 138, fontFamily: "MonumentRegular", fontSize: 10, color: '#B5B5B5', letterSpacing: 10*0.02, lineHeight: 10*1.08}}>Item Dimensions</Text>
            <Text style={{fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>1.7 x 0.6 x 1.7</Text>
          </View>
        </View>
        <View style={screen_one.section_5}>
          <Text style={{color: 'white', fontSize: 11, letterSpacing: 11*0.02, fontFamily: "MonumentRegular", lineHeight: 11*1.08}}>ADD TO CART</Text>
        </View>
      </View>
      </>
    )
}

const screen_one = StyleSheet.create({
  con: {
    width: 375,
    height: 812,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: "center",
    flexDirection: 'column',
    marginRight: 24
  },
  nav:{
    width: 327,
    height: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 24
  },
  topText:{
    width: 309,
    height: 38,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 50
  },
  section_3: {
    width: 335,
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 40,
    marginTop: 20
  },
  section_4: {
    width: 287,
    height: 84,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginTop: 40,
    marginLeft: 32
  },
  section_5: {
    width: 327,
    height: 70,
    backgroundColor: 'black',
    borderRadius: 20,
    marginTop: 42,
    justifyContent: 'center',
    alignItems: 'center',
  }
});