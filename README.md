# Winners Media - Professional Website

Website chuyên nghiệp giới thiệu công ty Winners Media - Digital Agency chuyên về Social Media Management, Sports Media, Content Creation và Branding cho thị trường US.

## 🎨 Design Features

- **Color Scheme**: Đen (#0D0D0D), Trắng (#FFFFFF), Electric Blue (#0077FF), Neon Green (#39FF14)
- **Typography**: Poppins, Inter, Montserrat
- **Style**: Modern, Futuristic, Clean, Professional
- **Animations**: Fade-in, Parallax, Slide-in effects
- **Responsive**: 100% mobile-friendly

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Website sẽ chạy tại: `http://localhost:3000`

## 📁 Project Structure

```
winners-media/
├── app/
│   ├── about/          # Trang About Us
│   ├── services/       # Trang Services
│   ├── portfolio/      # Trang Portfolio
│   ├── contact/        # Trang Contact
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Landing page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation component
│   └── Footer.tsx      # Footer component
├── public/
│   ├── logo/           # Logo files
│   ├── image/          # General images
│   ├── videos/         # Video backgrounds
│   ├── services/       # Service images
│   ├── portfolio/      # Portfolio images
│   └── team/           # Team photos
└── package.json
```

## 🎬 Video Background Suggestions

### Hero Section Video Options:

1. **Abstract Tech Background**
   - URL: https://www.pexels.com/video/digital-technology-abstract-3045163/
   - Description: Abstract digital particles, tech vibe, modern
   - Keywords: "abstract technology background video"

2. **Social Media Dashboard Animation**
   - URL: https://www.pexels.com/video/digital-marketing-social-media-3045163/
   - Description: Animated social media analytics, graphs, data visualization
   - Keywords: "social media analytics animation"

3. **Sports Media Highlights**
   - URL: https://www.pexels.com/video/sports-highlights-3045163/
   - Description: Fast-paced sports highlights, dynamic energy
   - Keywords: "sports highlights reel"

4. **Creative Agency Workspace**
   - URL: https://www.pexels.com/video/creative-agency-workspace-3045163/
   - Description: Modern office, creative team working, collaboration
   - Keywords: "creative agency workspace video"

5. **Digital Marketing Concept**
   - URL: https://www.pexels.com/video/digital-marketing-concept-3045163/
   - Description: Digital marketing concepts, growth charts, success metrics
   - Keywords: "digital marketing growth video"

### Video Requirements:
- Format: MP4 (H.264)
- Resolution: 1920x1080 (Full HD) minimum
- Duration: 10-30 seconds (looped)
- File size: Optimized for web (< 5MB recommended)
- Place video file at: `/public/videos/hero-background.mp4`

### Alternative Video Sources:
- **Pexels Videos**: https://www.pexels.com/videos/
- **Pixabay Videos**: https://pixabay.com/videos/
- **Coverr**: https://coverr.co/
- **Videvo**: https://www.videvo.net/

## 💬 Slogan Suggestions

### Current Hero Slogan:
**"Winners Media — Empowering Your Brand To Win."**

### Alternative Slogan Options:

1. **"Where Strategy Meets Creativity."**
   - Focus: Balance between data and creativity
   - Tone: Professional, balanced

2. **"Grow Bigger. Grow Smarter. Grow Winners."**
   - Focus: Growth and intelligence
   - Tone: Action-oriented, confident

3. **"Your Page. Our Strategy. Guaranteed Results."**
   - Focus: Partnership and results
   - Tone: Direct, promise-driven

4. **"Turning Brands Into Champions."**
   - Focus: Transformation and success
   - Tone: Inspirational, competitive

5. **"Data-Driven. Creative-Fueled. Results-Focused."**
   - Focus: Methodology and outcomes
   - Tone: Professional, comprehensive

6. **"Elevate Your Brand. Dominate Your Market."**
   - Focus: Market leadership
   - Tone: Bold, ambitious

7. **"We Don't Just Create Content. We Create Winners."**
   - Focus: Outcome-oriented
   - Tone: Confident, results-driven

8. **"Strategic Creativity. Measurable Success."**
   - Focus: Balance and accountability
   - Tone: Professional, trustworthy

## 🖼️ Image Assets Needed

### Required Images (Place in `/public/`):

#### Services Images:
- `/public/services/social-media.jpg` - Social media marketing concept
- `/public/services/paid-media.jpg` - Advertising and paid media
- `/public/services/sports-media.jpg` - Sports media production
- `/public/services/creative-production.jpg` - Creative agency work

#### Portfolio Images:
- `/public/portfolio/social-1.jpg` - Social media campaign example
- `/public/portfolio/social-2.jpg` - Social media management
- `/public/portfolio/sports-1.jpg` - Sports media coverage
- `/public/portfolio/sports-2.jpg` - Sports content production
- `/public/portfolio/ads-1.jpg` - Paid advertising campaign
- `/public/portfolio/branding-1.jpg` - Brand identity project

#### Team Photos:
- `/public/team/team-1.jpg` through `/public/team/team-6.jpg`
- Professional headshots or team working photos
- Modern agency environment

### AI Image Generation Suggestions:

Use AI tools like:
- **Midjourney**: `/imagine prompt: modern digital marketing agency team working, professional, tech startup vibe, black and blue color scheme`
- **DALL-E**: Create images for social media dashboards, sports highlights, creative workspace
- **Stable Diffusion**: Generate portfolio mockups and service illustrations

### Image Specifications:
- Format: JPG or WebP
- Resolution: 1200x800px minimum
- Optimized for web
- Consistent style and color scheme

## 🎯 Features Implemented

✅ Modern landing page with video background
✅ Responsive navigation with mobile menu
✅ About Us page with company story, vision, mission, values
✅ Services page with 4 main service categories
✅ Portfolio page with filtering and case studies
✅ Contact page with form and map placeholder
✅ Smooth animations using Framer Motion
✅ Professional footer
✅ Gradient text effects
✅ Hover effects and transitions
✅ Mobile-responsive design

## 🔧 Customization

### Change Hero Slogan:
Edit `/app/page.tsx` line 30-33

### Change Colors:
Edit `/tailwind.config.js` and `/app/globals.css`

### Add Video Background:
1. Download video from suggested sources
2. Place at `/public/videos/hero-background.mp4`
3. Video will auto-play in hero section

### Update Contact Information:
Edit `/app/contact/page.tsx` and `/components/Footer.tsx`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Vercel (Recommended):
```bash
npm install -g vercel
vercel
```

### Netlify:
```bash
npm run build
# Deploy /out folder
```

### Other Platforms:
Build the project and deploy the `.next` folder or static export.

## 📝 Notes

- Video background requires user interaction on some browsers (autoplay policies)
- Form submission currently shows alert - integrate with backend/email service
- Google Maps integration requires API key (add to contact page)
- Team photos are placeholders - replace with actual team photos
- Portfolio images are placeholders - add real case study images

## 🎨 Design Philosophy

The website follows a modern, tech-forward design philosophy:
- **Clean Layout**: Generous whitespace, clear hierarchy
- **Bold Typography**: Large, impactful headings
- **Smooth Animations**: Subtle, professional motion
- **Color Contrast**: High contrast for readability
- **Professional Aesthetic**: Agency-quality design

## 📞 Support

For questions or customization needs, contact:
- Email: info@winnersmedia.com
- Website: [Your Website URL]

---

**Built with Next.js 14, React, TypeScript, Tailwind CSS, and Framer Motion**

