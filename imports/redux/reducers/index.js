import { combineReducers } from 'redux'
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'
        
import backgroundColor from './backgroundColor'
import showModalFlag from './showModalFlag'

const TodosCombinedReducers = combineReducers({
  backgroundColor,
  showModalFlag
})

export default TodosCombinedReducers