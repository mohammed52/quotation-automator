import { combineReducers } from 'redux'
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'
        
import backgroundColor from './backgroundColor'
import showModalFlag from './showModalFlag'
import companyProjectTitle from './companyProjectTitle'

const TodosCombinedReducers = combineReducers({
  backgroundColor,
  showModalFlag,
  companyProjectTitle
})

export default TodosCombinedReducers