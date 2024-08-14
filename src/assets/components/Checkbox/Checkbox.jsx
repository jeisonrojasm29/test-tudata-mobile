import { Image, TouchableOpacity } from "react-native"
import { styles } from "./CheckboxStyles"

import iconSolidCheck1 from "../../icons/iconSolidCheck1.png"

export const Checkbox = ({ isChecked, onCheck, style }) => {
  return (
    <TouchableOpacity onPress={onCheck} style={[styles.checkbox, style, isChecked && styles.checkboxCheckedBg]}>
      {isChecked && <Image source={iconSolidCheck1} style={styles.checkboxCheckedImg} />}
    </TouchableOpacity>
  )
}
