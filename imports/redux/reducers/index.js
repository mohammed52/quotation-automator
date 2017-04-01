import {combineReducers} from 'redux'

import showNewProjectModal from './showNewProjectModal'

console.log("reducer index")

const FastQuoteCombinedReducers = combineReducers({
  showNewProjectModal
})

export default FastQuoteCombinedReducers