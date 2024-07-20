import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import About from './About'
import Projects from './Projects'
import '../../../public/StylesMain'
import Contact from './Contact'

export default function Home(){

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return(
    <box-l borderWidth="0">
      <stack-l space="var(--s5)">
      <center-l andText="true">
        <box-l id="landing-page" borderWidth="0">
        <h1>My name is Bobby, I am a <span>Full-Stack Developer</span></h1>
        <p className="home-paragraph">Creating responsive and accessible websites. With a background in web development and a passion for coding and tinkering, I specialize in building dynamic, high-performance applications. View my <a href="#projects">projects</a> for more info!</p>
        </box-l>
          </center-l> 
        <box-l borderWidth="0" className="home-container">
        <cluster-l justify="flex-end">
          <box-l className="border" borderWidth="var(--border-thick)">
            <p>Currently available for hire</p>
            </box-l>
          </cluster-l>
          </box-l>
        <div className="pattern-diagonal-stripes-lg separator"></div>
          <About/>
          <div className="pattern-diagonal-stripes-lg separator"><box-l borderWidth="0"><a onClick={scrollToTop}>Scroll to top</a></box-l></div>
          <Projects/>
          <div className="pattern-diagonal-stripes-lg separator"><box-l borderWidth="0"><a onClick={scrollToTop}>Scroll to top</a></box-l></div>
          <Contact/>
          <div className="pattern-diagonal-stripes-lg separator"><box-l borderWidth="0"><a onClick={scrollToTop}>Scroll to top</a></box-l></div>
      </stack-l>
      
      </box-l>
      
  )
}