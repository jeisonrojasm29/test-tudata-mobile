import { StyleSheet } from 'react-native';
import { colors, textSizes, vh, vw } from '../../../utils/globalStyles';

export const styles = StyleSheet.create({
  publicAsideShowModalBtn: {
    position: 'absolute',
    zIndex: 1,
    top: '10%',
    left: '5%'
  },
  publicAsideModal: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: '30%',
    backgroundColor: colors.colorOpacity2,
  },
  publicAsideModalContent: {
    flex: 1,
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
    backgroundColor: colors.color8,
  },
  publicAsideOptions: {
    justifyContent: 'center',
  },
  publicAsideOptionsColor: {
    backgroundColor: colors.color7
  },
  publicAsideOptionsPaddingMargin: {
    padding: '5%',
    marginBottom: '3%'
  },
  publicAsideFooterOption: {
    padding: '5%',
  },
  publicAsideTextStyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: textSizes._16pt,
    color: colors.color2
  },
  publicAsideTxtInput: {
    backgroundColor: colors.color2,
    height: vh(4),
    marginVertical: vh(1.3),
    paddingHorizontal: vw(2),
    borderRadius: textSizes._8pt,
    fontFamily: 'Poppins-Light',
    fontSize: textSizes._16pt,
    color: colors.color3
  },
  publicAsideTxtArea: {
    height: vh(10),
  }
});
