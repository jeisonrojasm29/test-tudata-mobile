import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { PublicLayout1 } from '../../assets/components/PublicLayout1/PublicLayout1'
import { styles } from './LoginStyles'
import TudataIcon from '../../assets/images/logoAndTudata.svg'
import { Button1 } from '../../assets/components/Button1/Button1'
import { Link } from 'react-router-native'
import { loginStrings } from '../../utils/strings'
import { colors } from '../../utils/globalStyles'
import { onEmailBlur, onEmailChange, onPasswordBlur, onPasswordChange, onSubmitPress } from './LoginFunctions'
import { TextInput1 } from '../../assets/components/TextInput1/TextInput1'
import { validateEmailFormat, validatePassFormat } from '../../utils/validateFunctions'
import { PublicAside } from '../../assets/components/PublicAside/PublicAside'

export const Login = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })

  const [isValidFormat, setIsValidFormat] = useState({
    email: true,
    password: true,
  })

  const [isRequesting, setIsRequesting] = useState(false)
  return (
    <ScrollView contentContainerStyle={styles.login}>
      <View style={styles.loginLogoContainer}>
        <TudataIcon />
        <View>
          <Text style={styles.loginTitle}>{loginStrings.loginTitle}</Text>
          <Text style={styles.loginSubtitle}>{loginStrings.loginSubtitle}</Text>
        </View>
      </View>

      <View style={styles.loginInputsContainer}>
        <View style={styles.loginInputsContent}>
          <TextInput1
            placeholder={loginStrings.loginTextInput1}
            value={formValues.email}
            isValidValue={isValidFormat.email}
            onChangeText={(text) => onEmailChange(text, formValues, setFormValues)}
            onBlur={() => onEmailBlur(formValues.email, isValidFormat, setIsValidFormat)}
            errorMsg={loginStrings.loginTextInput1ErrorMsg}
          />
          <TextInput1
            placeholder={loginStrings.loginTextInput2}
            value={formValues.password}
            isValidValue={isValidFormat.password}
            onChangeText={(text) => onPasswordChange(text, formValues, setFormValues)}
            onBlur={() => onPasswordBlur(formValues.password, isValidFormat, setIsValidFormat)}
            errorMsg={loginStrings.loginTextInput2ErrorMsg}
            secureTextEntry={true}
          />
          <Text>Recordarme</Text>
        </View>
        <Button1
          text={loginStrings.loginButton1Txt}
          onPress={() =>
            onSubmitPress({
              email: formValues.email,
              password: formValues.password,
              isRequesting,
              setIsRequesting
            })
          }
          disabled={isRequesting || !validateEmailFormat(formValues.email) || !validatePassFormat(formValues.password)}
        />
      </View>

      <View style={styles.loginFooterContainer}>
        <Link to='/' underlayColor={colors.colorOpacity1}>
          <Text style={styles.loginFooterTxt1}>{loginStrings.loginFooterTxt1}</Text>
        </Link>
        <Link to='/' underlayColor={colors.colorOpacity1}>
          <Text style={styles.loginFooterTxt2}>{loginStrings.loginFooterTxt2}<Text style={styles.loginFooterTxt3}>{loginStrings.loginFooterTxt3}</Text></Text>
        </Link>
      </View>
    </ScrollView>
  )
}
