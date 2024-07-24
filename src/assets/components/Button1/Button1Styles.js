import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/globalStyles';

export const styles = StyleSheet.create({
  button1: {
    backgroundColor: colors.orange1,
    paddingVertical: '3%',
    alignItems: 'center',
    borderRadius: 10
  },
  button1Text: {
    color: colors.white1,
    fontSize: 16,
    fontFamily: 'Poppins-Bold'
  }
})