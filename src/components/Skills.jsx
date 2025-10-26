import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  const skills = [
    { name: "HTML", icon: "🌐", color: "from-orange-500 to-red-500" },
    { name: "CSS", icon: "🎨", color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-500 to-orange-500" },
    { name: "ReactJS", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
    { name: "Redux", icon: "🔄", color: "from-purple-500 to-pink-500" },
    { name: "Context API", icon: "🔗", color: "from-green-500 to-emerald-500" },
    { name: "Tailwind CSS", icon: "💨", color: "from-teal-500 to-cyan-500" },
    { name: "Java", icon: "☕", color: "from-red-500 to-orange-500" },
    { name: "DSA", icon: "🧮", color: "from-indigo-500 to-purple-500" },
    { name: "Git", icon: "📦", color: "from-orange-600 to-red-600" },
    { name: "Github", icon: "🐙", color: "from-gray-700 to-gray-900" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="min-h-screen flex items-center justify-center py-40 px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-20 text-center"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            My Skills
          </span>
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden"
            >
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:border-white/30 hover:shadow-2xl hover:shadow-purple-500/20 min-h-[180px] flex flex-col justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
