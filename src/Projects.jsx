import React, { useEffect, useState } from 'react'

const projectButtonData = [{id: 1, title: "Backroads App"}, {id: 2, title: "Birthday Reminder"},
{id: 3, title: "Project 3"}, {id: 4, title: "Project 4"}, 
{id: 5, title: "Project 5"}, {id: 6, title: "Project 6"}, 
{id: 7, title: "Project 7"},]

const elements = [ <h3>Backroads App</h3>, <h3>Birthday Reminder</h3>,
<h3>Project 3</h3>, <h3>Project 4</h3>, <h3>Project 5</h3>,
<h3>Project 6</h3>, <h3>Project 7</h3> ]

function Projects() {
  const [project, setProject] = useState(1)
  const [activebtn, setActiveBtn] = useState(1)
  const [btnState, setBtnState] = useState([])
  let projectButtons = document.getElementsByClassName("btn project")

  const handleProjectButton = (num) => {
    setActiveBtn(num)
    setBtnState([...btnState, num])
    let prevId = [btnState[btnState.length - 1]][0]
    
    const button = projectButtons[num - 1] 
    const prevButton = projectButtons[prevId - 1]  
    
    if(prevId == undefined) {
      button.style.transition = "background-size 300ms ease-in-out 0s"
      button.style.backgroundSize = "100% 100%"
    } else {
      button.style.backgroundSize = "100% 100%"
      prevButton.style.backgroundSize = "0% 100%"
      button.style.transition = "background-size 300ms ease-in-out 0s"
      prevButton.style.transition = "background-size 300ms ease-in-out 0s"
    }
  } 

  return (
    <div className="section projects">
      <div className="project-buttons">
        {projectButtonData.map((btn) => {
          return (
            <button className={activebtn == btn.id ? "btn project active" : "btn project"} 
            onClick={() => {
              handleProjectButton(btn.id)
            } } style={ {backgroundSize: "0% 100%"} } >{btn.title} </button>
          )
        })}  
      </div>
      <div className="project">
        {elements.map((elem) => {
          if(activebtn - 1 == elements.indexOf(elem)) {
            return elem
          }
        })}
      </div>
    </div>
    )
}



export default Projects

