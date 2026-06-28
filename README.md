# Social Post Composer

A production-ready React comment composer inspired by modern social media platforms.

This project demonstrates clean component architecture, controlled form handling, derived state, reusable UI composition, and a professional Git workflow using feature branches and pull requests.
---

## Preview


---

## Features

* ✨ Controlled textarea using React state
* 📊 Live character counter
* ⚠️ Warning state when approaching the character limit
* 🚫 Error state when exceeding the character limit
* ✅ Disabled submit button for invalid input
* 🔄 Automatic form reset after successful submission
* ♿ Accessible semantic form structure
* 📱 Responsive layout
* 🧩 Modular component architecture
* 🎨 CSS variables and global styling system

---

## Tech Stack

* React
* Vite
* JavaScript (ES6+)
* CSS3
* ESLint
* Git & GitHub

---

## Folder Structure

```text
src
├── components
│   └── CommentComposer
│       ├── ComposerBody
│       │   ├── Avatar.jsx
│       │   └── TextArea.jsx
│       │
│       ├── ComposerFooter
│       │   ├── CharacterCounter.jsx
│       │   └── SubmitButton.jsx
│       │
│       ├── CommentComposer.jsx
│       └── CommentComposer.css
│
├── styles
│   ├── globals.css
│   └── variables.css
│
├── App.jsx
└── main.jsx
```

---

## Architecture

The application follows React's one-way data flow.

```text
CommentComposer
│
├── owns application state
│
├── Avatar
├── TextArea
├── CharacterCounter
└── SubmitButton
```

State is owned exclusively by **CommentComposer** and passed downward through props. Child components remain stateless and reusable, making the architecture predictable and easy to extend.

---

## Key Engineering Decisions

### Single Source of Truth

The textarea value is stored only once inside `CommentComposer`. All child components receive the data they need through props.

### Controlled Components

The textarea is fully controlled by React, ensuring that the UI always reflects application state.

### Derived State

Character counts and validation states are calculated directly from `text.length` rather than stored separately. This avoids duplicated state and synchronization bugs.

### Component Composition

The UI is decomposed into focused, reusable components:

* Avatar
* TextArea
* CharacterCounter
* SubmitButton

Each component has a single responsibility and communicates through a minimal prop API.

### Separation of Concerns

Business rules (submission, validation, disabled state) remain in the parent component, while child components focus on presentation.

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/arpan23-27/social-post-composter.git
```

Navigate into the project:

```bash
cd social-post-composter
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run ESLint:

```bash
npm run lint
```

---

## Development Workflow

This project follows a feature branch workflow.

```text
feature/*
      │
      ▼
Pull Request
      │
      ▼
develop
      │
      ▼
main
```

Every feature is developed independently, reviewed through a Pull Request, merged into `develop`, and finally promoted to `main`.

---

## Future Improvements

* Auto-resizing textarea
* Unit tests with React Testing Library
* Vitest integration
* Storybook documentation
* GitHub Actions CI pipeline
* Dark mode support
* Keyboard shortcut (`Ctrl + Enter`)
* Deploy to Vercel

---

## Learning Outcomes

This project demonstrates practical experience with:

* React component decomposition
* Component composition
* Controlled form components
* State lifting
* Derived state
* One-way data flow
* Event handling
* CSS architecture
* Responsive UI design
* Accessibility fundamentals
* Professional Git workflow
* Feature branching
* Pull Requests
* Merge strategies

---

## License

This project is licensed under the MIT License.
