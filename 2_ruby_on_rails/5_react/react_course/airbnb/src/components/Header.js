
import exp1 from '../images/experiences/exp-1.webp';
import exp2 from '../images/experiences/exp-2.webp';
import exp3 from '../images/experiences/exp-3.webp';
import exp4 from '../images/experiences/exp-4.webp';
import exp5 from '../images/experiences/exp-5.jpg';
import exp6 from '../images/experiences/exp-6.webp';
import exp7 from '../images/experiences/exp-7.webp';
import exp8 from '../images/experiences/exp-8.webp';
import exp9 from '../images/experiences/exp-9.webp';

import './Header.css';

function Header() {
  return (
    <header className="Header">
      <div className='image-container'>
        <div className="image-column image-column-1">
          <img src={exp1} className="image-card" alt="1"></img>
        </div>
        <div className='image-column image-column-2'>
          <img src={exp2} className="image-card" alt="1"></img>
          <img src={exp3} className="image-card" alt="1"></img>
        </div>
        <div className='image-column image-column-3'>
          <img src={exp4} className="image-card" alt="1"></img>
          <img src={exp5} className="image-card" alt="1"></img>

        </div>
        <div className='image-column image-column-4'>
          <img src={exp6} className="image-card" alt="1"></img>
          <img src={exp7} className="image-card" alt="1"></img>

        </div>
        <div className='image-column image-column-5'>
          <img src={exp8} className="image-card" alt="1"></img>
          <img src={exp9} className="image-card" alt="1"></img>
        </div>
      </div>
      <div className="header-text">
        <h2>Online Experiences</h2>
        <p>Join unique interactive activites led
          one-of-aking hosts--all without leaving
          home.
        </p>
      </div>
    </header >
  );
}

export default Header;
