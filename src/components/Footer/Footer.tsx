import Container from "../../ui/Container/Container"
import { GithubIcon, LinkedinIcon, MailIcon } from "../Icons/index"
import { FaWhatsapp } from "react-icons/fa"
import "./Footer.scss"

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer__info">
            <h3>Daniel Andrango</h3>
            <p>Desarrollador Frontend</p>
            <p>+34 678 143 534</p>
            <p>daniel@d-andrango.com</p>


          </div>
          <div className="footer__links">
            <a href="#" className="footer__link" target="blank" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/d-andrango/" target="blank" className="footer__link" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a
              href="https://wa.link/oz69j3"
              className="footer__link footer__link--whatsapp"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={20} />
            </a>
            <a href="mailto:daniel@d-andrango.com" className="footer__link" aria-label="Email">
              <MailIcon size={20} />
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2025 Daniel Andrango. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  )
}
