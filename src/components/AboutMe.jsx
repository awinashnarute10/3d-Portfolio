import { useState, useEffect, useRef } from 'react'

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className={`about-me ${isVisible ? 'fade-in' : 'fade-out'}`}
    >
      <div className="about-content">
        <h2>About Me</h2>
        <p className="transition-colors text-neutral-400 hover:text-white">
          Aspiring React developer seeking an internship to apply my frontend skills in real-world projects and grow as a fullstack engineer
        </p>
      </div>
    </section>
  )
}

export default AboutMe
