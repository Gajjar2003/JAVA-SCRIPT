import React from "react";

function Project() {
  return (
    <div>
      <div id="project" className="m-10">
        <h2 className="text-3xl text-blue-400 text-center font-extrabold m-10 hover:text-blue-700">
          My Project
        </h2>
        <div className="row border-b-4 border-blue-600 bg-gray-100 p-20">
          <div className="title">
            <h3 className="text-2xl text-blue-600 underline underline-offset-3 ">
              Food-Mart
            </h3>
            <h4 className="text-xl text-blue-400  ">
              {" "}
              Front:Html-Css-Javascript
            </h4>
            <h4 className="text-xl text-blue-400  ">Backend:Python</h4>
            <p className="text-gray-500">
              At Food Mart, customer satisfaction is our top priority. We
              carefully select high-quality products to ensure freshness,
              hygiene, and great value. Whether you're shopping for your daily
              needs or special occasions, we strive to make your shopping
              experience simple, convenient, and enjoyable.
            </p>
            <p>
              <h5>•Technologies: Python, Django, HTML, CSS, JavaScript, AJAX,SQLite</h5>
              <h5> •Developed a full-stack E-commerce web application using Djangoframework.</h5>
              <h5>•Implemented user authentication (signup/login/logout).</h5>
              <h5>•Designed product listing and category management system.</h5>
              <h5>•Implemented Add-to-Cart functionality using AJAX. </h5>
              <h5>•Integrated payment gateway for order processing.</h5>
              <h5>•Implemented order confirmation via email. •Built admin panelfor product and order management</h5>
              <h5>Project-Link: <a href="https://github.com/Gajjar2003/PYTHON-CLASS/tree/master/Python_project/Food-Mart%20Project" target="_blank" rel="noopener noreferrer">Food-Mart Project</a></h5>
              
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Project;
