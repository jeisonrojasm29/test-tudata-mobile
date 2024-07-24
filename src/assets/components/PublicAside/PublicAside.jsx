import React, { useState } from 'react'
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
import TudataIcon from '../../images/logoAndTudata.svg'
import HamburguerIcon from '../../icons/hamburguerIcon.svg'
import { styles } from './PublicAsideStyles'

export const PublicAside = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.publicAsideModal}>
          <View style={styles.publicAsideModalContent}>
            <View style={[styles.publicAsideLogoContainer, styles.publicAsideOptionsColor, styles.publicAsideOptionsPaddingMargin]}>
              <TudataIcon />
            </View>
            <View style={styles.publicAsideOptionsContainer}>
              <View>
                <TouchableOpacity
                  style={[styles.publicAsideBackBtn, styles.publicAsideOptions, styles.publicAsideOptionsPaddingMargin]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </TouchableOpacity>
                <View style={[styles.publicAsideOptions, styles.publicAsideOptionsColor, styles.publicAsideOptionsPaddingMargin]}>
                  <Text>Nosotros</Text>
                </View>
                <View style={[styles.publicAsideOptions, styles.publicAsideOptionsColor, styles.publicAsideOptionsPaddingMargin]}>
                  <Text>Contacto</Text>
                  <View>
                    <TextInput
                      placeholder='Nombre completo'
                      style={{ backgroundColor: 'white', height: 35, marginVertical: '2%', paddingHorizontal: '3%' }}
                    />
                    <TextInput
                      placeholder='Correo'
                      style={{ backgroundColor: 'white', height: 35, marginVertical: '2%', paddingHorizontal: '3%' }}
                    />
                    <TextInput
                      placeholder='Teléfono'
                      style={{ backgroundColor: 'white', height: 35, marginVertical: '2%', paddingHorizontal: '3%' }}
                    />
                    <TextInput
                      placeholder='Asunto'
                      style={{ backgroundColor: 'white', height: 35, marginVertical: '2%', paddingHorizontal: '3%' }}
                    />
                  </View>
                </View>
                <View style={[styles.publicAsideOptions, styles.publicAsideOptionsColor, styles.publicAsideOptionsPaddingMargin]}>
                  <Text>FAQ</Text>
                </View>
              </View>
              <View>
                <View style={[styles.publicAsideOptions, styles.publicAsideOptionsColor, styles.publicAsideFooterOption]}>
                  <Text>Acerca de tudata</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.publicAsideShowModalBtn}
        onPress={() => setModalVisible(true)}>
        <HamburguerIcon />
      </TouchableOpacity>
    </>
  )
}

