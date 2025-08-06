import { useState } from "react"
import Container from "../../ui/Container/Container"
import SectionHeader from "../../ui/SectionHeader/SectionHeader"
import Card from "../../ui/Card/Card"
import Badge from "../../ui/Badge/Badge"
import { ChevronDownIcon, ChevronUpIcon } from "../Icons/index"
import "./Experience.scss"

const experiences = [
  {
    title: "Desarrollador FrontEnd",
    company: "Fesevar Innovaciones SLU",
    period: "Feb 2022 - Presente",
    location: "Madrid, España",
    description:
      "Diseño y desarrollo de intranet de empresa con interfaces modulares y seguras. Creación de dashboards interactivos, sistemas de acceso y optimizar la gestión de proyectos mediante despliegues automatizados.",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "SCSS", "Docker", "Gitlab", "CI/CD",],
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
    description:
      "Desarrollador FrontEnd Freelance, creando componentes modulares con LitElement y TypeScript, implementando páginas clave y asegurando la calidad mediante pruebas unitarias y visuales en un entorno ágil.",
    technologies: ["LitElement", "TypeScript", "WebComponents", "Mocha", "Chai", "Gitlab"],
    achievements: [
      "Desarrollo de componentes modulares como barras de progreso, perfil de usuario y tarjetas informativas con LitElement y TypeScript, reutilizados en landing pages y flujos de mentoría.",
      "Implementar páginas clave como pantallas de inicio, login y registro de usuarios, garantizando consistencia visual y responsividad.",
      "Aplicación de pruebas unitarias con Mocha, Chai y Sinon, además de pruebas visuales con Storybook para asegurar la calidad y estabilidad de cada componente.",
      "Uso de Git y GitLab para control de versiones en un entorno ágil (Scrum/Kanban) con Linear y Jira.",
    ],
  },
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
  },
]

export default function Experience() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())

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
      <Container>
        <SectionHeader title="Experiencia Laboral" subtitle="Mi trayectoria profesional en el desarrollo frontend" />
        <div className="experience__timeline">
          {experiences.map((exp, index) => {
            const isExpanded = expandedItems.has(index)
            return (
              <div key={index} className="experience__timeline-item">
                <div className="experience__timeline-marker"></div>
                <Card className="experience__card" hover>
                  <div className="card__header">
                    <div className="experience__header">
                      <div className="experience__info">
                        <h3 className="experience__title">{exp.title}</h3>
                        <p className="experience__company">{exp.company}</p>
                      </div>
                      <div className="experience__meta">
                        <span className="experience__period">{exp.period}</span>
                        <span className="experience__location">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="card__content-secondary">
                    <p className="experience__description">{exp.description}</p>
                    <div className="experience__tech">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="tech">
                          {tech}
                        </Badge>
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
