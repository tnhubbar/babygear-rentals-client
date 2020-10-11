import React from 'react'



const RentalItems =(props) => {
    console.log(props.rentalitems)

    return(
        <div>
            Stuff
        {props.rentalitems && props.rentalitems.map(rentalitem => 
            <li key={rentalitem.id}> {rentalitem.item_name} </li>)}
        </div>
    )



}

export default RentalItems