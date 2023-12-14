import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="company__logo__wrapper">
        <img src="https://img.logoipsum.com/331.svg" alt="logo" />
        <h4>Company Name</h4>
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <div className="footer__link">
        <a href="/">Lorem</a>
        <a href="/">Lorem ipsum</a>
        <a href="/">Lorem dolor</a>
      </div>
    </div>
  );
};

export default Footer;