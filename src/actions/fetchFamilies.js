

export function fetchFamilies(){
    return (dispatch) => {
    fetch('http://localhost:3000/families')
    .then(resp => resp.json())
    .then(data => dispatch({
        type: 'FETCH_FAMILIES', 
        payload: data 
    }))
    }
}
