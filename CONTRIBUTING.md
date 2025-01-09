# Contributing to Elementrix UI

Welcome to Elementrix UI! Thank you for considering contributing to our project. Your contributions help improve and expand the framework. This document outlines the process and guidelines for contributing to ensure a smooth collaboration.

## How to Contribute

### 1. Fork the Repository
1. Navigate to the [Elementrix UI GitHub repository](https://github.com/DemiInfinity/elementrix-ui).
2. Click the **Fork** button in the top-right corner to create your own copy of the repository.

### 2. Clone the Repository
Clone your forked repository to your local machine:
```bash
git clone https://github.com/<your-username>/elementrix-ui.git
cd elementrix-ui
```

### 3. Create a Branch
Create a new branch for your contribution:
```bash
git checkout -b feature/your-feature-name
```

Use a descriptive branch name that reflects the purpose of your changes.

### 4. Make Changes
- Follow the project's coding standards (see [Coding Guidelines](#coding-guidelines)).
- Test your changes locally using the provided tools.
- Add or update unit tests as necessary.

### 5. Commit Changes
Commit your changes with a meaningful message:
```bash
git add .
git commit -m "Add meaningful description of changes"
```

### 6. Push Changes
Push your branch to your forked repository:
```bash
git push origin feature/your-feature-name
```

### 7. Submit a Pull Request
1. Go to the original repository on GitHub.
2. Click **Pull Requests** > **New Pull Request**.
3. Select the branch from your forked repository.
4. Provide a clear description of the changes you made.

### 8. Wait for Review
Your pull request will be reviewed by maintainers. Please address any feedback promptly.

---

## Coding Guidelines

### General
- Use [TypeScript](https://www.typescriptlang.org/) for all code.
- Follow the [StencilJS](https://stenciljs.com/) and [Storybook](https://storybook.js.org/) best practices.

### Linting and Formatting
- Ensure your code adheres to the linting rules:
  ```bash
  npm run lint
  ```
- Format your code using Prettier:
  ```bash
  npm run format
  ```

### Testing
- Write unit tests using **Jest**.
- Add end-to-end tests where applicable.
- Run tests locally before submitting:
  ```bash
  npm run test
  npm run test:e2e
  ```

For detailed testing instructions, refer to the [Testing Guide](https://github.com/DemiInfinity/elementrix-ui/wiki/Testing-Guide).

### Documentation
- Update or add documentation in the relevant `.mdx` files.
- Ensure all components have a Storybook story.

Refer to the [Development Guide](https://github.com/DemiInfinity/elementrix-ui/wiki/Development-Guide) for more information about setting up the development environment.

---

## Pull Request Guidelines
- Ensure your PR includes tests for new or updated functionality.
- Keep PRs focused; address one feature or bug per pull request.
- Add a descriptive title and summary to your pull request.
- Reference any relevant issues in your PR description (e.g., "Closes #123").

---

## Community Standards
By contributing to Elementrix UI, you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Need Help?
If you have any questions, feel free to open an issue or reach out to the maintainers. For additional resources, refer to the following:
- [Component Catalog](https://github.com/DemiInfinity/elementrix-ui/wiki/Component-Catalog)
- [Release Notes](https://github.com/DemiInfinity/elementrix-ui/wiki/Release-Notes)
- [Development Guide](https://github.com/DemiInfinity/elementrix-ui/wiki/Development-Guide)
- [Testing Guide](https://github.com/DemiInfinity/elementrix-ui/wiki/Testing-Guide)

We appreciate your contributions and support!
