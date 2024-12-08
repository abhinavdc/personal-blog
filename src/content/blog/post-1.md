---
title: A Journey to Faster Builds and Modern Standards
description: Learn how I migrated a React app from Webpack to Vite, tackling compatibility challenges and achieving faster builds, smoother HMR, and a future-proof codebase.
date: 2024-12-07
---

The front-end world moves fast, and keeping up with the latest tools and trends is key to staying efficient and scaling projects smoothly. I recently decided to migrate a React project from Webpack (using Create React App) to Vite—a modern build tool that's been making waves in the industry. Here’s how it went, the bumps I hit along the way, and the awesome results I got.

## **Why Migrate?**

1. **CRA Is No Longer Maintained**
   Create React App (CRA) was once the go-to solution for quickly bootstrapping React applications. However, it is no longer actively updated, leaving projects reliant on outdated tooling.

2. **Webpack's Performance Bottlenecks**
   While Webpack has been a reliable bundler for years, its build times and Hot Module Replacement (HMR) speeds lag behind newer tools like Vite. This was particularly noticeable in our project, where rebuild times were slowing development productivity.

3. **Aligning with Industry Standards**
   Vite has quickly become the industry standard for modern front-end development. Its adoption ensures that our codebase is future-proof and compatible with the latest practices.

## **Approach Taken**

### **Initial Plan: Migrating React Scripts to Vite**
Our first approach was to directly migrate the existing project by replacing `react-scripts` with Vite's configuration. The idea was to retain the project's structure and dependencies while leveraging Vite's performance benefits.

- However, **Hot Module Replacement (HMR)** didn't work seamlessly. Instead of refreshing only the affected modules, the entire page reloaded upon changes, disrupting the development experience.
- Attempts to fix HMR issues through plugins and configurations proved time-consuming and ultimately ineffective.

### **A Fresh Start with Vite**
Realizing that compatibility issues were harder to resolve than anticipated, we decided to start fresh:
1. **Created a New Vite Project:** Bootstrapped a new React app using Vite’s CLI.
2. **Moved Existing Files Over:** Migrated the source code, assets, and configurations manually to the new project.
3. **Resolved Issues Incrementally:** Adjusted configurations and dependencies to match the new Vite-based setup.

This approach allowed us to fully leverage Vite’s capabilities without being held back by compatibility quirks of the old project.

## **Difficulties Faced**

### 1. **SVG Handling**
After migrating, SVGs failed to load as expected. This was resolved by integrating the [Vite SVGR plugin](https://github.com/pd4d10/vite-plugin-svgr), enabling SVGs to be imported as React components.

#### **Vite SVGR Plugin Configuration**
```javascript
// vite.config.js
import svgr from 'vite-plugin-svgr'

export default {
  plugins: [svgr()],
}
```

#### Using SVGs as React Components:
To use SVGs as React components, you typically append `?react` to the file path:

```JSX
import { ReactComponent as Logo } from './assets/logo.svg?react';

const App = () => (
    <div>
        <h1>Welcome to My Vite App</h1>
        <Logo width={150} height={150} />
    </div>
);

export default App;
```

If you want to avoid appending `?react` every time, you can configure the SVGR plugin to always handle SVGs as React components.

### 2. **Dependency Updates and Conflicts**
One of the biggest hurdles we faced during the migration was dealing with outdated dependencies. The project had been using Webpack and Create React App for a while, and many of the dependencies were either no longer maintained or significantly behind their latest versions. These outdated packages caused compatibility issues when trying to integrate them with Vite.

**How We Addressed It:**
- **Updating All Dependencies:**
  We started by auditing and updating outdated dependencies using tools like `npm outdated`. Following changelogs for each package helped us navigate breaking changes and understand any required adjustments.

- **Fixing Breaking Changes:**
  Several dependencies, like React Router and state management libraries, required refactoring due to breaking changes in their APIs. We tackled these updates incrementally, testing thoroughly after each update.

- **Resolving Peer Dependency Warnings:**
  Peer dependency conflicts were addressed by either upgrading related packages or overriding specific versions where appropriate.

- **Removing Deprecated Packages:**
  During this process, we identified and removed unnecessary or outdated packages, replacing them with modern equivalents from Vite’s ecosystem.

This comprehensive cleanup not only resolved compatibility issues but also reduced technical debt, making the project easier to maintain moving forward.

## **Results**

### 1. **Improved Build and HMR Times**
- **Build Times:** Reduced significantly compared to Webpack, improving developer productivity.
- **HMR Speed:** Vite’s instant module updates dramatically improved the local development experience.

### 2. **Seamless Testing with Vitest**
Vite’s ecosystem includes Vitest, a lightweight testing framework. Integration was straightforward, and it replaced our existing Jest setup with minimal effort.

### 3. **Reduced Dependency Size**
- The project’s **node_modules** size shrank from **2.5 GB to under 500 MB**.
- This streamlined our development environment and made dependency management more efficient.

Migrating to Vite has been a game-changer for our project. While there were challenges along the way, the performance improvements and streamlined workflow have been well worth the effort. If you're considering a switch, I highly recommend taking the leap!
