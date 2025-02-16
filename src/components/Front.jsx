import { motion } from "framer-motion";
import { Boxes } from "./background-boxes";
import { cn } from "../utils";
export default function Front() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white px-4 sm:px-8">
      
      <motion.img
        src="photo.jpg"
        alt="Profile"
        className="w-65 sm:w-55 md:w-70 lg:w-95 h-auto rounded-xl shadow-lg"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 1 }}
      />

      <motion.h1
        className="mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.3 }}
      >
        Welcome to My Portfolio
      </motion.h1>

      <motion.p
        className="mt-4 text-base sm:text-lg text-gray-300 text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.6 }}
      >
        I am a passionate web developer, crafting engaging and dynamic user
        experiences.
      </motion.p>
      
    </div>
  );
}
