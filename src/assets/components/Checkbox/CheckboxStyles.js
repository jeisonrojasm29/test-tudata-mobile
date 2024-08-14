import { StyleSheet } from "react-native";
import { colors, vh, vw } from "../../../utils/globalStyles";

export const styles = StyleSheet.create({
  checkbox: {
    width: vh(1),
    height: vh(1),
    borderWidth: vw(0.2),
    borderColor: colors.color3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkboxCheckedImg: {
    width: '70%',
    height: '70%'
  },
  checkboxCheckedBg: {
    backgroundColor: colors.color2
  }
})