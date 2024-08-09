import { NativeRouter, Route, Routes } from 'react-router-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { LandingPage } from './src/views/LandingPage/LandingPage';

import { useEffect, useLayoutEffect, useState } from 'react';
import { Login } from './src/views/Login/Login';
import { getFonts } from './src/utils/globalStyles';
import { PublicLayout1 } from './src/assets/components/PublicLayout1/PublicLayout1';

export default function App() {
  useEffect(() => {
    const lockOrientation = async () => {
      await ScreenOrientation.unlockAsync() // Permite todas las orientaciones
    }

    lockOrientation()
  }, [])

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
      <PublicLayout1>
        <Routes>
          <Route path='/' element={
            <LandingPage />
          } />
          <Route path='/Inicio' element={
            <Login />
          } />
        </Routes>
      </PublicLayout1>
      {/* </SafeAreaView> */}
    </NativeRouter>
  );
}
