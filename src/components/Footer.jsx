import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-shiny-text">
        Please Support us by Donating all yours and your family's wealth to PM Care Fund
      </h2>
      <div className="footer-content">
        <div className="footer-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
            <FaGithub size={32} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
            <FaLinkedin size={32} />
          </a>
        </div>
        <div className="footer-right">
          <h3 className="footer-disclaimer-label">Disclaimer</h3>
          <p className="footer-disclaimer">
            We don't own all the movies you see here this website is just made to increase your FOMO about the millions of masterpieces you will never see
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
