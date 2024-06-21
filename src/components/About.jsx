import React from "react";

function About() {
  return (
    <div
      name="About"
      className="container px-4 mx-auto my-20 max-w-screen-2xl md:px-20"
    >
      <div>
        <h1 className="mb-5 text-3xl font-bold">About</h1>
        <p>
          Hello, I'm Umesh, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />

        <br />
        <h1 className="text-xl font-semibold text-green-600">
          Skills & Expertise
        </h1>
        <span>
          <ul>
            <li>Front-End: HTML, CSS, JavaScript, React.js</li>
            <li>Back-End: Node.js</li>
            <li>rogramming Languages: Java,JavaScript</li>
            <li>Database Management: MongoDB (implied in MERN stack)</li>
          </ul>
        </span>
        <br />
        <br />
        <h1 className="text-xl font-semibold text-green-600">
          Professional Experience
        </h1>

        <br />
        <h1 className="text-xl font-semibold text-green-600">
          Achievements & Awards
        </h1>
        <span>
          [Award/Recognition], [Organization/Institution], [Year] [Achievement],
          [Organization/Platform], [Year]
        </span>
        <br />
        <br />
        <h1 className="text-xl font-semibold text-green-600">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative [Your Field] solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
