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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: vw(2),
    backgroundColor: colors.color8,
  },
  publicAsideBackArrow: {
    height: vh(3),
    width: vh(3),
    transform: [{ rotate: '90deg' }]
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
  publicAsideContactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: vw(3)
  },
  publicAsideArrowNotExpanded: {
    height: vh(2),
    width: vh(2)
  },
  publicAsideArrowExpanded: {
    height: vh(2),
    width: vh(2),
    transform: [{ rotate: '180deg' }]
  },
  publicAsideTxtInput: {
    backgroundColor: colors.color2,
    height: vh(4.5),
    marginVertical: vh(1.3),
    paddingHorizontal: vw(2),
    borderRadius: textSizes._8pt,
    fontFamily: 'Poppins-Light',
    fontSize: textSizes._16pt,
    color: colors.color3,
    justifyContent: 'center'
  },
  publicAsideTxtArea: {
    height: vh(10),
  }
});
