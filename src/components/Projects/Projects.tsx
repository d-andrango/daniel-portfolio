import { useRef, useState } from "react"
import type React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import Container from "../../ui/Container/Container"
import Card from "../../ui/Card/Card"
import { ChevronLeftIcon, ChevronRightIcon } from "../Icons/index"
import {
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaGitlab,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa"
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"
import { TbComponents } from "react-icons/tb"

import "swiper/css"
import "swiper/css/navigation"
import "./Projects.scss"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string 
  demo?: string  
}

const projects: Project[] = [
  {
    title: "Intranet Empresa",
    description: "Dashboard para empresa constructora, gestión intergal de obras, pagos, contratos, etc.",
    image: "/img/projects/fese-app.png",
    technologies: ["React", "TypeScript", "SCSS", "Node.js", "MongoDB"],
    demo: "https://grupo.fesevarinnovaciones.com/",
  },
  {
    title: "Splym App",
    description: "Aplicación de gestión de rutinas de entrenamiento de gimnasio.",
    image: "/img/projects/gym-app.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    demo: "https://splym.app/",
  },
   {
    title: "Vibe 2u",
    description: "Aplicación de gestión de planos de parejas.",
    image: "/img/projects/vibe2u.png",
    technologies: ["React", "TypeScript", "SCSS", "Node.js", "MongoDB"],
    demo: "https://vibe2u.app/",
  },
  {
    title: "Mundialist App",
    description: "Aplicación para porra entre amigos del Mundial 2026 de fútbol.",
    image: "/img/projects/fut-app.png",
    technologies: ["React", "TypeScript", "SCSS", "Node.js", "MongoDB"],
    demo: "https://mundialist.app/",
  },
  {
    title: "Portfolio Personal",
    description: "Portfolio de programador frontend con información más relevante",
    image: "/img/projects/daniel-web.png",
    technologies: ["React", "TypeScript", "SCSS"],
    demo: "https://d-andrango.com/",
  },
  {
    title: "Fesevar Innovaciones",
    description: "Página de presentación de empresa constructora.",
    image: "/img/projects/fese-web.png",
    technologies: ["React", "TypeScript", "SCSS", "Node.js", "MongoDB"],
    demo: "https://fesevarinnovaciones.com/",
  },
  {
    title: "Fesevar Online Store",
    description: "Tienda online de herramientas y vestuario laboral.",
    image: "/img/projects/fese-store.png",
    technologies: ["HTML5", "CSS5", "Wordpress", "PHP", "MySQL"],
    demo: "https://fesevar-onlinestore.com/",
  },
]

const projectTechIconMap: Record<string, { icon: React.ComponentType<{ size?: number }>; color: string }> = {
  React: { icon: FaReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  SCSS: { icon: SiSass, color: "#CC6699" },
  CSS5: { icon: FaCss3Alt, color: "#1572B6" },
  CSS3: { icon: FaCss3Alt, color: "#1572B6" },
  HTML5: { icon: FaHtml5, color: "#E34F26" },
  JavaScript: { icon: FaJs, color: "#F7DF1E" },
  "Node.js": { icon: FaNodeJs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#F5F7F8" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Wordpress: { icon: FaWordpress, color: "#21759B" },
  WordPress: { icon: FaWordpress, color: "#21759B" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  "Next.js": { icon: TbComponents, color: "#F5F7F8" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  Docker: { icon: FaDocker, color: "#2496ED" },
  GitHub: { icon: FaGithub, color: "#F5F7F8" },
  Gitlab: { icon: FaGitlab, color: "#FC6D26" },
  PWA: { icon: TbComponents, color: "#C6F4FF" },
}

function ProjectTechButton({
  name,
}: {
  name: string
}) {
  const tech = projectTechIconMap[name] ?? { icon: TbComponents, color: "#C6CCD2" }
  const Icon = tech.icon

  return (
    <span
      className="projects__tech-pill"
      style={{ color: tech.color }}
      role="img"
      aria-label={name}
    >
      <Icon size={17} />
    </span>
  )
}

export default function Projects() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeProjectSnap, setActiveProjectSnap] = useState(0)
  const [projectSnapCount, setProjectSnapCount] = useState(projects.length)

  const syncProjectPagination = (swiper: SwiperType) => {
    setActiveProjectSnap(swiper.snapIndex)
    setProjectSnapCount(swiper.snapGrid.length || projects.length)
  }

  const openProjectUrl = (url?: string) => {
    if (!url) return
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handleProjectKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, url?: string) => {
    if (!url || (event.key !== "Enter" && event.key !== " ")) return
    event.preventDefault()
    openProjectUrl(url)
  }

  return (
    <section className="projects" id="projects">
      <Container>
        <div className="projects__header section-gutter">
          <div className="projects__heading">
            <h2 className="projects__section-title">Proyectos Destacados</h2>
            <p className="projects__section-subtitle">Algunos de mis trabajos más recientes</p>
          </div>
          <div className="projects__nav-controls" aria-label="Controles del carrusel de proyectos">
            <button
              type="button"
              className="projects__nav-btn"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Proyecto anterior"
            >
              <ChevronLeftIcon size={18} />
            </button>
            <button
              type="button"
              className="projects__nav-btn"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Proyecto siguiente"
            >
              <ChevronRightIcon size={18} />
            </button>
          </div>
        </div>

        <div className="projects__slider-container">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
              syncProjectPagination(swiper)
            }}
            onSlideChange={syncProjectPagination}
            onBreakpoint={syncProjectPagination}
            onResize={syncProjectPagination}
            modules={[Navigation]}
            slidesPerView={1.28}
            spaceBetween={12}
            slidesPerGroup={1}
            centeredSlides={true}
            loop={false}
            grabCursor={true}
            breakpoints={{
              220: {
                slidesPerView: 1.28,
                spaceBetween: 10,
                effect: "slide",
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 25,
                effect: "slide",
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3.05,
                spaceBetween: 30,
                effect: "slide",
                centeredSlides: false,
              },
            }}
            className="projects__swiper"
          >
            {projects.map((project, index) => {
              const projectUrl = project.demo

              return (
                <SwiperSlide key={index} className="projects__slide">
                  <div
                    className={`projects__card-action${projectUrl ? " projects__card-action--clickable" : ""}`}
                    onClick={() => openProjectUrl(projectUrl)}
                    onKeyDown={(event) => handleProjectKeyDown(event, projectUrl)}
                    role={projectUrl ? "link" : undefined}
                    tabIndex={projectUrl ? 0 : undefined}
                    aria-label={projectUrl ? `Abrir ${project.title}` : undefined}
                  >
                    <Card className="projects__card" hover={Boolean(projectUrl)}>
                    <div className="projects__image">
                      <img src={project.image || "/placeholder.svg"} alt={project.title} className="projects__img" />
                      <div className="card__content projects__content">
                        <h3 className="projects__title">{project.title}</h3>
                        <p className="projects__description">{project.description}</p>
                        <div className="projects__tech">
                          {project.technologies.map((tech) => (
                            <ProjectTechButton key={`${index}-${tech}`} name={tech} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>

          <div className="projects__pagination" aria-label="Ir a proyecto">
            {Array.from({ length: projectSnapCount }, (_, index) => (
              <button
                key={index}
                type="button"
                className={`projects__bullet${activeProjectSnap === index ? " projects__bullet--active" : ""}`}
                onClick={() => swiperRef.current?.slideTo(index)}
                aria-label={`Ir al grupo ${index + 1} de proyectos`}
                aria-current={activeProjectSnap === index ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
