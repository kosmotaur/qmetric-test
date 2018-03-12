import React from 'react'

export default ({products}) => (
  <select>
    <option>Select product</option>
    {products.map(
      ({key, name}) => (<option key={key} value={key}>{name}</option>))
    }
  </select>
)
