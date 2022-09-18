const inicialState = {
    pokemons: [],
    allPokemons: [],
    detail:[],
    types:[],
}

export default function rootReducer (state = inicialState, action) {
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
            case "POST_POKEMON":
                return{
                    ...state,
                    pokemons: action.payload,
                    allPokemons: action.payload
                    }
            case "GET_TYPES":
                return{
                ...state,
                types: action.payload
                }
            case "EDIT_POKEMON":
                return{
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
                }
            
                default: 
                return state;
        }
    }

