import React from 'react'
import { getPokemon } from '../api/poke'

class Pokemon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pokeName: {},
            pokeInfo: {

            }
        }
    }

    componentDidMount() {

        let pokemon = this.props.match.params.pokemon
        console.log( 'hi', pokemon)
        // this.setState({
        //     pokeName: pokemon
        // })
        // console.log(this.state)
        getPokemon(pokemon)
            .then(pokemon => {
                const pokeInfo = pokemon
                console.log(pokeInfo)
            })
    }



        render() {
            return(
                <h1>reee</h1>
            )
        }


}

export default (Pokemon)