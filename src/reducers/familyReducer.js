

export default function familyReducer(state = {families: []}, action ){

    switch (action.type){
        case 'FETCH_FAMILIES':
            return {families: action.payload}
        case 'ADD_FAMILY':
            return {...state, families: [...state.families, action.payload]}
            case 'ADD_ITEM':
                let families = state.families.map(family => {
              if (family.id == action.payload.id){
                  return action.payload
              } else { return family }
            })
        return {...state, families: families}
        case 'DELETE_ITEM':
            let fams = state.families.map(family => {
                if (family.id == action.payload.id){
                    return action.payload
                } else { return family }
              })
          return {...state, families: families}
            
        default: 
            return state
    }

}