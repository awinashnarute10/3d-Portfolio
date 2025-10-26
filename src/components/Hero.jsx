import { useState, useEffect } from 'react'

const Hero = () => {
  const fullText = "Hi, I am Awinash\na frontend developer"
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 style={{ textAlign: 'left', whiteSpace: 'pre-line' }}>{displayText}<span className="cursor">|</span></h1>
      </div>
    </section>
  )
}

export default Hero
