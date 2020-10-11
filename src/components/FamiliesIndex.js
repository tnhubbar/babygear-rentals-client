import React from 'react'
import FamilyShow from './FamilyShow'
import {Route, Link} from 'react-router-dom'


const FamiliesIndex = (props) => {

return (
    <div>
        {props.families.map(family =>
           <div key={family.id}> <Link to={`/families/${family.id}`}> {family.name} </Link></div>
            )}
    </div>
)

}

export default FamiliesIndex 