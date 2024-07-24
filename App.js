import { NativeRouter, Route, Routes } from 'react-router-native';
import { LandingPage } from './src/views/LandingPage/LandingPage';

import { useLayoutEffect, useState } from 'react';
import { Login } from './src/views/Login/Login';
import { getFonts } from './src/utils/globalStyles';
import { Amplify } from 'aws-amplify';
import { Amplify as AmplifyClass } from './src/utils/amplify'
import amplifyconfig from './amplifyconfiguration.json'


export default function App() {
  Amplify.configure(amplifyconfig)
  const amplify = new AmplifyClass()
  console.log(amplify);
  amplify.cleanToken()
  amplify.sign()

  const [fontsLoaded, setFontsLoaded] = useState(false)

  useLayoutEffect(() => {
    getFonts().then(() => setFontsLoaded(true))
  }, [])

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeRouter>
      {/* <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}> */}
      <Routes>
        <Route path='/' element={
          <LandingPage />
        } />
        <Route path='/Inicio' element={
          <Login />
        } />
      </Routes>
      {/* </SafeAreaView> */}
    </NativeRouter>
  );
}
