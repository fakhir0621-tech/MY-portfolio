export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <h2>About me</h2>
        <div className="about">
          <div className="about__text">
            <p>
              I'm a MERN stack developer based in Rawalpindi, Pakistan. I build responsive React interfaces and the Node.js,
              Express and MongoDB services behind them, from REST APIs and database integration to authentication and
              role-based access.
            </p>
            <p>
              My hands-on work includes the Green Tours Planner tourism platform, where I've worked on bookings, an admin
              dashboard, an AI chatbot powered by Groq and Llama 3, weather forecasts through the OpenWeather API and 3D virtual
              tours. I've also built and deployed a paid portfolio website for a client.
            </p>
            <p>
              I can help businesses and individuals launch clear, fast websites and practical full-stack applications.
              Browse my <a href="#skills">skills</a>, see the <a href="#projects">projects</a>, or <a href="#contact">get in touch</a>.
            </p>
          </div>
          <div className="about__side">
            <div className="panel">
              <h3>Education</h3>
              <ul className="timeline">
                <li><strong>BS Computer Science</strong><span>International Islamic University Islamabad (IIUI), completed</span></li>
                <li><strong>Web Designing Diploma</strong><span>Board of Technical Education Center Islamabad, 2023</span></li>
                <li><strong>Graphic Designing Course</strong><span>Center of Excellence in Networking &amp; IT, 2022</span></li>
                <li><strong>FSc Pre-Engineering</strong><span>Cadet College Palandri AJK, 2021</span></li>
              </ul>
            </div>
            <div className="panel">
              <h3>Experience</h3>
              <ul className="timeline">
                <li><strong>Full Stack Web Developer</strong><span>Green Tours Planner, from May 2026</span></li>
                <li><strong>Web developer (client work)</strong><span>Paid portfolio website, React and Vercel</span></li>
                <li><strong>Customer service representative</strong><span>Caliber Technologies, 2022: communication and client handling</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
