import axios from "axios";

const URL_POKEMON = "http://localhost:3001/pokemon";
const URL_TYPES = "http://localhost:3001/types";

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
export function getTypes(){
    return async function (dispatch){
        
        const json = await axios.get(`${URL_TYPES}`);            
        return dispatch ({
            type: 'GET_TYPES',
            payload: json.data
        })
        
    }
}



    export function createPokemon(input) {
        return async function (dispatch) {
          try {
            await axios.post(URL_POKEMON , input);
            let json = await axios.get(URL_POKEMON)
            return dispatch({ type: "POST_POKEMON" , payload: json.data});
          } catch (error) {
            console.log(error);
          }
        };
      }

    export function editPokemon(id,input){
        return async function (dispatch) {
            await axios.put (`${URL_POKEMON}/${id}` , input)
            const json = await axios.get (URL_POKEMON)
            
            return dispatch({
                type: "EDIT_POKEMON",
                payload: json.data
            })
            }
    }