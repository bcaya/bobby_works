import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/StylesMain'

export default function Projects(){
  return(
    <box-l borderWidth="0" padding="var(--s3)" id="projects">
      <h2>#projects</h2>
      <grid-l min="calc(var(--measure) / 2)">
        <box-l>
          <stack-l>
            <frame-l ratio="1:1">
            <img src="src/client/assets/ProjectPlaceholder.png" />
            </frame-l>
            <cluster-l>
              <p>HTML</p>
              <p>SCSS</p>
              <p>Python</p>
              <p>Flask</p>
            </cluster-l>
            <h3>My Discogs Collection</h3>
            <p>Using the React, Vite, React-Router-Dom and the Discogs Api I am able to display the discogs collection of myself or anyones</p>
          </stack-l>
        </box-l>
        <box-l>
          <stack-l>
          <frame-l ratio="1:1">
            <img src="src/client/assets/ProjectPlaceholder.png" alt="image of " />
          </frame-l>
          <cluster-l>
            <p>HTML</p>
            <p>SCSS</p>
            <p>Python</p>
            <p>Flask</p>
          </cluster-l>
          <h3>My Discogs Collection</h3>
          <p>Using the React, Vite, React-Router-Dom and the Discogs Api I am able to display the discogs collection of myself or anyones</p>
          </stack-l>
        </box-l>
          <box-l>
            <stack-l>
            <frame-l ratio="1:1">
              <img src="src/client/assets/React_Components.png" alt="image of React component Library project "/>
            </frame-l>
            <cluster-l>
              <p>HTML</p>
              <p>SCSS</p>
              <p>Python</p>
              <p>Flask</p>
            </cluster-l>
            <h3>React Component Library</h3>
            <p>To practice React and Reusable components as well as CSS styling, I made this reusable component library that enables you to create great looking websites quickly!</p>
            </stack-l>
          </box-l>
        </grid-l> 
    </box-l>
 
      
  )
}