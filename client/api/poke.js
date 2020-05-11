import request from "superagent"

export function getAllPokemon(){
    return request.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
}