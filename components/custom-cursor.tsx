"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  // detect touch devices (mobile/tablet) via hover/pointer media
  const [isTouch, setIsTouch] = useState(() => typeof window !== 'undefined' && window.matchMedia('(hover: none), (pointer: coarse)').matches)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [cursorType, setCursorType] = useState("default")
  const [isVisible, setIsVisible] = useState(false)

  // listen for changes in touch capability
  useEffect(() => {
    const mql = window.matchMedia('(hover: none), (pointer: coarse)')
    const updateTouch = (e: MediaQueryListEvent) => setIsTouch(e.matches)
    mql.addEventListener('change', updateTouch)
    return () => mql.removeEventListener('change', updateTouch)
  }, [])

  // manage body cursor-none class based on touch
  useEffect(() => {
    if (isTouch) {
      document.body.classList.remove('cursor-none')
    } else {
      document.body.classList.add('cursor-none')
    }
  }, [isTouch])

  // do not render or track cursor on touch devices
  if (isTouch) return null

  // track mouse movement and visibility only for non-touch
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
  }, [isVisible, isTouch])

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
