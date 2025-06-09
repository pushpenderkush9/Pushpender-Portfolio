import { useNavigate } from "react-router-dom";
const projects = [
    {
        name: "SKill@meet",
        img: "./projects/skill.png",
        link: "https://github.com/pushpenderkush9/Skill-meet",
        description: "A social media platform where people can meet up and chat ."
    },
    {
        name: "3d flip card",
        img: "./projects/3d.png",
        link: "https://github.com/pushpenderkush9/3d-flip-card",
        description: "A 3D Flip card as a digital Card for contact."
    },
    {
        name: "Image Search Engine",
        img: "./projects/image.png",
        link: "https://github.com/pushpenderkush9/image-search-engine",
        description: "A search engine for images using advanced filtering."
    },
    {
        name: "Weather App ",
        img: "./projects/wheater.png",
        link: "https://github.com/pushpenderkush9/image-search-engine",
        description: "Its a Weather app which can show temparature and humidity of a place based on api data."
    },
    {
        name: "Responsive Page",
        img: "./projects/responsive-page.png",
        link: "https://github.com/pushpenderkush9/OBISIP/tree/main/responsive-landing-page",
        description: "A responsive and amazing desgin for desgining web sites."
    },
    {
        name: "STS-STT-TTS",
        img: "./projects/voice.png",
        link: "https://github.com/pushpenderkush9/STS-STT-TTS/tree/main/voicetovoice",
        description: "A react based Voice to  voice converter which can convert voice into voice and voice into text .",
    },
    

];


export default function Projects() {
    const navigate = useNavigate();
function handleSeeMore (){
    navigate("/Projects");
}
    return (
        <div className="min-h-screen flex flex-col items-center py-10 px-5"
            >
            <h1 className="text-center text-white text-4xl md:text-5xl font-extrabold mb-8">PROJECTS</h1>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="bg-white shadow-lg rounded-lg overflow-hidden p-5 flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-blue-100 w-80"
                    >
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">{project.name}</h2>
                        <img src={project.img} alt={project.name} className="w-60 transition-transform duration-300 hover:scale-110 h-60 object-cover rounded-lg" />
                        <p className="text-gray-600 mt-3 text-center">{project.description}</p>
                        <button 
                            onClick={() => window.open(project.link)} 
                            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition"
                        >
                            View Project
                        </button>
                    </div>
                ))}
            </div>
            {projects.length > 5 && <button  onClick={handleSeeMore} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition ">See More</button>}
        </div>
    );
}
