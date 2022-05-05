import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './View/App';
import './View/styles/reset.scss';
import './View/styles/common.scss';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
