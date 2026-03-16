# Contributing to ITSFIZZ

Thank you for your interest in contributing to ITSFIZZ! We welcome contributions of all kinds, from bug reports to feature implementations.

## How to Contribute

### 1. Report a Bug
- Check if the bug has already been reported in [Issues](../../issues)
- Create a new issue with a clear title and description
- Include steps to reproduce the bug
- Add screenshots or videos if applicable

### 2. Suggest an Enhancement
- Open an issue describing the enhancement
- Explain why this enhancement would be useful
- Provide examples or mockups if relevant

### 3. Submit a Pull Request
1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/itsfizz.git
   cd itsfizz
   ```

2. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Write clear, descriptive commit messages
   - Test your changes locally

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: Brief description of your changes"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Add a description of your changes
   - Submit the PR

## Code Style Guidelines

### TypeScript/JavaScript
- Use TypeScript for new components
- Follow ESLint configuration
- Use consistent naming conventions
- Add JSDoc comments for complex functions

### CSS
- Use Tailwind CSS utility classes
- Keep custom CSS in globals.css
- Use meaningful class names
- Follow mobile-first responsive design

### Component Structure
```typescript
'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Props {
  // Define props
}

export default function ComponentName({ props }: Props) {
  // Component logic
  return (
    // JSX
  );
}
```

## Development Workflow

### Setup Development Environment
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Commit Message Convention

Follow conventional commits:
- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Test additions or modifications

Examples:
```bash
git commit -m "feat: Add scroll trigger animations to hero section"
git commit -m "fix: Resolve animation stuttering on mobile devices"
git commit -m "docs: Update deployment guide with Vercel instructions"
```

## Testing

Before submitting a PR:
1. Test locally with `npm run dev`
2. Check responsiveness on multiple devices
3. Test animations on different browsers
4. Verify build succeeds with `npm run build`

## Performance Considerations

When adding features:
- Minimize DOM reflows and repaints
- Use `transform` and `opacity` for animations
- Optimize images and assets
- Monitor bundle size
- Consider mobile performance impacts

## Accessibility

- Use semantic HTML
- Ensure proper color contrast
- Add `alt` text to images
- Make animations respectful of `prefers-reduced-motion`
- Test with screen readers

## Documentation

- Update README.md for new features
- Add comments to complex code
- Create documentation for new components
- Update DEPLOYMENT.md if needed

## Questions?

- Open a GitHub Discussion
- Check the [README](README.md) and [DEPLOYMENT](DEPLOYMENT.md) guides
- Review existing issues and PRs

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to ITSFIZZ!** 🚀✨
