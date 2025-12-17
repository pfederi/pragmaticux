# Pragmatic UX Design v2.0

A practical framework for maximizing UX impact without overcomplicating design processes. This website presents eight core principles that guide pragmatic UX practice, along with an interactive decision helper to find the most relevant principles and methods for your specific situation.

## ✨ Key Features

- **Eight Core UX Principles** - Practical guidance for effective UX design
- **51 UX Methods** - Comprehensive collection organized by category (Research, Design, Testing, Implementation, Strategy, Optimization)
- **Interactive Decision Helper** - 5-question flow providing personalized recommendations
- **Project Phase Integration** - Methods tailored to project stages (start, middle, end)
- **Methods Overview** - Browse and filter all available UX methods with modal details
- **Responsive Design** - Optimized for all devices with modern glassmorphism UI
- **State Persistence** - Decision Helper progress automatically saved
- **Contact Integration** - Direct email integration for method implementation support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

The development server includes hot-reload, so changes will automatically refresh in your browser.

## 🆕 What's New in v2.0

### New Features
- **Modal-based Method Details** - Interactive method cards with detailed descriptions, steps, and tips
- **Glassmorphism UI Effects** - Modern visual design with backdrop blur and gradient glows
- **Project Phase Integration** - Decision Helper now considers project stage (start/middle/end)
- **Contact Integration** - Direct email links for implementation support
- **Methods Filtering** - Browse methods by category with visual chips
- **Mobile-Optimized Cookie Banner** - Improved responsive design for mobile devices
- **Release Notes Page** - Dedicated page for version history and changelog
- **Standalone Embed Tools** - Individual tools available at dedicated URLs for focused usage

### Technical Improvements
- **Enhanced Type Safety** - Comprehensive TypeScript interfaces and strict typing
- **Accessibility** - WCAG AA compliant with proper ARIA labels, keyboard navigation, and focus management
- **Documentation** - Updated arc42 architecture docs and decision logic documentation

## 🔗 Standalone Embed Tools

Each core component is available as a standalone tool for focused usage:

- **Methods Toolkit** (`/embed/methods`) - Browse and filter 51 UX methods
- **Principles Guide** (`/embed/principles`) - Explore the 8 core UX principles
- **Decision Helper** (`/embed/decision-helper`) - Interactive project assessment tool

### Features
- **Clean Interface** - Focused on the specific tool without navigation distractions
- **Branding Links** - Clear attribution and links back to the full framework
- **SEO Optimized** - Each embed page has proper meta tags and descriptions
- **Mobile Responsive** - Optimized for all device sizes
- **State Management** - Decision Helper progress persists across sessions

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 📚 Documentation

### 📖 Core Documentation
- **[README.md](README.md)** - This file with setup and usage instructions
- **[LICENSE](LICENSE)** - MIT License terms and conditions
- **[RELEASE_NOTES.md](RELEASE_NOTES.md)** - Version history and changelog

### 🏗️ Technical Documentation
- **[docs/arc42.md](docs/arc42.md)** - Complete architecture documentation following arc42 template
- **[docs/decision-logic.md](docs/decision-logic.md)** - Detailed Decision Helper logic and rule engine documentation

### 🤝 Community & Development
- **[.github/CONTRIBUTING.md](.github/CONTRIBUTING.md)** - Contributing guidelines and development setup
- **[.github/CODE_OF_CONDUCT.md](.github/CODE_OF_CONDUCT.md)** - Community code of conduct
- **[.github/SECURITY.md](.github/SECURITY.md)** - Security policy and vulnerability reporting

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](.github/CONTRIBUTING.md) for:

- Development setup and guidelines
- Code style and architecture patterns
- Pull request process and requirements
- Testing and quality standards

### Issue Templates

- 🐛 [Bug Reports](.github/ISSUE_TEMPLATE/bug-report.yml)
- ✨ [Feature Requests](.github/ISSUE_TEMPLATE/feature-request.yml)
- 📚 [Documentation Issues](.github/ISSUE_TEMPLATE/documentation.yml)
- ❓ [Questions](.github/ISSUE_TEMPLATE/question.yml)

### Community

- 💬 [GitHub Discussions](https://github.com/pragmaticux/design/discussions)
- 📧 [Email Support](mailto:patrick.federi@ergon.ch)
- 🛡️ [Security Issues](mailto:security@pragmaticux.design)

This project follows a [Code of Conduct](.github/CODE_OF_CONDUCT.md) to ensure a welcoming environment.

## 🔒 Security

- **[Security Policy](.github/SECURITY.md)** - How to report security vulnerabilities
- **Contact**: security@pragmaticux.design
- **Security.txt**: https://pragmaticux.design/.well-known/security.txt

## 📁 Project Structure

```
pragmaticux/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── decision-helper/  # Decision Helper page
│   ├── methods/          # Methods overview page (NEW)
│   ├── principles/        # Individual principle pages
│   │   └── [id]/         # Dynamic route for principle details
│   ├── embed/            # Standalone embeddable tools
│   │   ├── methods/      # Standalone methods toolkit
│   │   ├── principles/   # Standalone principles guide
│   │   └── decision-helper/ # Standalone decision helper
│   ├── layout.tsx         # Root layout with Navigation & Footer
│   ├── page.tsx          # Home page
│   └── globals.css        # Global styles and Tailwind imports
├── components/            # React components
│   ├── About.tsx          # About page content
│   ├── CTA.tsx            # Call-to-action component
│   ├── CookieBanner.tsx   # GDPR cookie consent banner (mobile optimized)
│   ├── DecisionHelper.tsx # Interactive decision helper (5 questions + project phase)
│   ├── Footer.tsx         # Site footer with cookie settings
│   ├── Hero.tsx           # Hero section
│   ├── Layout.tsx         # Main layout wrapper
│   ├── MethodsOverview.tsx # Methods overview with filtering and modals
│   ├── Navigation.tsx     # Header navigation with mobile menu
│   ├── PrinciplesOverview.tsx # Principles grid overview
│   └── Workflow.tsx       # Workflow section
├── data/                  # Data files
│   ├── principles.json    # Core principles data
│   ├── methods.json       # UX methods data with descriptions and steps
│   ├── decision_tree.json # Decision tree for helper
│   ├── principles.ts      # Principles TypeScript exports
│   ├── methods.ts         # Methods TypeScript exports with categories
│   └── decisionTree.ts    # Decision tree TypeScript exports
├── lib/                   # Utility functions
│   └── utils.ts           # Helper functions (cn, etc.)
├── public/                # Static assets
│   └── assets/
│       └── images/
│           └── ergon_logo.svg
├── types/                 # TypeScript type definitions
│   ├── decisionTree.ts    # Decision tree types
│   └── index.ts          # Shared types (Principle, etc.)
├── .cursor/              # Cursor IDE rules
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🆕 Recent Updates (v2.0)

### ✨ New Features
- **Methods Overview Page** - Browse all 64+ UX methods with category filtering
- **Enhanced Decision Helper** - Added 5th question about project phase (start/middle/end)
- **Project Phase Methods** - Phase-specific method recommendations
- **Unified Design System** - Consistent card layouts and glassmorphism effects
- **Analytics Integration** - New quantitative research methods (Analytics Audit, Conversion Analysis)

### 🎨 UI/UX Improvements
- **Glassmorphism Design** - Modern glass effects on all interactive elements
- **Responsive Chips** - Category chips with consistent styling across pages
- **Unified Card Heights** - Perfect alignment of method cards
- **Mobile Optimization** - Improved touch targets and spacing
- **Navigation Update** - Methods now appear before Decision Helper

### 📊 Content Expansion
- **51 UX Methods** - Comprehensive collection across 6 categories
- **New Methods Added**: Design Studio, Analytics Audit, Conversion Funnel Analysis, User Segmentation Analysis
- **Method Renaming**: "Field Studies" → "Contextual Inquiry" for better UX terminology
- **Duplicate Removal**: Cleaned up categorization data

### 🏗 Technical Improvements
- **TypeScript Enhancement** - Better type safety across components
- **State Management** - Improved localStorage persistence
- **Performance** - Optimized rendering and bundle size
- **Accessibility** - Enhanced keyboard navigation and ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.7 (React 19.2.1)
- **Styling**: Tailwind CSS 3.4.0
- **Language**: TypeScript 5.9.3
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge, class-variance-authority
- **Deployment**: Optimized for Vercel (also works with Netlify, AWS Amplify, Railway)

## 📝 Features

### Core Principles
Eight fundamental UX principles with detailed explanations, practical examples, and key questions:

1. **UX Should Fit the Process** - Adapt UX methods to your team's workflow
2. **Efficiency Over Delight** - Focus on what truly matters for users and business
3. **Empower, Not Overcomplicate** - Simplify rather than add complexity
4. **Theory Is Nice, but Execution Wins** - Practical implementation beats perfect theory
5. **Research Should Be Right-Sized** - Match research depth to project needs
6. **Scale to Product Needs** - Adjust UX approach based on product maturity
7. **Iterate with Purpose** - Make informed iterations based on real insights
8. **Reuse Design Systems** - Leverage existing patterns and components

Each principle page includes:
- Detailed explanation
- Why it matters (key benefits)
- Practical examples
- Key questions to ask

### Decision Helper
An interactive tool that guides users through a series of questions to identify the most relevant principles for their specific situation. Features include:

- **Progressive Question Flow**: Step-by-step guidance through relevant questions
- **Answer Editing**: Edit any answer without restarting the entire process
- **State Persistence**: Progress saved in localStorage across sessions
- **Personalized Recommendations**: Get tailored principle suggestions based on your answers
- **Suggested Methods**: Receive specific UX methods to implement
- **Email Integration**: Pre-filled email template with results for easy sharing

### Responsive Design
Fully optimized for mobile, tablet, and desktop devices:

- **Mobile-First Navigation**: Hamburger menu with collapsible submenu for principles
- **Responsive Typography**: Scales appropriately across all screen sizes
- **Touch-Friendly Elements**: Optimized button sizes and spacing for mobile
- **Adaptive Layouts**: Grid systems that stack on mobile, expand on larger screens
- **Optimized Spacing**: Consistent padding and margins across breakpoints

### Performance Optimizations

- Static page generation where possible
- Optimized images and assets
- Efficient code splitting
- Fast page loads and smooth transitions

### Accessibility (WCAG 2.1 Level AA Compliant)

The website is fully accessible and meets WCAG 2.1 Level AA standards:

- **Semantic HTML**: Proper use of semantic elements (`<nav>`, `<main>`, `<section>`, `<footer>`)
- **ARIA Attributes**: Comprehensive ARIA labels, roles, and states for all interactive elements
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Screen Reader Support**: All content is accessible via screen readers
- **Color Contrast**: WCAG AA compliant contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text)
- **Skip Links**: Skip-to-main-content link for keyboard users
- **Focus Management**: Proper focus handling in modals and dropdowns
- **Alternative Text**: All images include descriptive alt text
- **Form Labels**: All form inputs have associated labels
- **Progress Indicators**: Accessible progress bars with ARIA attributes
- **Radio Groups**: Properly marked radio button groups in Decision Helper

**Key Accessibility Features:**
- Navigation dropdowns with `aria-expanded`, `aria-haspopup`, and `role="menu"`
- Decision Helper progress bar with `role="progressbar"` and ARIA value attributes
- Radio button groups with `role="radiogroup"` and `aria-checked` states
- All buttons and links have descriptive `aria-label` attributes
- Decorative elements marked with `aria-hidden="true"`
- Focus rings on all interactive elements for keyboard navigation visibility

## 🎨 Design Principles

The website itself follows pragmatic UX principles:

- **Clear Information Architecture**: Easy navigation and content discovery
- **Progressive Disclosure**: Information revealed as needed (mobile menu, decision helper)
- **Accessible Design**: Semantic HTML, ARIA attributes, keyboard navigation, WCAG 2.1 AA compliant
- **Performance**: Optimized loading and rendering
- **User-Centered**: Focus on user needs and goals
- **Consistent Design Language**: Unified color scheme, typography, and spacing

## 📦 Deployment

This Next.js application is optimized for deployment on Vercel and other modern hosting platforms.

### Vercel (Recommended)

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build

Or use the Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The application can be deployed to any platform that supports Node.js:

- **Netlify**: Connect your Git repository, Netlify will auto-detect Next.js
- **AWS Amplify**: Connect repository, configure build settings
- **Railway**: Connect repository, Railway auto-detects Next.js
- **Any Node.js hosting**: Run `npm run build` and deploy the `.next` folder

### Build Configuration

The project uses Next.js 15 with:
- App Router (app directory)
- Server Components by default
- Static generation where possible
- Dynamic routes for principle pages

## 🔧 Development Notes

### Next.js 15 Compatibility

This project uses Next.js 15 features:
- `params` in dynamic routes are now Promises (must be awaited)
- Server Components by default
- Improved TypeScript support

### TypeScript

All components and utilities are fully typed. The project includes:
- Type definitions for principles and decision tree
- Strict type checking enabled
- Type-safe data imports

### Styling

- Tailwind CSS for utility-first styling
- Custom color scheme using CSS variables
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Dark mode support (class-based)

## 🤝 Contributing

This is a personal project by Patrick Federi. For questions or suggestions, please reach out via the contact form on the website or through the email link in the Decision Helper results.

## 📄 License

This project is licensed under the **GNU General Public License v3.0** with additional attribution requirements - see the [LICENSE](LICENSE) file for details.

The GPL ensures that all derivatives and modifications remain open source, while the attribution clause maintains credit to the original Pragmatic UX Design framework.

### Key Permissions
- ✅ **Free use** - Use for any purpose
- ✅ **Modification** - Modify and create derivatives
- ✅ **Distribution** - Share copies of the code
- ✅ **Private use** - Use privately without restrictions
- ✅ **Integration** - Embed tools in your own applications

### GPL Requirements
- 📋 **Copyleft** - Modified versions must also be GPL-licensed
- 📋 **Source code** - Must provide source code with binaries
- 📋 **License notice** - Include GPL license text
- 📋 **State changes** - Document all modifications

### Attribution Requirements
- 📋 **Website attribution** - When used publicly, link to https://pragmaticux.design
- 📋 **Framework credit** - Acknowledge "Pragmatic UX Design" as the source
- 📋 **Tool attribution** - Credit the original methods and decision helper

### Usage Examples

**For websites using the Decision Helper:**
```html
<div class="ux-attribution">
  <small>
    UX Decision Tool powered by
    <a href="https://pragmaticux.design" target="_blank" rel="noopener">
      Pragmatic UX Design
    </a> (GPL v3.0)
  </small>
</div>
```

**For embedded methods:**
```html
<section class="methods-section">
  <!-- Your embedded methods content -->
  <footer class="attribution">
    Methods from <a href="https://pragmaticux.design/methods">Pragmatic UX Design</a>
    - Licensed under GPL v3.0
  </footer>
</section>
```

**For applications using the framework:**
```javascript
// In your app's about or credits section
const credits = {
  uxFramework: {
    name: "Pragmatic UX Design",
    url: "https://pragmaticux.design",
    license: "GNU General Public License v3.0",
    attribution: "Clear attribution and GPL compliance required"
  }
}
```

### GPL Compliance Checklist

When using this code in your projects:

- [ ] Include full GPL v3.0 license text
- [ ] Provide source code access if distributing binaries
- [ ] Document any modifications made
- [ ] Attribute to Pragmatic UX Design with website link
- [ ] Ensure derivative works are also GPL-licensed

## 👤 Author

**Patrick Federi**  
Head of UX at Ergon Informatik AG

## 🔗 Links

- 🌐 **Website**: [pragmaticux.design](https://pragmaticux.design)
- 📧 **Contact**: [patrick.federi@ergon.ch](mailto:patrick.federi@ergon.ch)
- 🐛 **Issues**: [GitHub Issues](https://github.com/pragmaticux/design/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/pragmaticux/design/discussions)
- 📖 **Documentation**: [Full Docs](https://pragmaticux.design/docs)
- 🔒 **Security**: [Report Vulnerabilities](mailto:security@pragmaticux.design)

---

*Built with ❤️ using Next.js, TypeScript, and Tailwind CSS*

---

Built with ❤️ using Next.js 15, React 19, and Tailwind CSS
