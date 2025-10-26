// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const AboutMe = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12"
      style={{ paddingTop: '10rem', paddingBottom: '10rem' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full"
      >
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-center"
          style={{ marginBottom: '4rem' }}
        >
          <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:border-purple-500/30"
          style={{ padding: '3rem' }}
        >
          <p className="text-xl md:text-2xl lg:text-2xl text-gray-300 text-center" style={{ lineHeight: '2.5rem', marginBottom: '2rem' }}>
            Aspiring <span className="text-purple-400 font-semibold">React developer</span> seeking an internship to apply my frontend skills in real-world projects and grow as a <span className="text-cyan-400 font-semibold">fullstack engineer</span>. 
            I'm passionate about creating beautiful, performant web applications that deliver exceptional user experiences.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{ marginTop: '3rem' }}
          >
            <div className="text-center p-8 rounded-2xl bg-linear-to-br from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-2">Focused</h3>
              <p className="text-gray-400 text-sm">On modern web technologies</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-linear-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-xl font-semibold text-white mb-2">Creative</h3>
              <p className="text-gray-400 text-sm">Problem solver & innovator</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-linear-to-br from-pink-500/10 to-transparent border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-2">Driven</h3>
              <p className="text-gray-400 text-sm">Always learning & growing</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutMe
