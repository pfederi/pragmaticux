# Pragmatic UX Design

A practical framework for maximizing UX impact without overcomplicating design processes. This website presents eight core principles that guide pragmatic UX practice, along with an interactive decision helper to find the most relevant principles for your situation.

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

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
pragmaticux/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── decision-helper/  # Decision Helper page
│   ├── principles/        # Individual principle pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── About.tsx
│   ├── CTA.tsx
│   ├── DecisionHelper.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Layout.tsx
│   ├── Navigation.tsx
│   ├── PrinciplesOverview.tsx
│   └── Workflow.tsx
├── data/                  # Data files
│   ├── principles.json    # Core principles data
│   ├── decision_tree.json # Decision tree for helper
│   ├── principles.ts      # TypeScript types
│   └── decisionTree.ts    # TypeScript types
├── lib/                   # Utility functions
│   └── utils.ts           # Helper functions
├── public/                # Static assets
│   └── assets/
│       └── images/
│           └── ergon_logo.svg
└── types/                 # TypeScript type definitions
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## 📝 Features

### Core Principles
Eight fundamental UX principles with detailed explanations and practical examples:
1. UX Should Fit the Process
2. Efficiency Over Delight
3. Empower, Not Overcomplicate
4. Theory Is Nice, but Execution Wins
5. Research Should Be Right-Sized
6. Scale to Product Needs
7. Iterate with Purpose
8. Reuse Design Systems

### Decision Helper
An interactive tool that guides users through a series of questions to identify the most relevant principles for their specific situation. Features include:
- Progressive question flow
- Answer editing without restarting
- State persistence using localStorage
- Personalized recommendations
- Suggested methods for implementation

### Responsive Design
Fully optimized for mobile, tablet, and desktop devices with:
- Mobile-first navigation with hamburger menu
- Responsive typography and spacing
- Touch-friendly interactive elements
- Optimized layouts for all screen sizes

## 🎨 Design Principles

The website itself follows pragmatic UX principles:
- **Clear Information Architecture**: Easy navigation and content discovery
- **Progressive Disclosure**: Information revealed as needed
- **Accessible Design**: Semantic HTML and ARIA attributes
- **Performance**: Optimized loading and rendering
- **User-Centered**: Focus on user needs and goals

## 📦 Deployment

This Next.js application can be deployed to any platform that supports Node.js:

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
The application can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Any Node.js hosting service

Simply run `npm run build` and deploy the `.next` folder along with `package.json`.

## 🤝 Contributing

This is a personal project by Patrick Federi. For questions or suggestions, please reach out via the contact form on the website.

## 📄 License

MIT License - see LICENSE file for details

## 👤 Author

**Patrick Federi**  
Head of UX at Ergon Informatik AG

---

Built with ❤️ using Next.js and Tailwind CSS
