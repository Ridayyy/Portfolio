import React from 'react'
import hand from '../../assets/hand.svg';
import send from '../../assets/send.svg';

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">Rida Aslam <img src={hand} alt="Hand" />
 </h1>
 <h3 className="home__subtitle">Frontend Developer</h3>
 <p className="home__description">I'm very passionate and dedicated to my work.
</p>
<a href="#contact" className="button button--flex">
  Say Hello <img src={send} alt="Send" />
</a>

    </div>
  )
}

export default Data
