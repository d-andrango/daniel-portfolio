import Container from "../../ui/Container/Container"
import SectionHeader from "../../ui/SectionHeader/SectionHeader"
import "./SoftSkills.scss"

const softSkills = [
  "Liderazgo de equipos",
  "Comunicación efectiva",
  "Resolución de problemas",
  "Pensamiento crítico",
  "Adaptabilidad",
  "Trabajo en equipo",
  "Gestión del tiempo",
  "Creatividad",
]

export default function SoftSkills() {
  return (
    <section className="soft-skills">
      <Container>
        <SectionHeader title="Soft Skills" />
        <div className="soft-skills__grid">
          {softSkills.map((skill, index) => (
            <div key={index} className="soft-skills__item">
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
