import { userQueriesString } from './strings'
import { REACT_APP_HOST } from '@env'
import { Amplify as AmplifyClass } from './amplify'

const amplify = new AmplifyClass()

export const validateUserQuery = async (email, password) => {
  if (!email || !password) {
    throw new Error(userQueriesString.valueNull)
  } else if (typeof email !== 'string' || typeof password !== 'string') {
    throw new Error(userQueriesString.notChainedValues)
  }
  try {
    let token = await amplify.getToken()
    const isToken = amplify.validateToken(token)
    if (!isToken) {
      amplify.cleanToken()
      await amplify.sign()
      token = await amplify.getToken()
    }
    const response = await fetch(
      `${REACT_APP_HOST}/auth/login`,
      {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        }),
        headers: {
          'Content-Type': 'application/json',
          TokenCatalogo: token
        }
      }
    )
    const json = await response.json()
    return json
  } catch (error) {
    const errorObject = { response: false, data: error }
    return JSON.stringify(errorObject)
  }
}