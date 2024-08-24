import { Image, LayoutAnimation, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./AboutUsStyles"
import { useState } from "react"
import { onCardPress } from "./AboutUsFunctions"
import iconPdf from "../../assets/icons/iconPdf.png"
import { aboutUsStrings } from "../../utils/strings"

export const AboutUs = () => {
  const [cardExpanded, setCardExpanded] = useState({
    card1: true,
    card2: true,
    card3: true,
  })
  return (
    <View style={styles.aboutUs}>
      <Text style={styles.aboutUsTitle}>{aboutUsStrings.title}</Text>
      <ScrollView style={styles.aboutUsPrincipalContent}>

        <TouchableOpacity
          style={styles.aboutUsCard}
          onPress={() => onCardPress(setCardExpanded, LayoutAnimation, Object.keys(cardExpanded)[0])}
        >
          <Text style={styles.aboutUsCardTitle}>{aboutUsStrings.titleCard1}</Text>
          {
            cardExpanded.card1 && (
              <Text style={styles.aboutUsCardDescription}>
                {aboutUsStrings.txt1Card1}<Text style={styles.aboutUsSpecialWord1}>{aboutUsStrings.txt2Card1}</Text>{aboutUsStrings.txt3Card1}
              </Text>
            )
          }
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.aboutUsCard}
          onPress={() => onCardPress(setCardExpanded, LayoutAnimation, Object.keys(cardExpanded)[1])}
        >
          <Text style={styles.aboutUsCardTitle}>{aboutUsStrings.titleCard2}</Text>
          {
            cardExpanded.card2 && (
              <Text style={styles.aboutUsCardDescription}>
                {aboutUsStrings.txt1Card2}
              </Text>
            )
          }
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.aboutUsCard}
          onPress={() => onCardPress(setCardExpanded, LayoutAnimation, Object.keys(cardExpanded)[2])}
        >
          <Text style={styles.aboutUsCardTitle}>{aboutUsStrings.titleCard3}</Text>
          {
            cardExpanded.card3 && (
              <Text style={styles.aboutUsCardDescription}>
                {aboutUsStrings.txt1Card3}
              </Text>
            )
          }
        </TouchableOpacity>

        <View style={[styles.aboutUsCard, styles.aboutUsPoliticsCard]}>
          <Text style={styles.aboutUsCardTitle}>{aboutUsStrings.titleCard4}</Text>
          <Image source={iconPdf} resizeMode='contain' style={styles.aboutUsPoliticsCardImg} />
        </View>

      </ScrollView>
    </View>
  )
}
