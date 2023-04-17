
import logo from '../images/airbnb-logo.png';
import './Nav.css';

function Nav() {
  return (
    <nav className="Nav-container">
      <div className="Nav">
        <a href="#" className='logo-link' >
          <img src={logo} className='logo' alt="airbnb"></img>
          <h1 className="logo-text">airbnb</h1>
        </a>
      </div >
    </nav >
  );
}

export default Nav;
