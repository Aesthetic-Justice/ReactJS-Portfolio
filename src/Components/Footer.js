import {FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer" style={{width:"100vw",height:"5vw"}}>
      <div className="has-text-centered">
        <h4>
          This portfolio was created under the <a href="https://opensource.org/licenses/MIT">MIT License</a>. Please refer to the official online resource for further detail.
        </h4>
        <img src="https://img.shields.io/badge/license-MIT-success" alt=""/>
      </div>
      <div className='has-text-centered'>
        <a href='https://github.com/Aesthetic-Justice'> <FaGithub /></a>
        <a href='https://www.linkedin.com/in/hakim-yussuf-488231243/'> <FaLinkedin /> </a>
        <a href='https://www.instagram.com/justice_4tography/'> <FaInstagram /> </a>
      </div>
    </footer>
  );
};

export default Footer;