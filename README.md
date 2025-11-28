# Soma — Analog Digital Detox Kits

A beautiful single-page landing page for Soma, a monthly subscription service delivering tactile, screen-free projects curated by artisan makers.

## Features

- **Hero Section**: Engaging video background with compelling call-to-action buttons
- **Features Showcase**: Three feature cards highlighting key benefits (Expertly Curated Projects, All Materials Included, A Community of Makers)
- **Interactive Unboxing Simulator**: Step-by-step kit reveal experience with progress tracking
- **Archive Gallery**: Filterable gallery of past kits with categories (Textiles, Paper, Clay)
- **Modal Details**: Click on archive items to view detailed information in a modal
- **Responsive Design**: Mobile-friendly navigation with offcanvas menu for smaller screens
- **Custom Hand Icon**: Unique CSS-based hand icon with wood power symbol
- **Smooth Animations**: Hover effects, transitions, and pulse animations for enhanced user experience
- **Modern UI**: Clean, minimalist design with a warm color palette inspired by natural materials

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with CSS variables, animations, and responsive design
- **JavaScript (Vanilla)**: Interactive functionality for unboxing simulator and archive gallery
- **Bootstrap 5.3.3**: Grid system, components (offcanvas, modal, buttons), and utility classes
- **Google Fonts**: DM Sans font family for typography
- **External Resources**: 
  - Video from Coverr.co
  - Images from Pexels

## Project Overview

Soma is a single-page landing page designed to showcase an analog digital detox kit subscription service. The page emphasizes tactile experiences, craftsmanship, and the value of screen-free activities. The design uses a warm, earthy color palette (linen, charcoal, craft tones) to create a sense of authenticity and connection to natural materials.

The page includes multiple interactive sections that engage visitors and demonstrate the product's value proposition through visual storytelling and interactive elements.

## Project Structure

```
Soma/
│
├── index.html          # Main HTML file with all page content
├── styles.css          # Custom CSS styles and animations
├── script.js           # JavaScript for interactivity (unboxing & archive)
├── README.md           # Project documentation
└── assets/
    └── favicon.svg     # Site favicon
```

### Key Sections in index.html:
- Header with top bar announcement
- Navigation with responsive offcanvas menu
- Hero section with video background
- Features section
- Unboxing simulator section
- Archive gallery with filtering
- Footer with copyright and RiverTheme link
- Bootstrap modal for archive details

## Setup Instructions

### Prerequisites
No special prerequisites required. The project uses only standard web technologies and CDN resources.

### Installation

1. **Clone or download** the project files to your local machine

2. **Open the project** in your preferred code editor

3. **Run the project** using one of the following methods:

   **Option 1: Direct File Opening**
   - Simply open `index.html` in your web browser
   - Note: Some features may be limited due to CORS restrictions when opening directly

   **Option 2: Local Server (Recommended)**
   - Using Python 3:
     ```bash
     python -m http.server 8000
     ```
   - Using Node.js (http-server):
     ```bash
     npx http-server
     ```
   - Using PHP:
     ```bash
     php -S localhost:8000
     ```
   - Then navigate to `http://localhost:8000` in your browser

4. **Customization** (Optional):
   - Modify `styles.css` to change colors, fonts, or styling
   - Update content in `index.html` to match your needs
   - Edit `script.js` to modify interactive behavior or add new features

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design works on desktop, tablet, and mobile devices

## Intended Use

This project is designed for:

- **Demo Purposes**: Showcase the design and functionality of a landing page
- **Instructional Use**: Learn modern web development techniques including:
  - Responsive design with Bootstrap
  - Interactive JavaScript functionality
  - CSS animations and transitions
  - Modal and offcanvas components
- **Personal Projects**: Use as a starting point for personal websites or portfolios
- **Learning**: Study the code structure and implementation patterns

**Note**: For production deployments, commercial use, or advanced customizations, please refer to the license section below.

---

# 📄 License

**License for RiverTheme**

RiverTheme makes this project available for demo, instructional, and personal use. You can ask for or buy a license from [RiverTheme.com](https://RiverTheme.com) if you want a pro website, sophisticated features, or expert setup and assistance. A Pro license is needed for production deployments, customizations, and commercial use.
