export const onContactPress = (setExpanded, LayoutAnimation) => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  setExpanded(expanded => !expanded)
}

export const onDataTreatmentCheckboxPress = (setIsDataTreatmentChecked) => {
  setIsDataTreatmentChecked(prev => !prev)
}

export const onUsPress = (navigate, setModalVisible) => {
  navigate('Nosotros')
  setModalVisible(false)
}

export const onFaqPress = (navigate, setModalVisible) => {
  navigate('FAQ')
  setModalVisible(false)
}