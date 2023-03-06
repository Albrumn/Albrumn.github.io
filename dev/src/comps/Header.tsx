import headerImage from "../img/cory_128.png";

export default function Header() {
  return (
    <header>
        <img className="header-img" src={headerImage} />
        <div className="header-text-section">
            <h1>Cory der Große</h1>
            <p className="header-subtitle">Web Developer & Language Learner</p>
            <div className="hr"></div>
            <p className="header-text">Nat 🇺🇸 / B2 🇩🇪 / A1 🇻🇦 🇯🇵</p>
        </div>
    </header>
  );
}