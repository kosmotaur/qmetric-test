import test from 'ava'
import Chance from 'chance'
import actions from '../../dist/products/actions'

const chance = new Chance()
test('creates select product action', t => {
  const productKey = chance.word()
  const action = actions.selectProduct({key: productKey})

  t.deepEqual(action, {type: 'SELECT_PRODUCT', payload: {key: productKey}})
})
