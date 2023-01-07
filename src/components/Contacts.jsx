import { ImWhatsapp, ImGithub } from "react-icons/im";
import { SiInstagram, SiLinkedin } from "react-icons/si";

import "../styles/contact.sass";

export function Contact() {
  return (
    <section className="section-contact">
      <div>
        <h2>Contact me</h2>
      </div>
      <div className="contact-group">
        <div>
          <a href="https://wa.me/5571983012996">
            <ImWhatsapp size={40} fill="#32BD33" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/herloncosta_/">
            <SiInstagram size={40} fill="#E4054A" />
          </a>
        </div>
        <div>
          <a href="https://github.com/herloncosta">
            <ImGithub size={40} fill="#aaa" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/herloncosta/">
            <SiLinkedin size={40} fill="#0A66C2" />
          </a>
        </div>
      </div>
    </section>
  );
}