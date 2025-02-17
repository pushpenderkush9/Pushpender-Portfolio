export default function About() {
    return (
      <div className="flex flex-col md:flex-row h-auto md:h-screen items-center justify-center p-6 md:p-12">
       
        <div className="w-full sm:w-1/2 md:w-1/2 flex justify-center">
          <img
            src="photo.jpg"
            alt="About Me"
            className="w-72  sm:w-1/2 md:w-96 lg:w-[400px] h-auto rounded-2xl shadow-lg"
          />
        </div>
  
       
        <div className="w-full sm:w-1/2  md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
          <div className="text-center md:text-left max-w-lg">
            <h1 className="font-extrabold text-3xl md:text-5xl">
              About Me
            </h1>
            <p className="mt-4  text-sm md:text-base leading-relaxed">
            I am a MERN stack developer with a strong passion for building dynamic, scalable, and high-performance web applications. With expertise in MongoDB, Express.js, React, and Node.js, I specialize in developing responsive front-end interfaces and robust back-end systems.
        
My front-end development skills allow me to craft seamless and interactive user experiences using React.js, ensuring intuitive and engaging applications. On the backend, I leverage Node.js and Express.js to develop efficient RESTful APIs, manage authentication, and optimize server-side performance. Additionally, I utilize MongoDB, a powerful NoSQL database, to ensure fast, scalable, and structured data management.

From designing intuitive UIs to handling server-side logic and database operations, I excel in the full-stack development lifecycle, delivering modern web solutions that meet both technical and business needs.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
