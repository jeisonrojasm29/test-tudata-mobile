import React, { useState } from 'react'
import { Image, LayoutAnimation, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

import TudataIcon from '../../images/logoAndTudata.svg'
import HamburguerIcon from '../../icons/hamburguerIcon.svg'
import whiteBackArrow from '../../icons/whiteBackArrow.png'
import { styles } from './PublicAsideStyles'
import { vw } from '../../../utils/globalStyles'
import { onContactPress, onDataTreatmentCheckboxPress, onFaqPress, onTudataIconPress, onUsPress } from './PublicAsideFunctions'
import { publicAsideStrings } from '../../../utils/strings'
import { Checkbox } from '../Checkbox/Checkbox'
import { useNavigate } from 'react-router-native'

export const PublicAside = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [contactOptionExpanded, setContactOptionExpanded] = useState(false)
  const [isDataTreatmentChecked, setIsDataTreatmentChecked] = useState(false)
  const navigate = useNavigate()
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
            <TouchableOpacity
              style={[styles.publicAsideLogoContainer, styles.publicAsideOptionsColor, styles.publicAsideOptionsPaddingMargin]}
              onPress={() => onTudataIconPress(navigate, setModalVisible)}
            >
              <TudataIcon width={vw(33)} height={vw(11)} />
            </TouchableOpacity>
            <View style={styles.publicAsideOptionsContainer}>
              <View>
                <TouchableOpacity
                  style={[styles.publicAsideBackBtn, styles.publicAsideOptionsPaddingMargin]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Image source={whiteBackArrow} style={styles.publicAsideBackArrow} resizeMode='contain' />
                  <Text style={styles.publicAsideTextStyle}>{publicAsideStrings.txtOption1}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onUsPress(navigate, setModalVisible)}>
                  <View style={[styles.publicAsideOptions, styles.publicAsideOptionsColor, styles.publicAsideOptionsPaddingMargin]}>
                    <Text style={styles.publicAsideTextStyle}>{publicAsideStrings.txtOption2}</Text>
                  </View>
                </TouchableOpacity>

                <View style={[styles.publicAsideOptions, styles.publicAsideOptionsColor, styles.publicAsideOptionsPaddingMargin]}>
                  <TouchableOpacity onPress={() => onContactPress(setContactOptionExpanded, LayoutAnimation)} style={styles.publicAsideContactContainer}>
                    <Text style={styles.publicAsideTextStyle}>{publicAsideStrings.txtOption3}</Text>
                    <Image
                      source={whiteBackArrow}
                      style={contactOptionExpanded ? styles.publicAsideArrowExpanded : styles.publicAsideArrowNotExpanded}
                      resizeMode='contain'
                    />
                  </TouchableOpacity>
                  {
                    contactOptionExpanded && (
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
                          <Checkbox
                            isChecked={isDataTreatmentChecked}
                            onCheck={() => onDataTreatmentCheckboxPress(setIsDataTreatmentChecked)}
                            style={styles.publicAsideDataTreatmentCheckbox}
                          />
                          <Text style={styles.publicAsideDataTreatmentTxt}>
                            {publicAsideStrings.contactFooterTxt1}
                          </Text>
                        </View>
                        <TouchableOpacity style={styles.publicAsideSendBtn}>
                          <Text style={styles.publicAsideSendBtnTxt}>
                            {publicAsideStrings.contactBtn1Txt1}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )
                  }
                </View>
                <TouchableOpacity onPress={() => onFaqPress(navigate, setModalVisible)}>
                  <View style={[styles.publicAsideOptions, styles.publicAsideOptionsColor, styles.publicAsideOptionsPaddingMargin]}>
                    <Text style={styles.publicAsideTextStyle}>{publicAsideStrings.txtOption4}</Text>
                  </View>
                </TouchableOpacity>
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

