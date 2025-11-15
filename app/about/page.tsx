'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const teamMembers = [
    {
      image: '/team/team-1.jpg',
    },
    {
      image: '/team/team-2.jpg',
    },
    {
      image: '/team/team-3.jpg',
    },
    {
      image: '/team/team-4.jpg',
    },
    {
      image: '/team/team-5.jpg',
    },
    {
      image: '/team/team-6.jpg',
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
            About <span className="gradient-text">Winners Media</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We are a forward-thinking digital agency dedicated to helping brands
            achieve extraordinary success in the competitive US market.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                Founded with a vision to bridge the gap between creativity and
                strategy, Winners Media emerged as a powerhouse in digital
                marketing. We recognized that brands needed more than just
                beautiful content—they needed results-driven solutions that
                resonate with American audiences.
              </p>
              <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                Our journey began with a simple belief: every brand has the
                potential to be a winner. Through years of experience working
                with diverse clients across industries, we've honed our expertise
                in social media management, sports media, and creative production.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we stand as a trusted partner for brands looking to make
                their mark in the US market, combining data-driven insights with
                creative excellence to deliver campaigns that not only look great
                but drive real business results.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <Image
                src="/image/vp1.jpg"
                alt="Winners Media Office"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center p-8 bg-dark-bg rounded-lg border border-gray-800"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-electric-blue">Our Vision</h3>
              <p className="text-gray-300">
                To become the leading digital agency that empowers brands to
                achieve extraordinary success in the US market through innovative
                strategies and creative excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-8 bg-dark-bg rounded-lg border border-gray-800"
            >
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-electric-blue">Our Mission</h3>
              <p className="text-gray-300">
                To deliver data-driven, creative solutions that help our clients
                grow bigger, grow smarter, and become winners in their respective
                industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center p-8 bg-dark-bg rounded-lg border border-gray-800"
            >
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-4 text-electric-blue">Our Values</h3>
              <p className="text-gray-300">
                Excellence, Innovation, Integrity, and Results. We believe in
                building long-term partnerships based on trust, transparency,
                and measurable success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Talented professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-electric-blue transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt="Team Member"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

