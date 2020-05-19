import React from 'react'

import Pokedex from './Pokedex'

class App extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }

  render() {
  return (
    <>
    <h1>Pokedex</h1>
      <Pokedex />
    </>    
    )
  }
}

export default (App)
