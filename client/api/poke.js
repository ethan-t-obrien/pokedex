import request from "superagent"

export function getAllPokemon(){
    return request.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
}

export function getPokemonPage1(){
    return request.get('https://pokeapi.co/api/v2/pokemon/?limit=20')
}
export function getPokemonPage2(){
    return request.get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
}
export function getPokemonPage3(){
    return request.get('https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20')
}
export function getPokemonPage4(){
    return request.get('https://pokeapi.co/api/v2/pokemon/?offset=60&limit=20')
}
export function getPokemonPage5(){
    return request.get('https://pokeapi.co/api/v2/pokemon/?offset=80&limit=20')
}
export function getPokemonPage6(){
    return request.get('https://pokeapi.co/api/v2/pokemon/?offset=100&limit=20')
}
export function getPokemonPage7(){
    return request.get('https://pokeapi.co/api/v2/pokemon/?offset=120&limit=20')
}
export function getPokemonPage8(){
    return request.get('https://pokeapi.co/api/v2/pokemon/?offset140&limit=20')
}