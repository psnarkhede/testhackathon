# User Manual

---

## Version

`cd033e7f2eeffe6d4053e35cab8d03cb0d721491`

---

## Project Overview

Nest is a progressive Node.js framework for building efficient and scalable server-side applications. This project is a Nest framework TypeScript starter repository designed to help developers quickly set up and develop applications using NestJS.

---

## Installation & Setup

1. Ensure you have Node.js and npm installed.
2. Clone the repository and navigate to the project directory.
3. Install all required dependencies by running:

```bash
npm install
```

This installs both dependencies and devDependencies required to run, build, and test the project.

---

## Running the Application

You can run the application in several modes using npm scripts:

- **Development mode:**

  ```bash
  npm run start
  ```
  Starts the application in normal development mode.

- **Watch mode (development with file watching):**

  ```bash
  npm run start:dev
  ```
  Runs the application with auto-reloading when source files change.

- **Production mode:**

  ```bash
  npm run start:prod
  ```
  Runs the compiled JavaScript application from the `dist` directory.

- **Debug mode (watch with debugger):**

  ```bash
  npm run start:debug
  ```
  Starts the application in debug mode with watch enabled.

---

## Testing Instructions

The project uses Jest as the testing framework. You can run tests using the following commands:

- **Run unit tests:**

  ```bash
  npm run test
  ```

- **Run end-to-end (e2e) tests:**

  ```bash
  npm run test:e2e
  ```

- **Run tests with coverage report:**

  ```bash
  npm run test:cov
  ```

- **Run tests in watch mode:**

  ```bash
  npm run test:watch
  ```

- **Run tests in debug mode:**

  ```bash
  npm run test:debug
  ```

---

## Deployment Instructions

To deploy your NestJS application efficiently, follow the best practices outlined in the [NestJS deployment documentation](https://docs.nestjs.com/deployment).

For cloud deployments, you can use **NestJS Mau**, an official platform for deploying NestJS applications on AWS. It simplifies the deployment process:

```bash
npm install -g @nestjs/mau
mau deploy
```

Mau allows deploying your application with just a few clicks, focusing on features instead of infrastructure management.

---

## Available NPM Scripts

| Script        | Description                                          |
|---------------|------------------------------------------------------|
| `build`       | Compiles the NestJS project (`nest build`).          |
| `format`      | Formats TypeScript files in `src` and `test` folders using Prettier. |
| `start`       | Starts the application in development mode.          |
| `start:dev`   | Starts the application in watch mode (reload on code changes). |
| `start:debug` | Starts the application in debug mode with watch enabled. |
| `start:prod`  | Runs the compiled production build from `dist/main`. |
| `lint`        | Runs ESLint to check and fix code style issues.      |
| `test`        | Runs unit tests with Jest.                            |
| `test:watch`  | Runs tests in watch mode.                             |
| `test:cov`    | Runs tests and collects coverage information.        |
| `test:debug`  | Runs tests in debug mode with inspector enabled.     |
| `test:e2e`    | Runs end-to-end tests using Jest with a custom config. |

---

## Dependencies

### Dependencies

- `@nestjs/common`: ^11.0.1
- `@nestjs/core`: ^11.0.1
- `@nestjs/platform-express`: ^11.0.1
- `class-transformer`: ^0.5.1
- `class-validator`: ^0.14.2
- `reflect-metadata`: ^0.2.2
- `rxjs`: ^7.8.1

### DevDependencies

- `@eslint/eslintrc`: ^3.2.0
- `@eslint/js`: ^9.18.0
- `@nestjs/cli`: ^11.0.0
- `@nestjs/schematics`: ^11.0.0
- `@nestjs/testing`: ^11.0.1
- `@types/express`: ^5.0.0
- `@types/jest`: ^30.0.0
- `@types/node`: ^22.10.7
- `@types/supertest`: ^6.0.2
- `eslint`: ^9.18.0
- `eslint-config-prettier`: ^10.0.1
- `eslint-plugin-prettier`: ^5.2.2
- `globals`: ^16.0.0
- `jest`: ^30.0.0
- `prettier`: ^3.4.2
- `source-map-support`: ^0.5.21
- `supertest`: ^7.0.0
- `ts-jest`: ^29.2.5
- `ts-loader`: ^9.5.2
- `ts-node`: ^10.9.2
- `tsconfig-paths`: ^4.2.0
- `typescript`: ^5.7.3
- `typescript-eslint`: ^8.20.0

---

## Resources / Links

- [NestJS Official Website](https://nestjs.com)
- [NestJS Documentation](https://docs.nestjs.com)
- [Discord Channel](https://discord.gg/G7Qnnhy) for questions and support
- [Official Video Courses](https://courses.nestjs.com/)
- [NestJS Mau (AWS deployment platform)](https://mau.nestjs.com)
- [NestJS Devtools](https://devtools.nestjs.com) (Visualize and interact with your app)
- [Enterprise Support](https://enterprise.nestjs.com)
- Follow on social media: [X (Twitter)](https://x.com/nestframework), [LinkedIn](https://linkedin.com/company/nestjs)
- [Jobs board](https://jobs.nestjs.com)

---

## Support & License

Nest is an MIT-licensed open source project supported by sponsors and backers. If you want to contribute, learn more about supporting NestJS [here](https://docs.nestjs.com/support).


---

## Stay in Touch

- Author: [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website: [https://nestjs.com](https://nestjs.com/)
- Twitter: [@nestframework](https://twitter.com/nestframework)
