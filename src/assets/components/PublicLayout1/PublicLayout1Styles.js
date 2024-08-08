import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  publicLayout1: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: '10%',
    paddingHorizontal: '10%',
    minHeight: Dimensions.get('screen').height
  },
})