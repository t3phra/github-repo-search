import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import repos from './store/reducers/repos'
import watchGitHubSearch from './store/sagas/index'
import './index.css'
import App from './App'

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(repos, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(watchGitHubSearch)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
