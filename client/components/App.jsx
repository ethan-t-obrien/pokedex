import React from 'react'
import {getAllPokemon, getPokemonPage1} from '../api/poke'

class App extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: [],
      page: 1,
      defaultPage: 1
    }
  }

  

  componentDidMount() {
    console.log('did mount')

    // getAllPokemon()
    // .then(pokemon => {
    //   const pokelist = pokemon.body.results
    //   this.setState({
    //     pokemon: pokelist
    //   })
    // })

  

    // getPokemonPage1() 
    //   .then(pokemon => {
    //     let pokelist = pokemon.body.results
    //     this.setState({
    //       pokemon: pokelist
    //     })
    //   })

   console.log(this.state.page)
  }
       
        



  render() {
    let pokedex = this.state.pokemon.map((poke) => {return poke.name})
    
    function  callPokemon  {
      let page = this.state.defaultPage
      page = page + this.state.page
      this.setState({ page })
     }

  return (
    <>
    <h1>Pokedex</h1>
      <div className="list">
        <ul>
      {pokedex.map((pokemon) => <li key={pokemon}>{pokemon}</li> )}
      </ul>
      <button onClick={this.callPokemon.bind(this)}></button>
      </div>
    </>    

    )
  }
}

export default App
