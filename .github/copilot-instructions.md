# Node.js CI/CD Pipeline Instructions

This workspace contains a complete Node.js CI/CD pipeline setup with testing, building, and deployment capabilities.

## Project Structure
- **Vite** - Modern build tool and development server
- **Vitest** - Fast unit testing framework with coverage
- **ESLint** - Code linting and quality checks
- **GitHub Actions** - Automated CI/CD workflows

## Key Files
- `package.json` - Project dependencies and scripts
- `vite.config.js` - Build and test configuration
- `eslint.config.js` - Code quality rules
- `.github/workflows/ci.yml` - CI/CD pipeline definition
- `src/__tests__/` - Test files directory

## Available Commands
- `npm run dev` - Start development server
- `npm test` - Run tests
- `npm run build` - Build for production
- `npm run lint` - Check code quality

## CI/CD Pipeline Features
- Multi-node version testing (18.x, 20.x, 22.x)
- Automated linting and testing
- Build artifact generation
- Staging and production deployment workflows
- Coverage reporting integration

## Next Steps
1. Install additional dependencies: `npm install`
2. Customize the source code in `src/`
3. Add more tests in `src/__tests__/`
4. Configure deployment targets in the CI/CD workflow
5. Set up GitHub repository secrets for deployment

The pipeline is ready to use and will automatically trigger on pushes to main/develop branches and pull requests.
