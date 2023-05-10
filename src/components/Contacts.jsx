import { ImWhatsapp, ImGithub } from 'react-icons/im'
import { SiInstagram, SiLinkedin } from 'react-icons/si'

import '../styles/contact.sass'

export function Contact() {
    return (
        <section className="section-contact">
            <div>
                <h2>Contacts</h2>
            </div>
            <div className="contact-group">
                <div>
                    <a href="https://wa.me/5571983012996" target="_blank">
                        <ImWhatsapp size={36} className="whatsapp" />
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.instagram.com/herloncosta_/"
                        target="_blank"
                    >
                        <SiInstagram size={36} className="instagram" />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/herloncosta" target="_blank">
                        <ImGithub size={36} className="github" />
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.linkedin.com/in/herloncosta/"
                        target="_blank"
                    >
                        <SiLinkedin size={36} className="linkedin" />
                    </a>
                </div>
            </div>
        </section>
    )
}
