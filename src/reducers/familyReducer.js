

export default function familyReducer(state = {families: []}, action ){

    switch (action.type){
        case 'FETCH_FAMILIES':
            return {families: action.payload}
            default: 
            return state
    }

}