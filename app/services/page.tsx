'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Social Media Management',
      subtitle: 'US Market',
      icon: '📱',
      image: '/services/social-media.jpg',
      description: [
        'Complete social media strategy and execution for US audiences',
        'Content creation, scheduling, and community management',
        'Analytics and performance optimization across all platforms',
      ],
      color: 'electric-blue',
    },
    {
      id: 2,
      title: 'Advertisement & Paid Media',
      icon: '📢',
      image: '/services/paid-media.jpg',
      description: [
        'Strategic paid advertising campaigns on Meta, Google, and TikTok',
        'ROI-focused ad creation and optimization',
        'Advanced targeting and conversion tracking',
      ],
      color: 'neon-green',
    },
    {
      id: 3,
      title: 'Sports Media & Content Production',
      icon: '⚽',
      image: '/services/sports-media.jpg',
      description: [
        'Professional sports content creation and highlights',
        'Live event coverage and real-time social media management',
        'Athlete and team branding strategies',
      ],
      color: 'electric-blue',
    },
    {
      id: 4,
      title: 'Branding & Creative Production',
      icon: '🎨',
      image: '/services/creative-production.jpg',
      description: [
        'Complete brand identity design and development',
        'High-quality video and photo production',
        'Creative campaigns that resonate with target audiences',
      ],
      color: 'neon-green',
    },
  ]

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
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive digital solutions tailored to help your brand win in
            the competitive US market
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div
                  className={`${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  } relative h-96 rounded-lg overflow-hidden group`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-neon-green/20 group-hover:from-electric-blue/10 group-hover:to-neon-green/10 transition-all duration-300" />
                  <div className="absolute top-4 right-4 text-6xl opacity-80">{service.icon}</div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h2 className="text-4xl font-bold mb-4 text-white">
                    {service.title}
                    {service.subtitle && (
                      <span className="block text-2xl text-electric-blue mt-2">
                        {service.subtitle}
                      </span>
                    )}
                  </h2>
                  <ul className="space-y-4 mb-6">
                    {service.description.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <span
                          className={`text-${
                            service.color === 'electric-blue'
                              ? 'electric-blue'
                              : 'neon-green'
                          } mr-3 mt-1`}
                        >
                          ✓
                        </span>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn-primary">Learn More</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              A proven methodology that delivers results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your goals and audience' },
              { step: '02', title: 'Strategy', desc: 'Data-driven plan tailored to your brand' },
              { step: '03', title: 'Execution', desc: 'Creative production and campaign launch' },
              { step: '04', title: 'Optimization', desc: 'Continuous improvement and scaling' },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold gradient-text mb-4">{process.step}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{process.title}</h3>
                <p className="text-gray-400">{process.desc}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help your brand achieve
              extraordinary results.
            </p>
            <a href="/contact" className="btn-primary text-lg px-8 py-4">
              Schedule a Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

