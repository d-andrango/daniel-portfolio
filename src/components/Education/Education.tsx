import Container from "../../ui/Container/Container"
import SectionHeader from "../../ui/SectionHeader/SectionHeader"
import Card from "../../ui/Card/Card"
import "./Education.scss"

export default function Education() {
  return (
    <section className="education">
      <Container>
        <SectionHeader title="Educación" />
        <div className="education__grid">
          <Card className="education__card" hover>
            <div className="card__header">
              <h3>CFGS Desarrollo de Aplicaciones Web</h3>
              <p className="education__institution">Ilerna Madrid</p>
              <p className="education__period">2022 - 2024</p>
            </div>
            <div className="card__content-secondary">
              <p>Formación oficial en desarrollo web centrada en frontend y bases de backend</p>
            </div>
          </Card>
          <Card className="education__card" hover>
            <div className="card__header">
              <h3>“Access to HE Diploma in Electronics and Computer Engineering”</h3>
              <p className="education__institution">Newham College</p>
              <p className="education__period">2016 - 2017</p>
            </div>
            <div className="card__content-secondary">
              <p>HTML, CSS, bases de datos, bases de programación en Java y C++</p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
