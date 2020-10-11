import React from 'react'
import {connect} from 'react-redux'


class RentalItemForm extends React.Component{

    state = {
        item_name: '',
        age: '',
        category: 'Transport Items',
        status: 'Available'
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render(){
        return(
            <div>
                Enter Your Rental Items Here!
                <form>
                    <label>Item Name: </label>
                    <input type='text' placeholder="Name" name="item_name" value={this.state.item_name} onChange={this.handleChange} /><br/>
                    <label>Item Age in Years: </label>
                    <input type='text' placeholder="Age" name="age" value={this.state.age} onChange={this.handleChange}/><br/>
                    <label>Item Category </label>
                    <select name="category" value={this.state.category} onChange={this.handleChange}>
                    <option>Toys</option>
                    <option>Furniture</option>
                    <option>Transport Items</option>
                    </select><br/>
                    <label>Item Status </label>
                    <select name="status" value={this.state.status} onChange={this.handleChange}>
                    <option>Available</option>
                    <option>Reserved</option>
                    </select><br/>
                    <input type="submit"/>
                </form>

            </div>
        )
    }
}
export default connect(null, )(RentalItemForm)

