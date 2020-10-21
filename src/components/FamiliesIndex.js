import React from 'react'
import FamilyShow from './FamilyShow'
import {Route, Link} from 'react-router-dom'


const FamiliesIndex = (props) => {

return (
    <div className="BoldText">
        {props.families.map(family =>
           <div key={family.id}> <Link to={`/families/${family.id}`}> {family.name} - {family.location} </Link><br/>
           <div>{family.rental_items.map(item => <li>{item.item_name}</li>)}</div>
           
           
           
           </div>
            )}
    </div>
)

}

export default FamiliesIndex 