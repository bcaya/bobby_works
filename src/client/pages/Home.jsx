import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Projects from './Projects'
import '../assets/StylesMain'
import Contact from './Contact'

export default function Home(){
  return(
    <box-l borderWidth="0">
      <stack-l space="var(--s5)">
      <center-l andText="true">
        <h1>My name is Bobby, I am a <span>Full-Stack Developer</span></h1>
        <p className="home-paragraph">Creating responsive and acessible websites. View my projects for more info!</p>
        
          </center-l> 
        <box-l borderWidth="0" className="home-container">
        <cluster-l justify="flex-end">
          <box-l className="border" borderWidth="var(--border-thick)">
            <p>Currently available for hire</p>
            </box-l>
          </cluster-l>
          </box-l>
          <About/>
          <Projects/>
          <Contact/>
          
      </stack-l>
      
      </box-l>
      
  )
}