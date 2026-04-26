# Contributing to Rajora.Ai Tool Guide

Thank you for your interest in contributing! This guide helps developers discover free tools, and your contributions make it better for everyone.

## 📋 How to Contribute

### Suggesting a New Tool

1. Open an [Issue](../../issues/new) with the title: `[Tool Suggestion] Tool Name`
2. Include the following details:
   - **Tool name** and official URL
   - **Category** (Terminal, Editor, Cloud, DevOps, GenAI, Analytics, Full Stack)
   - **Layer** (foundation, cloud, devops, genai, analytics, fullstack)
   - **Free tier details** — what's available for free
   - **Install command** (if applicable)
   - **Why it belongs** — brief justification

### Reporting a Bug

1. Open an [Issue](../../issues/new) with the title: `[Bug] Brief description`
2. Include:
   - Steps to reproduce
   - Expected behavior vs. actual behavior
   - Browser & OS details
   - Screenshots (if applicable)

### Submitting a Pull Request

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feat/add-new-tool`
3. **Make** your changes
4. **Test** locally: `npm run dev` and `npm run build`
5. **Commit** with a descriptive message using [Conventional Commits](https://www.conventionalcommits.org/):
   ```
   feat: add ToolName to Layer X
   fix: correct free-tier info for ToolName
   docs: update README with new section
   ```
6. **Push** to your fork and open a Pull Request

## 🏗️ Development Setup

```bash
# Clone your fork
git clone https://github.com/<your-username>/rajora-Ai-tool-guide.git
cd rajora-Ai-tool-guide

# Install dependencies
npm install

# Start dev server
npm run dev
```

## 📏 Code Style

- **TypeScript** — All source files use `.ts` / `.tsx`
- **Tailwind CSS** — Use utility classes; avoid inline styles except for dynamic values
- **Conventional Commits** — `feat:`, `fix:`, `docs:`, `chore:`, `style:`, `refactor:`
- **Component naming** — PascalCase for components, camelCase for utilities

## 📂 Adding a Tool to the Database

Tools live in `src/data/tools.ts`. Each tool follows the `Tool` interface:

```typescript
{
  id: 'tool-id',           // kebab-case unique identifier
  name: 'Tool Name',
  description: 'Brief description of the tool',
  category: 'Category',
  layer: 'foundation',     // one of: foundation, cloud, devops, genai, analytics, fullstack
  officialUrl: 'https://...',
  installCommand: 'npm install ...',  // optional
  freeTierDetails: 'What is free',
  tags: ['tag1', 'tag2'],
  documentationUrl: 'https://...',    // optional
  githubUrl: 'https://...',           // optional
}
```

## 🙏 Code of Conduct

Be respectful, inclusive, and constructive. We follow the [Contributor Covenant](https://www.contributor-covenant.org/).

---

Thank you for helping make Rajora.Ai better! 💚
