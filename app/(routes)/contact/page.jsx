'use client'

import { motion } from 'framer-motion'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Contact() {
  const pathname = usePathname()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add email sending logic or API call here
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
<motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto px-4 py-12"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-2 text-center"
        >
          Get In Touch
        </motion.h1>
        
        <p className="text-center text-gray-300 mb-12 text-lg">
          I'm always open to discussing new opportunities and interesting projects.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="5"
                required
              />
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-gray-700"
        >
          <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="mailto:your.email@example.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              <i className="fas fa-envelope fa-2x"></i>
            </a>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}
