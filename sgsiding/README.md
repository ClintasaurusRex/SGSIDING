# SG Siding Website

A modern, responsive website for SG Siding, a professional siding company serving the Cowichan Valley and surrounding areas. Built with React, Vite, and Tailwind CSS.

## Features

- 🏠 Responsive design optimized for all device sizes
- 🎨 Modern UI with smooth animations and transitions
- 📱 Mobile-friendly navigation
- 📸 Image carousel showcase
- 📝 Contact form with EmailJS integration
- 🎯 Service showcase
- 💨 Fast performance with Vite

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Material Tailwind
- EmailJS
- React Router DOM
- Embla Carousel
- Radix UI Components
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone [your-repository-url]
cd sgsiding
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory with your EmailJS credentials:


4. Start the development server
```bash
npm run dev
```

## Project Structure

```
sgsiding/
├── src/
│   ├── components/
│   │   ├── ui/          # Reusable UI components
│   │   └── styles/      # Component-specific styles
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   └── assets/          # Images and other static assets
├── public/              # Public assets
└── ...config files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Styling

The project uses a combination of Tailwind CSS and custom CSS for styling. The theme can be customized in:

```javascript:sgsiding/tailwind.config.js
startLine: 1
endLine: 70
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

SG Siding - [Contact through the website]

