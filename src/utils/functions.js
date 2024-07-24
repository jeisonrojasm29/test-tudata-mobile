import CryptoES from 'crypto-es'
import { REACT_APP_SK } from '@env'

export const passwordEncrypt = (password) => {
  const hash = CryptoES.AES.encrypt(password, REACT_APP_SK).toString()
  return hash
}