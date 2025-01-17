# 🚀 **Elementrix-UI: Framework-Agnostic UI Component Library**

**Elementrix-UI** is a modern, open-source web components library built with [Stencil.js](https://stenciljs.com/). Designed to be reusable, lightweight, and customizable, it provides the foundation for building visually appealing and responsive user interfaces.  

⚠️ **Note**: Elementrix-UI is in its early stages of development. The library is currently focused on building its core features and foundational components. Expect updates and improvements as it evolves.

---

## 🌟 **Features**

### **Up Coming Features**
- **Reusable Components**: A limited set of core components, including buttons and modals, for basic UI needs.
- **Customizable Styles**: Easily adapt component appearance with CSS Variables to fit your design system.
- **Framework-Agnostic**: Use components with React, Vue, Angular, or vanilla JavaScript.
- **Storybook Integration**: Explore components via live previews and interactive documentation.

### **Planned Features**
- **Advanced Components**: Grids, charts, and forms for enterprise-grade applications.
- **Dark Mode and Theming**: Support for both light and dark themes out of the box.
- **Accessibility (a11y)**: WCAG-compliant components to ensure inclusivity.
- **Localization (i18n)**: Built-in multi-language support.

---

## 📦 **Installation**

Install the library using npm:
  ```bash
  yarn add @elementrix-ui/component-library
  ```
---
## 🚀 **Getting Started**

Follow these steps to integrate **Elementrix-UI** into your project:

1. Import and Configure
  - Initialize the library in your project:
    ```javascript
      import { defineCustomElements } from '@elementrix-ui/component-library/loader';

      // Initialize Elementrix-UI components
      defineCustomElements(window);
    ```
2. Use Components
  - Add components to your HTML:
    ```html
    <elementrix-button label="Click Me"></elementrix-button>
    ```
---
## 📚 **Documentation**

Detailed usage instructions and live demos are coming soon via Storybook:

- Elementrix-UI Storybook (Coming Soon)
---
## 🎯 **Roadmap**

Elementrix-UI is in the process of developing its foundational components and features. Here's what's in progress and what's planned:

### In Progress
- Core components: Button, Modal, Input, and Card.
- Storybook setup for interactive documentation and demos.

### Planned Features
- Advanced components for complex UI needs, including data grids and charts.
- Theming and design tokens for consistent styling across applications.
- Accessibility and localization for inclusive and global usage.
---
## 🤝 Contributing
As Elementrix-UI is still in its early stages, contributions are highly encouraged! Whether you want to help build core components, improve documentation, or provide feedback, we’d love to have you on board.

### How to Contribute

1. Fork the repository:
   ```bash
   git clone https://github.com/DemiInfinity/elementrix-ui.git
   ```
2. Install dependencies:
   ```bash
   yarn
   ```
3. Start the development server:
   ```bash
   yarn start
   ```
4. Run Storybook:
   ```bash
   yarn storybook
   ```
5. Make your changes: Add components, fix bugs, or enhance documentation.
6. Submit a pull request: Open a PR on GitHub to contribute your work.
---
## 🛠️ Technologies Used

- Component Framework: Stencil.js
- Documentation: Storybook
- Language: TypeScript
- Styling: SCSS Variables for customization
- Testing: Stencils in built testing for unit tests and E2E coming soon
- Build Tool: Rollup for efficient bundling
---
## 📝 License

This project is licensed under the [MIT License](./LICENSE.md). See the LICENSE file for full details.

---
## 🌍 Join the Community

Elementrix-UI is in its infancy, and we’re building it into a comprehensive, developer-first library for modern applications. Join us to shape its future!

- GitHub Discussions: Join the Conversation (Comming soon)
