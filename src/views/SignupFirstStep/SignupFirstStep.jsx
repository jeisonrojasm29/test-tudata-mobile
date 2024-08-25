import { ScrollView, Text, View } from "react-native"
import { styles } from "./SignupFirstStepStyles"
import TudataIcon from '../../assets/images/logoAndTudata.svg'
import { vh, vw } from "../../utils/globalStyles"
import { TextInput1 } from "../../assets/components/TextInput1/TextInput1"
import { signupFirstStepStrings } from "../../utils/strings"
import { useState } from "react"
import { onContinuePress, onEmailBlur, onEmailChange, onPasswordBlur, onPasswordChange, onPasswordConfirmationBlur, onPasswordConfirmationChange } from "./SignupFirstStepFunctions"
import { Button1 } from "../../assets/components/Button1/Button1"
import { validateEmailFormat, validatePassFormat } from "../../utils/validateFunctions"
import { useNavigate } from "react-router-native"

export const SignupFirstStep = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const [isValidFormat, setIsValidFormat] = useState({
    email: true,
    password: true,
    passwordConfirmation: true
  })

  const [isRequesting, setIsRequesting] = useState(false)

  const navigate = useNavigate()

  return (
    <ScrollView style={styles.signupFirstStep} showsVerticalScrollIndicator={false}>

      <View style={styles.signupFirstStepLogoContainer}>
        <TudataIcon width={vw(60)} height={vh(10)} />
        <View style={styles.signupFirstStepPrincipalTextsContainer} >
          <Text style={styles.signupFirstStepTitle}>{signupFirstStepStrings.signupFirstStepTitle}</Text>
          <Text style={styles.signupFirstStepSubtitle}>{signupFirstStepStrings.signupFirstStepSubtitle}</Text>
        </View>
      </View>

      <View style={styles.signupFirstStepInputsContainer}>
        <TextInput1
          autoCapitalize='none'
          errorMsg={signupFirstStepStrings.signupFirstStepTextInput1ErrorMsg}
          isValidValue={isValidFormat.email}
          onBlur={() => onEmailBlur(formValues.email, isValidFormat, setIsValidFormat)}
          onChangeText={(text) => onEmailChange(text, formValues, setFormValues)}
          placeholder={signupFirstStepStrings.signupFirstStepTextInput1}
          style={styles.signupFirstStepInput}
          value={formValues.email}
        />
        <TextInput1
          errorMsg={signupFirstStepStrings.signupFirstStepTextInput2ErrorMsg}
          isValidValue={isValidFormat.password}
          onBlur={() => onPasswordBlur(formValues.password, isValidFormat, setIsValidFormat)}
          onChangeText={(text) => onPasswordChange(text, formValues, setFormValues)}
          placeholder={signupFirstStepStrings.signupFirstStepTextInput2}
          secureTextEntry={true}
          style={styles.signupFirstStepInput}
          value={formValues.password}
        />
        <TextInput1
          errorMsg={signupFirstStepStrings.signupFirstStepText1Input3ErrorMsg}
          isValidValue={isValidFormat.passwordConfirmation}
          onBlur={() => onPasswordConfirmationBlur(formValues.passwordConfirmation, isValidFormat, setIsValidFormat)}
          onChangeText={(text) => onPasswordConfirmationChange(text, formValues, setFormValues)}
          placeholder={signupFirstStepStrings.signupFirstStepTextInput3}
          secureTextEntry={true}
          style={styles.signupFirstStepInput}
          value={formValues.passwordConfirmation}
        />

        <Text style={styles.signupFirstStepInfoTxt} >
          {signupFirstStepStrings.signupFirstStepInfoTxt}
        </Text>

        <Button1
          disabled={isRequesting || !validateEmailFormat(formValues.email) || !validatePassFormat(formValues.password) || !validatePassFormat(formValues.passwordConfirmation)}
          style={styles.signupFirstStepLoginBtn}
          text={signupFirstStepStrings.signupFirstStepButton1Txt}
          onPress={() => onContinuePress(navigate)}
        />
      </View>
    </ScrollView>
  )
}
