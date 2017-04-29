import TodosCombinedReducers from './reducers'
import { createStore, applyMiddleware } from 'redux'

import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
// import { getBoardFromSize, getRandomisedNewState, getBlankBoardFromSize } from './components/helpers/helpers';

const middleware = applyMiddleware(promise(), thunk, createLogger())
// const middleware = applyMiddleware(promise(), thunk)

const sampleStore = {
        backgroundColor: "lightgrey",
        showModalFlag: true,
        companyProjectTitle: {companyName: "Dummy Company", projectTitle: "Dummy Project"},
        defaultProjectSpecs: "World"
      }

let store = createStore(TodosCombinedReducers, sampleStore, middleware)

export default store;