import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Rida</h1>
     
      <ul className="footer__list">
        <li>
          <a href="#about" className="footer__link">About</a>
        </li>

        <li>
          <a href="#work" className="footer__link">Projects</a>
        </li>
        <li>
          <a href="#contact" className="footer__link">Contact</a>
        </li>

        <li>
          <a href="" className="footer__link"></a>
        </li>
      </ul>
     
     <div className="footer__social">
           <a href="https://www.instagram.com/" className="home__social-icon" target='_blank'>
        <i class='uil uil-instagram'></i>
     </a>
   
     <a href="mailto:ridayy2002@gmail.com" className="home__social-icon" target='_blank'>
         <i class='uil uil-envelope'></i>
     </a>

     <a href="https://github.com/" className="home__social-icon" target='_blank'>
         <i class='uil uil-github-alt'></i>
     </a>
     </div>
     <span className="footer__copy">&#169; Rida Aslam. All rights reserved</span>
      </div>

    </footer>
  )
}

export default Footer