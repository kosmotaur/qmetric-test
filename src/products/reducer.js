import { handleActions } from 'redux-actions'
import actions from './actions'
import {assoc} from 'ramda'

const reducer = handleActions({
  [actions.selectProduct] (state, {payload: {key}}) {
    return assoc('selectedProduct', key, state)
  }
}, {})

export default reducer
