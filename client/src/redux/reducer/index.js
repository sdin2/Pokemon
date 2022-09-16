const inicialState = {
    pokemons: [],
    allPokemons: [],
    detail:[]}

    function rootReducer (state = inicialState, action) {
        switch (action.type) {
        case "GET_POKEMON":
            return {
                ...state,
                allPokemons: action.payload,
                pokemons: action.payload
            }
            case "GET_DETAILS":
                return{
                ...state,
                detail: action.payload[0]
                }
                default: 
                return state;
        }
    }


    export default rootReducer;