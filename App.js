import { NativeRouter, Route, Routes } from 'react-router-native';
import { LandingPage } from './src/views/LandingPage/LandingPage';

import { useLayoutEffect, useState } from 'react';
import { Login } from './src/views/Login/Login';
import { getFonts } from './src/utils/globalStyles';

export default function App() {
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
