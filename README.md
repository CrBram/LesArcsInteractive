# Three.js Template

A modern, clean template for building Three.js applications with React, TypeScript, and Vite.

## Description

This template provides a solid foundation for creating 3D web experiences using React Three Fiber. It includes all the essential dependencies and a basic scene setup to get you started quickly.

## Technologies Used

### Core Technologies

- **React** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing

### 3D & Graphics

- **React Three Fiber** - React renderer for Three.js
- **Three.js** - 3D graphics library
- **@react-three/drei** - Useful helpers for React Three Fiber

### State Management & Animation

- **Zustand** - Lightweight state management (optional)
- **GSAP** - Professional animation library (optional)

### Styling & UI

- **Tailwind CSS** - CSS framework
- **Radix UI** - Accessible UI component primitives (optional)
- **Lucide React** - Icon library (optional)

## Project Structure

```
src/
├── components/          # React components
│   ├── models/         # 3D model components
│   └── ui/             # Reusable UI components
├── pages/              # Page-level components
│   └── Home.tsx        # Main page with Three.js scene
├── hooks/              # Custom React hooks
├── store/              # Zustand state stores (optional)
├── data/               # Static data (optional)
└── lib/                # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Features

- ✅ React Three Fiber setup
- ✅ TypeScript configuration
- ✅ Tailwind CSS configured
- ✅ Basic 3D scene example
- ✅ Orbit controls for camera interaction
- ✅ Responsive design ready

## Customization

1. **Add 3D Models**: Place your GLTF/GLB models in `public/models/` and load them using `useGLTF` from `@react-three/drei`
2. **Customize Scene**: Edit `src/pages/Home.tsx` to build your 3D scene
3. **Add Components**: Create reusable components in `src/components/`
4. **State Management**: Use Zustand stores in `src/store/` for complex state
5. **Styling**: Customize Tailwind theme in `tailwind.config.js`

## Resources

- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [Three.js Documentation](https://threejs.org/docs/)
- [@react-three/drei Documentation](https://github.com/pmndrs/drei)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This template is free to use for any project.
