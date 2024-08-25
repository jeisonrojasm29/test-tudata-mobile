import { StyleSheet } from "react-native";
import { colors, textSizes, vh, vw } from "../../utils/globalStyles";

export const styles = StyleSheet.create({
  login: {
    marginHorizontal: vw(-10)
  },
  loginLogoContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: vh(6),
    marginTop: vh(8)
  },
  loginPrincipalTextsContainer: {
    marginHorizontal: vw(10)
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
    marginTop: vh(6)
  },
  loginInput: {
    marginVertical: vh(1)
  },
  loginRememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: vw(5),
    marginTop: vh(1)
  },
  loginRememberMeCheckbox: {
    width: textSizes._20pt,
    height: textSizes._20pt,
    borderColor: colors.color2,
    borderRadius: vw(1)
  },
  loginRememberMeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: textSizes._16pt,
    color: colors.color2,
    textAlignVertical: 'center',
    paddingTop: vh(0.5)
  },
  loginLoginBtn: {
    marginTop: vh(5),
    marginHorizontal: vw(9)
  },
  loginFooter: {
    alignItems: 'center'
  },
  loginFooterLink1: {
    marginTop: vh(5)
  },
  loginFooterTxt1: {
    color: colors.color2,
    fontSize: textSizes._16pt,
    fontFamily: 'Poppins-SemiBold',
    textDecorationLine: 'underline'
  },
  loginFooterLink2: {
    marginTop: vh(2),
    marginBottom: vh(5)
  },
  loginFooterTxt2: {
    color: colors.color2,
    fontSize: textSizes._16pt,
    fontFamily: 'Poppins-Medium'
  },
  loginFooterTxt3: {
    color: colors.color2,
    fontSize: textSizes._16pt,
    fontFamily: 'Poppins-Bold',
    textDecorationLine: 'underline'
  },
})