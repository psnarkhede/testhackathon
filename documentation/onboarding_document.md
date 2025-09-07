## Onboarding Document

**Version:** 04d39232b7f955392abbb0a13145ce0e90ada880

---

Welcome aboard! This document will walk you through setting up your local environment to start developing.

### Step 1: Clone the Repository

```bash
git clone https://github.com/example/project.git
cd project
```

### Step 2: Install Dependencies

Make sure you have **Node.js (v16 or later)** and **npm** installed.

```bash
npm install
```

### Step 3: Set up Environment Variables

Copy `.env.example` to `.env` and fill in necessary values:

```bash
cp .env.example .env
```

Edit `.env` to configure database connection, API keys, and other configs as per the README.

### Step 4: Running the Application

Start the backend server locally:

```bash
npm run start:dev
```

This uses **`main.ts`** as the entry point. You can access the API at `http://localhost:3000`.

### Step 5: Running Tests

To run all automated tests:

```bash
npm test
```

### Step 6: Linting and Formatting

Check code style compliance:

```bash
npm run lint
```

Auto-format source files:

```bash
npm run format
```

---

Consult the README.md in the root directory for more details or project-specific instructions.

Welcome to the team!