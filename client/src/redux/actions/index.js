import axios from "axios";

const URL_POKEMON = "http://localhost:3001/pokemon";

export function getAllPokemons() {
return async function (dispatch) {
const json = await axios.get (URL_POKEMON)
return dispatch({
    type: "GET_POKEMON",
    payload: json.data
})
}
}

export function getDetail(id){
    return async function (dispatch){
        
        const json = await axios.get(`${URL_POKEMON}/${id}`);            
        return dispatch ({
            type: 'GET_DETAILS',
            payload: json.data
        })
        
    }
}

export function createPokemon(input) {
    console.log(input)
    return async function (dispatch) {
    await axios.post (URL_POKEMON , input)
    const json = await axios.get (URL_POKEMON)
    return dispatch({
        type: "POST_POKEMON",
        payload: json.data
    })
    }
    }