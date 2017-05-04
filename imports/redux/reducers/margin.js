const margin = (state = [], action) => {
  switch (action.type) {

    case "SET_MARGIN":
      {
        const MAPLOG = false
        if(MAPLOG)console.log("action.payload",action.payload);
          return action.payload;
      }
      
    default:
      {
        return state
      }
  }

}

export default margin