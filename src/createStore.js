import { combineReducers, createStore } from 'redux'
import productsReducer from './products/reducer'

export default initialState => createStore(
  combineReducers({
    products: productsReducer
  }),
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
