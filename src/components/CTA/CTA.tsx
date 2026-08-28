import Container from "../../ui/Container/Container"
import { LinkedinIcon, MailIcon, MapPinIcon } from "../Icons/index"
import "./CTA.scss"

export default function CTA() {

  return (
    <section className="cta" id="contact">
      <Container className="section-gutter">
        <div className="cta__content">
          <div className="cta__intro">
            <h2 className="cta__title">¿Tienes un proyecto en mente?</h2>
            <p className="cta__description">
              Estoy disponible para colaborar en proyectos emocionantes y ayudar a construir experiencias digitales increibles.
            </p>
          </div>
          <div className="cta__cards">
            <a className="cta__card" href="mailto:daniel@d-andrango.com">
              <MailIcon size={20} />
              <span>
                <strong>Email</strong>
                daniel@d-andrango.com
              </span>
            </a>
            <div className="cta__card">
              <MapPinIcon size={20} />
              <span>
                <strong>Ubicacion</strong>
                Madrid, Espana
              </span>
            </div>
            <a className="cta__card" href="https://www.linkedin.com/in/d-andrango/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={20} />
              <span>
                <strong>LinkedIn</strong>
                /in/d-andrango
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
