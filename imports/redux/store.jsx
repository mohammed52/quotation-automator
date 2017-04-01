import FastQuoteCombinedReducers from './reducers'

import {createStore, applyMiddleware} from 'redux'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const middleware = applyMiddleware(promise(), thunk, createLogger())

const sampleStore = {
  showNewProjectModal: "true"
}

console.log("creatingStore")

let store = createStore(FastQuoteCombinedReducers, sampleStore, middleware)

export default store