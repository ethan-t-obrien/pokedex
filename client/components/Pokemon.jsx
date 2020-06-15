import React from 'react'
import { getPokemon } from '../api/poke'

class Pokemon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pokeInfo: {

            }
        }
    }

    componentDidMount() {

        let pokemon = this.props.match.params.pokeName
        console.log(pokemon)
        // console.log(this.state)
        getPokemon(pokemon)
            .then(pokemon => {
                console.log('hi', pokemon)

                // this.setState({
                //     pokemon: {
                //         name: 
                //     }
                // })
            })
    }



        render() {
            return(
                <h1>reeee</h1>
            )
        }


}

export default (Pokemon)