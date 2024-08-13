import React from 'react'
import { Text, TextInput } from 'react-native'
import { styles } from './TextInput1Styles'

export const TextInput1 = ({ placeholder, value, isValidValue, onChangeText, onBlur, errorMsg, secureTextEntry, autoCapitalize = 'characters' }) => {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        style={!isValidValue ? styles.textInputError : styles.textInput}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
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
