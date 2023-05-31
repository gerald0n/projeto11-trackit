import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './styles/GlobalStyle.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
   <>
      <BrowserRouter>
         <GlobalStyle />
         <App />
      </BrowserRouter>
   </>
)
