import React from 'react'
import { getPokemon } from '../api/poke'

class Pokemon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pokeName: {},
            pokeBody: {

            }
        }
    }

    componentDidMount() {

        let pokeName = this.props.match.params.pokemon
        console.log( 'hi', pokeName)
        // this.setState({
        //     pokeName: pokemon
        // })
        // console.log(this.state)
        getPokemon(pokeName)
            .then(pokeName => {
								const pokeInfo = pokeName.body
								console.log(pokeInfo)
								this.setState({
									pokeBody: {
										name: pokeInfo.name,
										height: pokeInfo.height,
										weight: pokeInfo.weight,
										no: pokeInfo.id,
										type: pokeInfo.types[0].type.name,
										img: pokeInfo.sprites.front_default
									}
								})
								if(pokeInfo.types < 1)
								this.setState({
									type2: pokeInfo.types[1].type.name
								})

						})
                    }
                    
                    
                    
                    
                    render() {
                        let weight = String(this.state.pokeBody.weight)
                         console.log(weight.length)
                        // note to self, trying to add . to kg number, but can't seem to slice 'objects string' ???

                        // let str = 'please just work'
                        // let newStr = str.slice(0, 3)
                        // console.log(newStr)
                        
                        // let newWeight = weight.slice(0, 1)
                        // let = weight.splice(weight.length-1, 0, '.')			
            // const weight = this.state.pokebody.weight
            // weight.splice(weight.length-1, 0, '.')
            //         console.log(this.state)
                    

            return(
                <>
										<img src={this.state.pokeBody.img} alt=""/>
                    <h3>Name: {this.state.pokeBody.name}</h3>
										<h3>Height: {this.state.pokeBody.height + '0'} cm</h3>
										<h3>Weight: {weight.slice(0 , weight.length -1)}.{weight.slice(-1)} kgs</h3>
										<h3>No. {this.state.pokeBody.no}</h3>
										<h3>Type: {this.state.pokeBody.type}, {this.state.pokeBody.type2}</h3>
                </>
            )
        }


}

export default (Pokemon)