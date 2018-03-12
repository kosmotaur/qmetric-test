import { pathOr } from 'ramda'

export const getProducts = pathOr([], ['products', 'productsCollection'])
