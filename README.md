# 3D Portfolio

A modern, interactive 3D portfolio website built with React and Three.js, featuring smooth animations and an immersive user experience.

## 🚀 Tech Stack

### Core
- **React** 19.1.1 - UI library for building interactive interfaces
- **Vite** 7.1.7 - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript with module support

### 3D & Animation
- **Three.js** 0.180.0 - 3D graphics library for WebGL
- **@react-three/fiber** 9.4.0 - React renderer for Three.js
- **@react-three/drei** 10.7.6 - Useful helpers for react-three-fiber
- **Framer Motion** 12.23.24 - Animation library for React

### Styling
- **Tailwind CSS** 4.1.16 - Utility-first CSS framework
- **@tailwindcss/vite** 4.1.16 - Vite plugin for Tailwind CSS

### Smooth Scrolling
- **@studio-freight/lenis** 1.0.42 - Smooth scroll library

### Development Tools
- **ESLint** 9.36.0 - Code linting and quality
- **Babel React Compiler** 19.1.0-rc.3 - React optimization compiler
- **@vitejs/plugin-react** 5.0.4 - Vite plugin for React

## 📁 Project Structure

```
3d-Portfolio/
├── src/
│   ├── components/
│   │   ├── AboutMe.jsx
│   │   ├── AnimatedBackground.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Scene3D.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd 3d-Portfolio
```

2. Install dependencies:
```bash
npm install
```

## 🚦 Usage

### Development Mode
Start the development server:
```bash
npm run dev
```

### Build for Production
Create an optimized production build:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Lint Code
Run ESLint to check code quality:
```bash
npm run lint
```

## ✨ Features

- **3D Interactive Elements** - Immersive 3D graphics powered by Three.js
- **Smooth Animations** - Fluid transitions and staggered animations using Framer Motion throughout all components
- **Animated Navbar** - Sleek navbar with slide-in animations and staggered link reveals
- **Responsive Design** - Mobile-friendly layout with Tailwind CSS and responsive navigation
- **Smooth Scrolling** - Enhanced scroll experience with Lenis
- **Modern Stack** - Built with the latest React 19 and Vite 7 technologies
- **Optimized Performance** - Fast loading and rendering with Babel React Compiler
- **Interactive UI** - Hover effects, gradient text, and glassmorphism design

## 📄 License

This project is private and not licensed for public use.

## 🤝 Contributing

This is a personal portfolio project. If you'd like to use it as a template, feel free to fork and customize it for your own use.

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
