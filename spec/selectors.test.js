import test from 'ava'
import Chance from 'chance'
import { getProductsCollection, getSelectedProduct } from '../dist/products/selectors'

const chance = new Chance()
const createStateWithProducts = (m, n) => {
  const products = chance.n(() => ({
    key: chance.word()
  }), chance.natural({min: m, max: n || m + 20}))
  const selectedProduct = chance.pickone(products)
  const state = {
    products: {
      productsCollection: products
    },
    selectedProduct: selectedProduct.key
  }

  return {products, state, selectedProduct}
}

test('get products returns multiple products', t => {
  const {products: multipleProducts, state} = createStateWithProducts(5)

  t.deepEqual(getProductsCollection(state), multipleProducts)
})

test('get products returns a single product', t => {
  const {products: singleProduct, state} = createStateWithProducts(1, 1)

  t.deepEqual(getProductsCollection(state), singleProduct)
})

test('get products returns an empty array when there are no products in state', t => {
  const state = {}
  const noProducts = []

  t.deepEqual(getProductsCollection(state), noProducts)
})

test('gets selected product', t => {
  const {state, selectedProduct} = createStateWithProducts(5)
  console.group('selectors.test========getSelectedProduct(state)')
  console.log(getSelectedProduct(state))
  console.groupEnd()

  t.deepEqual(getSelectedProduct(state), selectedProduct)
})
