import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Routers from './router'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routers>
      <Provider store={store}>
        <App />
      </Provider>
      </Routers>
    </BrowserRouter>
  </React.StrictMode>,
)
