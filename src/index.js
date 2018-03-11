import React from 'react'
import { render } from 'react-dom'

const appContainer = document.querySelector('body')
const app =
  <section className='hero is-success is-bold'>
    <div className='hero-body'>
      <div className='container'>
        <h1 className='title'>QMetric Shop</h1>
      </div>
    </div>
  </section>

render(app, appContainer)
