const inicialState = {
    pokemons: [],
    allPokemons: [],
    detail:[],
    types:[],
}

export default function rootReducer (state = inicialState, action) {
    let arrayAux = [];
        switch (action.type) {
        case "GET_POKEMON":
            return {
                ...state,
                allPokemons: action.payload.sort((a, b) => {
                    if (a.pokedexId > b.pokedexId) {
                        return 1;
                    }
                    if (a.pokedexId < b.pokedexId) {
                        return -1;
                    }
                        return 0;
                }),
                pokemons: action.payload.sort((a, b) => {
                    if (a.pokedexId > b.pokedexId) {
                        return 1;
                    }
                    if (a.pokedexId < b.pokedexId) {
                        return -1;
                    }
                        return 0;
                })
            }
            case "GET_DETAILS":
                return{
                ...state,
                detail: action.payload[0]
                }
            case "POST_POKEMON":
                return{
                    ...state,
                    pokemons: action.payload.sort((a, b) => {
                        if (a.pokedexId > b.pokedexId) {
                            return 1;
                        }
                        if (a.pokedexId < b.pokedexId) {
                            return -1;
                        }
                            return 0;
                    }),
                    allPokemons: action.payload.sort((a, b) => {
                        if (a.pokedexId > b.pokedexId) {
                            return 1;
                        }
                        if (a.pokedexId < b.pokedexId) {
                            return -1;
                        }
                            return 0;
                    })
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
                case "FILTER_BY_TYPE":
                    const allPokemons = state.allPokemons;
                    // const filterTypes = action.payload === "all" ? allPokemons : allPokemons.filter(e => (e.types.name && e.types.name.split(",").some((e)=> e.trim()===action.payload) ))
                    // console.log(filterTypes)
                    // return {
                    //     ...state,
                    //     pokemons: filterTypes
                    // }
                    const filterTypes = action.payload === "all" ? allPokemons : allPokemons.filter(e => 
                        e.types[0].name  === action.payload || e.types[1].name === action.payload
                    )
        
                     console.log(filterTypes)
                    return {
                        ...state,
                        pokemons: filterTypes
                    }
                case "ORDER_BY_NUMBER":
                    const orderNumber = action.payload === "asc" ? state.allPokemons.sort((a, b) => {
                        if (a.pokedexId > b.pokedexId) {
                            return 1;
                        }
                        if (a.pokedexId < b.pokedexId) {
                            return -1;
                        }
                            return 0;
                    })
                        : state.allPokemons.sort((a, b) => {
                        if (a.pokedexId > b.pokedexId) {
                            return -1;
                        }
                        if (a.pokedexId < b.pokedexId) {
                            return 1;
                        }
                            return 0;
                    });
                        return {
                          ...state,
                          pokemons: orderNumber,
                        };

                case "ORDER_BY_NAME":
                    const orderName = action.payload === "alf asc" ? state.allPokemons.sort((a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                            return 0;
                    })
                        : state.allPokemons.sort((a, b) => {
                        if (a.name > b.name) {
                            return -1;
                        }
                        if (a.name < b.name) {
                            return 1;
                        }
                            return 0;
                    });
                        return {
                          ...state,
                          pokemons: orderName,
                        };
                  
                case "ORDER_BY_WEIGHT":
                    const orderWeight = action.payload === "weightmin" ? state.allPokemons.sort((a, b) => {
                        if (parseInt(a.weight) > parseInt(b.weight)) {
                            return 1;
                        }
                        if (parseInt(a.weight) < parseInt(b.weight)) {
                            return -1;
                        }
                            return 0;
                    })
                    : state.allPokemons.sort((a, b) => {
                        if (parseInt(a.weight) > parseInt(b.weight)) {
                            return -1;
                        }
                        if (parseInt(a.weight) < parseInt(b.weight)) {
                            return 1;
                        }
                            return 0;
                        });
                        return {
                            ...state,
                            pokemons: orderWeight,
                          };
                case "ORDER_BY_HEIGHT":
                    const orderHeight = action.payload === "heightmin" ? state.allPokemons.sort((a, b) => {
                        if (parseInt(a.height) > parseInt(b.height)) {
                            return 1;
                        }
                        if (parseInt(a.height) < parseInt(b.height)) {
                            return -1;
                        }
                            return 0;
                    })
                    : state.allPokemons.sort((a, b) => {
                        if (parseInt(a.height) > parseInt(b.height)) {
                            return -1;
                        }
                        if (parseInt(a.height) < parseInt(b.height)) {
                            return 1;
                        }
                            return 0;
                        });
                        return {
                            ...state,
                            pokemons: orderHeight,
                          };
                          case "SEARCH_NAME":
                            arrayAux = state.allPokemons.filter(e => 
                                e.name.toLowerCase().includes(action.payload.toLowerCase())
                            )
                
                            // console.log(arrayAux)
                            return {
                                ...state,
                                pokemons: arrayAux
                            }
                default: 
                return state;
        }
    }

