import { identity } from 'ramda'
import { createActions } from 'redux-actions'

const actions = createActions({
  'SELECT_PRODUCT': identity
})

export default actions
