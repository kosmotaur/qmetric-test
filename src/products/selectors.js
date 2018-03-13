import { compose, converge, find, path, pathOr, propEq } from 'ramda'

const getProductsState = path(['products'])

export const getProductsCollection = compose(pathOr([], ['productsCollection']), getProductsState)
export const getSelectedProduct = converge(find, [
  converge(propEq('key'), [path(['selectedProductKey']), getProductsState]),
  getProductsCollection
])
