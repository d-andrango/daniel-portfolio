import { useState } from "react"
import type React from "react"
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
  FaGithub,
  FaDocker,
  FaGitlab,
  FaNpm,
  FaFigma,
  FaWordpress,
  FaBitbucket,
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
  SiJira,
  SiSonarqube,
} from "react-icons/si"
import { TbFlask } from "react-icons/tb"
import "./TechStack.scss"

type TechItem = {
  name: string
  icon: React.ComponentType<{ size?: number }>
  color: string
  image?: string
}

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
    { name: "Express", icon: SiExpress, color: "#000000", image: "/img/tech/testing/express.png" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "WordPress", icon: FaWordpress, color: "#21759B" },
  ],
  tools: [
    { name: "GitHub", icon: FaGithub, color: "#F5F7F8" },
    { name: "GitLab", icon: FaGitlab, color: "#FC6D26" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "NPM", icon: FaNpm, color: "#CB3837" },
    { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
    { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
    { name: "Jira", icon: SiJira, color: "#0052CC" },
    { name: "Bitbucket", icon: FaBitbucket, color: "#0052CC" },
  ],
  testing: [
    { name: "Jest", icon: SiJest, color: "#C21325", image: "/img/tech/testing/jest.png" },
    { name: "Cypress", icon: SiCypress, color: "#17202C", image: "/img/tech/testing/cypress.png" },
    { name: "Mocha", icon: SiMocha, color: "#8D6748", image: "/img/tech/testing/mocha.png" },
    { name: "Chai", icon: TbFlask, color: "#A30701", image: "/img/tech/testing/chai.png" },
    { name: "Sinon", icon: TbFlask, color: "#8B4513", image: "/img/tech/testing/sinon.png" },
    { name: "SonarQube", icon: SiSonarqube, color: "#4E9BCD", image: "/img/tech/testing/sonarqube.png" },
  ],
} satisfies Record<string, TechItem[]>

function TechIcon({ tech }: { tech: TechItem }) {
  const [hasImageError, setHasImageError] = useState(false)
  const IconComponent = tech.icon

  if (tech.image && !hasImageError) {
    return (
      <img
        src={tech.image}
        alt=""
        className="tech-stack__logo"
        onError={() => setHasImageError(true)}
      />
    )
  }

  return <IconComponent size={24} />
}

export default function TechStack() {
  return (
    <section className="tech-stack" id="skills">
      <Container className="section-gutter">
        <SectionHeader title="Stack Tecnológico" subtitle="Tecnologías y herramientas que he trabajado" />
        <div className="tech-stack__grid">
          {Object.entries(techStack).map(([category, technologies]) => (
            <Card key={category} className="tech-stack__category" hover>
              <div className="card__header">
                <h3 className="tech-stack__category-title">
                  {category === "frontend" && "Frontend"}
                  {category === "backend" && "Backend"}
                  {category === "tools" && "Tools & Design"}
                  {category === "testing" && "Testing"}
                </h3>
              </div>
              <div className="card__content">
                <div className="tech-stack__list">
                  {technologies.map((tech, index) => (
                    <div key={index} className="tech-stack__item">
                      <div className="tech-stack__icon" style={{ color: tech.color }}>
                        <TechIcon tech={tech} />
                      </div>
                      <span className="tech-stack__name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
