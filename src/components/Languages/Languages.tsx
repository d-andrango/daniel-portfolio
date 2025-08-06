import Container from "../../ui/Container/Container"
import SectionHeader from "../../ui/SectionHeader/SectionHeader"
import Card from "../../ui/Card/Card"
import "./Languages.scss"

const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Level 2 (Londres)" },
]

export default function Languages() {
  return (
    <section className="languages">
      <Container>
        <SectionHeader title="Idiomas" />
        <div className="languages__grid">
          {languages.map((lang, index) => (
            <Card key={index} className="languages__card" hover>
              <div className="card__content languages__content">
                <h3 className="languages__name">{lang.name}</h3>
                <p className="languages__level">{lang.level}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
