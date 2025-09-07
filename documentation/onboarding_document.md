# Onboarding Document

**Version:** ad7b209673a0468c5fb1392a28b13495d49dadc3

---

Welcome! This guide will help you set up and run the project locally.

## Prerequisites
- Node.js (preferably latest LTS)
- npm (comes with Node.js)
- Git

## Step 1: Clone the repository
```bash
git clone <repository-url>
cd <repository-folder>
```

## Step 2: Install dependencies

Run:
```bash
npm install
```
This will install all required packages as per `package.json`.

## Step 3: Understand the project structure

- Source code is inside the `src/` folder.
- Main files:
  - `src/main.ts`: Entry point to bootstrap the application.
  - `src/app.module.ts`: Main application module.
  - `src/app.controller.ts`: Defines API routes.
  - `src/app.service.ts`: Contains business logic.
  - `src/dto/`: Data Transfer Object definitions.

## Step 4: Running the application

Start the application in development mode with:
```bash
npm run start:dev
```

This will start the NestJS server and watch for file changes.

By default, the server listens on port `3000` or the port set via the `PORT` environment variable.

## Step 5: Running tests

Run unit tests:
```bash
npm run test
```

## Additional Notes

Refer to the included [README.md](README.md) for more information and resources.

---
