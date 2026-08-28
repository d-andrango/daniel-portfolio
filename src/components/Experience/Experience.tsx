import { useEffect, useState } from "react"
import type React from "react"
import Container from "../../ui/Container/Container"
import SectionHeader from "../../ui/SectionHeader/SectionHeader"
import Card from "../../ui/Card/Card"
import { ChevronDownIcon, ChevronUpIcon } from "../Icons/index"
import {
  FaBitbucket,
  FaDocker,
  FaGithub,
  FaGitlab,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa"
import {
  SiExpress,
  SiJira,
  SiLit,
  SiMocha,
  SiMongodb,
  SiSass,
  SiTypescript,
} from "react-icons/si"
import { TbComponents, TbFlask } from "react-icons/tb"
import "./Experience.scss"

type ExperienceItem = {
  title: string
  company: string
  period: string
  location: string
  description: string
  logo: string
  logoLabel?: string
  technologies: string[]
  achievements: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "Desarrollador FrontEnd",
    company: "SEARCH IT / BBVA",
    period: "Feb 2026 - Presente",
    location: "Madrid, España",
    logo: "/img/experience/bbva.jpg",
    logoLabel: "SEARCH IT / BBVA",
    description:
      "Trabajando en un proyecto para Banco BBVA (vía Accenture). Desarrollo de soluciones front de alto rendimiento dentro del ecosistema Cells (BBVA), garantizando la escalabilidad y el cumplimiento de los estándares de arquitectura del banco.",
    technologies: ["JavaScript", "SCSS", "Lit Element", "Cells", "Jira", "Bitbucket", "GitHub"],
    achievements: [
      "Desarrollo de Componentes, Páginas e Integración usando Cells y Lit Element: Implementación de flujos y páginas completas mediante la integración de componentes modulares, gestionando estados y comunicación eficiente entre elementos.",
      "Calidad de Código y Testing Robusto: Mantenimiento de código utilizando Mocha, Chai y Sinon. Implementación de pruebas de integración y unitarias.",
      "Metodologías Ágiles (Scrum): Participación activa en Sprints, refinamientos y daylies, utilizando Jira y Bitbucket para el seguimiento preciso de tareas y cumplimiento de entregas.",
    ],
  },
  {
    title: "Desarrollador FrontEnd",
    company: "Fesevar Innovaciones SLU",
    period: "Feb 2022 - Feb 2026",
    location: "Madrid, España",
    logo: "/img/experience/fesevar.png",
    description:
      "Diseño y desarrollo de intranet de empresa con interfaces modulares y seguras. Creación de dashboards interactivos, sistemas de acceso y optimizar la gestión de proyectos mediante despliegues automatizados.",
    technologies: ["React", "TypeScript", "SCSS", "Node.js", "Express.js", "MongoDB", "Gitlab", "Docker"],
    achievements: [
      "Colaboración en el diseño de intranet de empresa, separación clara entre frontend y backend, siguiendo el patrón cliente-servidor REST. Desarrollo de endpoints seguros y eficientes.",
      "Colaboración en la definición del modelo de datos en MongoDB adaptado a los procesos de negocio de una constructora. Desarrollo de middleware en backend para validación de permisos.",
      "Desarrollo de estructuración del frontend con React + TypeScript utilizando componentes modulares y rutas protegidas (React Router + roles de acceso).",
      "Creación y diseño de dashboard y componentes para visualización de obras activas, estados, responsables, fechas clave, y presupuestos. Integración de filtros dinámicos por estado, empresa, fecha, etc., para facilitar búsquedas rápidas. Implementación de sistema de login con tokens JWT.",
      "Configuración de entorno productivo en VPS Ubuntu con Docker Compose para frontend, backend y base de datos. Automatización de despliegues con GitLab CI/CD.",
    ],
  },
  {
    title: "Desarrollador FrontEnd",
    company: "MentorUp",
    period: "Ene 2024 - May 2025",
    location: "Madrid, España",
    logo: "/img/experience/mentorup.png",
    description:
      "Desarrollador FrontEnd Freelance, creando componentes modulares con LitElement y TypeScript, implementando páginas clave y asegurando la calidad mediante pruebas unitarias y visuales en un entorno ágil.",
    technologies: ["TypeScript", "LitElement", "Gitlab", "Mocha", "Chai"],
    achievements: [
      "Desarrollo de componentes modulares como barras de progreso, perfil de usuario y tarjetas informativas con LitElement y TypeScript, reutilizados en landing pages y flujos de mentoría.",
      "Implementar páginas clave como pantallas de inicio, login y registro de usuarios, garantizando consistencia visual y responsividad.",
      "Aplicación de pruebas unitarias con Mocha, Chai y Sinon, además de pruebas visuales con Storybook para asegurar la calidad y estabilidad de cada componente.",
      "Uso de Git y GitLab para control de versiones en un entorno ágil (Scrum/Kanban) con Linear y Jira.",
    ],
  },
  /*
  {
    title: "Técnico Desarrollador Web",
    company: "Fesevar Innovaciones SLU",
    period: "May 2020 - Feb 2022",
    location: "Madrid, España",
    description:
      "Desarrollo de tienda online e-commerce y página de información de empresa en WordPress con integración API.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Wordpress", "PHP", "MySQL"],
    achievements: [
      "Desarrollo de tienda online e-commerce en WordPress, gestionando el stock mediante API de distribuidor.",
      "Configuración de script para borrado automático de cache en servidor VPS",
      "Desarrollo de página web de información de empresa en Wordpress.",
      "Aprendí y apliqué metodologías ágiles (Scrum) en proyectos reales",
      "Actualización de branding usando paquete de Adobe, como Photshop e Illustrator.",
    ],
  },*/
]

function BbvaIcon({ size = 18 }: { size?: number }) {
  return (
    <span className="experience__bbva-icon" style={{ fontSize: `${Math.max(8, size * 0.5)}px` }}>
      BBVA
    </span>
  )
}

const techIconMap: Record<string, { icon: React.ComponentType<{ size?: number }>; color: string }> = {
  Cells: { icon: BbvaIcon, color: "#49A5E6" },
  JavaScript: { icon: FaJs, color: "#F7DF1E" },
  "Lit Element": { icon: SiLit, color: "#324FFF" },
  LitElement: { icon: SiLit, color: "#324FFF" },
  SCSS: { icon: SiSass, color: "#CC6699" },
  Bitbucket: { icon: FaBitbucket, color: "#2684FF" },
  Jira: { icon: SiJira, color: "#2684FF" },
  React: { icon: FaReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Node.js": { icon: FaNodeJs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#F5F7F8" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Docker: { icon: FaDocker, color: "#2496ED" },
  GitHub: { icon: FaGithub, color: "#F5F7F8" },
  Gitlab: { icon: FaGitlab, color: "#FC6D26" },
  "CI/CD": { icon: FaGitlab, color: "#FC6D26" },
  WebComponents: { icon: TbComponents, color: "#C6F4FF" },
  Mocha: { icon: SiMocha, color: "#8D6748" },
  Chai: { icon: TbFlask, color: "#A30701" },
}

function CompanyLogo({
  company,
  logo,
  label,
}: {
  company: string
  logo: string
  label?: string
}) {
  const [hasError, setHasError] = useState(false)
  const fallback = label ?? company
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")

  if (!hasError) {
    return (
      <img
        src={logo}
        alt={`Logo de ${company}`}
        className="experience__company-logo-img"
        onError={() => setHasError(true)}
      />
    )
  }

  return <span className="experience__company-logo-fallback">{fallback}</span>
}

function ExperienceTechButton({
  name,
  isActive,
  onToggle,
}: {
  name: string
  isActive: boolean
  onToggle: () => void
}) {
  const tech = techIconMap[name] ?? { icon: TbComponents, color: "#C6CCD2" }
  const Icon = tech.icon

  return (
    <button
      type="button"
      className={`experience__tech-pill ${isActive ? "experience__tech-pill--active" : ""}`}
      style={{ color: tech.color }}
      aria-label={name}
      onClick={(event) => {
        event.stopPropagation()
        onToggle()
      }}
    >
      <Icon size={18} />
      <span className="experience__tech-tooltip">{name}</span>
    </button>
  )
}

export default function Experience() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())
  const [activeTech, setActiveTech] = useState<string | null>(null)

  useEffect(() => {
    if (!activeTech) return

    const clearActiveTech = () => setActiveTech(null)

    document.addEventListener("click", clearActiveTech)
    window.addEventListener("scroll", clearActiveTech, { passive: true })

    return () => {
      document.removeEventListener("click", clearActiveTech)
      window.removeEventListener("scroll", clearActiveTech)
    }
  }, [activeTech])

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <section className="experience" id="experience">
      <Container className="section-gutter">
        <SectionHeader title="Experiencia Laboral" subtitle="Mi trayectoria profesional en el desarrollo frontend" />
        <div className="experience__timeline">
          {experiences.map((exp, index) => {
            const isExpanded = expandedItems.has(index)
            const isCurrent = /presente|actual/i.test(exp.period)
            return (
              <div key={index} className="experience__timeline-item">
                <div
                  className={`experience__timeline-marker ${isCurrent ? "experience__timeline-marker--current" : ""}`}
                  aria-hidden="true"
                ></div>
                <Card className="experience__card" hover>
                  <div className="card__header">
                    <div className="experience__meta-row">
                      <span className="experience__period">{exp.period}</span>
                      <span className="experience__location">{exp.location}</span>
                    </div>
                    <div className="experience__header">
                      <div className="experience__company-logo">
                        <CompanyLogo company={exp.company} logo={exp.logo} label={exp.logoLabel} />
                      </div>
                      <div className="experience__heading">
                        <h3 className="experience__title">{exp.title}</h3>
                        <p className="experience__company">{exp.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="card__content-secondary">
                    <p className="experience__description">{exp.description}</p>
                    <div className="experience__tech">
                      {exp.technologies.map((tech, techIndex) => (
                        <ExperienceTechButton
                          key={`${index}-${tech}`}
                          name={tech}
                          isActive={activeTech === `${index}-${techIndex}`}
                          onToggle={() => setActiveTech((current) => current === `${index}-${techIndex}` ? null : `${index}-${techIndex}`)}
                        />
                      ))}
                    </div>

                    <button
                      className="experience__toggle"
                      onClick={() => toggleExpanded(index)}
                      aria-expanded={isExpanded}
                    >
                      <span>Ver logros destacados</span>
                      <div
                        className={`experience__toggle-icon ${isExpanded ? "experience__toggle-icon--expanded" : ""}`}
                      >
                        {isExpanded ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} />}
                      </div>
                    </button>

                    <div
                      className={`experience__achievements ${isExpanded ? "experience__achievements--expanded" : ""}`}
                    >
                      <div className="experience__achievements-content">
                        <ul className="experience__achievements-list">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="experience__achievement-item">
                              <div className="experience__achievement-bullet"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
