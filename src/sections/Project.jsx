import React from "react";
import TaskTracker from "../assets/TaskTracker.png";
import resertpassword from "../assets/resertpasword.png";

const Project = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white-400">Projects</h1>
        <p className="text-gray-300 mt-4">
          A collection of my projects showcasing various skills and implementations.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white-400 mb-4">
            Task Tracker
          </h2>
          <img
            src={TaskTracker}
            alt="Task Tracker"
            className="rounded-lg shadow-lg w-full max-w-md mx-auto hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="text-center font-fa-2xl">
          <h2 className="text-3xl font-bold text-white-400 mb-4">
            Reset Password
          </h2>
          <img
            src={resertpassword}
            alt="Reset Password"
            className="rounded-lg shadow-lg w-full max-w-md mx-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
