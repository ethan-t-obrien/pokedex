import request from "superagent"

export function getAllPokemon(){
    return request.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
}

export function getPokemon(pokeName){
    return request.get('https://pokeapi.co/api/v2/pokemon/' + pokeName)
}
