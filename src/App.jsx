import './App.css'

function App() {
  return (
    <div className="resume">
      <header className="header">
        <h1>DANTHALAGARI AKASH YADAV</h1>
        <div className="contact-info">
          <div><strong>Mobile:</strong> +91 9581611740</div>
          <div><strong>Email:</strong> akashyadav21377@gmail.com</div>
          <div><strong>HackerRank:</strong> <a href="https://www.hackerrank.com/profile/akashyadav21377" target="_blank" rel="noopener noreferrer">Profile</a></div>
          <div><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/danthalagari-akash-yadav-884b1525b" target="_blank" rel="noopener noreferrer">Profile</a></div>
          <div><strong>Address:</strong> Karivena, Nandyal, Andhra Pradesh, India</div>
        </div>
      </header>

      <section className="section">
        <h2>CAREER OBJECTIVES</h2>
        <p>To share my skills, talents, and potential with as many as possible and contribute to the fullest development of the organization with the most sincerity, dedication, and commitment.</p>
      </section>

      <section className="section">
        <h2>ACADEMIC QUALIFICATION</h2>
        <table className="qualification-table">
          <thead>
            <tr>
              <th>Degree/Certificate</th>
              <th>Year of Passing</th>
              <th>Institute</th>
              <th>Board/University</th>
              <th>Percentage/Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B.Tech (Computer Science Engineering)</td>
              <td>2025</td>
              <td>G.Pullaiah College of Engineering and Technology</td>
              <td>Jawaharlal Nehru Technological University (Anantapur)</td>
              <td>83%</td>
            </tr>
            <tr>
              <td>Intermediate (MPC)</td>
              <td>2021</td>
              <td>Government Junior College</td>
              <td>Board of Intermediate Education, AP</td>
              <td>93%</td>
            </tr>
            <tr>
              <td>SSC</td>
              <td>2019</td>
              <td>Maria English Medium High School</td>
              <td>Board of Secondary Education, AP</td>
              <td>83%</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2>SKILLS</h2>
        <div className="skills">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <p>Basics of Python, Java, SQL</p>
          </div>
          <div className="skill-category">
            <h3>Frontend Technologies</h3>
            <p>HTML, CSS, JavaScript, React.js</p>
          </div>
          <div className="skill-category">
            <h3>Backend & Microservices</h3>
            <p>Spring Boot, Microservices Architecture, API Gateway, Eureka Server</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>PROJECTS</h2>
        <div className="projects">
          <div className="project">
            <h3>Digital Banking System</h3>
            <p>Developed a comprehensive digital banking application using React.js for frontend and Java Spring Boot for backend</p>
          </div>
          <div className="project">
            <h3>Hostel Management App</h3>
            <p>Developed a mobile application using Mobile Application Development</p>
          </div>
          <div className="project">
            <h3>Movie Recommendation</h3>
            <p>Developed a website using HTML, CSS, JavaScript</p>
          </div>
          <div className="project">
            <h3>Race-Share</h3>
            <p>Developed a website using HTML, CSS, JavaScript</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>INTERNSHIPS</h2>
        <div className="internships">
          <div className="internship">
            <h3>Oasis</h3>
            <p>Successfully completed a two-month internship at Oasis, where I gained hands-on experience in web technologies</p>
          </div>
          <div className="internship">
            <h3>Cognifyz</h3>
            <p>Successfully completed a three-month internship at Cognifyz, where I gained practical experience in Web Development</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>WORKSHOPS</h2>
        <ul>
          <li>AI Tools & ChatGPT</li>
          <li>Top 10x Powerful AI Tools</li>
        </ul>
      </section>

      <section className="section">
        <h2>CERTIFICATIONS</h2>
        <ul>
          <li>Certification of Completion of Python Programming</li>
          <li>Certification of Completion of Java</li>
          <li>Certification of Completion of Artificial Intelligence</li>
        </ul>
      </section>

      <section className="section">
        <h2>INTERESTS</h2>
        <ul>
          <li>Improving Knowledge in my Subjects</li>
          <li>Learning about New Technologies related to AI Tools</li>
          <li>Actively Working as a Volunteer</li>
        </ul>
      </section>

      <section className="section declaration">
        <h2>DECLARATION</h2>
        <p>I hereby declare that the above-mentioned particulars are true and correct to the best of my knowledge and belief, and if given an opportunity, I promise to give the best abilities of myself.</p>
        <p className="signature">Danthalagari Akash Yadav</p>
      </section>
    </div>
  )
}

export default App
