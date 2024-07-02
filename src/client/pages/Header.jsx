import React from 'react'
import { Link, NavLink } from "react-router-dom"
import '../assets/StylesMain'

export default function Header(){
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
}
  return(
    <header>
        <cluster-l align="baseline" justify="space-between">
  
          <Link className="site-logo" to="/">Bobby.Works</Link>
        <nav> 
      
      <NavLink
          to="/about"
          style={({isActive}) => isActive ? activeStyles : null}
          >
          About
        </NavLink>
        <NavLink
          to="/projects"
          style={({isActive}) => isActive ? activeStyles : null}
          >
          Projects
        </NavLink>
        <NavLink
          to="/contact-us"
          style={({isActive}) => isActive ? activeStyles : null}
          >
            Contact
          </NavLink>
     
     
      </nav>
        
          </cluster-l>
          
    </header>
  )
}