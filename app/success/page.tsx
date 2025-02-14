"use client"
import { useSpring, animated } from "react-spring"

export default function Success() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 100, friction: 10 },
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-pink-100">
      <animated.div style={fadeIn} className="text-center">
        <div className="text-6xl mb-8">
          {Array(50)
            .fill("❤️")
            .map((heart, index) => (
              <span key={index} className="inline-block animate-pulse" style={{ animationDelay: `${index * 0.1}s` }}>
                {heart}
              </span>
            ))}
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-red-600 mb-4">It's a date!</h2>
          <p className="text-xl text-gray-700">
            Meet me at the Eiffel Tower Restaurant
            <br />
            on February 14th at 7:00 PM
          </p>
        </div>
      </animated.div>
    </main>
  )
}

