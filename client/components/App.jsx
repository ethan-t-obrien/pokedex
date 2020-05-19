import React from 'react'
import {getAllPokemon, getPokemonPage1} from '../api/poke'
import { incrementPage } from '../actions'

class App extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: [],
      startItem: 0,
      showItems: 20,
    }
    this.handleShowMore = this.handleShowMore.bind(this)
    this.handleShowLess = this.handleShowLess.bind(this)

  }

  

  componentDidMount() {
    console.log('did mount')

    getAllPokemon()
    .then(pokemon => {
      const pokelist = pokemon.body.results
      this.setState({
        pokemon: pokelist
      })
      console.log(this.state)
    })
  }
      handleShowMore() {
        this.setState({
          showItems:
            this.state.showItems = this.state.showItems + 20,
          startItem:
            this.state.startItem = this.state.startItem + 20
        })
      }

      handleShowLess() {
        this.setState({
          showItems:
          this.state.showItems = this.state.showItems - 20,
          startItem:
          this.state.startItem = this.state.startItem - 20
        })
      }

    
    
  
  render() {
    let pokedex = this.state.pokemon.map((poke) => {return poke.name})
    

  return (
    <>
    <h1>Pokedex</h1>
      <div className="list">
    
      {pokedex.slice(this.state.startItem, this.state.showItems).map((pokemon) => <li key={pokemon}>{pokemon}</li> )}
       
        <button onClick={this.handleShowLess}>
          back
        </button>
        <button onClick={this.handleShowMore} >
          next
        </button>
      </div>
    </>    

    )
  }
}

export default (App)
