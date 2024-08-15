import { NativeRouter, Route, Routes } from 'react-router-native';
import { useLayoutEffect, useState } from 'react';

import { getFonts } from './src/utils/globalStyles';
import { PublicLayout1 } from './src/assets/components/PublicLayout1/PublicLayout1';
import { LandingPage } from './src/views/LandingPage/LandingPage';
import { Login } from './src/views/Login/Login';
import { AboutUs } from './src/views/AboutUs/AboutUs';
import { Faq } from './src/views/FAQ/Faq';

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
      <PublicLayout1>
        <Routes>
          <Route path='/' element={
            <LandingPage />
          } />
          <Route path='/Nosotros' element={
            <AboutUs />
          } />
          <Route path='/FAQ' element={
            <Faq />
          } />
          <Route path='/Inicio' element={
            <Login />
          } />
        </Routes>
      </PublicLayout1>
    </NativeRouter>
  );
}
