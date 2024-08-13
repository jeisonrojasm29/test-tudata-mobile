import React from 'react'
import { Image, Text, View } from 'react-native'
import { useNavigate } from 'react-router-native'

import logoImage from '../../assets/images/womanImage.png'
import { styles } from './LandingPageStyles'
import { Button1 } from '../../assets/components/Button1/Button1'
import { landingPageStrings } from '../../utils/strings'
import { onLandingPageButton1Press } from './LandingPageFunctions'

export const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <View style={styles.landingPage}>
      <View style={styles.landingPageContainer1}>
        <Text style={styles.landingPageTitle}>{landingPageStrings.landingPageTitle}</Text>
        <Text style={styles.landingPageSubtitle}>{landingPageStrings.landingPageSubtitle}</Text>
      </View>
      <View style={styles.landingPageContainer2}>
        <Image style={styles.landingPageImage} source={logoImage} />
        <Button1 onPress={() => onLandingPageButton1Press(navigate)} text={landingPageStrings.landingPageButton1} />
      </View>
    </View>
  )
}
