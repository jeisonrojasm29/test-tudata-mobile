export const onContactPress = (setExpanded, LayoutAnimation) => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  setExpanded(expanded => !expanded)
}

export const onDataTreatmentCheckboxPress = (setIsDataTreatmentChecked) => {
  setIsDataTreatmentChecked(prev => !prev)
}