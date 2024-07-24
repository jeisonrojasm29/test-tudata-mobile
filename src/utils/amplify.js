import { signIn, fetchAuthSession, signOut } from 'aws-amplify/auth'
import { REACT_APP_COGNITO_USER, REACT_APP_COGNITO_PASSWORD } from '@env'
import AsyncStorage from "@react-native-async-storage/async-storage";
// eslint-disable-next-line camelcase
import { jwtDecode } from 'jwt-decode'

export class Amplify {
  jwtKeyName = this._btoa('jwt')

  async sign() {
    try {
      await signIn({
        username: REACT_APP_COGNITO_USER,
        password: REACT_APP_COGNITO_PASSWORD,
        options: {
          authFlowType: "USER_SRP_AUTH",
        }
      })
      const tokens = (await fetchAuthSession()).tokens
      const idToken = tokens.idToken.toString()
      this.setToken(idToken)
    } catch (err) {
      const tokens = (await fetchAuthSession()).tokens
      if (tokens) {
        const idToken = tokens.idToken.toString()
        this.setToken(idToken)
      }
      console.error(err)
    }
  }

  async signOut() {
    try {
      await signOut()
    } catch (err) {
      console.error(err)
    }
  }

  setToken(jwt) {
    AsyncStorage.setItem(this.jwtKeyName, this._btoa(jwt))
  }

  async getToken() {
    let jwt = await AsyncStorage.getItem(this.jwtKeyName)
    if (!jwt) {
      const tokens = (await fetchAuthSession()).tokens
      jwt = tokens.idToken.toString()
      return jwt
    }
    const jwtOld = this._atob(jwt)
    return jwtOld
  }

  cleanToken() {
    AsyncStorage.removeItem(this.jwtKeyName)
  }

  _btoa(value) {
    try {
      const ret = btoa(value)
      return ret
    } catch (e) {
      return ''
    }
  }

  _atob(value) {
    try {
      const ret = atob(value)
      return ret
    } catch (e) {
      return ''
    }
  }

  validateToken(jwt) {
    const decoded = jwtDecode(jwt)
    const isAuth = !!decoded && !!decoded.exp && new Date(decoded.exp * 1000) > new Date()
    return isAuth
  }
}
