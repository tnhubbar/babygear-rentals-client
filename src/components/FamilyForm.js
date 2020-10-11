import React from 'react'
import {connect} from 'react-redux'
import addFamily from '../actions/addFamily'


class FamilyForm extends React.Component{
    
    state = {name: '', location: '', contact_number: ''}

    handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value 
            })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addFamily
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    This will be the Family Creation Form: <br/>
                    <label> Family's Name: </label> 
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
                    <label> Family's Location </label> 
                    <input type='text' placeholder='Your Location' name="location" value={this.state.location} onChange={this.handleChange}/><br/>
                    <label> Family's Contact Number: </label> 
                    <input type='text' placeholder='Phone Number' name="contact_number" value={this.state.contact_number} onChange={this.handleChange} /><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addFamily})(FamilyForm)