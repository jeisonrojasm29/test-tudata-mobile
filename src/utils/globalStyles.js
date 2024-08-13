import * as Font from 'expo-font'
import { Dimensions } from 'react-native'

export const getFonts = () => Font.loadAsync({
  'Poppins-Black': require('../assets/fonts/poppins/Poppins-Black.otf'),
  'Poppins-BlackItalic': require('../assets/fonts/poppins/Poppins-BlackItalic.otf'),
  'Poppins-Bold': require('../assets/fonts/poppins/Poppins-Bold.otf'), // Sí
  'Poppins-BoldItalic': require('../assets/fonts/poppins/Poppins-BoldItalic.otf'),
  'Poppins-ExtraBold': require('../assets/fonts/poppins/Poppins-ExtraBold.otf'),
  'Poppins-ExtraBoldItalic': require('../assets/fonts/poppins/Poppins-ExtraBoldItalic.otf'),
  'Poppins-ExtraLight': require('../assets/fonts/poppins/Poppins-ExtraLight.otf'),
  'Poppins-ExtraLightItalic': require('../assets/fonts/poppins/Poppins-ExtraLightItalic.otf'),
  'Poppins-Italic': require('../assets/fonts/poppins/Poppins-Italic.otf'),
  'Poppins-Light': require('../assets/fonts/poppins/Poppins-Light.otf'), // Sí
  'Poppins-LightItalic': require('../assets/fonts/poppins/Poppins-LightItalic.otf'),
  'Poppins-Medium': require('../assets/fonts/poppins/Poppins-Medium.otf'),
  'Poppins-MediumItalic': require('../assets/fonts/poppins/Poppins-MediumItalic.otf'),
  'Poppins-Regular': require('../assets/fonts/poppins/Poppins-Regular.otf'),
  'Poppins-SemiBold': require('../assets/fonts/poppins/Poppins-SemiBold.otf'),
  'Poppins-SemiBoldItalic': require('../assets/fonts/poppins/Poppins-SemiBoldItalic.otf'),
  'Poppins-Thin': require('../assets/fonts/poppins/Poppins-Thin.otf'),
  'Poppins-ThinItalic': require('../assets/fonts/poppins/Poppins-ThinItalic.otf'),

  'Quicksand_Bold_Oblique': require('../assets/fonts/quicksand/Quicksand_Bold_Oblique.otf'),
  'Quicksand_Bold': require('../assets/fonts/quicksand/Quicksand_Bold.otf'), // Sí
  'Quicksand_Book_Oblique': require('../assets/fonts/quicksand/Quicksand_Book_Oblique.otf'),
  'Quicksand_Book': require('../assets/fonts/quicksand/Quicksand_Book.otf'),
  'Quicksand_Dash': require('../assets/fonts/quicksand/Quicksand_Dash.otf'),
  'Quicksand_Light_Oblique': require('../assets/fonts/quicksand/Quicksand_Light_Oblique.otf'),
  'Quicksand_Light': require('../assets/fonts/quicksand/Quicksand_Light.otf'),
})

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('screen').height;
export const screenWidth = Dimensions.get('screen').width;

export const vw = (size) => {
  const vw = windowWidth / 100;
  return size * vw;
}

export const vh = (size) => {
  const vh = windowHeight / 100;
  return size * vh;
}

export const colors = {
  color1: '#FF5D00',
  color2: '#ffffff',
  color3: '#000000',
  color4: '#595959',
  color5: '#FF0000',
  color6: '#FF0A0A',
  color7: '#A10268',
  color8: '#73154F',
  colorOpacity1: '#ffffff80',
  colorOpacity2: '#00000080',
}

export const textSizes = {
  _1pt: vw(0.25),
  _10pt: vw(0.25 * 10),
  _12pt: vw(0.25 * 12),
  _14pt: vw(0.25 * 14),
  _16pt: vw(0.25 * 16),
  _17pt: vw(0.25 * 17),
  _28pt: vw(0.25 * 28),
  _20pt: vw(0.25 * 20),
  _30pt: vw(0.25 * 30),
  _34pt: vw(0.25 * 34),
  _50pt: vw(0.25 * 50)
}