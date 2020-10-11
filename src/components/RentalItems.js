import React from 'react'
import {connect} from 'react-redux'
import {deleteItem} from '../actions/deleteItem.js'



const RentalItems =(props) => {
    console.log(props.rentalitems)

    const handleDelete = (rentalitem) => {
        props.deleteItem(rentalitem.id, rentalitem.family_id)
    }

    //const handleReserve = () => {

    //}

    return(
        <div>
            Stuff
        {props.rentalitems && props.rentalitems.map(rentalitem => 
            <li key={rentalitem.id}> {rentalitem.item_name} <button onClick={()=> handleDelete(rentalitem)}>Delete</button>  </li>)}
        </div>
    )



}

export default connect(null, {deleteItem})(RentalItems)