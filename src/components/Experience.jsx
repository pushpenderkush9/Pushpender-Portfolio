import React from 'react';

export default function Experience() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-center mb-8">
        Experience
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-6xl w-full">
        {/* Text Content */}
        <div className="flex-1 w-full">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            FOUNDER, FULL STACK DEVELOPER & TEACHER @{' '}
            <span className="text-blue-600 text-3xl sm:text-4xl">CODE-X-CAMPUS</span>
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-justify">
            <li>
              <p>
                Founded an e-learning platform offering affordable 1:1 programming mentorship and internship certifications to students across India.
              </p>
            </li>
            <li>
              <p>
                Developed the full-stack platform using Next.js, React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.
              </p>
            </li>
            <li>
              <p>
                Solved real-world problems by providing verified 45-day internship certificates and hands-on training at low cost, addressing a major gap in college requirements.
              </p>
            </li>
            <li>
              <p>
                Designed and implemented a certificate generation system, student dashboard, and admin panel.
              </p>
            </li>
            <li>
              <p>
                Mentored 30+ students in C, C++, Web Development, and project-based learning.
              </p>
            </li>
          </ul>
          <h2 className="mt-4 font-semibold">
            Link: <a href="https://code-x-campus.vercel.app/" className="text-blue-500 underline">code-x-campus.vercel.app</a>
          </h2>
        </div>

        {/* Video */}
        <div className="flex-1 sm:ml-10 w-full">
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <video
              controls
              className="w-full h-full object-cover"
              src="./experience/exp1.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
