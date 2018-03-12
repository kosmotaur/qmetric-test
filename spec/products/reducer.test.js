import test from 'ava'
import reducer from '../../dist/products/reducer'

test('products reducer returns default state', t => {
  const state = reducer()
  const defaultProductsState = {}

  t.deepEqual(state, defaultProductsState)
})
