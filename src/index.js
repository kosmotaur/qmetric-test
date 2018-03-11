import React from 'react'
import { render } from 'react-dom'

const appContainer = document.querySelector('body')
const app =
  [
    <section className='hero is-success is-bold section'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title'>QMetric Shop</h1>
        </div>
      </div>
    </section>,
    <section className='section'>
      <div className='container'>
        <div className='box'>
          <div className='level'>
            <div className='level-left'>
              <div className='level-item'>
                <div className='field'>
                  <div className='control'>
                    <div className='select is-large'>
                      <select>
                        <option>Select product</option>
                        <option>Beans</option>
                        <option>Coke</option>
                        <option>Oranges</option>
                      </select>
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
    </section>,
    <section className='section'>
      <div className='container'>
        <table className='table is-fullwidth'>
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>Total to Pay</th>
              <td>2.40</td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>Beans</td>
              <td>0.50</td>
            </tr>
            <tr>
              <td>Beans</td>
              <td>0.50</td>
            </tr>
            <tr>
              <td>Beans</td>
              <td>0.50</td>
            </tr>
            <tr>
              <td>Coke</td>
              <td>0.70</td>
            </tr>
            <tr>
              <td>Coke</td>
              <td>0.70</td>
            </tr>
            <tr>
              <td>Oranges
                0.200 kg @ £1.99/kg
              </td>
              <td>0.40</td>
            </tr>
            <tr>
              <th>Sub-total</th>
              <td>3.30</td>
            </tr>
            <tr>
              <th colSpan='2'>Savings</th>
            </tr>
            <tr>
              <td>Beans 3 for 2</td>
              <td>-0.50</td>
            </tr>
            <tr>
              <td>Coke 2 for £1</td>
              <td>-0.40</td>
            </tr>
            <tr>
              <th>Total savings</th>
              <td>-0.90</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  ]

render(app, appContainer)
