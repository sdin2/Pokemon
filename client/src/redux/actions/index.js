import axios from "axios";

export function getAllPokemons() {
return async function (dispatch) {
const json = await axios.get ("http://localhost:3001/pokemon")

console.log(json.data)
return dispatch({
    type: "GET_POKEMON",
    payload: json.data
})
}
}

export function getDetail(id){
    return async function (dispatch){
        
        const json = await axios.get("http://localhost:3001/pokemon/" + id);            
        return dispatch ({
            type: 'GET_DETAILS',
            payload: json.data
        })
        
    }
}