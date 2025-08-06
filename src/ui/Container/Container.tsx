import type React from "react"
import "./Container.scss"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export default function Container({ children, className = "", size = "lg" }: ContainerProps) {
  return <div className={`container container--${size} ${className}`}>{children}</div>
}
