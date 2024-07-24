import { passwordEncrypt } from "../../utils/functions"
import { validateUserQuery } from "../../utils/userQueries"
import { handleRequestButton, maxSize, validateEmailFormat, validatePassFormat } from "../../utils/validateFunctions"

export const onEmailChange = (text, formValues, setFormValues) => {
  const email = text.toLowerCase()
  setFormValues({ ...formValues, email })
}

export const onPasswordChange = (text, formValues, setFormValues) => {
  const password = maxSize(text, 'password')
  setFormValues({ ...formValues, password })
}

export const onEmailBlur = (email, isValidFormat, setIsValidFormat) => {
  if (email !== '') {
    if (!validateEmailFormat(email)) {
      setIsValidFormat({ ...isValidFormat, email: false })
    } else {
      setIsValidFormat({ ...isValidFormat, email: true })
    }
  }
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

export const onSubmitPress = async ({
  email,
  password,
  isRequesting,
  setIsRequesting,
  newLoginData
}) => {
  if (isRequesting) return
  let timeOutId = handleRequestButton(setIsRequesting)

  if ((!email || !password) && (!newLoginData?.email || !newLoginData?.password)) return
  let data = null
  const firstSignIn = !(email && password)

  if (!firstSignIn) {
    if (validateEmailFormat(email) && validatePassFormat(password)) {
      const passwordEncrypted = passwordEncrypt(password)
      data = await validateUserQuery(email, passwordEncrypted)
    }
  }
}