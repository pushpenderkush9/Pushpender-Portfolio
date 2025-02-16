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
            A MERN stack developer is a highly skilled professional specializing in 
            building dynamic and scalable web applications using MongoDB, Express.js,
             React, and Node.js. With expertise in front-end development, they create 
             responsive and interactive user interfaces using React.js, ensuring
              seamless user experiences. On the backend, they leverage Node.js and 
              Express.js to build robust RESTful APIs, manage authentication, and 
              optimize server-side performance. MongoDB, a NoSQL database, enables 
              efficient data storage and retrieval, ensuring high-speed and scalable
               applications. By mastering the entire development lifecycle—from designing
                the UI to managing server logic and database operations—MERN stack 
                developers play a crucial role in delivering modern, full-stack web 
                solutions.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
