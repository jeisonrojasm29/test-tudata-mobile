export const onCardPress = (setExpanded, LayoutAnimation, cardId) => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  setExpanded(expanded => {
    return { ...expanded, [cardId]: !expanded[cardId] }
  })
}