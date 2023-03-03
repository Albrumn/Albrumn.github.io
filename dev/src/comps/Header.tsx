import headerImage from "../img/cory_128.png";

export default function Header() {
  return (
    <div className="header">
        <img className="header-img" src={headerImage} />
        <div className="header-text-section">
            <h1>Cory der Große</h1>
            <h3>Web Developer & Language Learner</h3>
            <p>Nat 🇺🇸 / B2 🇩🇪 / A1 🇻🇦 🇯🇵</p>
        </div>
    </div>
  );
}