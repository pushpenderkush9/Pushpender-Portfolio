// import { img } from "framer-motion/client"
// import { useState } from "react"

// const Languages = [
//     {
//         name:"C",
//         img:"c.png"
//     },
//     {
//         name:"C++",
//         img:"c++.png"
//     },
//     {
//         name:"JavaScript",
//         img:"javascript.png"
//     },
    
// ]
// const webFrames=[
//     {
//         name:"React",
//         img:"react.png"
//     },
//     {
//         name:"Next Js",
//         img:"nextjs.png"
//     },
//     {
//         name:"Node Js",
//         img:"nodejs.png"
//     },
//     {
//         name:"Express Js",
//         img:"express.png"
//     },
//     {
//         name:"Vite",
//         img:"vite.png"
//     },
// ]

// const Database = [
//     {
//         name:"MongoDB",
//         img:"mongodb.png"
//     },
//     {
//         name:"MySQL",
//         img:"mysql.png"
//     }
// ]
// const Frontend =[
//     {
//         name:"HTML 5",
//         img:"html5.png"
//     },
//     {
//         name:"CSS 3",
//         img:"css3.png"
//     },
//     {
//         name:"Boostrap ",
//         img:"boostrap.png"
//     },
//     {
//         name:"Tailwind ",
//         img:"tailwind.png"
//     },
//     {
//         name:"JavaScript ",
//         img:"javascript.png"
//     },
//     {
//         name:"Figma",
//         img:"figma.png"
//     },
//     {
//         name:"Canvas",
//         img:"canvas.png"
//     },
    
// ]
// const Tool=[
//     {
//         name:"GitHub",
//         img:"github.png"
//     },
//     {
//         name:"NPM",
//         img:"npm.png"
//     },
//     {
//         name:"Bash",
//         img:"bash.png"
//     },
//     {
//         name:"Vs Code",
//         img:"vscode.png"
//     },
//     {
//         name:"Figma",
//         img:"figma.png"
//     },
//     {
//         name:"Canvas",
//         img:"canvas.png"
//     },

// ]
// export default function Language({id}){
    
//     return(
//         <>
//         <div className="flex flex-row item-center justify-center">
//            {Languages.map((item)=>(

           
//         <div  key={item.name} className="m-8 item-center justify-center font-extrabold text-2xl">
//         <img src={item.img} className="w-10 h-10" />
//         <h1 className="item-center     m-3  ">{item.name}</h1>
//         </div>
//         ))} 
//         </div>
//         </>
//     )
// }

import { useState } from "react";

const skillCategories = {
  Language: [
    { name: "C", img: "c.png" },
    { name: "C++", img: "c++.png" },
    { name: "JavaScript", img: "javascript.png" },
  ],
  webFrames: [
    { name: "React", img: "react.png" },
    { name: "Next Js", img: "nextjs.png" },
    { name: "Node Js", img: "nodejs.png" },
    { name: "Express Js", img: "express.png" },
    { name: "Vite", img: "vite.png" },
  ],
  Database: [
    { name: "MongoDB", img: "mongodb.png" },
    { name: "MySQL", img: "mysql.png" },
  ],
  Frontend: [
    { name: "HTML 5", img: "html5.png" },
    { name: "CSS 3", img: "css3.png" },
    { name: "Bootstrap", img: "bootstrap.png" },
    { name: "Tailwind", img: "tailwind.png" },
    { name: "JavaScript", img: "javascript.png" },
    { name: "Figma", img: "figma.png" },
    { name: "Canvas", img: "canvas.png" },
  ],
  Tool: [
    { name: "GitHub", img: "github.png" },
    { name: "NPM", img: "npm.png" },
    { name: "Bash", img: "bash.png" },
    { name: "VS Code", img: "vscode.png" },
    { name: "Figma", img: "figma.png" },
    { name: "Canvas", img: "canvas.png" },
  ],
};

export default function Language({ id }) {
  const skills = skillCategories[id] || [];

  return (
    <div className="flex flex-row flex-wrap justify-center items-center">
      {skills.map((skill) => (
        <div key={skill.name} className="m-8 text-center font-extrabold text-2xl">
          <img src={skill.img} className="w-10 h-10 mx-auto" alt={skill.name} />
          <h1 className="mt-3">{skill.name}</h1>
        </div>
      ))}
    </div>
  );
}
