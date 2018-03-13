import { connect } from 'react-redux'
import { getProductsCollection } from '../../products/selectors'
import AddToBasket from '../components/addToBasket'
import actions from '../../products/actions'

export default connect(
  state => ({
    products: getProductsCollection(state)
  }),
  {
    selectProduct: actions.selectProduct
  }
)(AddToBasket)
