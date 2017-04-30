import TodosCombinedReducers from './reducers'
import { createStore, applyMiddleware } from 'redux'

import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
// import { getBoardFromSize, getRandomisedNewState, getBlankBoardFromSize } from './components/helpers/helpers';

const middleware = applyMiddleware(promise(), thunk, createLogger())
// const middleware = applyMiddleware(promise(), thunk)

const tempData = {
          "projectSettings": {
            "rackDescription": "",
            "companyName": "",
            "projectTitle": "",
            "currentMetalPrice": "90"
          },
          "frame": {
              "frameHeight": "12",
              "frameQty": "2",
              "frameDepth": "3",
          },
          "bays": [
            {
              "length": "9",
              "qty": "1",
              "levels": "3",
              "loadPerLevel": "2000"
            },
            {
              "length": "",
              "qty": "",
              "levels": "",
              "loadPerLevel": ""
            },
            {
              "length": "",
              "qty": "", 
              "levels": "",
              "loadPerLevel": ""
            },
            {
              "length": "",
              "qty": "",
              "levels": "",
              "loadPerLevel": ""
            }
          ],
          "shelfType": "noShelf"
    }

const sampleStore = {
        backgroundColor: "lightgrey",
        showModalFlag: true,
        companyProjectTitle: {companyName: "", projectTitle: ""},
        defaultProjectSpecs: tempData
      }

let store = createStore(TodosCombinedReducers, sampleStore, middleware)

export default store;