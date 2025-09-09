# Node.js CI/CD Pipeline Project

This project demonstrates a complete Node.js CI/CD pipeline for testing, building, and deployment using Vite as the build tool.

## 🚀 Features

- **Vite** - Fast build tool and development server
- **Vitest** - Unit testing framework with coverage
- **ESLint** - Code linting and formatting
- **GitHub Actions** - Automated CI/CD pipeline
- **Production-ready** - Build and deployment scripts

## 📦 Getting Started

### Prerequisites
- Node.js 18+ (recommended)
- npm or yarn

### Installation

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:5173`

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run unit tests |
| `npm run test:ui` | Run tests with UI interface |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Check code quality |
| `npm run lint:fix` | Fix linting issues automatically |

## 🧪 Testing

This project uses **Vitest** for testing:

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🏗️ CI/CD Pipeline

The project includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that:

1. **Installs dependencies** on multiple Node.js versions
2. **Runs linting** to ensure code quality
3. **Executes tests** with coverage reporting
4. **Builds the project** for production
5. **Deploys** to staging/production (configurable)

### Pipeline Triggers
- Push to `main` branch
- Pull requests to `main` branch
- Manual workflow dispatch

## 📁 Project Structure

```
pipelines/
├── .github/
│   └── workflows/
│       └── ci.yml          # CI/CD workflow
├── public/                 # Static assets
├── src/                    # Source code
│   ├── main.js            # Entry point
│   └── __tests__/         # Test files
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🚀 Deployment

The pipeline supports multiple deployment strategies:

### Manual Deployment
```bash
npm run build
# Deploy the `dist/` folder to your hosting provider
```

### Automated Deployment
The GitHub Actions workflow can be configured to deploy to:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any hosting provider with CLI tools

## 🔧 Configuration

### Environment Variables
Create a `.env` file for local development:
```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Pipeline Demo
```

### GitHub Secrets
For deployment, configure these secrets in your GitHub repository:
- `DEPLOY_TOKEN` - Deployment authentication token
- `DEPLOY_URL` - Target deployment URL

## 📊 Monitoring

The CI/CD pipeline includes:
- **Test coverage reports**
- **Bundle size analysis**
- **Performance metrics**
- **Deployment status tracking**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy coding! 🎉**
