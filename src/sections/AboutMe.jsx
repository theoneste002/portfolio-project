import React from "react";
import picture from "../assets/picture.jpeg";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-16 px-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6">
          About Me
        </h1>
        <p className="text-gray-300 text-lg mb-12">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="flex-shrink-0">
          <img
            src={picture}
            alt="Theoneste's profile picture"
            className="rounded-full shadow-lg w-48 h-48 object-cover object-center"
          />
        </div>

        <div className="flex flex-col w-full lg:w-2/3 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Get to know me!
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a <span className="font-semibold">Frontend Focused Web Developer</span> building and managing the
              front-end of websites and web applications that lead to the success
              of the overall product. Check out some of my work in the{" "}
              <span className="font-semibold">github</span> section.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I also like sharing content related to the stuff that I have
              learned over the years in <span className="font-semibold">Web Development</span>, so it can help other
              people of the dev community. Feel free to connect with me on{" "}
              <a
                href="#github"
                className="text-yellow-400 underline hover:text-blue-300"
              >
                github
              </a>{" "}
              and{" "}
              <a
                href="#facebook"
                className="text-yellow-400 underline hover:text-blue-300"
              >
                facebook
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">My Skills</h2>
            <div className="flex flex-wrap gap-4">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "GIT",
                "Github",
                "Responsive Design",
                "Back-end",
                "Tailwindcss",
                "Terminal",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;



