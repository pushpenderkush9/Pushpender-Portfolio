export default function Services() {
    return (
        <section className="py-12 px-4">
            <h1 className="font-extrabold text-4xl md:text-6xl text-center mb-8">My Services</h1><br />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
                
              
                {[
                    { img: "webdeveloper.png", title: "Web Developer", desc: "A full-stack developer specializing in the MERN stack builds dynamic, responsive, and scalable web applications..." },
                    { img: "ui.png", title: "UI Designer", desc: "A UI designer specializing in Figma crafts visually appealing and user-friendly digital experiences..." },
                    { img: "front.png", title: "Frontend Developer", desc: "A front-end developer skilled in HTML, CSS, Bootstrap, Tailwind CSS, React.js, EJS, and Next.js builds visually stunning, responsive applications..." },
                    { img: "back.png", title: "Backend Developer", desc: "A Node.js backend developer specializes in building scalable, high-performance server-side applications..." }
                ].map((service, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg w-72 h-72 transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-500 hover:text-white">
                        <img src={service.img} className="w-20 h-20 mb-4" alt={service.title} />
                        <p className="text-gray-700 hover:text-white">{service.desc}</p>
                    </div>
                ))}

            </div>
        </section>
    );
}
