import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <div className="navbar">
            <NavLink to="/families" >List of Families</NavLink><br/>
            <NavLink to="/families/new">New Family</NavLink><br/>
            <NavLink to="/">Home</NavLink><br/>

        </div>
    )
}

export default NavBar; 