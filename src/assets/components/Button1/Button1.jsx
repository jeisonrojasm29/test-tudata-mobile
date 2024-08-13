import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './Button1Styles'

export const Button1 = ({ text, onPress, disabled = false }) => {
  return (
    <TouchableOpacity onPress={!disabled ? onPress : null} style={styles.button1}>
      <Text style={styles.button1Text}>{text}</Text>
    </TouchableOpacity>
  )
}
