import React from 'react';

const Education = () => {
  return (
    <div className="p-6 bg-opacity-400 text-gray-300 min-h-screen w-screen">
      <div className="w-full   bg-black text-white  p-10">
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-blue-600 mb-4">
            Advanced Certificate (A2)
          </h1>
          <p className="text-gray-700 text-base leading-relaxed text-white">
            From 2020, I started a combination called Mathematics, Economics, and Geography. 
            I performed at an 80% percentile during the current academic year. For the national results, 
            I scored 50 out of 60. This was my first journey, which was challenging, but I passed through it 
            with confidence.
          </p>
        </section>

        <section>
          <h1 className="text-2xl font-bold text-yellow-600 mb-4">
            My Certificates
          </h1>
          <p className="text-gray-700 text-base leading-relaxed mb-4 text-white">
            During my time in school, I founded the Unity and Reconciliation group. 
            I also earned several certificates, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed text-white">
            <li>Certificate of Save the Children</li>
            <li>Certificate of Beyond Success</li>
            <li>Certificate of EDFAM</li>
          </ul>
          <h1 className="text-2xl font-bold text-green-600 mb-4">Experience</h1>
          <p className="text-gray-700 text-base leading-relaxed text-white">
            After completing high school, I started learning coding, especially programming. 
            It started as a challenge, but now I am an expert. 
            I gained diverse skills in programming, including:
            <br />
            Front-end: HTML, CSS, JavaScript, React, TailwindCSS, and how to install them.
            <br />
            Back-end: Database management, Postman, and more.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Education;

