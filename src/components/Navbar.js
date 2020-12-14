import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <div className="navbar" style={{backgroundColor: "white"}} >
            <NavLink to="/">Home</NavLink><br/>
            <NavLink to="/families" >List of Families</NavLink><br/>
            <NavLink to="/families/new">New Family</NavLink><br/>
            <NavLink to="/families/contact">Contact Us</NavLink><br/>

        </div>
    )
}

export default NavBar; 