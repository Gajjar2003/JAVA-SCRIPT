import React from "react";

function Navbar() {
  return (
    <div className="sticky top-0 flex justify-between items-center bg-blue-900 px-20 py-5 text-white ">
      <h1 className="text-2xl font-bold hover:text-yellow-400">MyProfile</h1>

      <nav>
        <ul className="flex gap-8 text-lg">
          <li><a href="about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#project" className="hover:text-yellow-400">Project</a></li>
          <li><a href="#" className="hover:text-yellow-400">Work</a></li>
          <li><a href="#" className="hover:text-yellow-400">Education</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;