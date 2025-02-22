const ContactMe = () => {
  return (
    <div id="contact"className="container mx-auto mt-10 px-6 flex flex-col lg:flex-row gap-10   justify-center items-center bg-gray-100 rounded-lg">
      <section className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6  ">
       
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-6  hover:text-red-700 " > Contact Me</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-600 font-medium mb-1">Your Name</label>
            <input type="text" id="name" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400" placeholder="Enter your name" required/>
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium mb-1" >Your Email</label>
            <input type="email" id="email" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" required/>
          </div>

          <div>
            <label  htmlFor="message" className="block text-gray-600 font-medium mb-1" >Your Message </label>
            <textarea id="message"className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"rows="5" placeholder="Write your message here..." required
            ></textarea>
          </div>
       
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" >Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactMe;


