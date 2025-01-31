import theo from "../assets/theo.jpeg";
import ttt from "../assets/ttt.jpeg";
// import good from "../assets/good.jpeg";

const Hero = () => {
  return (
    <main
      id="Hero"
      className="relative flex  items-center h-[100vh] px-5 text-white z-0 overflow-hidden "
    >
      {/* <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={good}
          alt="Background"
          className="w-full h-full object-cover rounded"
        />
      </div> */}
      <div className="relative z-10 flex w-full max-w-6xl mx-auto items-center ">
        <div className="flex-1 space-y-5">
          <h1 className="font-extrabold text-4xl md:text-5xl hover:text-red-700 transition-colors duration-300">
            Hi, I&apos;m Theoneste welcome to my portifplio
          </h1>
          <p>
I'm a passionate web and mobile developer dedicated to crafting high-quality,
 With a strong background in JavaScript,
  I specialize in building scalable web applications using technologies 
  like Node.js, Express, React, and Angular. I also have experience 
  in developing cross-platform mobile apps using React Native and Flutter.
  I'm a developer promoted by Alight, focused on building modern web
   applications. Some of the tools I use include React, TailwindCSS,
    and JavaScript to create dynamic and scalable user interfaces.
          </p>

          <div className="mt-0 flex space-x-4 ">
          <a
            href="#about"
            className="bg-blue-900 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            Learn More About Me
          </a>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-teal-700 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
        
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={theo}
            alt="Portrait of Theoneste"
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
          />
        </div>
   
      </div>
    
    </main>
  );
};

export default Hero;
