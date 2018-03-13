import React from 'react'

export default ({products, selectProduct}) => (
  <select onChange={e => selectProduct(e.target.value)}>
    <option>Select product</option>
    {products.map(
      ({key, name}) => (<option key={key} value={key}>{name}</option>))
    }
  </select>
)
