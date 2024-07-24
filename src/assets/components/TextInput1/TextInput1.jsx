import React from 'react'
import { Text, TextInput } from 'react-native'
import { styles } from './TextInput1Styles'

export const TextInput1 = ({ placeholder, value, isValidValue, onChangeText, onBlur, errorMsg, secureTextEntry }) => {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        style={!isValidValue ? styles.textInputError : styles.textInput}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
      />
      {
        isValidValue
          ?
          null
          :
          <Text style={styles.errorMsgTxt} >{errorMsg}</Text>
      }
    </>
  )
}
