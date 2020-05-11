import React from 'react'
import {getAllPokemon} from '../api/poke'

class App extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: [ 
        
      ]
    }
  }

  componentDidMount() {
    console.log('did mount')

    getAllPokemon()
    .then(pokemon => {
      const pokelist = pokemon.body.results.map((poke) => {return poke.name})
      
      this.setState({
        pokemon: [pokelist]
      })
    })
    
  }


  render() {
    let pokedex = this.state.pokemon
    console.log(pokedex)
  return (
    <>
    <h1>Pokedex</h1>
      <div className="list">
      <ul>
        <li>{pokedex}</li>
  {/* {pokedex.map((pokemon) => <li>{pokemon}</li> )} */}
      </ul>
      </div>
    </>    

    )
  }
}

export default App
