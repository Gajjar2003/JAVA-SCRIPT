import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* About Us */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>

            <p className="text-gray-600 leading-8 text-lg">
              Welcome to my portfolio website. I am a passionate Full Stack
              Developer who enjoys building modern, responsive, and
              user-friendly web applications. I continuously improve my skills
              in HTML, CSS, JavaScript, React, Tailwind CSS, Python, Django, and
              MySQL.
            </p>

            <p className="text-gray-600 leading-8 mt-4 text-lg">
              If you have any questions, project ideas, or job opportunities,
              feel free to contact me using the form. I will get back to you as
              soon as possible.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Contact Form
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
