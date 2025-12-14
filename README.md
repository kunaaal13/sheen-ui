# Sheen UI

A headless UI component library for Svelte 5 — striking the perfect balance between low-level primitives and fully-featured components.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Svelte](https://img.shields.io/badge/svelte-5-orange.svg)](https://svelte.dev)

## Philosophy

Sheen UI occupies the sweet spot between [Base UI](https://base-ui.com/) and [Melt UI](https://melt-ui.com/):

- **More opinionated than Base UI** — Get sensible defaults and patterns out of the box without building everything from scratch
- **More flexible than Melt UI** — Maintain full control over rendering and styling without being locked into specific implementations

Sheen UI provides accessible, unstyled components that handle the complex logic (focus management, keyboard navigation, ARIA attributes) while leaving the visual design entirely up to you.

## Features

- 🎨 **Completely unstyled** — Bring your own design system
- ♿ **Accessible by default** — WAI-ARIA compliant components
- 🔧 **Fully customizable** — Control every aspect of rendering
- ⚡ **Svelte 5 native** — Built with runes and modern Svelte patterns
- 📦 **Tree-shakeable** — Only ship what you use
- 🔒 **Type-safe** — Full TypeScript support

## Installation

```bash
# npm
npm install sheen-ui

# pnpm
pnpm add sheen-ui

# bun
bun add sheen-ui
```

## Quick Start

```svelte
<script>
  import { Button } from 'sheen-ui';
</script>

<Button>Click me</Button>
```

## Documentation

Coming soon...

---

## Development

This project uses [Turborepo](https://turbo.build/repo) for monorepo management and [Bun](https://bun.sh) as the package manager.

### Project Structure

```
sheen-ui/
├── apps/
│   └── web/              # Documentation & demo SvelteKit app
├── packages/
│   ├── ui/               # Core Sheen UI component library
│   ├── eslint-config/    # Shared ESLint configuration
│   └── typescript-config/# Shared TypeScript configuration
├── turbo.json            # Turborepo configuration
└── package.json          # Root workspace configuration
```

### Getting Started

```bash
# Clone the repository
git clone https://github.com/kunaaal13/sheen-ui.git
cd sheen-ui

# Install dependencies
bun install

# Start development
bun run dev
```

### Available Scripts

| Command               | Description                            |
| --------------------- | -------------------------------------- |
| `bun run dev`         | Start development servers for all apps |
| `bun run build`       | Build all packages and apps            |
| `bun run lint`        | Lint all packages and apps             |
| `bun run format`      | Format code with Prettier              |
| `bun run check-types` | Run TypeScript type checking           |

### Requirements

- Node.js >= 18
- Bun >= 1.3.3

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a pull request.

## License

MIT © kunaaal13
