import { GiComputing } from "react-icons/gi";

import "../styles/header.sass";
import profile from "../assets/profile.jpeg";

export function Header() {
  return (
    <header>
      <div className="app-title">
        <h1>{"<DevProfile/>"}</h1>
      </div>
      <div className="user-info">
        <div className="profile">
          <img src={profile} alt="profile image" />
          <div className="border"></div>
        </div>
        <div>
          <h1 className="user-name">Herlon Costa</h1>
          <p className="user-description">Web Developer</p>
        </div>
      </div>
    </header>
  );
}
