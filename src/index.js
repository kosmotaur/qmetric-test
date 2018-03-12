import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './createStore'
import initialsState from './initialState'
import App from './common/components/app'

const appContainer = document.querySelector('#app')

render(
  <Provider store={createStore(initialsState)}>
    <App />
  </Provider>,
  appContainer
)
