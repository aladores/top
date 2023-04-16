import facebookIcon from '../images/facebook-icon.png';
import twitterIcon from '../images/twitter-icon.png';
import './Footer.css';
function Footer() {
  return (
    <footer className='Footer'>
      <a href=""><img src={facebookIcon} className="social-links" alt="facebook"></img></a>
      <a href=""><img src={twitterIcon} className="social-links" alt="twitter"></img></a>

    </footer>
  );
}

export default Footer;