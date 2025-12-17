# Contributing to Pragmatic UX Design

Thank you for your interest in contributing to Pragmatic UX Design! This document provides guidelines and information for contributors.

## 🚀 Quick Start

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/pragmaticux.git`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`
5. Create a feature branch: `git checkout -b feature/your-feature-name`

## 📝 Issues

- Use the provided issue templates when creating new issues
- Check existing issues before creating new ones
- Be descriptive and provide context

### Issue Types

- 🐛 **Bug Reports**: Use the bug report template
- ✨ **Feature Requests**: Use the feature request template
- 📚 **Documentation**: Use the documentation template
- ❓ **Questions**: Use the question template

## 🔄 Pull Requests

### Guidelines

- Create a feature branch from `main`
- Follow the existing code style and conventions
- Write clear, concise commit messages
- Update documentation if needed
- Test your changes thoroughly

### PR Template

When creating a pull request, please include:

1. **Description**: What does this PR do?
2. **Related Issues**: Link to any related issues
3. **Changes Made**: List the key changes
4. **Testing**: How did you test the changes?
5. **Screenshots**: If UI changes, include screenshots

### Code Style

- **TypeScript**: Strict typing required
- **Components**: Functional components with hooks
- **Styling**: Tailwind CSS with consistent class naming
- **Comments**: Code should be self-documenting (minimal comments)
- **Performance**: Use `useCallback` and `useMemo` appropriately

## 🏗️ Architecture

### Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

### Project Structure

```
pragmaticux/
├── app/                    # Next.js app directory
├── components/            # React components
├── data/                  # Static data (JSON/TS)
├── docs/                  # Documentation
├── lib/                   # Utility functions
├── public/                # Static assets
└── types/                 # TypeScript definitions
```

## 🧪 Testing

- Test your changes in multiple browsers
- Check mobile responsiveness
- Verify accessibility (WCAG AA compliance)
- Run `npm run build` to ensure no build errors

## 📚 Documentation

- Update README.md for new features
- Update docs/arc42.md for architectural changes
- Update docs/decision-logic.md for logic changes
- Keep code self-documenting

## 🎯 UX Principles

Remember our core principles when contributing:

1. **UX Should Fit the Process** - Adapt to existing workflows
2. **Efficiency Over Delight** - Focus on practical value
3. **Empower, Not Overcomplicate** - Keep it simple
4. **Theory Is Nice, but Execution Wins** - Results matter
5. **Research Should Be Right-Sized** - Appropriate effort
6. **Scale to Product Needs** - Match complexity to scale
7. **Iterate with Purpose** - Intentional improvements
8. **Reuse Design Systems** - Leverage existing solutions

## 📞 Contact

- **Issues**: Use GitHub issues with appropriate templates
- **Discussions**: General discussions on GitHub Discussions
- **Email**: patrick.federi@ergon.ch for business inquiries

Thank you for contributing to Pragmatic UX Design! 🎉
