import HeaderLogo from "../images/Troll Face.png";

export default function Header() {
    return (
        <header className="header">
            <img src={HeaderLogo} alt="troll face" className="header--logo" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--subtitle">React Course - Project 3</h4>
        </header>
    );
}
