import React from "react"
import '../../../public/StylesMain'

export default function Contact(){
  return(
    <box-l id="contact" className="contact" borderWidth="0" padding="var(--s3)">
      <cluster-l justify="space-evenly">
      <stack-l space="var(--s0)">
      <box-l  padding="0" borderWidth="0">
       <h2><icon-l><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.018 3.815 15.232 8h-4.966l.716-3.815-1.964-.37L8.232 8H4v2h3.857l-.751 4H3v2h3.731l-.714 3.805 1.965.369L8.766 16h4.966l-.714 3.805 1.965.369.783-4.174H20v-2h-3.859l.751-4H21V8h-3.733l.716-3.815-1.965-.37zM14.106 14H9.141l.751-4h4.966l-.752 4z"/></svg></icon-l>contact</h2>
       </box-l>
      <ul>
        <li> 
         <box-l borderWidth="0" role="listitem">
          <a href="mailto:bob.caya1@gmail.com">email</a>
         </box-l>
        </li>
        <li>
        <box-l borderWidth="0" role="listitem">
            <a href="https://github.com/bcaya" target="_blank">github</a>
          </box-l>
          <li>
        <box-l borderWidth="0" role="listitem">
            <a href="https://www.linkedin.com/in/bobby-caya/" target="_blank">linkedin</a>
          </box-l>
        </li> 
        </li> 
      </ul>
      
      </stack-l>
      <stack-l>
      <box-l  padding="0" borderWidth="0">
       <h2><icon-l><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.018 3.815 15.232 8h-4.966l.716-3.815-1.964-.37L8.232 8H4v2h3.857l-.751 4H3v2h3.731l-.714 3.805 1.965.369L8.766 16h4.966l-.714 3.805 1.965.369.783-4.174H20v-2h-3.859l.751-4H21V8h-3.733l.716-3.815-1.965-.37zM14.106 14H9.141l.751-4h4.966l-.752 4z"/></svg></icon-l>socials</h2>
       </box-l>
      <ul>
        <li> 
          <box-l borderWidth="0">
          <a href="https://www.instagram.com/cosmos_ghost/" target="_blank">
            instagram
          </a>
          </box-l>
        </li>
        <li>
          <box-l borderWidth="0">
          <a href="https://open.spotify.com/user/cosmos_ghost?si=b20f5ce539304414" target="_blank">
            spotify
          </a>
          </box-l>
          </li>
          <li>
            <box-l borderWidth="0">
              <a href="https://www.last.fm/user/cosmos_ghost" target="_blank">
              last.fm</a>
            </box-l>
          </li>
      </ul>
      
      </stack-l>
      </cluster-l>
      
      
          </box-l>
  )
}