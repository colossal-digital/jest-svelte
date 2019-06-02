# jest-svelte
A tool for enabling Jest unit tests in SvelteJS.

## Installation
### Install the package

```bash
  yarn add jest-svelte --dev
```

### Update your jest configuration
```bash
  "jest": {
    "transform": {
      "\\.js$": "babel-jest",
      "\\.html$": "./dist/index.js",
      "\\.svelte$": "./dist/index.js"
    },
    "moduleFileExtensions": [
      "js",
      "svelte",
      "html"
    ]
  }
```