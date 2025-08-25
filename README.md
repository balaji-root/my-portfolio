# Balaji R - Cybersecurity Student Portfolio

A modern, terminal-inspired student portfolio showcasing cybersecurity learning journey, projects, and academic achievements with Matrix-style animations and interactive elements.

## 🚀 Features

- **Terminal Interface Design**: Authentic command-line aesthetics
- **Matrix Rain Animation**: Dynamic background effects
- **Cybersecurity Theme**: Dark theme with neon green accents
- **Responsive Design**: Works on all device sizes
- **Interactive Terminal**: Typewriter effects and command simulation
- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom cybersecurity theme
- **Backend**: Express.js serverless functions
- **Package Manager**: PNPM
- **Hosting**: Render

## 🎨 Design Elements

- **Colors**: Terminal green (#00ff00), cyan (#00ffff), red (#ff0000)
- **Typography**: JetBrains Mono (monospace font)
- **Animations**: Matrix rain, terminal cursor blink, glow effects
- **Layout**: Command-line inspired interface

## 🚀 Quick Start

### Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm run build:client

# Test production build locally
pnpm preview
```

## 🌐 Deploy to Render

### Method 1: Git Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Portfolio ready for deployment"
   git push origin main
   ```

2. **Connect to Render**
   - Go to [Render](https://render.com)
   - Click "New" → "Web Service"
   - Connect your GitHub account
   - Select your portfolio repository

3. **Configure Build Settings**
   - **Service Type**: Static Site
   - **Build Command**: `pnpm install && pnpm run build:client`
   - **Publish Directory**: `dist/spa`
   - **Environment**: `NODE_ENV=production`

   *Note: These settings are pre-configured in `render.yaml`*

4. **Deploy**
   - Click "Create Static Site"
   - Your portfolio will be live in minutes!

### Method 2: Using render.yaml (Automatic)

1. **Ensure render.yaml is configured** (already included):
   ```yaml
   services:
     - type: static
       name: balaji-cybersec-portfolio
       plan: free
       buildCommand: pnpm install && pnpm run build:client
       publishPath: ./dist/spa
       envVars:
         - key: NODE_ENV
           value: production
   ```

2. **Connect Repository**: Render will automatically use the configuration from `render.yaml`

### Method 3: Manual Configuration

1. **Create a new Static Site** on Render
2. **Configure manually**:
   - **Build Command**: `pnpm install && pnpm run build:client`
   - **Publish Directory**: `dist/spa`
   - **Environment Variables**:
     - `NODE_ENV=production`

## 📁 Project Structure

```
client/                   # React frontend
├── components/           # Reusable components
│   ├── Terminal.tsx      # Interactive terminal component
│   ├── MatrixRain.tsx    # Matrix background effect
│   ├── Navigation.tsx    # Terminal-styled navigation
│   └── PlaceholderPage.tsx # Template for sections
├── pages/                # Route components
│   ├── Index.tsx         # Homepage
│   ├── About.tsx         # About section
│   ├── Projects.tsx      # Projects section
│   └── Contact.tsx       # Contact section
├── data/                 # Project data
│   └── projects/         # Individual project files
└── global.css            # Global styles and theme

render.yaml               # Render deployment configuration

server/                   # Express backend (for local dev)
├── index.ts              # Server configuration
└── routes/               # API routes

shared/                   # Shared types
└── api.ts                # API interfaces
```

## 🎯 Customization

### Personal Information

Update the following files with your information:

1. **client/pages/Index.tsx**: Main hero section
2. **client/components/Terminal.tsx**: Terminal commands and outputs
3. **client/components/Navigation.tsx**: Brand name and links
4. **client/data/projects/**: Individual project details

### Content Sections

The portfolio includes:

1. **About**: Personal background and academic journey
2. **Projects**: Portfolio projects with live demos and GitHub links
3. **Contact**: Contact information and social links

### Theme Customization

Modify colors in:

1. **tailwind.config.ts**: Color definitions
2. **client/global.css**: CSS variables
3. **client/components/**: Component-specific styling

## 🔧 Terminal Commands

The portfolio simulates various terminal commands:

- `whoami` - Personal identification
- `cat /etc/skills` - Skills overview
- `ls -la ~/projects` - Project listings
- `cat ~/.motto` - Personal motto
- `ping contact` - Contact information

## 📱 Responsive Design

- **Mobile**: Optimized touch interface
- **Tablet**: Adjusted layout and spacing
- **Desktop**: Full terminal experience
- **Large Screens**: Enhanced visual effects

## 🚦 Performance & Security

- **Fast Loading**: Optimized Vite build
- **Global Distribution**: Render's global network
- **HTTPS**: Automatic SSL certificates
- **SPA Routing**: Client-side navigation
- **SEO Friendly**: Meta tags and structured content

## 🔧 Environment Variables

For local development, create a `.env` file:

```bash
# Add any environment variables here
NODE_ENV=development
```

## 📞 Support

For questions about deployment or customization:

- Check [Render Documentation](https://render.com/docs)
- Review the project's GitHub repository
- Contact the developer through the portfolio

## 🤝 Contributing

Feel free to fork this project and customize it for your own cybersecurity portfolio!

---

**Security Note**: This is a portfolio website. Ensure you don't include sensitive information or credentials in your public repository.

**Deployment Status**: This project is optimized for Render deployment with automatic builds, HTTPS, and Node.js hosting configured.
