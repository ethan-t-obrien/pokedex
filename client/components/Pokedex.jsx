import React from 'react'
import {getAllPokemon, getPokemon} from '../api/poke'
import {Link} from 'react-router-dom'

class Pokedex extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          pokemon: [],
          pokeInfo: {},
          startPokemon: 0,
          lastPokemon: 20,
      }
      this.handleNextPage = this.handleNextPage.bind(this)
      this.handlePrePage = this.handlePrePage.bind(this)
      // this.handelPokeState = this.handelPokeState.bind(this)
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

    handleNextPage() {
      if(this.state.lastPokemon < 160)
      this.setState({
        lastPokemon:
          this.state.lastPokemon = this.state.lastPokemon + 20,
        startPokemon:
          this.state.startPokemon = this.state.startPokemon + 20
      })
      console.log(this.state.lastPokemon)
    }

    handlePrePage() {
      if(this.state.startPokemon > 0)
      this.setState({
        lastPokemon:
        this.state.lastPokemon = this.state.lastPokemon - 20,
        startPokemon:
        this.state.startPokemon = this.state.startPokemon - 20
      })
    }

    // handelPokeState(pokemon) {
    //   this.setState({
    //     pokeInfo: pokemon
    //   })
    // }
   
  
  render() {
      let pokedex = this.state.pokemon.map((poke) => {return poke.name})
      // let pokeInfo = this.state.pokemon.map((poke => {return poke.url}))
      // console.log('hi', pokeInfo)
  return (
  <>
  <h1>Pokedex</h1>
    <div className="list">

    {pokedex.slice(this.state.startPokemon, this.state.lastPokemon).map((pokemon) => <li key={pokemon}><Link to={'/' + pokemon}>{pokemon}</Link></li>)}
    
    <button onClick={this.handlePrePage}>
      back
    </button>
    <button onClick={this.handleNextPage} >
      next
    </button>
    </div>
  </>    

  )
  }
}

export default (Pokedex)