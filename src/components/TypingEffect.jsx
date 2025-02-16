import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'react-typewriter-effect';

export default function TypingEffect() {
  const navigate = useNavigate();
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecond(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showSecond) {
      const redirect = setTimeout(() => {
        navigate('/Dashboard');
      }, 2500);
      return () => clearTimeout(redirect);
    }
  }, [showSecond, navigate]);

  return (
    <>
      <div className='flex items-center justify-center h-screen bg-black font-extrabold text-white'>
        <div className="text-center sm:text-left sm:ml-10 md:ml-20 lg:ml-40">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <Typewriter
              className="text-5xl"
              text="WELCOME TO MY PORTFOLIO"
              delay={100}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              loop={false}
            />
          </div>
          <div className="mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl ml-50">
            {showSecond && (
              <Typewriter
                text="Pushpender"
                delay={500}
                cursor
                cursorStyle="_"
                typeSpeed={150}
                deleteSpeed={50}
                loop={false}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
