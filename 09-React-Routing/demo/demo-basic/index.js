import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, HashRouter as Router } from 'react-router-dom'; //de aca viene router de react-router-dom

import About from './About.jsx';
import Ejemplo from './Ejemplo.jsx';
import NavBar from './NavBar.jsx';

function Home() {
  return (
    <div>
      <h2>Home, Soy Henry!!</h2>
    </div>
  );
};

const Root = ( //envuelvo todo en un router y defino las rutas Switch ya no se usa más, NavBat se renderiza.(siempre visible)
  <Router> 
    <NavBar /> {/* el Nav siempre se renderiza */}
    <Switch>

      <Route exact path="/"> {/* path la url donde se renderiza la dirección tiene que ser exacta, debe coincidir completo*/ }
      
        <Home />
      </Route>
      {/* <Route path="/about/other">
        <h2>About Other</h2>
      </Route> */}
      <Route path="/about"> {/* no tiene la palabra clave exact puede ir otra cosa */}
        <About />
      </Route>
      <Route path="/aboutttttt">
        <h2>Aboutttttt</h2>
      </Route>
      <Route path="/about/other">
        <h2>About Other</h2>
      </Route>
      <Route path="/ejemplo">
        <Ejemplo nombre="Toni" apellido="Tralice"/>
      </Route>
      <Route path="/"> {/* el default es barra se puede poner el nombre a elección hacemos /home y muestra Default if no match */}
        <h2>Default if no match</h2>
      </Route>
    </Switch>
  </Router>
);

render(Root, document.querySelector('#app'));

