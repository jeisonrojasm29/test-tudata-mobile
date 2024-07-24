import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  publicLayout1: {
    flex: 1,
    paddingVertical: '10%',
    paddingHorizontal: '10%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minHeight: Dimensions.get('screen').height
  },
})