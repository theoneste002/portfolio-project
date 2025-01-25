import pick from "../assets/pick.jpeg";

const Navbar = () => {
  return (
    <header id="home" className="bg-green-300 z-10">
      <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
       
          <img src={pick} alt="Theoneste Logo" className="h-12 w-auto "  />

          <ul className="flex space-x-6 ml-auto"> <li>
          <a href="#home" className="hover:text-yellow-400 transition duration-300">
                Home
              </a>
            </li>
            <li>
           <a href="#about" className="hover:text-yellow-400 transition duration-300">
             About
              </a>
            </li>
            <li>
           <a href="#skills" className="hover:text-yellow-400 transition duration-300">
              Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition duration-300">
                Contact
              </a>
            </li>
            <li>
              <a href="#hero" className="hover:text-yellow-400 transition duration-300">
                Hero
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;




