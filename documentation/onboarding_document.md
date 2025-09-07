# Onboarding Document

**Version:** 1.0.0

## Setup Instructions

### Install Dependencies
```bash
npm install
```

### Available Scripts

From `package.json`, the scripts are:

- **start:** Runs the app in production mode
- **start:dev:** Runs the app with hot reload for development
- **test:** Runs the test suite

### How to Run

#### Development Mode
```bash
npm run start:dev
```
Starts the server with live reload to facilitate development.

#### Production Mode
```bash
npm start
```
Starts the server optimized for production.

#### Testing
```bash
npm test
```
Runs automated tests.

## Dependencies

From `package.json`:

- `@nestjs/common`
- `@nestjs/core`
- `@nestjs/platform-express`
- `class-validator`
- `class-transformer`
- `reflect-metadata`
- `rxjs`
- `typescript`
- `ts-node`
- `@types/node`

These ensure framework core functionality, validation, type support, and runtime.
