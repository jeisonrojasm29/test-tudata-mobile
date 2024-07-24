import { StyleSheet } from "react-native";
import { colors } from "../../utils/globalStyles";

export const styles = StyleSheet.create({
  login: {
    flex: 1,
  },
  loginLogoContainer: {
    width: '100%',
    flex: 2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  loginTitle: {
    color: colors.white1,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
  },
  loginSubtitle: {
    color: colors.white1,
    textAlign: 'center',
    fontFamily: 'Poppins-Light',
    fontSize: 16,
  },
  loginInputsContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  loginInputsContent: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  loginFooterContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 20
  },
  loginFooterTxt1: {
    color: colors.white1,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    textDecorationLine: 'underline'
  },
  loginFooterTxt2: {
    color: colors.white1,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  loginFooterTxt3: {
    color: colors.white1,
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    textDecorationLine: 'underline'
  },
})