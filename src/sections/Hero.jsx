import theo from "../assets/theo.jpeg";
import ttt from "../assets/ttt.jpeg";

const Hero = () => {
  return (
    <main
      id="Hero"
      className="relative flex items-center h-[90vh] gap-6 px-5 text-white z-0 overflow-hidden"
    >
      <div className="w-3/5 space-y-5">
        <h1 className="font-extrabold text-4xl md:text-5xl hover:text-red-700 transition-colors duration-300">
          Hi, I&apos;m Theoneste
        </h1>
        <p>I'm  developer one promoted by Alight focused with on building modern, some of tools we used colled  React, TailwindCSS, and JavaScript, creating dynamic and scalable user interfaces.</p>
        <button
          onClick={() => alert("Hire Me")}
          className="bg-green-700 text-white text-[18px] py-4 px-12 rounded-full hover:bg-green-800 focus:ring-2 focus:ring-red-700 focus:ring-offset-1 outline-none transition-transform transform hover:scale-105"
        >
          Hire Me
        </button>
      </div>
      <div className="w-1/3 flex justify-center">
        <img
          src={theo}
          alt="Portrait of Theoneste"
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-full shadow-lg hover:shadow-2xl  duration-300"
        />
      </div>

      <div className="absolute inset-0 w-full h-full z-[-1]">
        <img
          src={ttt}
          alt="Background red image"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
    </main>
  );
};

export default Hero;
