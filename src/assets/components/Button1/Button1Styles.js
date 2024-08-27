import { StyleSheet } from 'react-native';
import { colors, textSizes, vh } from '../../../utils/globalStyles';

export const styles = StyleSheet.create({
  button1: {
    backgroundColor: colors.color1,
    paddingVertical: vh(1),
    alignItems: 'center',
    borderRadius: textSizes._10pt
  },
  button1Disabled: {
    backgroundColor: colors.color1,
    paddingVertical: vh(1),
    alignItems: 'center',
    borderRadius: textSizes._10pt,
    opacity: 0.2
  },
  button1Text: {
    color: colors.color2,
    fontSize: textSizes._16pt,
    fontFamily: 'Poppins-Bold'
  }
})