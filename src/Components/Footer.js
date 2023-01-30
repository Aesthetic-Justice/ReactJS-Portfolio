const Footer = () => {
  return (
    <footer className="footer" style={{position:"fixed",bottom: 0, right:0,width:"100rem"}}>
      <div className="has-text-centered">
        <h4>
          This portfolio was created under the <a href="https://opensource.org/licenses/MIT">MIT License</a>. Please refer to the official online resource for further detail.
        </h4>
        <img src="https://img.shields.io/badge/license-MIT-success"/>
      </div>
    </footer>
  );
};

export default Footer;