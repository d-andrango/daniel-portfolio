import type React from "react"
import "./Badge.scss"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "secondary" | "outline" | "tech"
  className?: string
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return <span className={`badge badge--${variant} ${className}`}>{children}</span>
}
