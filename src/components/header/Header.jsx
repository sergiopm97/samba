import GitHub from "./Github";
import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="header-container">
        <a className="header-container--logo" href="https://github.com/sergiopm97/samba" target={"_blank"}>
          Samba
        </a>
        <a className="header-container__github" href="https://github.com/sergiopm97" target={"_blank"}>
          <GitHub />
        </a>
      </div>
    </header>
  );
}

export default Header;
