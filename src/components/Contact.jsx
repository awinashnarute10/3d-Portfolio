import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Contact = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/awinashnarute10', gradient: 'linear-gradient(135deg, #374151 0%, #111827 100%)' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/awinash-narute-6b2892245/', gradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)' },
    { name: 'Instagram', icon: '📸', url: 'https://www.instagram.com/awinash.narute/', gradient: 'linear-gradient(135deg, #db2777 0%, #9333ea 100%)' },
    { name: 'Email', icon: '📧', url: 'mailto:your.email@example.com', gradient: 'linear-gradient(135deg, #9333ea 0%, #db2777 100%)' }
  ]

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="min-h-screen flex items-center justify-center py-40 px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-12 lg:p-16 hover:border-cyan-500/30 transition-all duration-500">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
            >
              Connect With Me
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 mb-16 leading-relaxed text-center max-w-3xl mx-auto"
            >
              I'm always open to new opportunities and interesting projects. 
              Feel free to reach out if you'd like to work together or just want to say hi!
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-300"
                  style={{
                    background: social.gradient,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                  }}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-6xl">{social.icon}</span>
                    <div>
                      <span className="text-2xl font-bold text-white block">{social.name}</span>
                      <span className="text-sm text-white/80">Connect on {social.name}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center pt-8 border-t border-white/10 mt-8"
            >
              <p className="text-2xl text-gray-300 font-semibold">
                Let's build something amazing together! 🚀
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
