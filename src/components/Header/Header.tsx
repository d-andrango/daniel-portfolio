import { useState, useEffect } from "react"
import { MailIcon, PhoneIcon } from "../Icons/index"
import { FaWhatsapp } from "react-icons/fa"
import "./Header.scss"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detectar sección activa
      const sections = ["home", "about", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleContactClick = (type: "email" | "whatsapp" | "phone") => {
    switch (type) {
      case "email":
        window.open("mailto:daniel.@d-andrango.com", "_blank")
        break
      case "whatsapp":
        window.open("https://wa.link/oz69j3", "_blank")
        break
      case "phone":
        window.open("tel:+34678143534", "_blank")
        break
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const menuItems = [
    { id: "about", label: "Sobre mí" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experiencia" },
    { id: "projects", label: "Proyectos" },
  ]

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="header__content">
        <div className="header__logo">
          <span>Daniel Andrango</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav header__nav--desktop">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`header__nav-link ${activeSection === item.id ? "header__nav-link--active" : ""
                }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Icons - Visible en desktop y mobile */}
        <div className="header__actions">
          <button
            className="header__action-btn header__action-btn--email"
            onClick={() => handleContactClick("email")}
            aria-label="Enviar email"
            title="Enviar email"
          >
            <MailIcon size={18} />
          </button>
          <button
            className="header__action-btn header__action-btn--whatsapp"
            onClick={() => handleContactClick("whatsapp")}
            aria-label="Contactar por WhatsApp"
            title="WhatsApp"
          >
            <FaWhatsapp size={18} />
          </button>
          <button
            className="header__action-btn header__action-btn--phone"
            onClick={() => handleContactClick("phone")}
            aria-label="Llamar por teléfono"
            title="Llamar"
          >
            <PhoneIcon size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
