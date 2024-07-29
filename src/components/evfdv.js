// import React from "react";
// import './App.css'
// import { useState } from "react";
// import Title from "./components/title/Title";

// function App(){
//   const [name, setName] = useState('Muzaffar')
//   const [content, setContent] = useState(true)
//   // console.log(name)
//   const [proms, setProms] = useState([
//     {title:"Muzaffar's birthday",id:1},
//     {title:"Abror's birthday",id:2},
//     {title:"Shohrux's birthday",id:3},
//     {title:"Shohruxbek's birthday",id:4},
//   ])
//   const handeleName =()=>{
//     setName('Abbos')
//   }
//   const handleDelete = (id) => {
//        const filteredProms=proms.filter((prom)=>{
//         return prom.id !== id
//        })
//        setProms(filteredProms)
//       }  
      
//   return(
//     <div className="App">
//       <Title  title="Muzaffar" subtitle="hello"/>
//     <h1>My name is  {name}</h1>
//     <button onClick={handeleName}>change</button>
//     <hr />
//     <br />
//      { content && <button onClick={()=> setContent(false)}>hide content</button>}
//      { !content && <button onClick={()=> setContent(true)}> content</button>}
//         {content && <div>
//           {/* {proms.length === 0 &&  <h5> No items:) </h5> } */}
//           {proms.map((prom) => {
//             return (
//               <div key={prom.id}>
//                 <h2>{prom.title}</h2>
//                 <button onClick={() => {handleDelete(prom.id)}}>Delete</button>
//               </div>
//             )
//           })}
//         </div>}
    
//     </div>
//   )
// }
//  export default App