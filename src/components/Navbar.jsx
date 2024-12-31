const Navbar = () => {
    return (
      <header id="home"className="bg-gren-300 p-7 top-0 left-0 right-0 z-10">
     <nav className="fixed top-0 p-4 left-0 w-full bg-blue-900 text-white z-50 shadow-md">
      <div className="float-none object-none">
      <img src="https://cdn.prod.website-files.com/662a334dd85033d581d0b33e/66587cb6d43bc546a515f7ba_Alight_Logo.svg" loading="lazy" alt="" class="brand-logo" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG"></img>
      <ul className="space-x-10 flex right-0 left-0 justify-end items-end">
          <a href="#home" className="hover:text-yellow-700">Home</a>
          <a href="#about"  className="hover:text-red-700">About</a>
          <a href="#skills"  className="hover:text-green-700">Skills</a>
          <a href="#contact"  className="hover:text-red-700">Contact</a>
          <a href="#hero"  className="hover:text-red-700">Hero</a>
      </ul>
      </div>
     
     </nav>
     </header>
    )
  }
  
  export default Navbar