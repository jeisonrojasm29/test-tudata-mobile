import { StyleSheet } from "react-native";
import { screenHeight, vh, vw } from "../../../utils/globalStyles";

export const styles = StyleSheet.create({
  publicLayout1: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: vh(4),
    paddingHorizontal: vw(14),
    minHeight: screenHeight
  },
})