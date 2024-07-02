import React from 'react'
import '../assets/StylesMain'

export default function About(){
  return(
    <box-l padding="var(--s2)" borderWidth="var(--border-thin)">
    <div id="skills-container">
       <box-l  borderWidth="0" padding="var(--s1)">
         
          <h2><span>#</span>about</h2>
       </box-l>
       <sidebar-l sideWidth="250px" >
       <box-l>
          <img src="src/client/assets/profile-placeholder.png" />
        </box-l>    
       <box-l  >
        <p>Passionate web developer with a keen interest in creating responsive and accessible websites. I specialize in front-end development, utilizing a robust set of skills including HTML, CSS, JavaScript, and React. My experience also extends to back-end technologies such as Ruby on Rails, PostgreSQL, GraphQL, and Eleventy.
       I am committed to building user-friendly web experiences that are both visually appealing and highly functional. My goal is to combine my technical expertise with my creative vision to develop websites that not only look great but also provide an intuitive and seamless user experience.</p>
        <p>
          In addition to my professional interests, I love spending my free time camping, listening to records, and exploring new places. These hobbies inspire my work by giving me fresh perspectives and new ideas.
        
        I'm excited to bring my skills and passion to new projects and challenges in the web development world. Let's create something amazing together!</p>
        </box-l>       
       
       </sidebar-l>
     
       </div>
     </box-l>
  )
}