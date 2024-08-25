import { StyleSheet } from "react-native";
import { colors, textSizes, vh } from "../../../utils/globalStyles";

export const styles = StyleSheet.create({
  textInput: {
    fontFamily: 'Poppins-Light',
    fontSize: textSizes._16pt,
    color: colors.color4,
    backgroundColor: colors.color2,
    width: '100%',
    paddingVertical: vh(1),
    paddingHorizontal: vh(1),
    borderRadius: textSizes._10pt
  },
  textInputError: {
    fontFamily: 'Poppins-Light',
    fontSize: textSizes._16pt,
    color: colors.color4,
    backgroundColor: colors.color2,
    width: '100%',
    paddingVertical: vh(1),
    paddingHorizontal: vh(1),
    borderRadius: textSizes._10pt,
    borderColor: colors.color5,
    borderWidth: 2
  },
  errorMsgTxt: {
    fontFamily: 'Poppins-Light',
    fontSize: textSizes._14pt,
    color: colors.color2,
    textAlign: 'left',
    lineHeight: vh(2.5)
  }
})