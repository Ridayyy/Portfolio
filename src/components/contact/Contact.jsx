import React from 'react'
import send from '../../assets/send.svg';
import "./contact.css";

const Contact = () => {
  return (
     <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch
        </h2>
        <span className="section__subtitle">Contact Me</span>
     
     <div className="contact__container container grid">
        
        <div className="contact__content">
            <h3 className="contact__title">Talk to me</h3>

            <div className="contact__card">
                <i className="uil uil-envelope contact__card-icon contact__card-icon"></i>
                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">ridayy2002@gmail.com</span>

                <a href="mailto:ridayy2002@gmail.com" className="contact__button">
    Write me {" "} <i className="uil uil-arrow-right contact__button-icon contact__button-icon"></i></a>
            </div>

           
                 <div className="contact__card">
                <i className="uil uil-whatsapp contact__card-icon contact__card-icon"></i>
                <h3 className="contact__card-title">Whatsapp</h3>
                <span className="contact__card-data">0331-4847963</span>

                <a href="https://api.whatsapp.com/send?phone=923314847963&text=Hello, more information!"  className="contact__button">
    Write me {" "} <i className="uil uil-arrow-right contact__button-icon contact__button-icon"></i></a>
            </div>
           
        </div>


        <div className="contact__content">
            <h3 className="contact__title">Write me your project</h3>
            <form action="" className="contact__form">
                <div className="contact__form-div">
                    <label htmlFor="" className="contact__form-tag">Name</label>
                    <input type="text" name="name" className='contact__form-input' placeholder='Insert your name' />
                </div>

                 <div className="contact__form-div">
                    <label htmlFor="" className="contact__form-tag">Mail</label>
                    <input type="email" name="email" className='contact__form-input' placeholder='Insert your email' />
                </div>

                 <div className="contact__form-div contact__form-area">
                    <label htmlFor="" className="contact__form-tag contact__form-area">Project</label>
                    <textarea name="project" cols="30" rows="10" className='contact__form-input'placeholder='Write your project' ></textarea>
                </div>

                <button href="#contact" className="button button--flex">
  Send Message <img src={send} alt="Send" />
</button>
            </form>
        </div>

     </div>
     
     </section>
  );
};

export default Contact
