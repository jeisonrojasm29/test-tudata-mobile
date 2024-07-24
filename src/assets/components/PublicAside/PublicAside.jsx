import React, { useState } from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TudataIcon from '../../images/logoAndTudata.svg'
import HamburguerIcon from '../../icons/hamburguerIcon.svg'
import { colors } from '../../../utils/globalStyles';

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
            </View>
            <View style={[styles.publicAsideOptions, styles.publicAsideOptionsColor, styles.publicAsideOptionsPaddingMargin]}>
              <Text>FAQ</Text>
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

const styles = StyleSheet.create({
  publicAsideShowModalBtn: {
    position: 'absolute',
    zIndex: 1,
    top: '10%',
    left: '5%',
  },
  publicAsideModal: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: '20%',
    backgroundColor: colors.blackOpacity1,
  },
  publicAsideModalContent: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  publicAsideLogoContainer: {
    height: '15%',
    justifyContent: 'flex-end',
  },
  publicAsideBackBtn: {
    backgroundColor: colors.purple2,
  },
  publicAsideOptions: {
    justifyContent: 'center',
  },
  publicAsideOptionsColor: {
    backgroundColor: colors.purple1
  },
  publicAsideOptionsPaddingMargin: {
    padding: '5%',
    marginBottom: '3%'
  }
});
