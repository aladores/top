import './Info.css';
import emailIcon from '../images/email-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';

import profilePicture from '../images/Milo2.png';
function Info() {
  return (
    <div className="Info">
      <img src={profilePicture} className="profile-picture" alt="Profile" />
      <h1 className="header-name">Milo Ladores</h1>
      <p>Frontend Developer</p>
      <a href="#" className="website-link">miloladores.website</a>
      <div className='button-row'>

        <button className='email-button'>
          <img src={emailIcon} className="email-icon" alt="email" />
          <p>Email</p>
        </button>

        <button className='linkedin-button'>
          <img src={linkedinIcon} className="linkedin-icon" alt="linedin" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Info;