import "./App.css";
import profilePic from "./assets/image.jpeg";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export default function App() {
  return (
    <div className="page-wrapper">
      <div className="page-inner">
        <header className="page-header">
          <div className="header-text">
            <h1 className="page-title">Aaryan Raorane</h1>
            <p className="page-subtitle">
              B.Tech AI & Data Science student at DJSCE Mumbai
            </p>
          </div>
          <img
            src={profilePic}
            alt="Aaryan profile"
            className="profile-image"
          />
        </header>

        <main className="section">
          <section id="about" className="section-block">
            <h2 className="section-heading">About me</h2>
            <div className="card">
              <p className="paragraph">
                I focus on building intelligent, user-centric applications with
                strong interfaces, leveraging AI-assisted development while
                solving complex problems using Python and Java. My primary goal
                is to develop expertise in AI engineering and AI security,
                enabling me to design, secure, and optimize intelligent systems.
              </p>
            </div>
          </section>

          <section id="projects" className="section-block">
            <h2 className="section-heading">Projects</h2>
            <div className="grid-2">
              <div className="card">
                <h3 className="card-title">NexusChat</h3>
                <p className="card-text">
                  A real-time messaging app built with WebSockets and React.
                </p>
                <a
                  className="card-link"
                  href="https://github.com/WisdomKingAR/NexusChat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="card">
                <h3 className="card-title">FlowState</h3>
                <p className="card-text">
                  A focus-first productivity workspace built with React.
                </p>
                <a
                  className="card-link"
                  href="https://github.com/WisdomKingAR/FlowState"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="card span-full">
                <h3 className="card-title">CryoNex</h3>
                <p className="card-text">
                  A cold-chain logistics platform created for Cyber Cypher 5.0.
                </p>
                <a
                  className="card-link"
                  href="https://github.com/WisdomKingAR/CryoNex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </section>

          <section id="achievements" className="section-block">
            <h2 className="section-heading">Achievements</h2>
            <div className="achievement-grid">
              <div className="achievement-card center-text">
                <p className="text-small">DevHub Code Quest</p>
                <p className="achievement-result">2nd place</p>
              </div>
              <div className="achievement-card center-text">
                <p className="text-small">Cyber Cypher 5.0</p>
                <p className="achievement-result">Finalist</p>
              </div>
            </div>
          </section>

          <section id="skills" className="section-block">
            <h2 className="section-heading">Skills</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <h3 className="skill-title">Languages</h3>
                <p className="skill-text">Python, Java, C</p>
              </div>
              <div className="skill-card">
                <h3 className="skill-title">Tools</h3>
                <p className="skill-text">
                  React, Tailwind CSS, FastAPI, MongoDB
                </p>
              </div>
            </div>
          </section>

          <section id="contact" className="section-block">
            <h2 className="section-heading">Contact</h2>
            <p className="contact-note">
              Want to work together or see more of my projects? Reach out by
              email or connect on LinkedIn and GitHub.
            </p>
            <div className="contact-grid">
              <a
                className="contact-card"
                href="mailto:aaryanraorane.2007@gmail.com"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <IconMail size={20} />
                  <div>
                    <p className="contact-label">EMAIL</p>
                    <p className="contact-value">
                      aaryanraorane.2007@gmail.com
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="contact-card"
                href="https://linkedin.com/in/aaryanraorane"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <IconBrandLinkedin size={20} />
                  <div>
                    <p className="contact-label">LINKEDIN</p>
                    <p className="contact-value">
                      linkedin.com/in/aaryanraorane
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="contact-card"
                href="https://github.com/WisdomKingAR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <IconBrandGithub size={20} />
                  <div>
                    <p className="contact-label">GITHUB</p>
                    <p className="contact-value">github.com/WisdomKingAR</p>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Aaryan Raorane</p>
          <p className="footer-note">Built with React + Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}
