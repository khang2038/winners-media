'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const portfolioItems = [
    {
      id: 1,
      title: 'Social Media Campaign - Tech Startup',
      category: 'social',
      image: '/portfolio/social-1.jpg',
      description: 'Increased engagement by 300% and followers by 150% in 3 months',
      metrics: ['+300% Engagement', '+150% Followers', '2M+ Reach'],
    },
    {
      id: 2,
      title: 'Sports Media Coverage - Major League',
      category: 'sports',
      image: '/portfolio/sports-2.jpg',
      description: 'Live coverage and highlights for major sporting events',
      metrics: ['10M+ Views', '500K+ Shares', '50K+ New Followers'],
    },
    {
      id: 3,
      title: 'Paid Media Campaign - E-commerce',
      category: 'advertising',
      image: '/portfolio/ads-1.jpg',
      description: 'ROAS of 4.5x with strategic Facebook and Google Ads',
      metrics: ['4.5x ROAS', '$2M+ Revenue', '35% Lower CPA'],
    },
    {
      id: 4,
      title: 'Brand Identity - Fashion Brand',
      category: 'branding',
      image: '/portfolio/branding-1.jpg',
      description: 'Complete rebrand resulting in 200% increase in brand awareness',
      metrics: ['+200% Awareness', 'New Brand Identity', 'Market Leader'],
    },
    {
      id: 5,
      title: 'Content Production - Sports Team',
      category: 'sports',
      image: '/portfolio/sports-2.jpg',
      description: 'Season-long content strategy and production',
      metrics: ['50+ Videos', '1M+ Views', 'Award Winning'],
    },
    {
      id: 6,
      title: 'Social Media Management - Restaurant Chain',
      category: 'social',
      image: '/portfolio/social-2.jpg',
      description: 'Multi-location social media management and local SEO',
      metrics: ['20 Locations', '+250% Orders', '5-Star Rating'],
    },
  ]

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'social', label: 'Social Media' },
    { id: 'sports', label: 'Sports Media' },
    { id: 'advertising', label: 'Advertising' },
    { id: 'branding', label: 'Branding' },
  ]

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-dark-bg via-electric-blue/10 to-dark-bg">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="gradient-text">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Real results from real clients. See how we've helped brands achieve
            extraordinary success.
          </motion.p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="section pt-0">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-electric-blue text-white'
                    : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-electric-blue transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/40 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="text-xs text-electric-blue uppercase font-semibold bg-dark-bg/80 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-electric-blue/20 text-electric-blue px-3 py-1 rounded-full"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gray-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">By The Numbers</h2>
            <p className="section-subtitle">Results that speak for themselves</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '200+', label: 'Happy Clients' },
              { number: '50M+', label: 'Total Reach' },
              { number: '300%', label: 'Avg. Growth' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-electric-blue/10 to-neon-green/10 p-12 rounded-lg"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Be Our Next Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together.
            </p>
            <a href="/contact" className="btn-primary text-lg px-8 py-4">
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

