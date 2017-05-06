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
            "racksDescription": "Test Description",
            "companyName": "MEK-1",
            "projectTitle": "Yamaha Port Qasim",
            "currentMetalPrices": 90
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
          "shelfType": "noShelf",
          "createdAt": new Date(),
          _id: null
    }

const sampleStore = {
        backgroundColor: "lightgrey",
        showModalFlag: true,
        companyProjectTitle: {companyName: "", projectTitle: ""},
        defaultProjectSpecs: tempData,
        margin: 30
      }

let store = createStore(TodosCombinedReducers, sampleStore, middleware)

export default store;