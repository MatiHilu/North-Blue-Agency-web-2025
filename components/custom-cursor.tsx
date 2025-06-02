"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [cursorType, setCursorType] = useState("default")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement

      if (target.tagName === "BUTTON" || target.closest("button")) {
        setCursorType("button")
      } else if (target.tagName === "A" || target.closest("a")) {
        setCursorType("hover")
      } else if (target.tagName === "H1" || target.tagName === "H2" || target.tagName === "H3") {
        setCursorType("text")
      } else if (target.classList.contains("cursor-hover")) {
        setCursorType("hover")
      } else {
        setCursorType("default")
      }
    }

    const handleMouseLeave = () => {
      setCursorType("default")
    }

    const handleMouseOut = () => {
      setIsVisible(false)
    }

    document.addEventListener("mousemove", updateCursor)
    document.addEventListener("mouseout", handleMouseOut)

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll("button, a, h1, h2, h3, .cursor-hover")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      document.removeEventListener("mousemove", updateCursor)
      document.removeEventListener("mouseout", handleMouseOut)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className={`custom-cursor cursor-${cursorType}`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  )
}
