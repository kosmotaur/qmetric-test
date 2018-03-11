import React from 'react'
import { render } from 'react-dom'

const appContainer = document.querySelector('body')
const app =
  [
    <section className='hero is-success is-bold'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title'>QMetric Shop</h1>
        </div>
      </div>
    </section>,
    <section>
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
