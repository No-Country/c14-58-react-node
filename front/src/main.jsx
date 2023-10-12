import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { global, reset } from "./assets/globals";
import { Global } from '@emotion/react';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={reset}/>
    <Global styles={global}/>
      <App />

  </React.StrictMode>,
)
