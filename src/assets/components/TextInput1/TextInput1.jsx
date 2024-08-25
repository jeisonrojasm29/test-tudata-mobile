import React from 'react'
import { Text, TextInput } from 'react-native'
import { styles } from './TextInput1Styles'

export const TextInput1 = ({
  autoCapitalize = 'characters',
  errorMsg,
  isValidValue,
  onBlur,
  onChangeText,
  placeholder,
  secureTextEntry,
  style,
  value
}) => {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        style={[!isValidValue ? styles.textInputError : styles.textInput, style]}
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
