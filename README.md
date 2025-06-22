# Atharva Vichare - Interactive Portfolio Website

A modern, responsive portfolio website showcasing my professional experience, projects, and skills. Built with React, TypeScript, and enhanced with powerful GSAP animations for an engaging user experience.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue) ![GSAP](https://img.shields.io/badge/GSAP-Latest-orange)

## ✨ Interactive Features

### 🎭 **Advanced Animations**
- **GSAP-Powered Animations**: Smooth, performant animations using GreenSock Animation Platform
- **Scroll-Triggered Effects**: Elements animate as they come into view
- **Interactive Avatar**: 3D tilt effects, hover animations, and click interactions
- **Staggered Animations**: Sequential element reveals for professional feel
- **Smooth Scrolling**: GSAP-powered smooth navigation between sections

### 🎯 **Interactive Avatar**
- **Floating Animation**: Continuous gentle floating motion
- **3D Tilt Effect**: Real-time mouse tracking with 3D perspective
- **Hover Effects**: Scale, rotation, and glow effects on hover
- **Click Interactions**: Bounce animation with ripple effect
- **Responsive Design**: Works seamlessly across all devices

### 🎨 **Enhanced User Experience**
- **Dark/Light Mode**: Seamless theme switching with smooth transitions
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Performance Optimized**: GPU-accelerated animations for smooth 60fps
- **Accessibility**: Screen reader friendly with proper ARIA labels

## 🚀 Key Features

- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS
- **GSAP Animations**: Professional-grade animations with ScrollTrigger
- **Interactive Components**: Hover effects, click animations, and micro-interactions
- **Smooth Navigation**: GSAP-powered smooth scrolling between sections
- **Resume Download**: Direct PDF download functionality
- **Social Integration**: Links to GitHub, LinkedIn, Twitter, and email
- **Mobile-First**: Responsive design that works on all screen sizes

## 🛠️ Technologies Used

### **Frontend Framework**
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.6.3** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework

### **Animation & Interaction**
- **GSAP** - Professional animation library
- **ScrollTrigger** - Scroll-based animations
- **ScrollToPlugin** - Smooth scrolling navigation
- **TextPlugin** - Text animations

### **UI Components**
- **Shadcn UI** - Beautiful, accessible components
- **HeroUI** - Additional UI components
- **React Icons** - Comprehensive icon library
- **Lucide React** - Modern icon set

### **Development Tools**
- **Vite** - Fast build tool and dev server
- **ESBuild** - Lightning-fast bundler
- **Wouter** - Lightweight routing solution

## 📁 Project Structure

```
portfolio/
├── client/                      # Frontend React application
│   ├── src/
│   │   ├── components/          # UI components
│   │   │   ├── HeroSection.tsx  # Interactive hero with GSAP animations
│   │   │   ├── AboutSection.tsx # Scroll-triggered animations
│   │   │   ├── ProjectsSection.tsx # Staggered project reveals
│   │   │   ├── Header.tsx       # Smooth scrolling navigation
│   │   │   └── ui/              # Shadcn UI components
│   │   ├── hooks/               # Custom React hooks
│   │   │   └── use-gsap.ts      # GSAP animation utilities
│   │   ├── lib/                 # Utility functions
│   │   │   └── gsap.ts          # GSAP configurations and helpers
│   │   ├── data/                # Resume and other data
│   │   ├── pages/               # Page components
│   │   └── types/               # TypeScript interfaces
├── public/                      # Static assets
│   └── resume.pdf              # Downloadable resume
└── server/                      # Express server
```

## 🎬 Animation Showcase

### **Hero Section**
- **Typing Animation**: Dynamic text typing effect
- **Staggered Entrances**: Title, subtitle, description, and buttons animate in sequence
- **Interactive Avatar**: 3D tilt, hover effects, and click animations
- **Social Icons**: Scale and hover effects

### **About Section**
- **Scroll-Triggered**: Cards animate as they enter viewport
- **Staggered Reveals**: Left and right columns animate with different timing
- **Stats Animation**: Scale-in effect for statistics cards

### **Projects Section**
- **Card Animations**: Projects animate in with scale and fade effects
- **Hover Interactions**: Cards lift and scale on hover
- **Staggered Layout**: Projects reveal in sequence

### **Navigation**
- **Smooth Scrolling**: GSAP-powered smooth navigation
- **Mobile Menu**: Slide-in animations with backdrop
- **Hover Effects**: Scale and color transitions

## 🏃‍♂️ Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5000
   ```

### **Available Scripts**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:client # Build client only
npm run preview      # Preview production build
npm run check        # TypeScript type checking
```

## 🎨 Customization

### **GSAP Animations**
- Modify animation configurations in `client/src/lib/gsap.ts`
- Adjust timing and easing in component-specific animations
- Add new scroll triggers in individual components

### **Interactive Avatar**
- Customize floating animation in `HeroSection.tsx`
- Adjust 3D tilt sensitivity and rotation limits
- Modify hover and click effects

### **Styling**
- Update Tailwind classes for visual changes
- Modify color schemes in `tailwind.config.ts`
- Customize component styles in individual files

## 📱 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 📞 Contact

- **Email**: atharvavichare57@gmail.com
- **LinkedIn**: [Atharva Vichare](https://www.linkedin.com/in/atharva-vichare-68739a213/)
- **GitHub**: [@atty57](https://github.com/atty57)
- **Twitter**: [@atharva1357](https://x.com/atharva1357)

---

⭐ **Star this repository if you found it helpful!**


