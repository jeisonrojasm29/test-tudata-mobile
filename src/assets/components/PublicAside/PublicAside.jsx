import React, { useState } from 'react'
import { Image, LayoutAnimation, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

import TudataIcon from '../../images/logoAndTudata.svg'
import HamburguerIcon from '../../icons/hamburguerIcon.svg'
import whiteBackArrow from '../../icons/whiteBackArrow.png'
import { styles } from './PublicAsideStyles'
import { vh, vw } from '../../../utils/globalStyles'
import { onContactPress } from './PublicAsideFunctions'
import { publicAsideStrings } from '../../../utils/strings'
import { Checkbox } from '../Checkbox/Checkbox'

export const PublicAside = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.publicAsideModal}>
          <ScrollView contentContainerStyle={styles.publicAsideModalContent}>
            <View style={[styles.publicAsideLogoContainer, styles.publicAsideOptionsColor, styles.publicAsideOptionsPaddingMargin]}>
              <TudataIcon width={vw(33)} height={vw(11)} />
            </View>
            <View style={styles.publicAsideOptionsContainer}>
              <View>
                <TouchableOpacity
                  style={[styles.publicAsideBackBtn, styles.publicAsideOptionsPaddingMargin]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Image source={whiteBackArrow} style={styles.publicAsideBackArrow} resizeMode='contain' />
                  <Text style={styles.publicAsideTextStyle}>{publicAsideStrings.txtOption1}</Text>
                </TouchableOpacity>
                <View style={[styles.publicAsideOptions, styles.publicAsideOptionsColor, styles.publicAsideOptionsPaddingMargin]}>
                  <Text style={styles.publicAsideTextStyle}>{publicAsideStrings.txtOption2}</Text>
                </View>
                <TouchableOpacity onPress={() => onContactPress(setExpanded, LayoutAnimation)}>
                  <View style={[styles.publicAsideOptions, styles.publicAsideOptionsColor, styles.publicAsideOptionsPaddingMargin]}>
                    <View style={styles.publicAsideContactContainer}>
                      <Text style={styles.publicAsideTextStyle}>{publicAsideStrings.txtOption3}</Text>
                      <Image
                        source={whiteBackArrow}
                        style={expanded ? styles.publicAsideArrowExpanded : styles.publicAsideArrowNotExpanded}
                        resizeMode='contain'
                      />
                    </View>
                    {
                      expanded && (
                        <View>
                          <TextInput
                            placeholder={publicAsideStrings.contactPlaceholder1}
                            style={styles.publicAsideTxtInput}
                            autoCapitalize='words'
                            autoCorrect={false}
                          />
                          <TextInput
                            placeholder={publicAsideStrings.contactPlaceholder2}
                            style={styles.publicAsideTxtInput}
                            autoCapitalize='none'
                            autoCorrect={false}
                          />
                          <TextInput
                            placeholder={publicAsideStrings.contactPlaceholder3}
                            style={styles.publicAsideTxtInput}
                            keyboardType='phone-pad'
                          />
                          <TextInput
                            placeholder={publicAsideStrings.contactPlaceholder4}
                            style={[styles.publicAsideTxtInput, styles.publicAsideTxtArea]}
                            multiline
                            autoCapitalize='none'
                            autoCorrect
                          />
                          <View style={styles.publicAsideDataTreatmentContainer}>
                            <Checkbox style={styles.publicAsideDataTreatmentCheckbox}/>
                            <Text style={styles.publicAsideDataTreatmentTxt}>
                              Ver: Autorización para el tratamiento de datos personales
                            </Text>
                          </View>
                        </View>
                      )
                    }
                  </View>
                </TouchableOpacity>
                <View style={[styles.publicAsideOptions, styles.publicAsideOptionsColor, styles.publicAsideOptionsPaddingMargin]}>
                  <Text style={styles.publicAsideTextStyle}>{publicAsideStrings.txtOption4}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.publicAsideShowModalBtn}
        onPress={() => setModalVisible(true)}>
        <HamburguerIcon height={vw(8)} width={vw(8)} />
      </TouchableOpacity>
    </>
  )
}

