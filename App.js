import { NativeRouter, Route, Routes } from 'react-router-native';
import { LandingPage } from './src/views/LandingPage/LandingPage';

import { useLayoutEffect, useState } from 'react';
import { Login } from './src/views/Login/Login';
import { getFonts } from './src/utils/globalStyles';
import { PublicLayout1 } from './src/assets/components/PublicLayout1/PublicLayout1';

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
            <Login />
          } />
          <Route path='/FAQ' element={
            <Login />
          } />
          <Route path='/Inicio' element={
            <Login />
          } />
        </Routes>
      </PublicLayout1>
    </NativeRouter>
  );
}
