export const changeBackgroundColor = (newColor) => {
  return {
    type: 'BACKGROUND_COLOR_CHANGE',
    newColor: newColor
  }
}

export const updateModalFlag = (newVal) => {
  return {
    type: 'UPDATE_MODAL_FLAG',
    payload: false
  }
}