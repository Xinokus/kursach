import * as React from 'react';
import {createStaticNavigation, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FirstPage from './pages/1/page';
import SecondPage from './pages/2/page';
import ThirdPage from './pages/3/page';

import type { RootStackParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={FirstPage}/>
        <Stack.Screen name="Second" component={SecondPage}/>
        <Stack.Screen name="Third" component={ThirdPage}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}