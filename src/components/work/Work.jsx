import React from 'react'
import "./work.css"


const Work = () => {
  return (
  <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      span.project__subtitle

      <div className="projects-container">
        <div className="project-card">
          <div className="project-image"></div>
          <h3 className="project-title">MFB-Consultants</h3>
          <p className="project-description">
       A consultancy website providing expert business, financial, and advisory services.
          </p>
          <div className="tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
          <div className="project-buttons">
            
           <button 
  className="btn" 
  onClick={() => window.open('https://www.mfb-consultants.com/', '_blank')}
>
  Demo
</button>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image"></div>
          <h3 className="project-title">Tic Tac Toe Game</h3>
          <p className="project-description">
            An interactive tic-tac-toe game built with web technologies and smooth animations.
          </p>
          <div className="tags">
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>React</span>
          </div>
          <div className="project-buttons">
            
              <button 
  className="btn" 
  onClick={() => window.open('', '_blank')}
>
  Demo
</button>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image"></div>
          <h3 className="project-title">Flutter E-commerce App</h3>
          <p className="project-description">
            A mobile app with authentication, product catalog, and shopping cart integration.
          </p>
          <div className="tags">
            <span>Flutter</span>
            <span>Dart</span>
            <span>Firebase</span>
          </div>
          <div className="project-buttons">
            
              <button 
  className="btn" 
  onClick={() => window.open('', '_blank')}
>
  Demo
</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Work;
