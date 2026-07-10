import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              Jenil Gajjar
            </h2>
            <p className="text-gray-400 mt-2">
              Full Stack Developer | React | Python | Django
            </p>
          </div>

        
          <div>
            <ul className="flex gap-6">
              <li>
                <a href="#home" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="text-center md:text-right">
            <p>Email: jenil@example.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Surat, Gujarat</p>
          </div>

        </div>

        <hr className="my-6 border-gray-700" />

        <p className="text-center text-gray-400">
          © 2026 Jenil Gajjar. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;