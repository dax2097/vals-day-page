"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSpring, animated } from "react-spring"

export default function PoemPage() {
  const [currentLine, setCurrentLine] = useState(0)
  const router = useRouter()

  const poem = [
    "On this special Valentine's Day,",
    "I have something sweet to say,",
    "You make my heart skip a beat,",
    "And my world feel complete.",
  ]

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  })

  useEffect(() => {
    if (currentLine < poem.length) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1)
      }, 2000)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        router.push("/question")
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [currentLine, router])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-200 to-red-100 p-4">
      <animated.div style={fadeIn} className="text-center space-y-4">
        {poem.slice(0, currentLine).map((line, index) => (
          <p
            key={index}
            className="text-2xl md:text-3xl text-red-600 font-medium"
            style={{
              animation: "fadeInUp 0.5s ease-out",
              animationFillMode: "both",
              animationDelay: `${index * 0.5}s`,
            }}
          >
            {line}
          </p>
        ))}
      </animated.div>
    </main>
  )
}

