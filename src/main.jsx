import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider, useSelector } from 'react-redux'
import { store } from './context/store'
import App from './App'
import { Login } from './components/Login'
import { Routes } from './routes/Routes'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
)
