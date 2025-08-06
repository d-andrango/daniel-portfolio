import Container from "../../ui/Container/Container"
import SectionHeader from "../../ui/SectionHeader/SectionHeader"
import { MapPinIcon, CalendarIcon, MailIcon, PhoneIcon } from "../Icons/index"
import "./About.scss"

export default function About() {
  return (
    <section className="about" id="about">
      <Container>
        <SectionHeader
          title="Sobre mí"
          subtitle=""
        />
        <div className="about__content">
          <div className="about__main">
            <div className="about__text">
              <div className="about__intro">
                <p className="about__intro-text">
                  Desarrollador Frontend con experiencia en React, TypeScript y diseño de interfaces web. Especializado en la creación de
                  componentes reutilizables, testables y escalables. Experiencia práctica en entornos DevOps, automatización con GitLab CI/CD,
                  despliegues con Docker y gestión de infraestructura ligera en Linux. Experiencia en entornos ágiles (Scrum/Kanban).
                </p>
              </div>

              <div className="about__details">
                <p>
                  Fuera del horario laboral, me apasiona seguir aprendiendo y explorando nuevas tecnologías. Dedico parte de mi tiempo libre al desarrollo
                  de proyectos personales, como una aplicación de mis rutinas de gimnasio o una aplicación para la gestión de mi equipo de fútbol 7. Creo firmemente que la curiosidad
                  y la práctica constante son claves para crecer como profesional.  </p>

              </div>
            </div>

          </div>

          <div className="about__info-grid">
            <div className="about__info-card">
              <div className="about__info-icon">
                <MapPinIcon size={24} />
              </div>
              <div className="about__info-content">
                <h4>Ubicación</h4>
                <span>Madrid, España</span>
              </div>
            </div>

            <div className="about__info-card">
              <div className="about__info-icon">
                <CalendarIcon size={24} />
              </div>
              <div className="about__info-content">
                <h4>Experiencia</h4>
                <span>3+ años desarrollando</span>
              </div>
            </div>

            <div className="about__info-card">
              <div className="about__info-icon">
                <MailIcon size={24} />
              </div>
              <div className="about__info-content">
                <h4>Email</h4>
                <span>daniel@d-andrango.com</span>
              </div>
            </div>

            <div className="about__info-card">
              <div className="about__info-icon">
                <PhoneIcon size={24} />
              </div>
              <div className="about__info-content">
                <h4>Teléfono</h4>
                <span>+34 678 143 534</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
