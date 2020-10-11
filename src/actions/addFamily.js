export const addFamily = (data) => {
    return(dispatch) => {
        fetch('http://localhost:3000/families', {
            headers: {'Content-Type': 'application/json'}, 
            method: 'POST', 
            body: JSON.stringify(data)
        })
    }
}

export default addFamily