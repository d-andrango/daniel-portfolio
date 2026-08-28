import { useState } from "react"
import Container from "../../ui/Container/Container"
import SectionHeader from "../../ui/SectionHeader/SectionHeader"
import Card from "../../ui/Card/Card"
import "./Education.scss"

interface EducationItem {
  title: string
  institution: string
  period: string
  description: string
  logo?: string
}

const educationItems: EducationItem[] = [
  {
    title: "Certificación Cells",
    institution: "BBVA",
    period: "2026",
    description: "Certificación en Cells impartida por BBVA",
    logo: "/img/education/bbva.jpg",
  },
  {
    title: "CFGS Desarrollo de Aplicaciones Web",
    institution: "Ilerna Madrid",
    period: "2022 - 2024",
    description: "Formación oficial en desarrollo web centrada en frontend y bases de backend",
    logo: "/img/education/ilerna.png",
  },
  {
    title: "Access to HE Diploma in Electronics and Computer Engineering",
    institution: "Newham College",
    period: "2016 - 2017",
    description: "HTML, CSS, bases de datos, bases de programación en Java y C++",
    logo: "/img/education/newham.jpg",
  },
]

function EducationLogo({ item }: { item: EducationItem }) {
  const [hasError, setHasError] = useState(false)
  const initials = item.institution
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  if (item.logo && !hasError) {
    return (
      <img
        src={item.logo}
        alt={`${item.institution} logo`}
        className="education__logo-image"
        onError={() => setHasError(true)}
      />
    )
  }

  return <span className="education__logo-fallback">{initials}</span>
}

export default function Education() {
  return (
    <section className="education">
      <Container className="section-gutter">
        <SectionHeader title="Educación" />
        <div className="education__grid">
          {educationItems.map((item) => (
            <Card key={`${item.institution}-${item.period}`} className="education__card" hover>
              <div className="card__header education__header">
                <div className="education__logo">
                  <EducationLogo item={item} />
                </div>
                <div className="education__heading">
                  <h3>{item.title}</h3>
                  <p className="education__meta">
                    <span className="education__institution">{item.institution}</span>
                    <span className="education__separator" aria-hidden="true">•</span>
                    <span className="education__period">{item.period}</span>
                  </p>
                </div>
              </div>
              <div className="card__content-secondary education__description">
                <p>{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
