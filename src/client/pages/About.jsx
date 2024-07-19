import React from 'react'
import '../assets/StylesMain'


export default function About(){
  return(
    <box-l padding="var(--s1)" borderWidth="0">
    <div id="about">
       <box-l borderWidth="0" padding="var(--s1)">
          <h2><span>#</span>about</h2>
       </box-l>
       <sidebar-l side="right" sideWidth="20rem" > 
       <box-l padding="0" borderWidth="0" >
        <p>Passionate web developer with a keen interest in creating responsive and accessible websites. I specialize in front-end development, utilizing a robust set of skills including HTML, CSS, JavaScript, and React. My experience also extends to back-end technologies such as Ruby on Rails, PostgreSQL, GraphQL, and Eleventy.
       I am committed to building user-friendly web experiences that are both visually appealing and highly functional. My goal is to combine my technical expertise with my creative vision to develop websites that not only look great but also provide an intuitive and seamless user experience.</p>
        <p>
          In addition to my professional interests, I love spending my free time camping, listening to records, and exploring new places. These hobbies inspire my work by giving me fresh perspectives and new ideas.
        
        I'm excited to bring my skills and passion to new projects and challenges in the web development world. Let's create something amazing together!</p>
        </box-l>       
        <box-l padding="0" borderWidth="0">
          <reel-l itemWidth="300px">
          <picture>
              <source srcset="src/client/assets/reel_imagehd_3.jpg" media="(min-width:85rem)"/>
              <source srcset="src/client/assets/reel_image3_1x.jpg" media="(min-width:75rem)"/>
              <source srcset="src/client/assets/reel_image3_2x.jpg" media="(min-width:40rem)"/>
              <img src="src/client/assets/reel_image3_3x.jpg" alt="Profile Picture" loading="lazy" decoding="async"/>
            </picture>
            <picture>
              <source srcset="src/client/assets/reel_imagehd_2.jpg" media="(min-width:85rem)"/>
              <source srcset="src/client/assets/reel_image2_1x.jpg" media="(min-width:75rem)"/>
              <source srcset="src/client/assets/reel_image2_2x.jpg" media="(min-width:40rem)"/>
              <img src="src/client/assets/reel_image2_3x.jpg" alt="my listening station." loading="lazy" decoding="async"/>
            </picture>
            <picture>
              <source srcset="src/client/assets/reel_imagehd_6.jpg" media="(min-width:85rem)"/>
              <source srcset="src/client/assets/reel_image6_1x.jpg" media="(min-width:75rem)"/>
              <source srcset="src/client/assets/reel_image6_2x.jpg" media="(min-width:40rem)"/>
              <img src="src/client/assets/reel_image6_3x.jpg" alt="drawing of cactuc man" loading="lazy" decoding="async"/>
            </picture>
              <picture>
              <source srcset="src/client/assets/reel_imagehd_7.jpg" media="(min-width:85rem)"/>
              <source srcset="src/client/assets/reel_image7_1x.jpg" media="(min-width:75rem)"/>
              <source srcset="src/client/assets/reel_image7_2x.jpg" media="(min-width:40rem)"/>
              <img src="src/client/assets/reel_image7_3x.jpg" alt="me at bryce canyon" loading="lazy" decoding="async"/>
            </picture>
           <frame-l ratio="1:1">
           </frame-l>
            <picture>
              <source srcset="src/client/assets/reel_imagehd_5.jpg" media="(min-width:85rem)"/>
              <source srcset="src/client/assets/reel_image5_1x.jpg" media="(min-width:75rem)"/>
              <source srcset="src/client/assets/reel_image5_2x.jpg" media="(min-width:40rem)"/>
              <img src="src/client/assets/reel_image5_3x.jpg" alt="a descr" loading="lazy" decoding="async"/>
            </picture>
            <picture>
              <source srcset="src/client/assets/reel_imagehd_4.jpg" media="(min-width:85rem)"/>
              <source srcset="src/client/assets/reel_image4_1x.jpg" media="(min-width:75rem)"/>
              <source srcset="src/client/assets/reel_image4_2x.jpg" media="(min-width:40rem)"/>
              <img src="src/client/assets/reel_image4_3x.jpg" alt="a descr" loading="lazy" decoding="async"/>
            </picture>
            <picture>
              <source srcset="src/client/assets/reel_imagehd_1.jpg" media="(min-width:85rem)"/>
              <source srcset="src/client/assets/reel_image1_1x.jpg" media="(min-width:75rem)"/>
              <source srcset="src/client/assets/reel_image1_2x.jpg" media="(min-width:40rem)"/>
              <img src="src/client/assets/reel_image1_3x.jpg" alt="Photography Interest image of Wendover Will" loading="lazy" decoding="async"/>
            </picture>
          </reel-l>
        </box-l>   
       </sidebar-l>
       </div>
     </box-l>
  )
}