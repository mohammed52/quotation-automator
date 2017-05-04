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

export const setCompanyProjectTitle = (obj) => {
  return {
    type: 'SET_COMPANY_PROJECT_TITLE',
    payload: obj
  }
}

export const setProjectSpecs = (obj) => {
  return {
    type: 'SET_PROJECT_SPECS',
    payload: obj
  }
}

export const setMargin = (newVal) => {
  return {
    type: 'SET_MARGIN',
    payload: newVal
  }
}