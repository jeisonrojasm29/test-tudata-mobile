import * as Font from 'expo-font'

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

export const colors = {
  orange1: '#FF5D00',
  white1: '#ffffff',
  whiteOpacity1: '#ffffff80',
  black1: '#000000',
  blackOpacity1: '#00000080',
  grey1: '#595959',
  red1: '#FF0000',
  red2: '#FF0A0A',
  purple1: '#A10268',
  purple2: '#73154F',
}