// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const projects = [
    {
      title: "Insta-Stories",
      description: "Built an Instagram-style stories interface with smooth animations and responsive design. Implemented story viewing, auto-progress bar, and navigation using React state management. Designed a clean, mobile-friendly UI with React, Tailwind CSS, and JavaScript (ES6).",
      deploymentLink: "https://loquacious-smakager-c41d4c.netlify.app/",
      codeLink: "https://github.com/awinashnarute10/Insta-Stories"
    },
    {
      title: "Task Tamer",
      description: "Built an AI-powered productivity assistant using React, Tailwind CSS, and an AI API key to help users manage and organize daily tasks through chat-based interaction. Designed a desktop-first chat interface that enables users to add, edit, and delete tasks with intelligent AI-generated suggestions. Integrated Local Storage to persist user chats and tasks directly in the browser.",
      deploymentLink: "https://tasktamer1.netlify.app/",
      codeLink: "https://github.com/awinashnarute10/TaskTamer"
    },
    {
      title: "Swiggy-Clone",
      description: "Built a Swiggy-inspired web app using React, Tailwind CSS, Redux, and Context API, focusing on browsing and ordering food items. Integrated real Swiggy API to fetch restaurants and their menus for an authentic, dynamic experience. Developed an add-to-cart system allowing users to select items and view cart updates in real-time.",
      deploymentLink: "https://swiggy-clone5.netlify.app/",
      codeLink: "https://github.com/awinashnarute10/REACT"
    }
  ];

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12"
      style={{ paddingTop: '10rem', paddingBottom: '10rem' }}
    >
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-center"
          style={{ marginBottom: '4rem' }}
        >
          <span className="bg-linear-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </span>
        </motion.h2>
        
        <div className="flex flex-col items-center gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
          {projects.slice(0, 2).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group h-full"
            >
              <div className="h-full min-h-[500px] backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="mb-6 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-cyan-400 transition-all duration-300">
                      {project.title}
                    </span>
                  </h3>
                  <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full mx-auto group-hover:w-full transition-all duration-500" />
                </div>
                
                <div className="grow mb-8 flex items-center justify-center">
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg text-center">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.deploymentLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 text-center rounded-xl font-semibold text-white bg-linear-to-r from-purple-600 to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                    style={{ padding: '1rem 1.5rem', fontSize: '1.125rem' }}
                  >
                    🚀 Live Demo
                  </a>
                  
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 text-center rounded-xl font-semibold text-white border-2 border-purple-500/50 transition-all duration-300 hover:bg-purple-500/10 hover:scale-105 hover:border-purple-500"
                    style={{ padding: '1rem 1.5rem', fontSize: '1.125rem' }}
                  >
                    💻 Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
          
          {/* Third project centered */}
          <div className="w-full lg:max-w-[calc(50%-1.25rem)]">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.6, delay: 2 * 0.2 }}
              whileHover={{ y: -10 }}
              className="group h-full"
            >
              <div className="h-full min-h-[500px] backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="mb-6 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-cyan-400 transition-all duration-300">
                      {projects[2].title}
                    </span>
                  </h3>
                  <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full mx-auto group-hover:w-full transition-all duration-500" />
                </div>
                
                <div className="grow mb-8 flex items-center justify-center">
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg text-center">
                    {projects[2].description}
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={projects[2].deploymentLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 text-center rounded-xl font-semibold text-white bg-linear-to-r from-purple-600 to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                    style={{ padding: '1rem 1.5rem', fontSize: '1.125rem' }}
                  >
                    🚀 Live Demo
                  </a>
                  
                  <a 
                    href={projects[2].codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 text-center rounded-xl font-semibold text-white border-2 border-purple-500/50 transition-all duration-300 hover:bg-purple-500/10 hover:scale-105 hover:border-purple-500"
                    style={{ padding: '1rem 1.5rem', fontSize: '1.125rem' }}
                  >
                    💻 Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;