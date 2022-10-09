import React from 'react'
import ReactDOMClient from 'react-dom/client'
import App from './App'
import 'gestalt/dist/gestalt.css'

const container = document.getElementById('root') as HTMLElement

const root = ReactDOMClient.createRoot(container)

root.render(
  <App />,
)