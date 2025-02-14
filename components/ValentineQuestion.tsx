"use client"
import { useState } from "react"
import { useSpring, animated } from "react-spring"
import { useRouter } from "next/navigation"

export default function ValentineQuestion() {
  const [noCount, setNoCount] = useState(0)
  const router = useRouter()

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 100, friction: 10 },
  })

  const handleYes = () => {
    router.push("/success")
  }

  const handleNo = () => {
    setNoCount(noCount + 1)
  }

  const getNoButtonText = () => {
    const phrases = ["No", "Are you sure?", "Really sure?", "Think again!", "Last chance!", "Surely not?"]
    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  return (
    <animated.div style={fadeIn} className="text-center">
      <h2 className="text-3xl font-bold text-red-600 mb-8">Will you be my Valentine?</h2>
      <div className="space-x-4">
        <button onClick={handleYes} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Yes
        </button>
        <button
          onClick={handleNo}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          style={{ fontSize: `${Math.max(1, 0.5 + noCount * 0.1)}rem` }}
        >
          {getNoButtonText()}
        </button>
      </div>
    </animated.div>
  )
}

