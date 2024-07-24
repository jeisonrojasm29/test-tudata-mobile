import { StyleSheet } from 'react-native';
import { colors } from '../../utils/globalStyles';

export const styles = StyleSheet.create({
  landingPage: {
    flex: 1,
  },
  landingPageImageBackground: {
    flex: 1,
    paddingVertical: '10%',
    paddingHorizontal: '10%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  landingPageTitle: {
    color: colors.white1,
    textAlign: 'center',
    fontSize: 50,
    fontFamily: 'Quicksand_Bold',
    lineHeight: 60
  },
  landingPageSubtitle: {
    color: colors.white1,
    textAlign: 'center',
    marginTop: '10%',
    fontSize: 16,
    fontFamily: 'Quicksand_Bold',
    lineHeight: 20
  },
  landingPageContainer1: {
    width: '100%'
  },
  landingPageContainer2: {
    width: '100%'
  }
})
