import { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-40">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 whitespace-pre-line">
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              {displayText}
            </span>
            <span className="cursor text-purple-400 animate-pulse">|</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
          >
            Crafting beautiful, responsive web experiences with React and modern technologies
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="flex flex-wrap gap-6 justify-start"
            style={{ marginTop: '3rem' }}
          >
            <a
              href="#projects"
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #0891b2 100%)',
                boxShadow: '0 10px 40px rgba(124, 58, 237, 0.6)',
                color: '#ffffff',
                fontWeight: 'bold',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                padding: '1.25rem 3rem',
                display: 'inline-block',
                minWidth: '220px'
              }}
              className="rounded-full text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              style={{
                border: '3px solid #8b5cf6',
                background: 'rgba(139, 92, 246, 0.15)',
                color: '#ffffff',
                fontWeight: 'bold',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                padding: '1.25rem 3rem',
                display: 'inline-block',
                minWidth: '220px'
              }}
              className="rounded-full text-xl transition-all duration-300 hover:scale-105 text-center"
              onMouseEnter={(e) => {
                e.target.style.background = '#8b5cf6'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(139, 92, 246, 0.15)'
              }}
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-2 bg-purple-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
