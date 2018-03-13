import React from 'react'
import ProductSelect from '../../products/components/productSelect'

export default ({
  products,
  selectProduct
}) => (
  <section className='section'>
    <div className='container'>
      <div className='box'>
        <div className='level'>
          <div className='level-left'>
            <div className='level-item'>
              <div className='field'>
                <div className='control'>
                  <div className='select is-large'>
                    <ProductSelect products={products} selectProduct={selectProduct} />
                  </div>
                </div>
              </div>
            </div>
            <div className='level-item'>
              <div className='control'>
                <input className='input is-large' type='text' placeholder='quantity' />
              </div>
            </div>
            <div className='level-item'>
              items
            </div>
          </div>
          <div className='level-right'>
            <div className='level-item'>
              <button className='button is-large is-link'>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
