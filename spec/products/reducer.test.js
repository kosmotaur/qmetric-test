import test from 'ava'
import Chance from 'chance'
import actions from '../../dist/products/actions'
import reducer from '../../dist/products/reducer'

const chance = new Chance()

test('products reducer returns default state', t => {
  const bogusAction = {}
  const state = reducer(undefined, bogusAction)
  const defaultProductsState = {}

  t.deepEqual(state, defaultProductsState)
})

test('products reducer updates selected product', t => {
  const selectedProductKey = chance.word()
  const state = reducer({}, actions.selectProduct({key: selectedProductKey}))
  const stateWithSelectedProduct = {selectedProductKey: selectedProductKey}

  t.deepEqual(state, stateWithSelectedProduct)
})
