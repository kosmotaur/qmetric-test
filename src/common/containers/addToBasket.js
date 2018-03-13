import { connect } from 'react-redux'
import { getProducts } from '../../products/selectors'
import AddToBasket from '../components/addToBasket'
import actions from '../../products/actions'

export default connect(
  state => ({
    products: getProducts(state)
  }),
  {
    selectProduct: actions.selectProduct
  }
)(AddToBasket)
