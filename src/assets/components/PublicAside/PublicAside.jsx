import React, { useState } from 'react'
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

import TudataIcon from '../../images/logoAndTudata.svg'
import HamburguerIcon from '../../icons/hamburguerIcon.svg'
import { styles } from './PublicAsideStyles'
import { vw } from '../../../utils/globalStyles'

export const PublicAside = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
              <TudataIcon />
            </View>
            <View style={styles.publicAsideOptionsContainer}>
              <View>
                <TouchableOpacity
                  style={[styles.publicAsideBackBtn, styles.publicAsideOptions, styles.publicAsideOptionsPaddingMargin]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.publicAsideTextStyle}>Volver</Text>
                </TouchableOpacity>
                <View style={[styles.publicAsideOptions, styles.publicAsideOptionsColor, styles.publicAsideOptionsPaddingMargin]}>
                  <Text style={styles.publicAsideTextStyle}>Nosotros</Text>
                </View>
                <View style={[styles.publicAsideOptions, styles.publicAsideOptionsColor, styles.publicAsideOptionsPaddingMargin]}>
                  <Text style={styles.publicAsideTextStyle}>Contacto</Text>
                  <View>
                    <TextInput
                      placeholder='Nombre completo'
                      style={styles.publicAsideTxtInput}
                      autoCapitalize='words'
                      autoCorrect={false}
                    />
                    <TextInput
                      placeholder='Correo'
                      style={styles.publicAsideTxtInput}
                      autoCapitalize='none'
                      autoCorrect={false}
                    />
                    <TextInput
                      placeholder='Teléfono'
                      style={styles.publicAsideTxtInput}
                      keyboardType='phone-pad'
                    />
                    <TextInput
                      placeholder='Asunto'
                      style={[styles.publicAsideTxtInput, styles.publicAsideTxtArea]}
                      multiline
                      autoCapitalize='none'
                      autoCorrect
                    />
                  </View>
                </View>
                <View style={[styles.publicAsideOptions, styles.publicAsideOptionsColor, styles.publicAsideOptionsPaddingMargin]}>
                  <Text style={styles.publicAsideTextStyle}>FAQ</Text>
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

