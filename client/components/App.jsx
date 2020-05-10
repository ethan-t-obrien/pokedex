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
      const pokelist = pokemon.body.results

      this.setState({
        pokemon: [pokelist]
      })
    })
    
  }


  render() {
    console.log(this.state.pokemon[0, [0].name])
  return (
    <>
    <h1>Pokedex</h1>
      <ul>
       {/* <li> {this.state.pokemon.map(pokemon => {
          return pokemon.name
        })}
        </li> */}
        <li>{this.state.pokemon[1]}</li>
      </ul>
    </>    

    )
  }
}

export default App
