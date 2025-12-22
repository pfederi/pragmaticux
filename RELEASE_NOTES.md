# Release Notes - Pragmatic UX Design Website

## Version 2.1.0 (Current Release)

**Release Date:** December 22, 2025

## Overview

Version 2.1 adds a comprehensive Books Recommendations page with 33 curated UX design books, expanding the learning resources available on the Pragmatic UX Design framework website.

## New Features

### Books Recommendations Page
- **New Route**: `/books` - Complete overview of 33 curated UX design books
- **Category Filtering**: Filter books by Usability, Fundamentals, Interaction Design, Process & Methods, Psychology, Research
- **Level Filtering**: Filter by Beginner, Intermediate, Advanced, or All levels
- **Book Details**: Each book includes description, why it's recommended, key takeaways, Amazon link, and cover image
- **Cover Images**: 32 book cover images automatically downloaded from Goodreads API
- **Responsive Design**: Optimized card layouts with gradient backgrounds matching the design system

### Content Expansion
- **33 UX Books** - Curated selection of essential UX design books from multiple sources
- **Book Sources**: Books curated from Interaction Design Foundation, UXfolio, UX Planet, and internal library
- **Automated Image Management**: Script to download book cover images from Goodreads API

### Technical Improvements
- **New Component**: BooksOverview - Complete books browsing interface with filtering and modals
- **New Scripts**: `download-book-covers.js` - Automated script to download book cover images
- **Image Management**: Book cover images stored locally in `public/images/books/`
- **Type Safety**: Expanded TypeScript interfaces for books data

## Documentation Updates

- **README.md**: Comprehensive feature overview including Books page, setup instructions, and new scripts
- **arc42.md**: Complete architecture documentation with new BooksOverview component
- **public/images/books/README.md**: Documentation for book cover image management

---

## Version 2.0.0

**Release Date:** December 17, 2025

## Overview

Version 2.0 brings major enhancements to the Pragmatic UX Design framework website, including a comprehensive Methods Overview, enhanced Decision Helper with project phase awareness, and significant UI/UX improvements with modern glassmorphism design.

## New Features

### Methods Overview Page
- **New Route**: `/methods` - Complete overview of all UX methods
- **Category Filtering**: Filter methods by Research, Design, Testing, Implementation, Strategy, Optimization
- **Interactive Cards**: Click any method to view detailed instructions and contact options
- **Responsive Design**: Optimized for all screen sizes

### Enhanced Decision Helper
- **5 Questions Instead of 4**: Added project phase question
- **Project Phase Awareness**: Choose from "Project start", "Middle of development", "Near release"
- **Phase-Specific Recommendations**: Methods tailored to your project stage
- **Prioritized Results**: Project phase methods guaranteed to appear in results

### Improved User Experience
- **Glassmorphism Design**: Modern glass effects on all interactive elements
- **Unified Card Layouts**: Consistent heights and spacing across all method cards
- **Responsive Chips**: Category indicators with hover effects and proper truncation
- **Mobile Optimization**: Improved touch targets and compact layouts

### Content Expansion
- **51 UX Methods** - Comprehensive collection across 6 categories
- **New Methods Added**:
  - Design Studio (Design & Creation)
  - Analytics Audit (Research & Analysis)
  - Conversion Funnel Analysis (Research & Analysis)
  - User Segmentation Analysis (Research & Analysis)
- **Method Renaming**: "Field Studies" → "Contextual Inquiry" for industry standards

## Technical Improvements

### Architecture Updates
- **New Components**: MethodsOverview, Modal, CookieBanner
- **Enhanced State Management**: Improved localStorage persistence
- **Better Type Safety**: Expanded TypeScript interfaces
- **Performance**: Optimized rendering and reduced bundle size

### Design System
- **Consistent Styling**: Unified color schemes and spacing
- **Glassmorphism Effects**: backdrop-blur and semi-transparent backgrounds
- **Improved Accessibility**: Better keyboard navigation and ARIA labels
- **Cross-Device Compatibility**: Enhanced responsive breakpoints

### Data Quality
- **Duplicate Removal**: Cleaned up categorization data across all methods
- **Consistent Naming**: Standardized terminology throughout
- **Enhanced Rule Engine**: More sophisticated decision matching logic

## Bug Fixes

- **Hydration Mismatches**: Fixed Next.js SSR/client-side rendering issues
- **Card Height Inconsistencies**: Unified card heights with flex layouts
- **Chip Text Wrapping**: Prevented text overflow with proper truncation
- **Navigation Ordering**: Updated menu structure for better UX flow
- **Modal Functionality**: Restored modal opening/closing across all contexts

## Documentation Updates

- **README.md**: Comprehensive feature overview and setup instructions
- **arc42.md**: Complete architecture documentation with new components
- **decision-logic.md**: Updated rule engine documentation (19 rules total)

## Migration Notes

### For Existing Users
- **Cache Clearing Required**: Clear browser cache to see new 5-question Decision Helper
- **Navigation Changes**: Methods now appear before Decision Helper in menu
- **Enhanced Persistence**: Decision Helper state now includes project phase

### Breaking Changes
- **API Changes**: Decision Tree now includes 5 questions (was 4)
- **Component Interfaces**: Some internal component props updated for consistency
- **Styling**: Updated class names for glassmorphism effects

## Impact Assessment

### User Benefits
- **Better Discovery**: Methods Overview makes finding relevant methods easier
- **Contextual Recommendations**: Project phase integration provides more relevant suggestions
- **Improved Usability**: Glassmorphism and unified layouts enhance visual appeal
- **Mobile Experience**: Significantly improved mobile interaction quality

### Performance Metrics
- **Page Load**: Maintained fast loading times despite content expansion
- **Bundle Size**: Optimized to prevent significant increases
- **Accessibility Score**: Improved with better semantic markup and ARIA labels

## Previous Versions

### Version 1.0.0 (Initial Release)

**Release Date:** Initial Launch

**Features:**
- **Core Framework**: Eight UX Design principles with detailed explanations
- **Basic Decision Helper**: 4-question interactive flow for principle recommendations
- **Responsive Design**: Mobile-optimized layouts and interactions
- **State Persistence**: localStorage-based progress saving
- **Email Integration**: Share results via pre-filled email templates

## Acknowledgments

Special thanks to the UX community for feedback and inspiration. This release represents a significant step toward making pragmatic UX practices more accessible and actionable.

## Support

- **Documentation**: Check updated README.md and arc42.md
- **Issues**: Report bugs via GitHub Issues
- **Contact**: Use the contact form or email for support

---

**Version**: 2.1.0
**Release Date**: December 22, 2025
**Previous Version**: 2.0.0
