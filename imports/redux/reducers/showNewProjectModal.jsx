const showNewProjectModal = (state=[], action)=>{
  switch(action.type){
    case "SET_MODAL_FLAG":
    {
      return action.val
    }
    default: {
      return true
    }
  }
}

console.log("showNewProjectModal reducer")
export default showNewProjectModal