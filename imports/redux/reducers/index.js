import { combineReducers } from 'redux'
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'
        
import backgroundColor from './backgroundColor'
import showModalFlag from './showModalFlag'
import companyProjectTitle from './companyProjectTitle'
import defaultProjectSpecs from './defaultProjectSpecs'
import margin from './margin'
const TodosCombinedReducers = combineReducers({
  backgroundColor,
  showModalFlag,
  companyProjectTitle,
  defaultProjectSpecs,
  margin
})

export default TodosCombinedReducers