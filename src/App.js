import React from "react";
import './App.css'
import { useState } from "react";
import useLocalStorage from "use-local-storage";
import Title from "./components/title/Title";

function App(){
  const [name, setName] = useState(false)
  const [content, setContent] = useState(true)
  const [clear, setClear] = useState(true)

             
  return(
    <div className="App">
        { content && <button onClick={()=> setContent(false)}>hide content</button>}
     { !content && <button onClick={()=> setContent(true)}>content</button>}
      {content && <div className="box">
      
      </div>
      
      }
    
      
  { clear && <button onClick={()=> setClear(false)}>hide content</button>}
     { !clear && <button onClick={()=> setClear(true)}>content</button>}
      { clear &&
      
        <div className="box1">
        </div>
      }
    </div>
  )
}
 export default App