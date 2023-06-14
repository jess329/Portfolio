import React from 'react'
import {AiOutlineInstagram} from "react-icons/ai"
import {FaHtml5, FaReact, FaCss3Alt} from "react-icons/fa"
import {SiJavascript} from "react-icons/si"

function About() {
  const icons = [{name: <FaHtml5 className='workicon html'/>, class: "html"}, 
  {name: <FaCss3Alt className='workicon css'/>, class: "css"},
  {name: <SiJavascript className='workicon js'/>, class: "js"},
  {name: <FaReact className='workicon react'/>, class: "react"}]

  return (
    <div className='section about'>
      <div className="text">
        <h3>Hi, I'm Jasper.</h3>
        <h4>Web Developer</h4>
      </div>
      <div className="imgholder">
        <a href="https://www.instagram.com/jas.per04/" target='_blank'>
          <img src="./images/bild-snap.jpg" alt="Bild"/>
          <AiOutlineInstagram className='icon insta'/>
        </a>
      </div>
      <div className="icons">
        {icons.map((icon) => {
          return (
            <div className={`iconholder ${icon.class}`} >
              {icon.name}
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default About