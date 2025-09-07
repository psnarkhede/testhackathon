# Onboarding Document

**Version:** 1.0.0

---

## Project Setup

### Installation
- Ensure you have node.js (>=14) and npm installed.
- Clone the repository.
- Run `npm install` to install all dependencies.

### Running the Project

- **Development Mode:**
  ```bash
  npm run start:dev
  ```
  Starts the server with live-reload.

- **Production Mode:**
  ```bash
  npm run start:prod
  ```
  Builds and runs the server optimized.

- **Test Mode:**
  ```bash
  npm run test
  ```
  Runs all the unit tests.

### Environment Setup
- Create `.env` file if needed for environment variables. (No env variables defined in the provided files.)

### Dependencies
- Core dependencies include NestJS.* Framework packages as per `package.json`.
- Other dependencies are installed automatically by `npm install`.

### Start Contributing
- After setup, run the server in dev mode.
- Add features or fix bugs by adding controllers, services, and DTOs as per Developer Guide.
- Test your code with `npm run test`.
- Follow code style and project conventions.

You are now ready to develop and contribute to the project!