export const deleteItem = (itemId, familyId) => {



return (dispatch) => {
    fetch(`http://localhost:3000/familes/${familyId}/rental_items/${itemId}`,
    {method: 'DELETE'})
    .then(resp => resp.json())
    .then(family=> dispatch({type: 'DELETE_ITEM', payload: family}))
}


}