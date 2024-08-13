import { StyleSheet } from "react-native";
import { colors, textSizes, vh } from "../../utils/globalStyles";

export const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'space-between'
  },
  loginLogoContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginTitle: {
    color: colors.color2,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: textSizes._30pt,
  },
  loginSubtitle: {
    color: colors.color2,
    textAlign: 'center',
    fontFamily: 'Poppins-Light',
    fontSize: textSizes._16pt,
  },
  loginInputsContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  loginInputsContent: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'stretch'
  },
  loginFooterContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: vh(1.5)
  },
  loginFooterTxt1: {
    color: colors.color2,
    fontSize: textSizes._16pt,
    fontFamily: 'Poppins-SemiBold',
    textDecorationLine: 'underline'
  },
  loginFooterTxt2: {
    color: colors.color2,
    fontSize: textSizes._16pt,
    fontFamily: 'Poppins-Medium',
  },
  loginFooterTxt3: {
    color: colors.color2,
    fontSize: textSizes._16pt,
    fontFamily: 'Poppins-Bold',
    textDecorationLine: 'underline'
  },
})