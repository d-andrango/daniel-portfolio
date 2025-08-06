import Button from "../../ui/Button/Button"
import Container from "../../ui/Container/Container"
import { DownloadIcon } from "../Icons/index"
import "./Hero.scss"

export default function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "https://www.d-andrango.com/cv/Daniel-Andrango-CV-2025.pdf"
    link.download = "Daniel-Andrango-CV-2025.pdf"
    link.target = "_blank"
    link.click()
  }

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="hero" id="home">
      <Container>
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__badge">
              <span>👋 Disponible para nuevos proyectos</span>
            </div>
            <h1 className="hero__title">
              Hola, soy <span className="gradient-text">Daniel Andrango</span>
            </h1>
            <h2 className="hero__subtitle">Desarrollador Frontend</h2>
            <p className="hero__description">
              Especializado en crear experiencias web excepcionales con React, TypeScript y tecnologías modernas.
            </p>

            <div className="hero__actions">
              <Button size="lg" onClick={handleDownloadCV}>
                <DownloadIcon size={20} />
                <span>Descargar CV</span>
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToProjects}>
                Ver Proyectos
              </Button>
            </div>
          </div>
          <div className="hero__image">
            <div className="hero__image-container">
              <img
                src="./img/profile.png"
                alt="Alex Rodríguez - Frontend Developer"
                className="hero__profile-image"
              />
              <div className="hero__image-decoration"></div>
              <div className="hero__image-glow"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
