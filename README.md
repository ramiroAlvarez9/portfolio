# OS-Style Portfolio

A modern portfolio website based on GNOME desktop environment, built with Preact and featuring an authentic operating system experience.

## ✨ Features

- **GNOME-Based Desktop Interface** - OS-style interface inspired by GNOME with taskbar and dock
- **Responsive Design** - Horizontal dock on desktop (≥768px), vertical on mobile
- **Dark/Light Theme Toggle** - Smooth transitions with adaptive wallpapers
- **Glass Morphism UI** - Modern blur effects and transparency
- **Window Management** - React WinBox integration for desktop-style windows
- **Adwaita Typography** - Official GNOME font for authentic experience

## 🚀 Tech Stack

- **Framework**: Preact + Vite
- **Styling**: CSS with CSS Variables for theming
- **Icons**: Lucide React
- **Windows**: React WinBox
- **Typography**: Adwaita Sans (GNOME official font)

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📱 Responsive Behavior

- **Desktop (≥768px)**: Horizontal dock at bottom, larger icons, full top bar
- **Mobile (<768px)**: Vertical dock on left side, compact icons, simplified top bar

## 🎨 Theme System

The portfolio features a dual-theme system with:

- Smooth wallpaper crossfade transitions
- Adaptive glass morphism effects
- Theme-aware UI components
- CSS variables for consistent theming

## 🔧 Architecture

- Mobile-first responsive design
- Component-based architecture following Preact patterns
- CSS custom properties for theme management
- Modular styling with component-specific CSS files
