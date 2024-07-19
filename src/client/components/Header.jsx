import React from "react";
import { Link, NavLink } from "react-router-dom";
import {Link as ScrollLink } from 'react-scroll';
import "../assets/StylesMain";
import Menu from "./Menu";
import { TiThMenu } from "react-icons/ti";


export default function Header() {
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
          <ScrollLink
                   to="about" smooth duration={500}
                    >
                    About
                  </ScrollLink>
                  <ScrollLink
                    to="projects"
                    smooth duration={500}
                  >
                    Projects
                  </ScrollLink>
                  <ScrollLink
                    to="contact"
                    smooth 
                    duration={500}
                  >
                    Contact
                  </ScrollLink>
          </cluster-l>
        </box-l>
        </cluster-l>
      </nav>
    </header>
  );
}
