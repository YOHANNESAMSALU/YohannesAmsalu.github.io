'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-content max-w-4xl mx-auto px-4 py-12">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8"
          >
            About Me
          </motion.h1>
          
          <div className="bio space-y-6 text-lg text-gray-300">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Hello! I'm Yohannes Amsalu, a 4th year Software Engineering student at
              <a
                href="https://www.bdu.edu.et/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'blue', textDecoration: 'underline' }}
              >
                {' '}Bahir Dar University
              </a>
              {' '}and a fullstack developer. I specialize inFull stack development with React, Next.js and sql.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              With years of experience in the industry, I've worked with clients ranging from small businesses to medium corporations, helping them develop their UI.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              When I'm not working, you can find me trying to learn new technologies and skills. I'm passionate about creating something new and always looking for new challenges and opportunities to grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h3 className="text-2xl font-bold mb-4">My Top Skills I Specialized</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span> React with Vite
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span> HTML
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span> CSS
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span> JavaScript
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span> Web Development
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span> Next.js
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  )
}
