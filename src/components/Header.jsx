import { FaConnectdevelop } from "react-icons/fa";

import "../styles/header.sass";
import profile from "../assets/profile.jpeg";

export function Header() {
  return (
    <header>
      <div className="app-title">
        <h1>Dev Profile</h1>
        <FaConnectdevelop size={30} />
      </div>
      <div className="user-info">
        <img src={profile} alt="profile image" />
        <div>
          <h1>Herlon Costa</h1>
          <p>Web Developer</p>
        </div>
      </div>
    </header>
  );
}
