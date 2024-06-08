import React from 'react';
import "./About.css";
import aboutImg from "../../images/books.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Books</h2><hr /><hr />
            <p className='fs-17 text-center' >La lectura nos permite acceder a una amplia gama de conocimientos y perspectivas. Esto es especialmente cierto en el caso de la filosofía, donde la lectura puede abrirnos a nuevas formas de pensar y ver el mundo.</p>
            <p className='fs-17 text-center'>La lectura nos invita a reflexionar sobre lo que leemos, lo que puede llevar a un mayor autoconocimiento. Al ser conscientes de las emociones que surgen con la lectura, tendemos a reflexionar o al menos a intentar identificar qué fue lo que las provocó.</p>
            <p className='fs-17 text-center'>Algunos textos nos muestran realidades diferentes a las nuestras, lo que puede fomentar la empatía y la comprensión social. La lectura puede ayudarnos a entender mejor las experiencias de otras personas y a reflexionar sobre cuestiones sociales y éticas.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About