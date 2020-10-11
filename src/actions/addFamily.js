export const addFamily = (data) => {
    return(dispatch) => {
        fetch('http://localhost:3000/families', {
            headers: {'Content-Type': 'application/json'}, 
            method: 'POST', 
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(family => (dispatch({type: 'ADD_FAMILY', payload: family })))
    }
}

export default addFamily