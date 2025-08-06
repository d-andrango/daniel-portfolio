import Container from "../../ui/Container/Container"
import SectionHeader from "../../ui/SectionHeader/SectionHeader"
import Card from "../../ui/Card/Card"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaSass,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitlab,
  FaNpm,
  FaFigma,
  FaWordpress,
} from "react-icons/fa"
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiJest,
  SiCypress,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiLit,
  SiMocha,
} from "react-icons/si"
import { TbFlask } from "react-icons/tb"
import "./TechStack.scss"

const techStack = {
  frontend: [
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "SASS", icon: FaSass, color: "#CC6699" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Lit Element", icon: SiLit, color: "#324FFF" },
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "WordPress", icon: FaWordpress, color: "#21759B" },
  ],
  tools: [
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "GitLab CI/CD", icon: FaGitlab, color: "#FC6D26" },
    { name: "NPM", icon: FaNpm, color: "#CB3837" },
    { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
    { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
  ],
  testing: [
    { name: "Jest", icon: SiJest, color: "#C21325" },
    { name: "Cypress", icon: SiCypress, color: "#17202C" },
    { name: "Mocha", icon: SiMocha, color: "#8D6748" },
    { name: "Chai", icon: TbFlask, color: "#A30701" },
    { name: "Sinon", icon: TbFlask, color: "#8B4513" },
  ],
}

export default function TechStack() {
  return (
    <section className="tech-stack" id="skills">
      <Container>
        <SectionHeader title="Stack Tecnológico" subtitle="Tecnologías y herramientas que he trabajado" />
        <div className="tech-stack__grid">
          {Object.entries(techStack).map(([category, technologies]) => (
            <Card key={category} className="tech-stack__category" hover>
              <div className="card__header">
                <h3 className="tech-stack__category-title">
                  {category === "frontend" && "🎨 Frontend"}
                  {category === "backend" && "⚙️ Backend"}
                  {category === "tools" && "🛠️ Tools & Design"}
                  {category === "testing" && "🧪 Testing"}
                </h3>
              </div>
              <div className="card__content">
                <div className="tech-stack__list">
                  {technologies.map((tech, index) => {
                    const IconComponent = tech.icon
                    return (
                      <div key={index} className="tech-stack__item">
                        <div className="tech-stack__icon" style={{ color: tech.color }}>
                          <IconComponent size={24} />
                        </div>
                        <span className="tech-stack__name">{tech.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
