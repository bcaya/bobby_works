import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/StylesMain'

export default function Projects(){
  return(
  <div className="projects-container">
    <box-l>
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
        </grid-l> 
    </box-l>
  </div>
 
      
  )
}