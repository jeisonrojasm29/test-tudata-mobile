import { maxSize, validateEmailFormat, validatePassFormat } from "../../utils/validateFunctions"

export const onEmailBlur = (email, isValidFormat, setIsValidFormat) => {
  if (email !== '') {
    if (!validateEmailFormat(email)) {
      setIsValidFormat({ ...isValidFormat, email: false })
    } else {
      setIsValidFormat({ ...isValidFormat, email: true })
    }
  }
}

export const onEmailChange = (text, formValues, setFormValues) => {
  const email = text.toLowerCase()
  setFormValues({ ...formValues, email })
}

export const onPasswordBlur = (password, isValidFormat, setIsValidFormat) => {
  if (password !== '') {
    if (!validatePassFormat(password)) {
      setIsValidFormat({ ...isValidFormat, password: false })
    } else {
      setIsValidFormat({ ...isValidFormat, password: true })
    }
  }
}

export const onPasswordChange = (text, formValues, setFormValues) => {
  const password = maxSize(text, 'password')
  setFormValues({ ...formValues, password })
}

export const onPasswordConfirmationBlur = (passwordConfirmation, isValidFormat, setIsValidFormat) => {
  if (passwordConfirmation !== '') {
    if (!validatePassFormat(passwordConfirmation)) {
      setIsValidFormat({ ...isValidFormat, passwordConfirmation: false })
    } else {
      setIsValidFormat({ ...isValidFormat, passwordConfirmation: true })
    }
  }
}

export const onPasswordConfirmationChange = (text, formValues, setFormValues) => {
  const passwordConfirmation = maxSize(text, 'password')
  setFormValues({ ...formValues, passwordConfirmation })
}

export const onContinuePress = (navigate) => {
  console.log('Hola');
  
  navigate('../')
}