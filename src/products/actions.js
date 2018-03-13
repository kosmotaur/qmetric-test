import { objOf } from 'ramda'
import { createActions } from 'redux-actions'

const actions = createActions({
  'SELECT_PRODUCT': objOf('key')
})

export default actions
