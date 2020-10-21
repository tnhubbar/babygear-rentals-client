import React from 'react'
import RentalItemsContainer from '../containers/RentalItemsContainer'

const FamilyShow = (props) => {

    console.log(props)

    let family = props.families[props.match.params.id -1]
    console.log(family)

    return(
        <div>
        <h2>
           {family ? family.name : null} - {family ? family.location : null}
        </h2>
        <h2>
            {family ? family.contact_number : null }
        </h2>
        <RentalItemsContainer family={family}/>
        </div>
    )



}

export default FamilyShow