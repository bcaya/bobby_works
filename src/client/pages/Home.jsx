import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import '../assets/StylesMain'

export default function Home(){
  return(
    <box-l padding="var(--s4)">
      <stack-l>
          <h1>My name is Bobby, I am a <span>Full-Stack Developer</span></h1>
          
        <box-l>
          <p>Creating responsive and acessible websites. View my projects for more info!</p>
        </box-l>
        <box-l><div className="home-container">
        <cluster-l>
            <p>Currently available for hire</p>
            
          </cluster-l>
          </div></box-l>
      </stack-l>
      </box-l>
      
  )
}