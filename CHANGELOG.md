# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.4.0] - 2026-05-17

### Added - Phase 4: Projects Data & Structure ✅

#### Projects Database
- Created comprehensive `src/data/projects.ts` with 17+ projects
- Defined complete project metadata structure:
  - **Peregrine-Tech Projects (NDA Protected):**
    - Peregrine POS (React/Vite)
    - Peregrine POS Mobile (Flutter)
    - Enterprise Management System (React/Vite)
    - Scale System (React/Vite)
    - Scale Mobile (Flutter)
    - Peregrine AI (Node.js/TypeScript)
    - Peregrine Compass (Python/FastAPI)
  - **Personal Projects (Full Disclosure):**
    - Match-Dey.Native (Flutter)
    - PyCatPrint (Python)
    - Any2PDF (Go)
    - And more

#### Project Structure
- Each project includes:
  - ID, slug, title, tagline, description
  - Multiple categories (web, mobile, backend, iot, ai-ml, fullstack)
  - Technology stack with proficiency indicators
  - Features and key outcomes
  - Media paths (placeholder support for Phase 5)
  - GitHub/Live URLs
  - NDA protection flag
  - Featured flag for homepage display

#### FeaturedProjects Integration
- Updated `FeaturedProjects` component to use real project data
- Filters for featured projects automatically
- Dynamic rendering based on data availability
- Fallback message when no featured projects exist
- Support for multiple categories per project

#### Data Quality
- Type-safe project structure with TypeScript
- NDA-compliant descriptions (generic for protected projects)
- Full transparency for personal projects
- Prepared for media asset integration in Phase 5

### Fixed
- Fixed TechStack category type validation (changed "tools" to "devops")
- Ensured all projects match TypeScript interface requirements

## [0.3.0] - 2026-05-17

### Fixed
- **Type System:** Updated `Skill` interface to use `level` instead of `proficiency` for consistency
- **Skills Data:** Standardized category naming to lowercase across all skills
- **ESLint Errors:** Fixed all 5 ESLint errors and 1 warning:
  - Escaped apostrophes in Hero and CallToAction components
  - Removed unused Button import from Header
  - Refactored CardProps to use type alias instead of empty interface
  - Fixed ThemeToggle React anti-pattern (setState in useEffect)
- **Tailwind Config:** Simplified color definitions to match actual CSS variables
- **Code Quality:** Achieved 0 ESLint errors, 0 TypeScript errors

### Changed
- ThemeToggle now initializes theme from system preferences correctly
- Improved type safety across all data files

## [0.2.0] - 2026-05-16

### Added - Phase 3: Homepage Sections ✅

#### Section Components
- **Hero Section** (`src/components/sections/Hero.tsx`):
  - Animated heading with waving hand emoji
  - Stagger animations for text elements
  - Social media links (GitHub, LinkedIn, Email)
  - Call-to-action buttons (View Projects, Contact Me)
  - Responsive text sizing (5xl to 7xl)
- **Featured Projects** (`src/components/sections/FeaturedProjects.tsx`):
  - Grid layout with 4 featured projects
  - NDA protection badges
  - Category tags (web, mobile, IoT)
  - Technology stack badges
  - Scroll-triggered stagger animations
- **Tech Stack** (`src/components/sections/TechStack.tsx`):
  - Skills grouped by category
  - Proficiency indicators (4-dot system)
  - Hover scale animations
  - Responsive grid layout (2, 4, 6 columns)
- **Services Overview** (`src/components/sections/ServicesOverview.tsx`):
  - 6 service cards with emoji icons
  - Hover effects on cards
  - Link to detailed services page
- **Call to Action** (`src/components/sections/CallToAction.tsx`):
  - Stats section (5+ years, 17+ projects, 100% satisfaction)
  - Dual CTAs (Get In Touch, View My Work)
  - Gradient background decoration

#### Page Updates
- Updated `src/app/page.tsx` to use all new section components
- Removed placeholder test content

### Fixed
- Skills data grouping by category in TechStack component
- Type safety for skill proficiency levels

## [0.1.5] - 2026-05-16

### Added - Phase 2: Core Layout & Components ✅

#### Layout Components
- **Header** (`src/components/layout/Header.tsx`):
  - Fixed navigation bar with scroll effect
  - Mobile hamburger menu with toggle animation
  - Active link highlighting based on current route
  - Backdrop blur on scroll for glassmorphism effect
  - Desktop and mobile responsive navigation
- **Footer** (`src/components/layout/Footer.tsx`):
  - Three-column layout (Brand, Quick Links, Social)
  - External social links (GitHub, LinkedIn)
  - Email contact link
  - Copyright notice with dynamic year
- **ThemeToggle** (`src/components/layout/ThemeToggle.tsx`):
  - Placeholder component for dark/light mode switching
  - Sun/moon icon toggle
  - System preference detection

#### UI Components
- **Button** (`src/components/ui/Button.tsx`):
  - 4 variants: default, outline, ghost, link
  - 4 sizes: default, sm, lg, icon
  - Forward ref support
  - Full TypeScript typings
- **Card** (`src/components/ui/Card.tsx`):
  - Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
  - Composable architecture
  - Consistent spacing and styling
- **Badge** (`src/components/ui/Badge.tsx`):
  - 3 variants: default, secondary, outline
  - Used for tags, categories, status indicators
- **Section** (`src/components/ui/Section.tsx`):
  - Responsive padding wrapper
  - Container with max-width
  - Consistent vertical spacing

#### Layout Integration
- Updated `src/app/layout.tsx`:
  - Integrated Header and Footer
  - Added site metadata from constants
  - Configured Google Fonts (Geist Sans, Geist Mono)
  - Set up proper HTML structure with flex layout
- Updated `src/app/page.tsx`:
  - Created temporary homepage with component preview
  - Tested all UI components

#### Styling
- Refined `src/app/globals.css`:
  - Fixed Tailwind v4 compatibility
  - Added proper font-family stack
  - Ensured dark mode CSS variables work

### Changed
- Layout structure now uses Header/Footer on all pages

## [0.1.0] - 2026-05-16

### Added - Phase 1: Foundation & Setup ✅

#### Project Initialization
- Initialized Next.js 15.2.6 with TypeScript and App Router
- Configured React 19.2.4 as the frontend framework
- Set up Tailwind CSS 4.x with custom design system
- Installed and configured ESLint for code quality
- Added Prettier for consistent code formatting
- Installed Framer Motion for smooth animations

#### Project Structure
- Created `src/components/` directory structure:
  - `ui/` - Reusable UI components
  - `layout/` - Header, Footer, Navigation components
  - `sections/` - Homepage sections
  - `project/` - Project-specific components
- Created `src/data/` directory with data files:
  - `projects.ts` - Project portfolio data
  - `services.ts` - Services offered
  - `skills.ts` - Technical skills and expertise
- Created `src/types/` directory:
  - `index.ts` - TypeScript interfaces (Project, Service, Skill)
- Created `src/lib/` directory:
  - `utils.ts` - Utility functions (cn for class merging)
  - `constants.ts` - Site configuration and metadata

#### Configuration Files
- `.prettierrc` - Prettier code formatting rules
- `.prettierignore` - Files to exclude from Prettier
- `tailwind.config.ts` - Custom Tailwind theme with design tokens
  - Custom color system with HSL values
  - Dark mode support with `.dark` class
  - Border radius variables
  - Chart color palette
- `src/app/globals.css` - Global styles with design system tokens
  - CSS custom properties for theming
  - Base layer styles
  - Dark/light mode color definitions

#### Data Structure
- Defined TypeScript interfaces:
  - `Project` - Portfolio project structure with NDA flags
  - `Service` - Service offerings with technologies
  - `Skill` - Technical skills with proficiency levels
- Populated initial skills data:
  - Frontend: React, Next.js, Flutter, TypeScript, Tailwind CSS, Ant Design
  - Backend: Node.js, Express, Python, FastAPI
  - Database: MongoDB, PostgreSQL
  - Mobile: Flutter, Riverpod
  - DevOps: Git, Docker, CI/CD
- Created 6 service offerings:
  - Custom POS Systems
  - Cross-Platform Mobile Apps
  - Enterprise SaaS Platforms
  - Backend Development
  - AI/ML Integration
  - IoT & Hardware Integration

#### Site Configuration
- Created site metadata in `constants.ts`:
  - Site name, title, description
  - Author information (name, email, GitHub)
  - SEO keywords
  - Social media placeholders

#### Version Control
- Initialized Git repository
- Configured remote: `git@github-second:De-pitcher/my_portfolio.git`
- Branch: `main`
- Commits:
  1. `docs: initial commit with comprehensive roadmap`
  2. `chore: initialize Next.js 15 with TypeScript, Tailwind, ESLint`
  3. `feat: complete Phase 1 setup with Framer Motion and data structure`
  4. `docs: update roadmap - Phase 1 completed`

#### Dependencies Installed
**Production:**
- next: 16.2.6
- react: 19.2.4
- react-dom: 19.2.4
- framer-motion: latest
- clsx: latest
- tailwind-merge: latest

**Development:**
- @tailwindcss/postcss: ^4
- @types/node: ^20
- @types/react: ^19
- @types/react-dom: ^19
- eslint: ^9
- eslint-config-next: 16.2.6
- eslint-config-prettier: latest
- prettier: latest
- tailwindcss: ^4
- typescript: ^5

#### Documentation
- Created comprehensive `ROADMAP.md` with:
  - Developer profile analysis
  - Project overview and goals
  - Requirements and NDA constraints
  - Tech stack details
  - 11 implementation phases
  - Deployment strategy
  - Success metrics

### Changed
- N/A (Initial release)

### Deprecated
- N/A

### Removed
- N/A

### Fixed
- N/A

### Security
- N/A

---

## Development Guidelines

### Commit Convention
This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks
- `build:` - Build system changes

### Version Format
- **Major**: Breaking changes
- **Minor**: New features (backward compatible)
- **Patch**: Bug fixes (backward compatible)

---

**Last Updated:** May 16, 2026  
**Current Version:** 0.1.0  
**Status:** Phase 1 Complete, Phase 2 Pending
