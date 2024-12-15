# aisolutions-react-components

## Overview

`aisolutions-react-components` is a library of reusable React components built with TypeScript. These components, including buttons, inputs, and forms, are styled with TailwindCSS and optimized for modern React applications. This package provides a robust starting point for creating and scaling component libraries.

## Features

- **Customizable Components**: Includes `Text`, `Link`, `Button`, `Input`, and `SimpleSearchForm`.
- **TailwindCSS Styling**: Pre-styled components for seamless integration.
- **TypeScript Ready**: Fully typed for enhanced development safety.
- **Storybook Support**: Component visualization and documentation.
- **Optimized Builds**: Rollup configuration for ES modules and CommonJS outputs.

## Components

### Form / Button

A flexible and customizable button component styled with TailwindCSS.

### Form / Input

A versatile input component supporting various types, validations, and styles.

### Component / SimpleSearchForm

A search form component with built-in input validation for streamlined search functionality.

## Installation

Install the library with:

```bash
npm install aisolutions-react-components
```

## Usage Example

```tsx
import React from 'react';
import { SimpleSearchForm } from 'aisolutions-react-components';

const App = () => {
  const handleSubmit = (data: { query: string }) => {
    console.log('Searching:', data);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">My App</h1>
      <SimpleSearchForm onSubmit={handleSubmit} className="p-4" />
    </div>
  );
};

export default App;
```

## Development

Follow these steps to contribute or develop the library:

### Prerequisites

- Node.js (>= 16.0.0)
- npm (>= 7.0.0)

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/sowamateusz/aisolutions-react-components.git
   cd aisolutions-react-components
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Scripts

- **Build the Library**:

  ```bash
  npm run build
  ```

- **Run Storybook**:

  ```bash
  npm run storybook
  ```

- **Type Checking**:
  ```bash
  npm run type-check
  ```

## Publishing to npm

### Prerequisites

- An npm account ([Sign up here](https://www.npmjs.com/signup))
- Ownership or maintenance rights to the `aisolutions-react-components` package.

### Publishing Steps

1. **Update Version**:
   Modify the `version` in `package.json` according to [semantic versioning](https://semver.org/).

2. **Build and Test**:

   ```bash
   npm run build
   ```

3. **Login to npm**:

   ```bash
   npm login
   ```

4. **Publish the Package**:
   ```bash
   npm publish --access public
   ```

### Updating Existing Versions

1. Increment the version in `package.json`.
2. Rebuild and verify:
   ```bash
   npm run build
   ```
3. Publish the update:
   ```bash
   npm publish
   ```

## Contributing

We welcome contributions! To get started:

1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request with detailed changes.

## License

This project is licensed under the ISC License. See the LICENSE file for details.

## Questions

For questions or feedback, open an issue on GitHub or contact the author.
