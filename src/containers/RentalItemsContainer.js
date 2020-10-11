import React from 'react'
import RentalItemForm from '../components/RentalItemForm'
import RentalItems from '../components/RentalItems'

class RentalItemsContainer extends React.Component {

    render(){
        return(
            <div>
                <RentalItemForm family={this.props.family}/>
                <RentalItems rentalitems={this.props.family && this.props.family.rental_items} />
            </div>
        )
    }

}

export default RentalItemsContainer 