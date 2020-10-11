

export default function familyReducer(state = {families: []}, action ){

    switch (action.type){
        case 'FETCH_FAMILIES':
            return {families: action.payload}
        case 'ADD_FAMILY':
            return {...state, families: [...state.families, action.payload]}
        default: 
            return state
    }

}