

export function fetchFamilies(){


}

componentDidMount(){
    fetch('http://localhost:3000/families')
    .then(resp => resp.json())
    .then(data => console.log(data))
}