const companyProjectTitle = (state = [], action) => {
  switch (action.type) {

    case "SET_COMPANY_PROJECT_TITLE":
      {
          return action.payload;
      }
      
    default:
      {
        return state
      }
  }

}

export default companyProjectTitle