import { useNavigate } from "react-router-dom";
const projects = [
    {
        name: "Image Search Engine",
        img: "./projects/image.png",
        link: "https://github.com/pushpenderkush9/image-search-engine",
        description: "A search engine for images using advanced filtering."
    },
    {
        name: "Image Search Engine 2",
        img: "./projects/image.png",
        link: "https://github.com/pushpenderkush9/image-search-engine",
        description: "Another version of an image search engine with more features."
    },
    {
        name: "Image Search Engine",
        img: "./projects/image.png",
        link: "https://github.com/pushpenderkush9/image-search-engine",
        description: "A search engine for images using advanced filtering."
    },
    {
        name: "Image Search Engine 2",
        img: "./projects/image.png",
        link: "https://github.com/pushpenderkush9/image-search-engine",
        description: "Another version of an image search engine with more features."
    },
    {
        name: "Image Search Engine",
        img: "./projects/image.png",
        link: "https://github.com/pushpenderkush9/image-search-engine",
        description: "A search engine for images using advanced filtering."
    },
    {
        name: "Image Search Engine 2",
        img: "./projects/image.png",
        link: "https://github.com/pushpenderkush9/image-search-engine",
        description: "Another version of an image search engine with more features."
    }

];


export default function ProjectList() {
    const navigate = useNavigate();
    function handleBack (){
        navigate("/Dashboard");
    }
    return (
        <div className="bg-black">
            <button onClick={handleBack} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition  ">Back </button>
        <h1 className="text-5xl font-extrabold text-white text-center p-10 bg-black">MY PROJECT LIST</h1>
        
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
            </div>
        </div>
    )}