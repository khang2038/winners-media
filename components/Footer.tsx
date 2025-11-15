import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Winners Media</h3>
            <p className="text-gray-400 text-sm">
              Empowering your brand to win in the digital landscape.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-electric-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-electric-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-electric-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-electric-blue transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Social Media Management</li>
              <li>Advertisement & Paid Media</li>
              <li>Sports Media & Content</li>
              <li>Branding & Creative</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: hrwinmedia@gmail.com</li>
              <li>Phone: 0708945100</li>
              <li>
                <Link href="/contact" className="btn-primary mt-4 inline-block">
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Winners Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

