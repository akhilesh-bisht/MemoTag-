"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function BrainAnimation() {
  const canvasRef = useRef(null) // reference to the canvas

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Resize canvas for retina displays
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    const particles = []
    const connections = []
    const particleCount = 80
    const connectionDistance = 100
    const colors = {
      particles: getComputedStyle(document.documentElement).getPropertyValue("--brain-particle-color") || "#34d399",
      connections: getComputedStyle(document.documentElement).getPropertyValue("--brain-connection-color") || "rgba(52, 211, 153, 0.2)"
    }

    // Each particle simulates a brain neuron
    class Particle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = colors.particles
        this.pulseDirection = Math.random() > 0.5 ? 1 : -1
        this.pulseSpeed = Math.random() * 0.02 + 0.01
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        this.size += this.pulseDirection * this.pulseSpeed
        if (this.size > 4 || this.size < 1) {
          this.pulseDirection *= -1
        }

        const rect = canvas.getBoundingClientRect()
        if (this.x < 0 || this.x > rect.width) this.speedX *= -1
        if (this.y < 0 || this.y > rect.height) this.speedY *= -1
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Initialize particles in brain-like shape
    const init = () => {
      const rect = canvas.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const radiusX = rect.width * 0.35
      const radiusY = rect.height * 0.4

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2
        const x = centerX + Math.cos(angle) * radiusX * (0.6 + Math.random() * 0.4)
        const y = centerY + Math.sin(angle) * radiusY * (0.6 + Math.random() * 0.4)
        particles.push(new Particle(x, y))
      }
    }

    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      particles.forEach((p) => {
        p.update()
        p.draw()
      })

      connections.length = 0
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < connectionDistance) {
            connections.push({ p1: particles[i], p2: particles[j], distance: dist })
          }
        }
      }

      connections.forEach((conn) => {
        ctx.beginPath()
        ctx.moveTo(conn.p1.x, conn.p1.y)
        ctx.lineTo(conn.p2.x, conn.p2.y)
        ctx.strokeStyle = colors.connections
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Occasionally pulse a particle
      if (Math.random() < 0.02) {
        const random = particles[Math.floor(Math.random() * particles.length)]
        random.size = 5
      }

      requestAnimationFrame(animate)
    }

    // Update theme-based colors
    const updateColors = () => {
      const isDark = document.documentElement.classList.contains("dark")
      colors.particles = isDark ? "#5eead4" : "#0d9488"
      colors.connections = isDark ? "rgba(94, 234, 212, 0.2)" : "rgba(13, 148, 136, 0.2)"
    }

    const observer = new MutationObserver(updateColors)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    init()
    animate()
    updateColors()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      observer.disconnect()
    }
  }, [])

  return (
    <motion.div
      className="w-full aspect-square relative"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-full bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900 shadow-xl"
      />
    </motion.div>
  )
}
