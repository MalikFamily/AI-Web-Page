import React from 'react';
import './App.css'; // CSS file for styling

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main>
        {/* About Section */}
        <section id="about">
          <h2>About Me</h2>
          <p>
            I'm an entrepreneur with a diverse background, starting my journey at a young age in India and later venturing into various businesses in Australia.
          </p>
          {/* Include more about yourself if needed */}
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2>Experience</h2>
          <ul>
            <li>
              <h3>Tap N Go Solutions (2019 - Present)</h3>
              <p>Founder</p>
              {/* Add more details if needed */}
            </li>
            <li>
              <h3>Car Wash Developers (2021 - Present)</h3>
              <p>Co-Founder</p>
              {/* Add more details if needed */}
            </li>
            {/* Include your other work experiences */}
          </ul>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2>Skills</h2>
          <p>
            I have a strong understanding of computer skills, including basic to intermediate use of AutoCAD, Solidworks, Adobe XD, Figma, Adobe AE & Premier Pro.
          </p>
          <p>
            I also have an interest in computers, hardware, and coding.
          </p>
          {/* Add more skills if needed */}
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2>Contact Me</h2>
          <p>Email: your.email@example.com</p>
          <p>Phone: +1234567890</p>
          {/* Add more contact details if needed */}
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>Copyright © {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
}

export default App;
