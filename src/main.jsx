import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import ThemeContextHelper from './contexts/ThemeContextHelper'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextHelper>
      <App/>
    </ThemeContextHelper>
  </React.StrictMode>,
)
