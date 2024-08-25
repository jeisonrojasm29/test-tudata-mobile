import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Link } from 'react-router-native'

import { styles } from './LoginStyles'
import TudataIcon from '../../assets/images/logoAndTudata.svg'
import { Button1 } from '../../assets/components/Button1/Button1'
import { loginStrings } from '../../utils/strings'
import { colors, vh, vw } from '../../utils/globalStyles'
import { onEmailBlur, onEmailChange, onPasswordBlur, onPasswordChange, onRememberMeCheckboxPress, onSubmitPress } from './LoginFunctions'
import { TextInput1 } from '../../assets/components/TextInput1/TextInput1'
import { validateEmailFormat, validatePassFormat } from '../../utils/validateFunctions'
import { Checkbox } from '../../assets/components/Checkbox/Checkbox'

export const Login = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })

  const [isValidFormat, setIsValidFormat] = useState({
    email: true,
    password: true,
  })

  const [rememberMeChecked, setRememberMeChecked] = useState(false)

  const [isRequesting, setIsRequesting] = useState(false)
  return (
    <ScrollView style={styles.login} showsVerticalScrollIndicator={false} >
      <View style={styles.loginLogoContainer}>
        <TudataIcon width={vw(60)} height={vh(10)} />
        <View style={styles.loginPrincipalTextsContainer} >
          <Text style={styles.loginTitle}>{loginStrings.loginTitle}</Text>
          <Text style={styles.loginSubtitle}>{loginStrings.loginSubtitle}</Text>
        </View>
      </View>

      <View style={styles.loginInputsContainer}>
        <TextInput1
          autoCapitalize='none'
          errorMsg={loginStrings.loginTextInput1ErrorMsg}
          isValidValue={isValidFormat.email}
          onBlur={() => onEmailBlur(formValues.email, isValidFormat, setIsValidFormat)}
          onChangeText={(text) => onEmailChange(text, formValues, setFormValues)}
          placeholder={loginStrings.loginTextInput1}
          style={styles.loginInput}
          value={formValues.email}
        />
        <TextInput1
          errorMsg={loginStrings.loginTextInput2ErrorMsg}
          isValidValue={isValidFormat.password}
          onBlur={() => onPasswordBlur(formValues.password, isValidFormat, setIsValidFormat)}
          onChangeText={(text) => onPasswordChange(text, formValues, setFormValues)}
          placeholder={loginStrings.loginTextInput2}
          secureTextEntry={true}
          style={styles.loginInput}
          value={formValues.password}
        />
        <View style={styles.loginRememberMeContainer} >
          <Checkbox
            isChecked={rememberMeChecked}
            style={styles.loginRememberMeCheckbox}
            onCheck={() => onRememberMeCheckboxPress(setRememberMeChecked)}
          />
          <Text style={styles.loginRememberMeText} >{loginStrings.loginRemembermeTxt}</Text>
        </View>

        <Button1
          disabled={isRequesting || !validateEmailFormat(formValues.email) || !validatePassFormat(formValues.password)}
          onPress={() =>
            onSubmitPress({
              email: formValues.email,
              password: formValues.password,
              isRequesting,
              setIsRequesting
            })
          }
          style={styles.loginLoginBtn}
          text={loginStrings.loginButton1Txt}
        />

        <View style={styles.loginFooter} >
          <Link to='/' underlayColor={colors.colorOpacity1} style={styles.loginFooterLink1}>
            <Text style={styles.loginFooterTxt1}>{loginStrings.loginFooterTxt1}</Text>
          </Link>
          <Link to='/SignupFirstStep' underlayColor={colors.colorOpacity1} style={styles.loginFooterLink2}>
            <Text style={styles.loginFooterTxt2}>{loginStrings.loginFooterTxt2}<Text style={styles.loginFooterTxt3}>{loginStrings.loginFooterTxt3}</Text></Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  )
}
