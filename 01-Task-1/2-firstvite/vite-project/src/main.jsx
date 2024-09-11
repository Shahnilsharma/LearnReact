import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
//creting own react elemnt
const reactElement = React.createElement(
  'a',
  {href:'https://www.google.com',target:'_blank'},
  'click here to visit google'
)
createRoot(document.getElementById('root')).render(
    <App />
    // reactElement
)
createRoot(document.getElementById('root')).render(
    // <App />
    reactElement
)
