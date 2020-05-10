import React from 'react'
import {getAllPokemon} from '../api/poke'

class App extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: []
    }
  }

  componentDidMount() {
    console.log('did mount')

    getAllPokemon()
    .then(pokemon => {
      console.log(pokemon.body.results)
    })
    
  }


  render() {
    console.log(this.state)
  return (
    <>
    <h1>Pokedex</h1>
      <h3>Bulbasaur</h3>
    </>    

    )
  }
}

export default App
