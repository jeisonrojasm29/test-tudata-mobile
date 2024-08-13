import { StyleSheet } from 'react-native';
import { colors, textSizes, vh, vw } from '../../utils/globalStyles';

export const styles = StyleSheet.create({
  landingPage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  landingPageImageBackground: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  landingPageTitle: {
    color: colors.color2,
    textAlign: 'center',
    fontSize: textSizes._50pt,
    fontFamily: 'Quicksand_Bold',
    lineHeight: vw(15)
  },
  landingPageSubtitle: {
    color: colors.color2,
    textAlign: 'center',
    marginTop: vh(4),
    fontSize: textSizes._16pt,
    fontFamily: 'Quicksand_Bold',
    lineHeight: vw(5.5)
  },
  landingPageContainer1: {
    width: '100%'
  },
  landingPageContainer2: {
    width: '100%'
  },
  landingPageImage: {
    alignSelf: 'center',
    width: vw(60),
    height: vw(60),
  }
})
