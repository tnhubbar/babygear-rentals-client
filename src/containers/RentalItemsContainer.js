import React from 'react'
import RentalItemForm from '../components/RentalItemForm'
import RentalItems from '../components/RentalItems'

class RentalItemsContainer extends React.Component {

    render(){
        return(
            <div>
                <RentalItems rentalitems={this.props.family && this.props.family.rental_items} /><br/><br/><br/>
                <RentalItemForm family={this.props.family}/>
            </div>
        )
    }

}

export default RentalItemsContainer 