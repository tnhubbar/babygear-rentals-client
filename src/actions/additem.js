import React from 'react'

export const addItem = (item, familyId) => {

    return(dispatch) => {
        fetch(`http://localhost:3000/families/${familyId}/rental_items`, 
        {method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)})
        .then(resp => resp.json())
        .then(family => dispatch({type: 'ADD_ITEM', payload: family }))
    }


}
export default addItem 