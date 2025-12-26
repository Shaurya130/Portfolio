# 3D Portfolio Website

A modern, interactive 3D portfolio website built with React, Three.js, and cutting-edge web technologies. Features stunning 3D animations, smooth scrolling experiences, and responsive design.

## ✨ Features

- **3D Interactive Elements**: Desktop computer, planet earth, and floating tech balls
- **Smooth Animations**: Powered by Framer Motion for seamless transitions
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Modern UI**: Clean, professional design with dark theme
- **Contact Integration**: EmailJS integration for direct contact functionality
- **Performance Optimized**: Built with Vite for fast development and optimized builds

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **3D Graphics**: Three.js with React Three Fiber
- **3D Helpers**: React Three Drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Contact Form**: EmailJS
- **Additional Libraries**:
  - React Router DOM for navigation
  - React Tilt for interactive hover effects
  - React Vertical Timeline Component
  - Maath for mathematical utilities

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── About.jsx        # About section
│   ├── Contact.jsx      # Contact form
│   ├── Experience.jsx   # Experience timeline
│   ├── Hero.jsx         # Hero section
│   ├── Navbar.jsx       # Navigation bar
│   ├── Tech.jsx         # Technologies section
│   ├── Works.jsx        # Projects showcase
│   └── canvas/          # 3D canvas components
│       ├── Ball.jsx     # 3D tech balls
│       ├── Computers.jsx # 3D desktop computer
│       ├── Earth.jsx    # 3D planet earth
│       └── Stars.jsx    # Animated star field
├── constants/           # Static data and constants
├── hoc/                # Higher-order components
├── utils/              # Utility functions
└── assets/             # Images and static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## 🎨 Customization

### Adding Your Content

1. **Personal Information**: Update the constants in `src/constants/index.js`
2. **Projects**: Add your projects to the works section
3. **Experience**: Update your professional experience timeline
4. **Technologies**: Modify the tech stack display
5. **Contact**: Configure EmailJS with your service ID, template ID, and public key

### Styling

The project uses Tailwind CSS for styling. You can:
- Modify colors in `tailwind.config.cjs`
- Update animations in `src/utils/motion.js`
- Customize components in respective component files

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy Options

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Firebase Hosting**: Use Firebase CLI for deployment

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

Note: 3D features require WebGL support.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Performance Tips

- 3D models are optimized for web performance
- Lazy loading implemented for better initial load times
- Optimized asset sizes and compression
- Modern JavaScript features for better performance

---

Built with ❤️ using React and Three.js
