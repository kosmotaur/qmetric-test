import { connect } from 'react-redux'
import { getProducts } from '../../products/selectors'
import AddToBasket from '../components/addToBasket'

export default connect(
  state => ({
    products: getProducts(state)
  }),
  {}
)(AddToBasket)
