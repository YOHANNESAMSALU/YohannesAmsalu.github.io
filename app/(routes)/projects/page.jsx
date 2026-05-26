'use client'

import { motion } from 'framer-motion'
import ProjectCard from '../../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Student PC Registration',
      description: 'Student PC registration in college and university to avoid manual registration and searching. Built with React and Vite.',
      image: 'Student-Pc.webp',
      link: 'https://pc-registration.vercel.app/'
    },
    {
      title: 'Creative To Do List Organizer',
      description: 'Interactive task manager with a fun UI built with React and Vite.',
      image: 'Todo-List.webp',
      link: 'https://react-to-do-list-lhtwc1wpl-yohannes-amsalus-projects.vercel.app/'
    }
  ]

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 py-12"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold mb-4 text-center"
        >
          My Work
        </motion.h1>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Here are some of my recent projects and work samples
        </p>

        <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </motion.section>
    </>
  )
}
