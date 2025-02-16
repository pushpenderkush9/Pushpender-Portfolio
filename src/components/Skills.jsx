// import { useState } from "react";
// import Language from "./Language";

// export default function Skills(){
   
//       const [Lang,setLang]=useState(false);
//       const [webFrames,setWebFrames]=useState(false);
//       const [Database,setDatabase]=useState(false);
//       const [Frontend,setFrontend]=useState(false);
//       const [Tool,setTool]=useState(false);
//       const handleClick = (id)=>{
//             if(id==='Language'){
//                 setLang(true);
//                 setWebFrames(false);
//                 setDatabase(false);
//                 setFrontend(false);
//                 setTool(false);
//             }else if(id==='webFrames'){
//               setLang(false);
//               setWebFrames(true);
//               setDatabase(false);
//               setFrontend(false);
//               setTool(false);
//             }else if(id==='Database'){
//               setLang(false);
//               setWebFrames(false);
//               setDatabase(true);
//               setFrontend(false);
//               setTool(false);
//             }else if(id==='Frontend'){
//               setLang(false);
//               setWebFrames(false);
//               setDatabase(false);
//               setFrontend(true);
//               setTool(false);
//             }else if(id==='Tool'){
//               setLang(false);
//               setWebFrames(false);
//               setDatabase(false);
//               setFrontend(false);
//               setTool(true);
//             }
//       }
//     return(
//         <>
//         <div className="flex flex-col md:flex-row h-auto md:h-screen items-center justify-center ">
//             <div className="w-full sm:w-1/2 md:w-1/2 ">
//             <img src="skills.jpg" 
//             className="w-72  sm:w-1/2 md:w-96 lg:w-[400px] h-auto rounded-2xl shadow-lg"
//             />
//             </div>
//             <div className="text-center md:text-left max-w-lg">
//            <h1 className="font-extrabold text-3xl md:text-5xl">Skills : </h1><br />
//           <div className="buttons justify-center gap-5 space-x-4 items-center">
//            <div>
//             <button  onClick={()=>handleClick("Language")} className="bg-white text-black w-25 h-10 rounded-full"  >Language</button><br /> 
//               {Lang && <Language id="Language"/> }  
//           </div>
//           <div>
//             <button  onClick={()=>handleClick("webFrames")} className="bg-white text-black w-25 h-10 rounded-full"  >Web Frameworks</button><br /> 
//               {webFrames && <Language id="webFrames" /> }  
//           </div>
//           <div>
//             <button  onClick={()=>handleClick("Database")} className="bg-white text-black w-25 h-10 rounded-full"  >Database</button><br /> 
//               {Database && <Language id="Database"/> }  
//           </div>
//           <div>
//             <button  onClick={()=>handleClick("Frontend")} className="bg-white text-black w-25 h-10 rounded-full"  >Frontend</button><br /> 
//               {Frontend && <Language id="Frontend"/> }  
//           </div>
//           <div>
//             <button  onClick={()=>handleClick("Tool")} className="bg-white text-black w-25 h-10 rounded-full"  >Tool</button><br /> 
//               {Tool && <Language  id="Tool" /> }  
//           </div>
//           </div>
//             </div>

//         </div>
      
//         </>
//     )
// }
import { useState } from "react";
import Language from "./Language";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = ["Language", "webFrames", "Database", "Frontend", "Tool"];

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen items-center justify-center">
      <div className="w-full sm:w-1/2 md:w-1/2">
        <img
          src="skills.jpg"
          className="w-80 flex flex-col items-center text-center sm:w-1/2  md:w-150 lg:w-[500px] h-auto rounded-2xl shadow-lg"
          alt="Skills"
        />
      </div>
      <div className="text-center md:text-left max-w-lg">
        <h1 className="font-extrabold text-3xl md:text-5xl">Skills:</h1>
        <br />
        <div className="buttons flex flex-col justify-center gap-3 items-center md:items-start">
          {categories.map((category) => (
            <div key={category}>
              <button
                onClick={() => setActiveCategory(category)}
                className={`bg-white text-black w-32 h-10 rounded-full ${
                  activeCategory === category ? "ring-2 ring-black" : ""
                }`}
              >
                {category}
              </button>
              <br />
              {activeCategory === category && <Language id={category} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
