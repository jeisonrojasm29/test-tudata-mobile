import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../../utils/globalStyles';

export const styles = StyleSheet.create({
  publicAsideShowModalBtn: {
    position: 'absolute',
    zIndex: 1,
    top: '10%',
    left: '5%',
  },
  publicAsideModal: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: '20%',
    backgroundColor: colors.blackOpacity1,
  },
  publicAsideModalContent: {
    // flex: 1,
    justifyContent: 'space-between',
    height: '100%'
  },
  publicAsideLogoContainer: {
    height: '20%',
    justifyContent: 'flex-end',
  },
  publicAsideOptionsContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  publicAsideBackBtn: {
    backgroundColor: colors.purple2,
  },
  publicAsideOptions: {
    justifyContent: 'center',
  },
  publicAsideOptionsColor: {
    backgroundColor: colors.purple1
  },
  publicAsideOptionsPaddingMargin: {
    padding: '5%',
    marginBottom: '3%'
  },
  publicAsideFooterOption: {
    padding: '5%',
  }
});
