import { Text, TouchableOpacity } from "react-native"
import { styles } from "./CheckboxStyles"

export const Checkbox = ({ isChecked, onCheck, style }) => {
  return (
    <TouchableOpacity onPress={onCheck} style={[styles.checkbox, style]}>
      <Text>{isChecked ? '✓' : ''}</Text>
    </TouchableOpacity>
  )
}
