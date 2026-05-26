'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function LayoutWrapper({ children }) {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
3
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="sticky top-0 z-100 bg-slate-900/80 backdrop-blur border-b border-gray-700"
      >
        <ul className="flex justify-center list-none p-4 flex-wrap gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isMounted && pathname === link.href
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>

      <main className="flex-1">
        {children}
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-slate-900/90 border-t border-gray-700 text-white py-12 mt-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Yohannes Amsalu</h3>
              <p className="text-gray-400">
                Full Stack Developer & Software Engineering Student
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-blue-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <i className="fab fa-github fa-lg"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <i className="fas fa-envelope fa-lg"></i>
                </a>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Yohannes Amsalu. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
