# aisolutions-react-components

## Description

`aisolutions-react-components` is a library of reusable React components built with TypeScript. It includes components such as buttons, inputs, and forms, styled with TailwindCSS and optimized for modern React applications. This package is designed to be a starting point for building and scaling component libraries.

## Features

- **Reusable Components**: Includes customizable components like `Button`, `Input`, and `SimpleSearchForm`.
- **TailwindCSS Styling**: Pre-styled with TailwindCSS for quick integration.
- **TypeScript Support**: Fully typed for safer and more predictable development.
- **Storybook Integration**: Includes Storybook for component visualization and documentation.
- **Rollup Build**: Outputs optimized ES modules and CommonJS builds.

---

## Installation

To install the library, use:

```bash
npm install aisolutions-react-components
```

---

## Usage

### Example

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

---

## Development

If you want to contribute or develop the library further, follow these steps:

### Prerequisites

- Node.js (>= 16.0.0)
- npm (>= 7.0.0)

### Cloning the Repository

Clone the repository:

```bash
git clone https://github.com/sowamateusz/aisolutions-react-components.git
cd aisolutions-react-components
```

### Install Dependencies

Run:

```bash
npm install
```

### Scripts

#### Build the Library

To build the library for production:

```bash
npm run build
```

This will generate the output in the `dist` folder.

#### Run Storybook

To start Storybook for component development and visualization:

```bash
npm run storybook
```

#### Build Storybook

To generate a static build of Storybook:

```bash
npm run build-storybook
```

#### Type Checking

To ensure TypeScript types are valid:

```bash
npm run type-check
```

---

## Publishing or Updating the Package on npm

### Prerequisites

- Ensure you have an npm account. If not, [create one](https://www.npmjs.com/signup).
- Make sure you are an owner or maintainer of the `aisolutions-react-components` package on npm.
- Confirm you have Node.js and npm installed.

### Steps to Publish a New Version

1. **Update Version Number**:  
   Open `package.json` and update the `version` field according to [semantic versioning](https://semver.org/). For example, if you're making a minor update, increment the minor version:

   ```json
   {
     "name": "aisolutions-react-components",
     "version": "1.1.0",
     ...
   }
   ```

2. **Build the Package**:  
   Before publishing, ensure the package is properly built and all tests pass:

   ```bash
   npm run build
   npm test
   ```

3. **Login to npm** (if not already logged in):

   ```bash
   npm login
   ```

   Follow the prompts to enter your username, password, and email.

4. **Publish to npm**:
   ```bash
   npm publish --access public
   ```
   This command publishes the current version of the package to npm. The `--access public` flag ensures that the package is publicly accessible.

### Steps to Update an Existing Version

If you’ve previously published the package and want to push a new version (e.g., after adding features, fixing bugs, or making improvements):

1. **Increment the Version**:  
   Update the `version` in `package.json` to the next appropriate version.

2. **Build and Test**:  
   Run the build and tests again to ensure everything is still valid:

   ```bash
   npm run build
   ```

3. **Publish the Update**:
   ```bash
   npm publish
   ```

The new version will now be available for installation via npm.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request with a clear description of your changes.

---

## License

This project is licensed under the ISC License. See the LICENSE file for details.

---

## Questions

If you have any questions or feedback, feel free to open an issue on GitHub or contact the author.
