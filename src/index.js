import React from 'react'
import {render} from 'react-dom'

const appContainer = document.querySelector('body')
const app = <div className='hero'>
  <div className='container'>
    <h1>Hello!</h1>
  </div>
</div>

render(app, appContainer)
