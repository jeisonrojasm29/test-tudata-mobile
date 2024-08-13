import { StyleSheet } from "react-native";
import { colors } from "../../../utils/globalStyles";

export const styles = StyleSheet.create({
  textInput: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    color: colors.color4,
    backgroundColor: colors.color2,
    width: '100%',
    paddingVertical: '3%',
    paddingHorizontal: '3%',
    borderRadius: 10
  },
  textInputError: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    color: colors.color4,
    backgroundColor: colors.color2,
    width: '100%',
    paddingVertical: '3%',
    paddingHorizontal: '3%',
    borderRadius: 10,
    borderColor: colors.color5,
    borderWidth: 2
  },
  errorMsgTxt: { fontFamily: 'Poppins-Light', fontSize: 14, color: colors.color2 }
})