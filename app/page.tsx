"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSpring, animated } from "react-spring"

export default function Home() {
  const [showContent, setShowContent] = useState(false)
  const router = useRouter()

  const fadeIn = useSpring({
    opacity: showContent ? 1 : 0,
    config: { duration: 1000 },
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    router.push("/poem")
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-200 to-red-100 overflow-hidden">
      <div className="relative w-full h-screen">
        {/* Floating hearts background */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                fontSize: `${Math.random() * 20 + 10}px`,
              }}
            >
              ❤️
            </div>
          ))}
        </div>

        {/* Main content */}
        <animated.div
          style={fadeIn}
          className="relative z-10 flex flex-col items-center justify-center h-full"
          onClick={handleClick}
        >
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-xl transform hover:scale-105 transition-transform cursor-pointer">
            <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-4 animate-pulse">Happy Valentine's Day!</h1>
            <p className="text-xl md:text-2xl text-pink-600 mb-6">Click to continue... ❤️</p>
          </div>
        </animated.div>
      </div>
    </main>
  )
}

