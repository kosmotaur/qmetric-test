import {createStore, combineReducers} from 'redux'
import productsReducer from './products/reducer'

export default initialState => createStore(
  combineReducers({
    products: productsReducer
  }),
  initialState
)
