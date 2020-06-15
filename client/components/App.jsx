import React from 'react'

import Pokedex from './Pokedex'
import Pokemon from './Pokemon'
import {HashRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }

  render() {
  return (
    <Router>
    <h1>Pokedex</h1>
     <Route exact path='/' component={Pokedex} />
     <Route exact path='/:pokemon' component={Pokemon} />

      {/* // <Pokedex /> */}
    </Router>    
    )
  }
}

export default (App)
