
import React from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes'
import store from './redux/store'
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>

  )
}

export default App