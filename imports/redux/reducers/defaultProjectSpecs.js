const defaultProjectSpecs = (state = [], action) => {
  switch (action.type) {

    case "SET_PROJECT_SPECS":
      {
          return action.newSpecs;
      }
      
    default:
      {
        return state
      }
  }

}

export default defaultProjectSpecs