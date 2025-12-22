# Les Arcs Interactive

A modern, interactive 3D web application for exploring the Les Arcs ski resort. This immersive experience allows users to navigate through the resort's villages, discover points of interest, and learn about the area through information cards and voiceover narrations.

## Description

Les Arcs Interactive is an immersive web experience that combines detailed 3D visualization with an intuitive exploration interface. Users can navigate through the main Les Arcs overview, explore individual villages (Arc 1600, Arc 1800, Arc 2000, and Vallandry), and interact with points of interest to learn about the resort. The application features smooth camera animations, realistic 3D models, ambient audio, and informative voiceover narrations.

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
- **@react-three/postprocessing** - Post-processing effects
- **@react-three/rapier** - Physics engine integration
- **useGLTF** - GLTF/GLB model loading and optimization
- **useFrame** - Animation loop hook for React Three Fiber
- **Suspense** - React Suspense for loading logic

### State Management & Animation

- **React Context** - State management
- **GSAP** - Professional animation library for smooth camera transitions

### Styling & UI

- **Tailwind CSS** - CSS framework
- **Radix UI** - Accessible UI component primitives
- **Lucide React** - Icon library
- **Google Fonts** - Comme and Arimo font families

## Project Structure

```
src/
├── components/          # React components
│   ├── models/         # 3D model components (LesArcs, Arc1600, Arc1800, Arc2000, Vallandry)
│   ├── scene/          # Scene effects and audio (Snow, Lights, NarratorAudio, etc.)
│   ├── ui/             # Reusable UI components (Layout, Navigation, BackButton, etc.)
│   ├── icons/          # Custom icon components
│   ├── Arc1600Scene.tsx
│   ├── Arc1800Scene.tsx
│   ├── Arc2000Scene.tsx
│   ├── VallandryScene.tsx
│   ├── LandingScene.tsx
│   ├── MainScene.tsx
│   ├── InfoButtons.tsx
│   ├── InfoPoint.tsx
│   ├── InformationCard.tsx
│   ├── CameraNavigator.tsx
│   └── Loading.tsx
├── pages/              # Page-level components
│   ├── Landing.tsx     # Landing page
│   ├── LesArcs.tsx     # Main overview page
│   ├── Arc1600.tsx     # Arc 1600 village page
│   ├── Arc1800.tsx     # Arc 1800 village page
│   ├── Arc2000.tsx     # Arc 2000 village page
│   └── Vallandry.tsx   # Vallandry village page
├── contexts/           # React contexts
│   ├── CameraNavigationContext.tsx
│   ├── EnvironmentPresetContext.tsx
│   └── SoundContext.tsx
├── hooks/              # Custom React hooks
│   ├── useIsMobile.ts
│   └── useMouseClickSound.ts
└── lib/                # Utility functions
    └── utils.ts
```

## Key Features

- **3D Resort Exploration**: Interactive 3D models of Les Arcs and its villages
- **Interactive Navigation**: Clickable info points and navigation buttons to explore different locations
- **Smooth Camera Animations**: GSAP-powered camera transitions between points of interest
- **Information System**: Interactive information cards with descriptions of points of interest
- **Voiceover Narrations**: Audio narrations for each village and point of interest
- **Ambient Audio**: Background sounds including snowfall ambience and town ambience
- **Environment Presets**: Toggle between sunset and night lighting environments
- **Particle Effects**: Realistic snowfall particle system
- **Loading System**: Progress tracking for 3D model loading
- **Responsive Design**: Mobile and desktop optimized experience
- **Physics Integration**: Rapier physics engine for particle effects

## Design Choices

### State Management

- **React Context API** is used for managing camera navigation, environment presets, and sound settings. This provides a clean way to share state across components without prop drilling.

### 3D Rendering

- **React Three Fiber** provides a declarative approach to Three.js, making it easier to integrate 3D models with React's component lifecycle and state management.
- **Suspense** is used for handling async model loading, providing a better user experience during asset loading.
- **OrbitControls** from `@react-three/drei` enables intuitive camera interaction with constraints for better user experience.

### Animation Strategy

- **GSAP** handles complex camera animations and transitions between points of interest, providing smooth and professional-looking movements.
- **useFrame** from React Three Fiber manages real-time particle effects (snow) and other frame-by-frame animations.

### Audio System

- **Context-based audio management** allows centralized control of sound and voiceover settings.
- **User interaction required** to start audio (browser autoplay policies).
- **Separate controls** for ambient sounds and voiceover narrations.
- **Audio instances** are managed per component to allow proper cleanup and prevent memory leaks.

### Model Organization

- 3D models are organized by location (LesArcs, Arc1600, Arc1800, Arc2000, Vallandry).
- Models are loaded on-demand per page to optimize initial load time.
- GLB format is used for efficient model compression and loading.

### Camera Navigation

- **CameraNavigator** component handles smooth transitions between camera positions.
- **CameraNavigationContext** manages navigation state and target positions.
- **OrbitControls** with constraints prevent disorienting camera movements.
- **Initial state preservation** allows users to return to the starting view.

### Responsive Design

- Custom hooks (`useIsMobile`) are used to adapt UI layouts and interactions for different screen sizes.
- Touch-friendly controls and navigation for mobile devices.
- Responsive typography and spacing using Tailwind CSS breakpoints.

## Assets & Credits

### 3D Models

- All 3D models are GLB format files located in `public/models/`:
  - `LesArcs.glb` - Main resort overview
  - `Arc1600.glb` - Arc 1600 village model
  - `Arc1800.glb` - Arc 1800 village model
  - `Arc2000.glb` - Arc 2000 village model
  - `Vallandry.glb` - Vallandry village model

### Audio Assets

- **Narrations**: Located in `public/sound/narrations/` - Voiceover narrations for each village and point of interest
- **Ambient Sounds**:
  - `snowfall_ambient.mp3` - Background snowfall ambience
  - `town_ambience.mp3` - Town background sounds
- **Sound Effects**:
  - `mouse-click-1.mp3` - Click interaction sound
  - `tree_hit.mp3` - Environmental sound effect

### Images

- Icons and UI elements located in `public/images/`:
  - `axe_icon.svg`
  - `cabin_icon.svg`
  - `mountain_icon.svg`
  - `icicle_loader.svg`
  - `les_arcs_icon.svg`

## Development

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

## License

This project is created for educational purposes.

## Credits

Log Cabin Tutorial: https://www.youtube.com/shorts/yT5TSCCbODw
Chairlift Model: https://sketchfab.com/3d-models/chairlift-from-poly-by-google-bd3647efca8f46ebb9b2d1e48571c974
Ski Model: https://sketchfab.com/3d-models/low-poly-freeride-skis-8b27a5ff5c6f436ab18d6d1d5862aeb5
Barrel Model: https://sketchfab.com/3d-models/barrel-low-poly-56821e41827b440985dac6740945a3f6
Lantern Light: https://sketchfab.com/3d-models/hex-lantern-903558c9098943aa87124283ce93f393

Created by Bram Criel
