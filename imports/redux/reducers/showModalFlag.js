const showModalFag = (state = [], action) => {
  switch (action.type) {

    case "UPDATE_MODAL_FLAG":
      {
          return action.payload;
      }
      
    default:
      {
        return state
      }
  }

}

export default showModalFag