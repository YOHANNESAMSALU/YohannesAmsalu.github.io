'use client'

import { motion } from 'framer-motion'
import { Button } from './components/ui/button'
import Link from 'next/link'
import { Code, Zap, Users, Target } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: <Code size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance',
      description: 'Optimized solutions that deliver fast results'
    },
    {
      icon: <Users size={32} />,
      title: 'Collaboration',
      description: 'Working effectively with teams and clients'
    },
    {
      icon: <Target size={32} />,
      title: 'Goal Oriented',
      description: 'Focused on delivering results that matter'
    }
  ]

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      > 
        <div className="header-content flex items-center space-x-8 text-center py-12">
          <motion.div
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: 1, x: -20 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
          >
            <div className="profile-img">
              <img src="profile_image.webp" alt="Yohannes" className="rounded-full shadow-2xl" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 250 }}
            animate={{ opacity: 1, x: 10 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
          >
            <h1 className="Myname">Yohannes Amsalu</h1>
            <p className="tagline">Full Stack Developer | React | Next.js | Node.js <br />
              ⭐⭐⭐⭐⭐
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.header>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <motion.div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-white">Welcome to My Portfolio</h2>
          <p className="text-lg text-gray-300 mb-8">
            Explore my work, learn more about me, and get in touch. I'm always excited to discuss new opportunities!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/about">
              <Button variant="primary" size="lg">Learn More</Button>
            </Link>
            <Link href="/projects">
              <Button variant="secondary" size="lg">View Projects</Button>
            </Link>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold mb-12 text-center text-white">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300"
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <div className="bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-12 text-center border border-blue-500/30">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Work Together?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss your next project and how I can help bring your ideas to life.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">Get In Touch</Button>
          </Link>
        </div>
      </motion.section>
    </>
  )
}
