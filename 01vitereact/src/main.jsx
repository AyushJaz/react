import React from 'react'
import ReactDOM from 'react-dom/client'

const reactElement= React.createElement(
  'a',
  {
    href:'https://www.google.com',
    target:'_blank',
  },
  'click me to visite google .com',
);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
);
