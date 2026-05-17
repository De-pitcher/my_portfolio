# Portfolio Project Roadmap

**Project:** Professional Developer Portfolio  
**Developer:** Noel (Noelperegrine)  
**Stack:** Next.js 15 + TypeScript + Tailwind CSS  
**Date Created:** May 16, 2026  
**Status:** Planning Phase

---

## 📋 Table of Contents

1. [Developer Profile](#developer-profile)
2. [Project Overview](#project-overview)
3. [Requirements & Constraints](#requirements--constraints)
4. [Tech Stack](#tech-stack)
5. [Project Structure](#project-structure)
6. [Feature Roadmap](#feature-roadmap)
7. [NDA-Safe Content Strategy](#nda-safe-content-strategy)
8. [Implementation Phases](#implementation-phases)
9. [Deployment Strategy](#deployment-strategy)
10. [Success Metrics](#success-metrics)

---

## 👨‍💻 Developer Profile

### Git Profiles

**Work Profile (Primary)**
- Name: Noelperegrine
- Email: noel.dev@peregrineexpress.io
- SSH: id_ed25519
- Organization: Peregrine-Tech
- GitHub: github.com (primary SSH)

**Personal Profile**
- Email: emmanwa000@gmail.com
- SSH: id_ed25519_second
- Host Alias: github-second
- Organizations: Match-Dey, De-pitcher, Personal repos

### Tech Stack Expertise

**Frontend:**
- React 18+ (Vite, Ant Design 5)
- Flutter (Riverpod, clean architecture, offline-first)
- Modern CSS/UI frameworks

**Backend:**
- Node.js + Express + TypeScript
- Python + FastAPI + Uvicorn
- MongoDB (Mongoose, Motor/PyMongo)
- PostgreSQL/SQL (enterprise systems)

**Specializations:**
- Enterprise SaaS platforms
- Point of Sale (POS) systems
- IoT/Hardware integration (weighing scales)
- AI/ML integration (Ollama, local-first AI)
- Multi-tenant business management systems
- Cross-platform development (web, mobile, desktop)

### Project Portfolio (17+ Git Projects)

**Professional Work (Peregrine-Tech):**
1. Peregrine POS - React + Vite + Ant Design (restaurant POS frontend)
2. Peregrine POS Backend - Node.js + MongoDB + Express
3. peregrine_pos - Flutter mobile POS (Riverpod, clean architecture)
4. ENTERPRISE-MANAGEMENT-SYSTEM - Node.js backend for business ops
5. Scale-System - Node.js backend for weighing systems
6. flutter_scale_mobile - Flutter app for scale hardware
7. peregrine_ai - Local-first AI developer tool (Ollama)
8. peregrine_model - ML service backend
9. pos-app - POS iteration
10. UniPDF - PDF utilities

**Personal Projects:**
1. Match-Dey.Native - Flutter sports pitch booking platform
2. andy - Personal Flutter app
3. any2pdf - PDF conversion tool
4. PyCatPrint - Python print utilities
5. peregrine_compass - Python + FastAPI data/navigation service
6. scale-mobile - Scale mobile app

---

## 🎯 Project Overview

### Purpose
Create a professional developer portfolio to showcase full-stack expertise to **both technical and non-technical recruiters** while maintaining NDA compliance with Peregrine-Tech. The portfolio will position Noel as available for freelance/contract work.

### Target Audience
1. **Technical Recruiters/CTOs** - Need to see architecture, code quality, problem-solving
2. **Non-Technical Recruiters/Hiring Managers** - Need visual demos, business outcomes, impact
3. **Potential Clients** - Freelance/contract opportunities

### Key Goals
- ✅ Demonstrate full-stack expertise (React, Flutter, Node.js, Python)
- ✅ Showcase enterprise-level project experience
- ✅ Highlight versatility (SaaS, POS, IoT, AI/ML)
- ✅ Generate freelance/contract opportunities
- ✅ Maintain professional NDA compliance
- ✅ Rank well in search engines (SEO)
- ✅ Provide visual demos for non-technical viewers

---

## 🔒 Requirements & Constraints

### Must-Have Features
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Project showcase with screenshots/videos
- [ ] Dual presentation mode (technical/non-technical)
- [ ] NDA-compliant project descriptions
- [ ] Services offered section
- [ ] Contact/hire me CTA
- [ ] Blog/articles section (optional for future)
- [ ] SEO optimization
- [ ] Fast load times (<3s)
- [ ] Accessibility (WCAG 2.1 AA)

### NDA Constraints
- ❌ No proprietary Peregrine-Tech code
- ❌ No client-specific data or implementations
- ❌ No business-sensitive information
- ✅ Generic architecture diagrams OK
- ✅ Tech stack and skills used OK
- ✅ Problem solved (abstract) OK
- ✅ Sanitized screenshots/mockups OK

### Design Requirements
- Modern, professional aesthetic
- Dark/light mode toggle
- Smooth animations (not excessive)
- Video/GIF support for project demos
- Code syntax highlighting (for technical content)
- Performance-first approach

---

## 🛠 Tech Stack

### Core Framework
**Next.js 16** (React + TypeScript)
- **Why:** SEO optimization, SSR, image optimization, modern routing
- **Version:** 16.2.6 (App Router)
- **Rendering:** Hybrid (SSG for most pages, SSR for dynamic content)

### Styling
**Tailwind CSS 4.x**
- **Why:** Utility-first, responsive, modern, performant
- **Plugins:** Typography, Forms, Aspect Ratio
- **Theme:** Custom colors matching brand

### UI Components
**shadcn/ui** (Radix UI + Tailwind)
- **Why:** Accessible, customizable, modern, copy-paste components
- **Alternative:** Headless UI + custom components

### Animations
**Framer Motion**
- **Why:** React-optimized, declarative, smooth animations
- **Use Cases:** Page transitions, scroll animations, interactive elements

### Media
**Next.js Image Component**
- **Why:** Automatic optimization, lazy loading, responsive images
- **Video:** HTML5 video with lazy loading

### Forms & Validation
**React Hook Form + Zod**
- **Why:** Performance, TypeScript support, easy validation

### Code Highlighting
**Shiki** or **Prism.js**
- **Why:** Syntax highlighting for technical blog posts

### Analytics (Optional)
**Vercel Analytics** or **Plausible**
- **Why:** Privacy-focused, performance tracking

### Deployment
**Vercel**
- **Why:** Zero-config Next.js deployment, edge functions, analytics
- **Custom Domain:** TBD

### Version Control
- **Repository:** GitHub (personal profile - emmanwa000@gmail.com)
- **Branch Strategy:** main (production), develop (staging), feature branches
- **Commits:** Conventional Commits format

---

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml                 # CI/CD pipeline
├── public/
│   ├── projects/                  # Project screenshots/videos
│   │   ├── peregrine-pos/
│   │   ├── match-dey/
│   │   ├── scale-system/
│   │   └── ...
│   ├── resume.pdf                 # Downloadable resume
│   └── favicon.ico
├── src/
│   ├── app/                       # Next.js 15 App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx               # Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx           # Projects grid
│   │   │   └── [slug]/
│   │   │       └── page.tsx       # Individual project page
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── blog/                  # Optional (future)
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── components/
│   │   ├── ui/                    # shadcn/ui components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── TechStack.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Contact.tsx
│   │   └── project/
│   │       ├── ProjectCard.tsx
│   │       ├── ProjectFilter.tsx
│   │       └── ProjectGallery.tsx
│   ├── lib/
│   │   ├── utils.ts               # Utility functions
│   │   └── constants.ts
│   ├── data/
│   │   ├── projects.ts            # Project data
│   │   ├── skills.ts              # Tech stack data
│   │   └── services.ts            # Services offered
│   ├── types/
│   │   ├── project.ts
│   │   └── index.ts
│   └── styles/
│       └── globals.css
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── ROADMAP.md                     # This file
└── README.md

```

---

## 🚀 Feature Roadmap

### Core Features

#### Homepage (/)
- [ ] Hero section with dynamic tagline
- [ ] Brief intro ("Full-Stack Engineer | Enterprise SaaS | Flutter & React")
- [ ] Featured projects (3-4 highlights)
- [ ] Tech stack showcase (interactive grid/carousel)
- [ ] Services offered (quick overview)
- [ ] Call-to-action (contact/hire me)
- [ ] Social links (GitHub, LinkedIn, Twitter/X)

#### About Page (/about)
- [ ] Professional bio
- [ ] Career journey timeline
- [ ] Expertise areas
- [ ] Work experience (Peregrine-Tech + freelance)
- [ ] Education & certifications
- [ ] Downloadable resume (PDF)

#### Projects Page (/projects)
- [ ] Filterable project grid (All, Web, Mobile, Backend, IoT, AI/ML)
- [ ] Project cards with:
  - Thumbnail/screenshot
  - Title & tagline
  - Tech stack badges
  - "View Details" CTA
- [ ] Sort options (Recent, Featured, Category)

#### Individual Project Pages (/projects/[slug])
- [ ] Project hero image/video
- [ ] Overview & problem statement
- [ ] Solution & approach
- [ ] Tech stack used
- [ ] Key features (bullet points)
- [ ] Screenshots/video gallery
- [ ] Architecture diagram (for technical viewers)
- [ ] Outcomes/impact metrics (if applicable)
- [ ] GitHub link (for open-source projects)
- [ ] "View Mode" toggle (Technical/Non-Technical presentation)
- [ ] Navigation to next/previous project

#### Services Page (/services)
- [ ] Services offered:
  - Custom POS/Inventory systems
  - Cross-platform mobile apps (Flutter)
  - Enterprise SaaS platforms
  - Backend development (Node.js/Python)
  - AI/ML integration
  - IoT/Hardware integration
  - Technical consulting
- [ ] Process overview (Discovery → Design → Development → Deployment)
- [ ] Technologies used per service
- [ ] Testimonials (if available)
- [ ] CTA to contact

#### Contact Page (/contact)
- [ ] Contact form (name, email, message)
- [ ] Email: noel.dev@peregrineexpress.io (work) or emmanwa000@gmail.com (personal)
- [ ] Social links
- [ ] Availability status
- [ ] Preferred contact method

#### Blog (Optional - Future Phase)
- [ ] Technical articles
- [ ] Project deep-dives
- [ ] Tutorials
- [ ] Case studies
- [ ] MDX support for interactive content

### Additional Features
- [ ] Dark/Light mode toggle
- [ ] Smooth scroll animations
- [ ] Page transitions
- [ ] Loading states
- [ ] Error boundaries
- [ ] 404 page
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Open Graph meta tags
- [ ] Twitter Card meta tags
- [ ] JSON-LD structured data

---

## 🔐 NDA-Safe Content Strategy

### Professional Projects (Peregrine-Tech)

#### ✅ What to Show
1. **Generic Project Descriptions**
   - "Enterprise Point of Sale System for Food Service Industry"
   - "Multi-Tenant Business Management Platform"
   - "IoT Hardware Integration for Weighing Systems"

2. **Tech Stack & Skills**
   - React, Node.js, Flutter, MongoDB, etc.
   - Architecture patterns (clean architecture, microservices)
   - Development methodologies (Agile, TDD)

3. **Problem & Solution (Abstract)**
   - "Challenge: Real-time order synchronization across multiple devices"
   - "Solution: Implemented offline-first architecture with conflict resolution"

4. **Sanitized Visuals**
   - Generic UI mockups (no real data)
   - Architecture diagrams (abstracted)
   - Tech stack diagrams
   - Feature lists

5. **Outcomes (If Allowed)**
   - "Improved order processing speed by X%"
   - "Reduced system downtime to near-zero"
   - "Scaled to handle Y concurrent users"

#### ❌ What to Hide
- Proprietary code
- Client names/data
- Business-specific logic
- API endpoints/schemas
- Database structures (detailed)
- Competitive advantages
- Pricing/revenue data

### Personal Projects (Full Showcase)

#### Match-Dey.Native
- Full demo available
- Screenshots/videos of actual app
- GitHub repository link (if public)
- Live demo (if deployed)
- Technical deep-dive blog post

#### Other Personal Projects
- Same approach: full transparency
- Code samples welcome
- Architecture explanations
- Lessons learned

---

## 📅 Implementation Phases

### Phase 1: Foundation & Setup ✅
**Timeline:** Day 1-2  
**Status:** ✅ COMPLETED

- [x] Initialize Next.js 15 project with TypeScript
- [x] Configure Tailwind CSS
- [x] Set up ESLint + Prettier
- [x] Install Framer Motion
- [x] Set up folder structure (components, data, types, lib)
- [x] Configure Git repository (github-second)
- [x] Initial commit
- [x] Create data structure (projects, services, skills, types)
- [x] Set up site configuration constants
- [x] Configure custom Tailwind theme with design tokens

**Deliverable:** ✅ Working Next.js app with routing, styling framework, and data structure

**Commits:**
- `docs: initial commit with comprehensive roadmap`
- `chore: initialize Next.js 15 with TypeScript, Tailwind, ESLint`
- `feat: complete Phase 1 setup with Framer Motion and data structure`

---

### Phase 2: Core Layout & Components
**Timeline:** Day 3-4  
**Status:** ✅ COMPLETED

- [x] Create Header component with navigation
- [x] Create Footer component
- [x] Implement dark/light mode toggle
- [x] Create reusable UI components:
  - Button
  - Card
  - Badge (for tech stack)
  - Section wrapper
- [x] Set up global styles and theme
- [x] Create responsive layout

**Deliverable:** ✅ Reusable component library and responsive layout

**Commits:**
- `feat: complete Phase 2 - core layout and UI components`

---

### Phase 3: Homepage
**Timeline:** Day 5-6  
**Status:** ✅ COMPLETED

- [x] Hero section with intro
- [x] Featured projects section (3-4 cards)
- [x] Tech stack showcase
- [x] Services overview
- [x] Contact CTA
- [x] Add animations (Framer Motion)
- [x] Mobile responsiveness

**Deliverable:** ✅ Complete, animated homepage ready to impress recruiters

**Commits:**
- `feat(homepage): complete Phase 3 - animated sections with Framer Motion`
- `fix: resolve Phase 1-3 critical issues and ESLint errors`

---

### Phase 4: Projects Data & Structure
**Timeline:** Day 7-8  
**Status:** ✅ COMPLETED

- [x] Create project data structure (TypeScript types)
- [x] Write NDA-safe descriptions for Peregrine-Tech projects:
  - Peregrine POS (React)
  - Peregrine POS Mobile (Flutter)
  - Enterprise Management System
  - Scale System & Scale Mobile
  - AI Developer Tool (Peregrine Compass, Peregrine AI)
- [x] Write full descriptions for personal projects:
  - Match-Dey.Native
  - Any2PDF
  - PyCatPrint
  - Peregrine Compass
  - Peregrine AI
- [x] Organize project metadata (featured flag, NDA protection, categories, tech stack)
- [x] Integrate FeaturedProjects component with real data

**Deliverable:** ✅ Complete project database with 17+ projects structured and integrated

**Commits:**
- `feat: complete Phase 4 - projects data structure and integration`

---

### Phase 5: Projects Page & Individual Project Pages
**Timeline:** Day 9-11  
**Status:** ✅ COMPLETED

- [x] Create projects grid page with filtering
- [x] Implement category filter (All, Web, Mobile, Backend, IoT, AI/ML, Fullstack)
- [x] Create ProjectCard component with preview and CTA
- [x] Create individual project page template
- [x] Implement dynamic routing ([slug]) with static generation
- [x] Add project navigation (prev/next links)
- [x] Add sidebar with tech stack and project info
- [x] Mobile responsiveness across all pages
- [x] Pre-generate all 11+ project pages as static HTML

**Deliverable:** ✅ Complete projects showcase with filtering and individual detail pages

**Commits:**
- `feat: complete Phase 5 - projects page and individual project pages`

---

### Phase 6: About & Services Pages
**Timeline:** Day 12-13  
**Status:** ✅ COMPLETED

- [x] About page:
  - Professional bio
  - Career timeline (3 positions)
  - Work experience details
  - Skills breakdown by category
  - Proficiency indicators (4-dot system)
  - Stats section (5+ years, 17+ projects, 20+ technologies)
  - Resume download button
- [x] Services page:
  - Services offered grid (6 services)
  - Process overview (5 steps with timeline)
  - Technologies per service
  - "Why Choose Me" expertise section (6 areas)
  - CTA to contact page
- [x] Mobile responsiveness on both pages
- [x] Animations with Framer Motion
- [x] Proper server/client component boundaries
- [x] Metadata for SEO on both pages

**Deliverable:** ✅ Complete About and Services pages with animations

**Commits:**
- `feat: complete Phase 6 - About and Services pages`

---

### Phase 7: Contact Page & Form
**Timeline:** Day 14  
**Status:** ✅ COMPLETED

- [x] Contact form with validation (React Hook Form + Zod)
- [x] Form submission handling (simulated, ready for email service)
- [x] Contact information display (Email, GitHub, LinkedIn)
- [x] Social links with hover effects
- [x] Success/error states with animations
- [x] Mobile responsiveness
- [x] Availability status indicator
- [x] Real-time form validation with error messages
- [x] Loading states during submission
- [x] Accessible form elements with proper labels

**Deliverable:** ✅ Functional contact page with validated form

**Commits:**
- `feat: complete Phase 7 - Contact page with form validation`

---

### Phase 8: SEO & Performance Optimization
**Timeline:** Day 15-16  
**Status:** ✅ COMPLETED

- [x] Add meta tags to all pages (with Open Graph)
- [x] Create Open Graph images metadata
- [x] Add JSON-LD structured data (Person, Website, ProfessionalService, Project)
- [x] Generate sitemap.xml (dynamic with all pages)
- [x] Configure robots.txt
- [x] Enhanced metadata with Twitter Cards
- [x] metadataBase for proper URL resolution
- [x] Robot directives for search engines
- [x] Pre-rendered static pages for performance

**Deliverable:** ✅ SEO-optimized portfolio with structured data

**Commits:**
- `feat: complete Phase 8 - SEO and performance optimization`

**Notes:**
- Image optimization with Next.js Image component (deferred - no images yet)
- Lazy load videos (deferred - no videos yet)
- Bundle size optimization (Next.js 16 handles automatically)
- Lighthouse audit (to be done in Phase 9)

---

### Phase 9: Testing & Refinement
**Timeline:** Day 17-18  
**Status:** Not Started

- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Test all forms and interactions
- [ ] Fix bugs and edge cases
- [ ] Refine animations and transitions
- [ ] Content review and proofreading
- [ ] Get feedback from peers

**Deliverable:** Polished, tested portfolio

---

### Phase 10: Deployment
**Timeline:** Day 19-20  
**Status:** ✅ COMPLETED

- [x] Set up Vercel account
- [x] Connect GitHub repository (De-pitcher/my_portfolio)
- [x] Configure build settings (Next.js preset)
- [x] Deploy to production
- [x] Update personal information (Noel Emmanuel)
- [x] Configure correct email and social links
- [x] Test production build
- [x] Automatic deployments enabled

**Deliverable:** ✅ Live portfolio website

**Live URL:** https://my-portfolio-blush-eta-xzdxw85xf8.vercel.app/

**Commits:**
- `feat: complete Phase 8 - SEO and performance optimization`
- `chore: update personal information and site config`

**Notes:**
- Deployed on Vercel Hobby (FREE) plan
- Automatic deployments on git push
- Custom domain to be added later (Phase 11)
- Analytics deferred to Phase 11

---

### Phase 11 (Future): Blog & Continuous Updates
**Timeline:** Ongoing  
**Status:** Not Started

- [ ] Set up MDX for blog posts
- [ ] Create blog layout
- [ ] Write first technical article
- [ ] Add new projects as completed
- [ ] Update skills/experience
- [ ] A/B test CTAs for conversions
- [ ] Add testimonials from clients

**Deliverable:** Evolving portfolio with fresh content

---

## 🌐 Deployment Strategy

### Platform: Vercel

**Why Vercel:**
- Zero-config Next.js deployment
- Automatic CI/CD from GitHub
- Edge network (global CDN)
- Free SSL certificates
- Preview deployments for PRs
- Built-in analytics
- Serverless functions support

### Deployment Process

1. **Connect Repository**
   - Link GitHub repository (personal profile)
   - Configure build settings (auto-detected for Next.js)

2. **Environment Variables**
   - Set any API keys (if using contact form service)
   - Configure production URLs

3. **Custom Domain (Optional)**
   - Purchase domain (e.g., noelperegrine.dev)
   - Configure DNS settings
   - Enable SSL (automatic)

4. **CI/CD Pipeline**
   - Push to `main` → production deployment
   - Push to `develop` → preview deployment
   - Feature branches → preview URLs

5. **Monitoring**
   - Enable Vercel Analytics
   - Monitor Core Web Vitals
   - Track errors with Vercel Error Tracking

### Alternative Platforms (Backup)
- **Netlify** - Similar to Vercel, good alternative
- **Cloudflare Pages** - Fast, free tier
- **GitHub Pages** - Static only (SSG required)

---

## 📊 Success Metrics

### Performance Targets
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 95+
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Total Page Size: <500KB (without images)

### User Engagement (To Track)
- Page views
- Average session duration
- Bounce rate
- Contact form submissions
- Resume downloads
- Project page views

### SEO Goals
- Rank for "Full-Stack Developer [Your City]"
- Rank for "Flutter Developer [Your City]"
- Rank for "React Developer [Your City]"
- Get indexed by Google within 1 week

### Conversion Goals
- 5+ contact form submissions per month
- 2+ freelance inquiries per month
- Build professional network

---

## 📝 Next Steps

1. ✅ **Choose tech stack** - DONE (Next.js 15)
2. ⏳ **Review and approve roadmap** - IN PROGRESS (You are here)
3. ⬜ **Begin Phase 1: Project setup**
4. ⬜ **Prepare project assets** (screenshots, videos, diagrams)
5. ⬜ **Write project descriptions**
6. ⬜ **Implement core features**
7. ⬜ **Test and refine**
8. ⬜ **Deploy to production**
9. ⬜ **Share with network**

---

## 🤝 Collaboration Notes

### Communication
- Ask questions if anything is unclear
- Request changes to the roadmap as needed
- Provide feedback at each phase checkpoint

### Asset Preparation
You will need to provide:
- Project screenshots (sanitized for NDA compliance)
- Project videos/GIFs (optional but recommended)
- Resume PDF
- Professional headshot/avatar
- Social media links
- Any specific copy/descriptions you want

### Review Checkpoints
- After Phase 3 (Homepage) - Review design and layout
- After Phase 5 (Projects) - Review content and NDA compliance
- After Phase 8 (SEO) - Final content review before launch

---

## 📄 License & Credits

**Project:** Personal Portfolio  
**Developer:** Noel (Noelperegrine)  
**License:** Private (not open-source)  
**Credits:** Built with Next.js, Tailwind CSS, shadcn/ui

---

**Last Updated:** May 16, 2026  
**Next Review:** After Phase 1 completion
