import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { useEffect, useCallback } from 'react';

export default function App() {
  const [fonts] = useFonts({
    'MonumentRegular': require('./assets/MonumentExtendedRegular.otf')
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
          <Image source={require('./img/burger_1.png')}></Image>
        </View>
        <View style={screen_one.topText}>
          <Text style={{fontFamily: "MonumentRegular", fontSize: 14, letterSpacing: 14*0.02, lineHeight: 14*1.08}}>Garmin Fenix 5s Plus</Text>
          <Text style={{fontFamily: "MonumentRegular", fontSize: 10, color: '#B5B5B5', letterSpacing: 10*0.02, lineHeight: 10*1.08}}>RUNNING GPS UNITS</Text>
        </View>
        <View>
          <Image source={require('./img/watch_1.png')} style={{marginTop: 20}}></Image>
        </View>
        <View style={screen_one.section_3}>
          <View style={{width: 80, height: 15}}>
            <Text style={{fontFamily: "MonumentRegular", fontSize: 14, letterSpacing: 14*0.02, lineHeight: 14*1.08}}>$469.95</Text>
          </View>
          <View style={{width: 186, height: 40, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
            <Image source={require('./img/arrowLeft_1.png')} style={{marginRight: 10}}></Image>
            <Image source={require('./img/watch_mini_1.png')}></Image>
            <Image source={require('./img/watch_mini_2.png')}></Image>
            <Image source={require('./img/watch_mini_3.png')}></Image>
            <Image source={require('./img/watch_mini_4.png')}></Image>
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
      
      <View style={screen_two.con}>
        <ImageBackground style={{right: 375/2}} source={require('./img/background_2.png')}></ImageBackground>
        <View style={screen_two.nav}>
          <Image source={require('./img/ellipsis_2.png')}></Image>
          <Image source={require('./img/man_2.png')}></Image>
        </View>
        <View style={screen_two.section_1}>
          <Text style={{color: 'white', fontFamily: "MonumentRegular", fontSize: 24, letterSpacing: 24*0.02, lineHeight: 24*1.08}}>00:42:13</Text>
          <Text style={{color: '#B5B5B5', fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>Duration</Text>
        </View>
        <View style={screen_two.section_2}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: 'white', fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08, marginRight: 4}}>GPS</Text>
            <Image source={require('./img/connect_2.png')} style={{marginBottom: 2}}></Image>
          </View>
          <View>
            <Text style={{color: 'white', fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>FENIX</Text>
          </View>
        </View>
        <View style={{height: 400}}>
          <Image source={require('./img/path_2.png')} style={{top: 147}}></Image>
        </View>
        <View style={screen_two.section_4}>
          <Text style={{color: '#5A5757', fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>PACE: </Text>
          <Text style={{color: 'white', fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>04:34 MIN/KM</Text>
        </View>
        <View style={screen_two.section_5}>
          <View style={{backgroundColor: 'white', width: 154, height: 139, borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: 64, height: 64, borderRadius: 64, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('./img/pause_2.png')}></Image>
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

      <View style={screen_three.con}>
        <ImageBackground source={require('./img/background_3.png')} style={{right: 375/2}}></ImageBackground>
        <View style={screen_three.nav}>
          <Text style={{fontFamily: "MonumentRegular", fontSize: 11, letterSpacing: 11*0.02, lineHeight: 11*1.08, color: 'white'}}>GARMIN</Text>
          <Image source={require('./img/burger_3.png')}></Image>
        </View>
        <View style={{width: 91, height: 110, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
          <View style={{width: 70, height: 70, backgroundColor: 'black', borderRadius: 20, marginTop: 117, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('./img/play_3.png')}></Image>
          </View>
          <Text style={{textAlign: 'center', color: 'black', fontFamily: "MonumentRegular", fontSize: 11, letterSpacing: 11*0.02, lineHeight: 11*1.08, marginTop: 16}}>ABOUT GARMIN</Text>
        </View>
        <View style={{width: 375, height: 424, backgroundColor: 'white', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', borderRadius: 40, marginTop: 352-110}}>
          <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 32}}>
            <Text style={{color: '#B5B5B5', fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>FEATURED</Text>
          </View>
          <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: 325, marginTop: 27}}>
            <View style={{width: 148, height: 192, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
              <Image source={require('./img/item_1_3.png')}></Image>
              <Text style={{marginTop: 26, fontFamily: "MonumentRegular", fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>HRM-Pro™</Text>
              <Text style={{marginTop: 8, fontFamily: "MonumentRegular", color: '#B5B5B5', fontSize: 10, letterSpacing: 10*0.02, lineHeight: 10*1.08}}>$129</Text>
            </View>
            <View style={{width: 148, height: 192, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
              <Image source={require('./img/item_2_3.png')}></Image>
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

  );
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
