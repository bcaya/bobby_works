import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/StylesMain";
import Menu from "./Menu";
import { TiThMenu } from "react-icons/ti";


export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
  };
  return (
    <header>
      <nav className="navbar">
        <cluster-l justify="space-around" align="center">
        <box-l borderWidth="0" className="logo">
        <Link className="site-logo" to="/">
              Bobby.Works
            </Link>
        </box-l>
        <box-l borderWidth="0">
          <cluster-l>
          <NavLink
             to="/#about"
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/#projects"
                
                  >
                    Projects
                  </NavLink>
                  <NavLink
                    to="/#contact"
                   
                  >
                    Contact
                  </NavLink>
          </cluster-l>
        
        </box-l>
               
        </cluster-l>
      </nav>
    </header>
  );
}
