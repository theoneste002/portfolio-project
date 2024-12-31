const AboutMe = () => {
  return (
    <main
      id="about"
      className="p-5 -mb-15 bg-gray-100 rounded-lg max-w-2xl mx-auto text-center shadow-md mt-8"
    >
      <div className="space-y-6 flex flex-col justify-center items-center h-full bg-white px-6 py-8 relative ">
        <h1 className="font-extrabold text-4xl text-blue-800">About Me</h1>
        <h2 className="text-xl font-semibold">Hello, my name is Theoneste.</h2>
        <p className="text-gray-700">
          I'm a passionate and dedicated developer specializing in creating
          modern, responsive, and user-friendly web applications. My skill set
          includes:
        </p>
        <p className="text-justify text-gray-600">
          I'm a developer called Theoneste, currently located in the Mahama
          Refugees Camp. I'm fortunate to have the opportunity to learn and grow
          in Mahama.
        </p>
      </div>
    </main>
  );
};

export default AboutMe;
