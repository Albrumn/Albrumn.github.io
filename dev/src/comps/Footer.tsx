import logo from "../img/psittacusEbrius_logo.png";

export default function Footer() {
  return (
        <footer>
          <div className="footer-header">
            <div className="hr"></div>
            <p>Thanks for stopping by, and as always...</p>
            <div className="hr"></div>
          </div>
          <div className="footer-sizzle">
            <img src={logo} />
            <p>Psittacus Ebrius!!</p>
            <img src={logo} />
          </div>
        </footer>
  );
}