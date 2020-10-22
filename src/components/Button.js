import React from 'react'


class Button extends React.Component{
    
    state = {count: 0}


    add = () => {
        let newState
        newState = this.state.count + 1
        this.setState({count: newState})
    }


    render(){
        return(
        <div>
            <button type="button" onClick={this.add}>Add - {this.state.count}</button>
        </div> )}
}
      

export default Button