import { FlatList, LayoutAnimation, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./FaqStyles"
import { onCardPress } from "./FaqFunctions"
import { useState } from "react"
import { faqAskAndAnswersStrings, faqStrings } from "../../utils/strings"

export const Faq = () => {
  const [cardExpanded, setCardExpanded] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
    card5: false,
    card6: false,
    card7: false,
    card8: false,
    card9: false,
    card10: false,
    card11: false,
    card12: false,
    card13: false,
    card14: false,
    card15: false,
    card16: false,
    card17: false,
    card18: false,
    card19: false,
    card20: false,
    card21: false,
    card22: false,
    card23: false,
    card24: false,
    card25: false,
    card26: false,
    card27: false,
    card28: false,
    card29: false,
    card30: false,
    card31: false,
    card32: false,
    card33: false,
    card34: false,
    card35: false,
    card36: false,
    card37: false,
    card38: false,
    card39: false
  })

  let cardExpandedKeys = []
  let askAndAnswersKeys = []
  return (
    <View style={styles.faq}>
      <Text style={styles.faqTitle}>{faqStrings.title}</Text>
      <FlatList
        style={styles.faqPrincipalContent}
        keyExtractor={item => item[Object.keys(item)[0]]}
        data={faqAskAndAnswersStrings}
        renderItem={({ item, index }) => {
          cardExpandedKeys = Object.keys(cardExpanded)
          askAndAnswersKeys = Object.keys(item)
          return (
            <TouchableOpacity
              key={index}
              style={styles.faqCard}
              onPress={() => onCardPress(setCardExpanded, LayoutAnimation, cardExpandedKeys[index])}
            >
              <Text style={styles.faqCardTitle}>{item[askAndAnswersKeys[0]]}</Text>
              {
                cardExpanded[cardExpandedKeys[index]] && (<Text style={styles.faqCardDescription}>{item[askAndAnswersKeys[1]]}</Text>)
              }
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}
