import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import ThemeContextHelper from './contexts/ThemeContextHelper.tsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextHelper>
      <App/>
    </ThemeContextHelper>
  </React.StrictMode>,
)
