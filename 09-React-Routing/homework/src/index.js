import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter> 
   <App />,
  </BrowserRouter>,
 
  document.getElementById('root')
);

//envolver la App con los Browser para acceder a las rutas
