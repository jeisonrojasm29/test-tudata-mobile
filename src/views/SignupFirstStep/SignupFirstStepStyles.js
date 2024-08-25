import { StyleSheet } from "react-native";
import { colors, textSizes, vh, vw } from "../../utils/globalStyles";

export const styles = StyleSheet.create({
  signupFirstStep: {
    marginHorizontal: vw(-10)
  },
  signupFirstStepLogoContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: vh(6),
    marginTop: vh(8)
  },
  signupFirstStepPrincipalTextsContainer: {
    marginHorizontal: vw(10)
  },
  signupFirstStepTitle: {
    color: colors.color2,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: textSizes._30pt,
  },
  signupFirstStepSubtitle: {
    color: colors.color2,
    textAlign: 'center',
    fontFamily: 'Poppins-Light',
    fontSize: textSizes._16pt,
  },
  signupFirstStepInputsContainer: {
    marginTop: vh(8.7)
  },
  signupFirstStepInput: {
    marginVertical: vh(1)
  },
  signupFirstStepInfoTxt: {
    fontFamily: 'Poppins-Medium',
    fontSize: textSizes._14pt,
    color: colors.color2,
    paddingHorizontal: vw(3),
    marginTop: vh(2)
  },
  signupFirstStepLoginBtn: {
    marginTop: vh(5),
    marginHorizontal: vw(9)
  },
})