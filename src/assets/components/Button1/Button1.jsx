import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './Button1Styles'

export const Button1 = ({
  disabled = false,
  onPress,
  style,
  text
}) => {
  return (
    <TouchableOpacity onPress={!disabled ? onPress : null} style={[styles.button1, style]}>
      <Text style={styles.button1Text}>{text}</Text>
    </TouchableOpacity>
  )
}
