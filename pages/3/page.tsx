import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { useEffect, useCallback } from 'react';

export default function ThirdPage() {
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
       <View style={screen_three.con}>
              <ImageBackground source={require('../../img/background_3.png')} style={{right: 375/2}}></ImageBackground>
              <View style={screen_three.nav}>
                <Text style={{fontFamily: "MonumentRegular", fontSize: 11, letterSpacing: 11*0.02, lineHeight: 11*1.08, color: 'white'}}>GARMIN</Text>
                <Image source={require('../../img/burger_3.png')}></Image>
              </View>
              <View style={{width: 91, height: 110, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                <View style={{width: 70, height: 70, backgroundColor: 'black', borderRadius: 20, marginTop: 117, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('../../img/play_3.png')}></Image>
                </View>
                <Text style={{textAlign: 'center', color: 'black', fontFamily: "MonumentRegular", fontSize: 11, letterSpacing: 11*0.02, lineHeight: 11*1.08, marginTop: 16}}>ABOUT GARMIN</Text>
              </View>
              <View style={{width: 375, height: 424, backgroundColor: 'white', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', borderRadius: 40, marginTop: 352-110}}>
                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 32}}>
                  <Text style={{color: '#B5B5B5', fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>FEATURED</Text>
                </View>
                <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: 325, marginTop: 27}}>
                  <View style={{width: 148, height: 192, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                    <Image source={require('../../img/item_1_3.png')}></Image>
                    <Text style={{marginTop: 26, fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>HRM-Pro™</Text>
                    <Text style={{marginTop: 8, fontFamily: "MonumentRegular", color: '#B5B5B5', fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>$129</Text>
                  </View>
                  <View style={{width: 148, height: 192, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                    <Image source={require('../../img/item_2_3.png')}></Image>
                    <Text style={{marginTop: 26, fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08, textAlign: 'center'}}>STRIKER™ Plus 4 Ice Fishing Bundle</Text>
                    <Text style={{marginTop: 8, fontFamily: "MonumentRegular", color: '#B5B5B5', fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>$249</Text>
                  </View>
                </View>
                <View style={{marginTop: 16, width: 32, height: 7, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                  <View style={{width: 4, height: 4, borderRadius: 4, backgroundColor: '#B9B9B9'}}></View>
                  <View style={{width: 7, height: 7, borderRadius: 7, backgroundColor: 'black'}}></View>
                  <View style={{width: 4, height: 4, borderRadius: 4, backgroundColor: '#B9B9B9'}}></View>
                </View>
                <View style={{width: 277, height: 76, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', marginTop: 35}}>
                  <Text style={{fontFamily: "MonumentRegular", color: 'black', fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08, textAlign: 'center'}}>WEARABLES</Text>
                  <Text style={{fontFamily: "MonumentRegular", color: '#B5B5B5', fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08, textAlign: 'center'}}>Explore all of our wrist-worn devices for all ages, from fitness trackers to advanced smartwatches.</Text>
                </View>
              </View>
            </View>
      </>
    )
}

const screen_three = StyleSheet.create({
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
})