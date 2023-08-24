import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux"
import { configureStore } from '@reduxjs/toolkit'
import userSlice from './store.js'
import Counts from './reducer/Count.js'
const store = configureStore({
  reducer:{
      user:userSlice,
      count:Counts

  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
     <Provider store={store}>
        <App />
     </Provider>
    
  </React.StrictMode>,
)
