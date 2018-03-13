import { assoc } from 'ramda'
import { handleActions } from 'redux-actions'
import actions from './actions'

const reducer = handleActions({
  [actions.selectProduct] (state, {payload: {key}}) {
    return assoc('selectedProductKey', key, state)
  }
}, {})

export default reducer
