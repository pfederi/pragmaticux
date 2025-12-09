# Pragmatic UX Framework

A practical framework for maximizing UX impact without overcomplicating design processes.

## 🚀 Development

```bash
# Start development server with auto-reload
npm run dev

# Open http://localhost:8001 in your browser
```

## 🏗️ Build & Deploy

```bash
# Build for production
npm run build

# Deploy to server (build + upload)
npm run deploy

# Test SSH connection
npm run deploy:test
```

## 📁 Project Structure

```
pragmaticux/
├── components/          # Modular HTML components
│   ├── hero.html
│   ├── principles.html
│   ├── workflow.html
│   ├── decision-helper.html
│   ├── about.html
│   ├── contact.html
│   └── loader.js
├── data/               # JSON data files
│   ├── principles.json
│   └── decision_tree.json
├── assets/             # Images and static assets
│   └── images/
├── styles.css          # Main stylesheet
├── script.js           # Main JavaScript
├── index.html          # Main HTML file (loads components)
├── build.js           # Build script
└── deploy-ssh.js      # Deployment script
```

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Build**: Custom Node.js build script
- **Dev Server**: Live-server with auto-reload
- **Deployment**: SSH/SFTP via Node.js

## 📝 Features

- 8 Core UX Principles with interactive examples
- Dynamic decision tree for principle selection
- Responsive design with modern CSS Grid/Flexbox
- Modular component architecture
- Auto-reload development environment
- Automated build and deployment pipeline

---

Created by **Patrick Federi** - Head of UX at Ergon Informatik AG
