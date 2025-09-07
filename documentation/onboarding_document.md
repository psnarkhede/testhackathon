## Onboarding Document

**Version:** 7f2eec614b7c99282052440ca6a0ba82bee672fa

---

Welcome to the development team! Follow these steps to set up your environment and run the project locally.

### 1. Prerequisites

- Install [Node.js](https://nodejs.org/) (version 18 or above recommended).
- Install [Git](https://git-scm.com/) to clone repositories.

### 2. Clone the Repository

```bash
git clone https://github.com/your-org/your-project.git
cd your-project
```

### 3. Install Dependencies

Run the following command in the project root directory:

```bash
npm install
```

This installs all required packages as specified in `package.json`.

### 4. Environment Configuration

- Copy `.env.example` to `.env`:
  ```bash
  cp .env.example .env
  ```
- Edit `.env` to specify environment variables such as database connection strings and API keys.

### 5. Running the Project Locally

- The entry point is `src/main.ts`.
- To start in development mode with auto-reload:

```bash
npm run start:dev
```

- To build and run production:

```bash
npm run build
npm run start
```

### 6. Running Tests

Use the command:

```bash
npm test
```

### 7. Useful Scripts From `package.json`

```json
{
  "scripts": {
    "start": "node dist/main.js",
    "start:dev": "ts-node-dev src/main.ts",
    "build": "tsc",
    "test": "jest"
  }
}
```

### 8. Helpful Tips

- Ensure Node version matches project requirements.
- Use VSCode or your preferred IDE with TypeScript support.
- Refer to `README.md` for detailed project information.

Welcome aboard and happy coding!