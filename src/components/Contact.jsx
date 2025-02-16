import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Front() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full p-10 border-t-2 border-gray-300 ">
      
      <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-12 text-center md:text-left mt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Let's Work Together</h1>
        <p className="mt-4 text-lg text-white leading-relaxed max-w-md mx-auto md:mx-0">
          I'm currently looking for a new opportunity. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

     
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center mt-16">
        
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-6 rounded-xl shadow-md">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold text-gray-900">Phone Number</h1>
            <p className="text-lg text-gray-600">+91-7988636701</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold text-gray-900">Email</h1>
            <p className="text-lg text-gray-600">Pushpendersharmakush@gmail.com</p>
          </div>
        </div>

       
        <div className="flex space-x-6 mt-6">
          <a
            href="https://github.com/pushpenderkush9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-transform duration-300 hover:scale-200 text-4xl hover:text-gray-900"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pushpender-pushpender-48265b226/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 transition-transform duration-300 hover:scale-200 text-4xl hover:text-blue-800"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/pushpender_kush09/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 transition-transform duration-300 hover:scale-200 text-4xl hover:text-pink-700"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
