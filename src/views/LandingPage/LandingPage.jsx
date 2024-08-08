import React from 'react'
import { Image, Text, View } from 'react-native'
import logoImage from '../../assets/images/retrato-mujer-feliz-20-anos-cabello-largo-sonriendo-sosteniendo-portatil-gris-aislado-sobre-pared-amarilla.png'
import { styles } from './LandingPageStyles'
import { Button1 } from '../../assets/components/Button1/Button1'
import { landingPageStrings } from '../../utils/strings'
import { onLandingPageButton1Press } from './LandingPageFunctions'
import { useNavigate } from 'react-router-native'
import { PublicLayout1 } from '../../assets/components/PublicLayout1/PublicLayout1'
import { PublicAside } from '../../assets/components/PublicAside/PublicAside'

export const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <View style={styles.landingPage}>
      <View style={styles.landingPageContainer1}>
        <Text style={styles.landingPageTitle}>{landingPageStrings.landingPageTitle}</Text>
        <Text style={styles.landingPageSubtitle}>{landingPageStrings.landingPageSubtitle}</Text>
      </View>
      <View style={styles.landingPageContainer2}>
        <Image source={logoImage} />
        <Button1 onPress={() => onLandingPageButton1Press(navigate)} text={landingPageStrings.landingPageButton1} />
      </View>
    </View>
  )
}
