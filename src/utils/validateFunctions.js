export const validateEmailFormat = (email) => {
  // const regex = /^[^\s@]+@[^\s@_]+\.[^\s@]+$/
  const regex = /^[0-9a-zA-Z_.-]{6,30}@[0-9a-zA-Z-]{3,}(\.[0-9a-zA-Z]{2,})+$/
  return regex.test(email)
}

export const validatePassFormat = (text) => {
  const allowedSpecialChars = '!#$%&*,.:?@[]^_{|}~'
  const allowedChars = `a-zA-Z\\d${allowedSpecialChars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`
  const regExp = new RegExp(`^(?=.*\\d)(?=.*[${allowedSpecialChars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}])(?=.*[a-z])(?=.*[A-Z]).{8,}$`)
  const allowedCharsRegExp = new RegExp(`^[${allowedChars}]+$`)
  return regExp.test(text) && allowedCharsRegExp.test(text)
}

export const maxSize = (text, field = 'other') => {
  let length = null
  field === 'password'
    ? (length = 16)
    : field === 'email' || field === 'flName'
      ? (length = 48)
      : field === 'long'
        ? (length = 480)
        : (length = 10)
  if (text.length > length) {
    text = text.slice(0, length)
    return text
  }
  return text
}

export const handleRequestButton = (setIsRequesting, timeOutId) => {
  clearTimeout(timeOutId)
  setIsRequesting(true)

  const id = setTimeout(() => {
    setIsRequesting(false)
  }, 10000)
  return id
}
