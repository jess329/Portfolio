import { useEffect, useState } from "react";
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"

const App = () => {
  const [activebtn, setActivebtn] = useState(0)
  const buttons = document.getElementsByClassName("btn")
  const btn_section = document.getElementsByClassName("btns")[0]
  const gridCloumnsArr = ["1.5fr 0.75fr 0.75fr", "0.75fr 1.5fr 0.75fr", "0.75fr 0.75fr 1.5fr"]
  const contentArr = [<About/>, <Projects/>, <Contact/>] 

  const handleButtons = (num) => {
    setActivebtn(num)
    btn_section.style.gridTemplateColumns = gridCloumnsArr[num]
   }

  return (
    <body>
      <div className="btns">
        <button className={activebtn == 0 ? "btn active" : "btn"}
         onClick={() => handleButtons(0)}> <h3>About Me</h3> </button> 
        <button className={activebtn == 1 ? "btn active" : "btn"}
         onClick={() => handleButtons(1)}> <h3>Projects</h3> </button> 
        <button className={activebtn == 2 ? "btn active" : "btn"}
         onClick={() => handleButtons(2)}> <h3>Contact</h3> </button> 
      </div>
      <main>
        {contentArr[activebtn]}  
      </main>    


    </body>
  ) 
};
export default App;
