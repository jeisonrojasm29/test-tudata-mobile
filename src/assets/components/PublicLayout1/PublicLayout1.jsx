import React from 'react'
import { ImageBackground } from 'react-native'
import orangeBackground from '../../../assets/images/orangeBackground.png'
import { styles } from './PublicLayout1Styles'

export const PublicLayout1 = ({ children }) => {
  return (
    <ImageBackground style={styles.publicLayout1} source={orangeBackground}>
      {children}
    </ImageBackground>
  )
}
