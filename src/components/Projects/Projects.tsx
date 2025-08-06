import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import Container from "../../ui/Container/Container"
import SectionHeader from "../../ui/SectionHeader/SectionHeader"
import Card from "../../ui/Card/Card"
import Badge from "../../ui/Badge/Badge"
import { GithubIcon, ExternalLinkIcon } from "../Icons/index"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import "./Projects.scss"

type ProjectStatus = "desarrollo" | "completado" | "mantenimiento" | "pausado"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string 
  demo?: string  
  status: ProjectStatus
}

const projects: Project[] = [
  {
    title: "Intranet Empresa",
    description: "Dashboard para empresa constructora, gestión intergal de obras, pagos, contratos, etc.",
    image: "./img/fese-app.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    demo: "https://grupo.fesevarinnovaciones.com/",
    status: "mantenimiento",
  },
  {
    title: "Gym App",
    description: "Aplicación de gestión de rutinas de entrenamiento de gimnasio.",
    image: "./img/gym-app.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    status: "desarrollo",
  },
  {
    title: "Fut App",
    description: "Aplicación para consulta de torneos de fútbol 7 organizados por el Ayuntamiento de Madrid.",
    image: "./img/fut-app.png",
    technologies: ["React", "TypeScript", "SCSS"],
    status: "desarrollo",
  },
  {
    title: "Portfolio Personal",
    description: "Portfolio de programador frontend con información más relevante",
    image: "./img/daniel-web.png",
    technologies: ["React", "TypeScript", "SCSS"],
    demo: "https://d-andrango.com/",
    status: "completado",
  },
  {
    title: "Web Empresa",
    description: "Página de presentación de empresa constructora.",
    image: "./img/fese-web.png",
    technologies: ["Wordpress", "HTML5", "CSS5", "PHP"],
    demo: "https://fesevarinnovaciones.com/",
    status: "completado",
  },
  {
    title: "Tienda E-Commerce",
    description: "Tienda online de herramientas y vestuario laboral.",
    image: "./img/fese-store.png",
    technologies: ["HTML5", "CSS5", "Wordpress", "PHP", "MySQL"],
    demo: "https://fesevar-onlinestore.com/",
    status: "completado",
  },
]

const getStatusConfig = (status: ProjectStatus) => {
  const configs = {
    desarrollo: {
      label: "En Desarrollo",
      className: "projects__status--desarrollo",
      color: "#ef4444",    
    },
    completado: {
      label: "Completado",
      className: "projects__status--completado",
      color: "#22c55e", 
    },
    mantenimiento: {
      label: "Mantenimiento",
      className: "projects__status--mantenimiento",
      color: "#f59e0b", 
    },
    pausado: {
      label: "Pausado",
      className: "projects__status--pausado",
      color: "#6b7280",     
    },
  }
  return configs[status]
}

export default function Projects() {
  const swiperRef = useRef<SwiperType | null>(null)

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="projects" id="projects">
      <Container>
        <SectionHeader title="Proyectos Destacados" subtitle="Algunos de mis trabajos más recientes" />

        <div className="projects__slider-container">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            modules={[Navigation, Pagination, EffectCoverflow]}
            spaceBetween={30}
            centeredSlides={true}
            loop={false}
            grabCursor={true}
            pagination={{
              clickable: true,
              bulletClass: "projects__bullet",
              bulletActiveClass: "projects__bullet--active",
              el: ".projects__pagination",
            }}
            breakpoints={{
              // Mobile
              320: {
                slidesPerView: 1.2,
                spaceBetween: 0,
                effect: "coverflow",
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2,
                  slideShadows: false,
                },
              },
              // Tablet
              768: {
                slidesPerView: 2.5,
                spaceBetween: 25,
                effect: "slide",
                centeredSlides: false,
              },
              // Desktop
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                effect: "slide",
                centeredSlides: false,
              },
            }}
            className="projects__swiper"
          >
            {projects.map((project, index) => {
              const statusConfig = getStatusConfig(project.status)
              const hasLinks = project.github || project.demo

              return (
                <SwiperSlide key={index} className="projects__slide">
                  <Card className="projects__card" hover>
                    <div className="projects__image">
                      <img src={project.image || "/placeholder.svg"} alt={project.title} className="projects__img" />

                      {/* Status Badge */}
                      <div className={`projects__status ${statusConfig.className}`}>
                        <div className="projects__status-dot"></div>
                        <span className="projects__status-text">{statusConfig.label}</span>
                      </div>

                      {/* Action Buttons - Solo si hay enlaces */}
                      {hasLinks && (
                        <div className="projects__actions">
                          {project.github && (
                            <button
                              className="projects__action-btn projects__action-btn--github"
                              onClick={() => handleLinkClick(project.github!)}
                              aria-label="Ver código en GitHub"
                              title="Ver código"
                            >
                              <GithubIcon size={16} />
                            </button>
                          )}
                          {project.demo && (
                            <button
                              className="projects__action-btn projects__action-btn--demo"
                              onClick={() => handleLinkClick(project.demo!)}
                              aria-label="Ver proyecto en vivo"
                              title="Ver demo"
                            >
                              <ExternalLinkIcon size={16} />
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="card__content projects__content">
                      <h3 className="projects__title">{project.title}</h3>
                      <p className="projects__description">{project.description}</p>
                      <div className="projects__tech">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </SwiperSlide>
              )
            })}
          </Swiper>

          {/* Custom Pagination */}
          <div className="projects__pagination"></div>
        </div>
      </Container>
    </section>
  )
}
