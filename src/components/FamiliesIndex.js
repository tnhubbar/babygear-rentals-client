import React from 'react'
import FamilyShow from './FamilyShow'
import {Route, Link} from 'react-router-dom'
import Button from './Button.js'


class FamiliesIndex extends React.Component{

// Click add 1 on each Family and it only updates for one //


callApi = () => {
    console.log('a')
    fetch('http://localhost:3000/families')
    .then(resp => {
        console.log('b')
        return resp.json()})
    .then(data => console.log('c', data))
    .catch(err => console.log('d', err))
 

}
render(){
return (
    <div className="BoldText">
        {this.props.families.map((family, index) =>

           <div key={index}> <Link to={`/families/${family.id}`}> {family.name} - {family.location} </Link><br/>
           <Button />

           <div>{family.rental_items.map(item => <li>{item.item_name}</li>)}</div>
           
           
           
           </div>
            )}
    </div>
)
        }
}

export default FamiliesIndex 