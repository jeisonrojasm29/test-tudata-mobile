import { StyleSheet } from "react-native";
import { colors } from "../../../utils/globalStyles";

export const styles = StyleSheet.create({
  textInput: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    color: colors.grey1,
    backgroundColor: colors.white1,
    width: '100%',
    paddingVertical: '3%',
    paddingHorizontal: '3%',
    borderRadius: 10
  },
  textInputError: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    color: colors.grey1,
    backgroundColor: colors.white1,
    width: '100%',
    paddingVertical: '3%',
    paddingHorizontal: '3%',
    borderRadius: 10,
    borderColor: colors.red1,
    borderWidth: 2
  },
  errorMsgTxt: { fontFamily: 'Poppins-Light', fontSize: 14, color: colors.white1 }
})