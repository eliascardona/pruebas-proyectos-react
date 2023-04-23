import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Miembros from './pages/Nosotros/Miembros'
import Eventos from './pages/Estrategias/Eventos'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/miembros'>
            <Miembros/>
          </Route>
          <Route path='/eventos'>
            <Eventos/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App