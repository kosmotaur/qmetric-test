import test from 'ava'
import Chance from 'chance'
import { getProducts } from '../dist/products/selectors'

const chance = new Chance()
const createStateWithProducts = (m, n) => {
  const products = chance.n(chance.word, chance.natural({min: m, max: n || m + 20}))
  const state = {
    products: {
      productsCollection: products
    }
  }

  return {products, state}
}

test('get products returns multiple products', t => {
  const {products: multipleProducts, state} = createStateWithProducts(5)

  t.deepEqual(getProducts(state), multipleProducts)
})

test('get products returns a single product', t => {
  const {products: singleProduct, state} = createStateWithProducts(1, 1)

  t.deepEqual(getProducts(state), singleProduct)
})

test('get products returns an empty array when there are no products in state', t => {
  const state = {}
  const noProducts = []

  t.deepEqual(getProducts(state), noProducts)
})
