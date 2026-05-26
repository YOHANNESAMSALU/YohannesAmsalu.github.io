'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export default function ProjectCard({ title, description, image, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-gray-800/50 border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300">
        <div className="relative overflow-hidden h-48">
          <img src={image} alt={title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
        </div>
        
        <CardHeader>
          <CardTitle className="text-2xl text-white">{title}</CardTitle>
          <CardDescription className="text-gray-400">{description}</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex gap-3">
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex-1 justify-center"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <ExternalLink size={18} />
              View Project
            </motion.a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}