# User Manual

## Version

196b5f7a1711cfd1008124dd1cd1f9243e5a4498

---

## Project Overview

This project is a TypeScript starter repository for the [Nest](https://github.com/nestjs/nest) framework, which is a progressive Node.js framework designed for building efficient and scalable server-side applications.

---

## Installation & Setup

1. **Install Node.js** (if not already installed).
2. **Install dependencies:**

   ```bash
   npm install
   ```

3. The project uses scripts defined in `package.json` to build, format, lint, run, and test the application.

---

## Running the Application

You can run the application in different modes using the npm scripts:

- **Development mode:**

  ```bash
  npm run start
  ```

- **Watch mode (auto restarts on file changes):**

  ```bash
  npm run start:dev
  ```

- **Debug mode with watch:**

  ```bash
  npm run start:debug
  ```

- **Production mode:**

  ```bash
  npm run start:prod
  ```

---

## Testing Instructions

Run tests using the following npm scripts:

- **Unit tests:**

  ```bash
  npm run test
  ```

- **Watch mode for tests:**

  ```bash
  npm run test:watch
  ```

- **Test coverage report:**

  ```bash
  npm run test:cov
  ```

- **E2E (end-to-end) tests:**

  ```bash
  npm run test:e2e
  ```

- **Debug tests:**

  ```bash
  npm run test:debug
  ```

---

## Deployment Instructions

When ready for production deployment, consult the [NestJS deployment documentation](https://docs.nestjs.com/deployment) for best practices to ensure efficient running of your application.

### Deploying with Mau

NestJS offers an official cloud platform named Mau for AWS deployments. You can deploy easily by:

```bash
npm install -g @nestjs/mau
mau deploy
```

Mau simplifies deployment by handling infrastructure, enabling you to focus on developing features.

---

## Available NPM Scripts

| Script        | Description                                          |
|---------------|------------------------------------------------------|
| `build`       | Builds the NestJS project.                           |
| `format`      | Formats source and test TypeScript files with Prettier. |
| `start`       | Starts the application in development mode.         |
| `start:dev`   | Starts the application in watch mode (auto restart on changes). |
| `start:debug` | Starts the application with debugger enabled in watch mode. |
| `start:prod`  | Runs the built application in production mode.       |
| `lint`        | Runs ESLint to analyze and auto-fix linting issues.  |
| `test`        | Runs Jest unit tests.                                 |
| `test:watch`  | Runs Jest tests in watch mode.                        |
| `test:cov`    | Runs Jest and generates test coverage report.       |
| `test:debug`  | Runs Jest tests with Node.js inspector for debugging.| 
| `test:e2e`    | Runs end-to-end (e2e) tests using Jest.              |

---

## Dependencies

### Runtime Dependencies

- @nestjs/common: ^11.0.1
- @nestjs/core: ^11.0.1
- @nestjs/platform-express: ^11.0.1
- class-transformer: ^0.5.1
- class-validator: ^0.14.2
- reflect-metadata: ^0.2.2
- rxjs: ^7.8.1

### Development Dependencies

- @eslint/eslintrc: ^3.2.0
- @eslint/js: ^9.18.0
- @nestjs/cli: ^11.0.0
- @nestjs/schematics: ^11.0.0
- @nestjs/testing: ^11.0.1
- @types/express: ^5.0.0
- @types/jest: ^30.0.0
- @types/node: ^22.10.7
- @types/supertest: ^6.0.2
- eslint: ^9.18.0
- eslint-config-prettier: ^10.0.1
- eslint-plugin-prettier: ^5.2.2
- globals: ^16.0.0
- jest: ^30.0.0
- prettier: ^3.4.2
- source-map-support: ^0.5.21
- supertest: ^7.0.0
- ts-jest: ^29.2.5
- ts-loader: ^9.5.2
- ts-node: ^10.9.2
- tsconfig-paths: ^4.2.0
- typescript: ^5.7.3
- typescript-eslint: ^8.20.0

---

## Resources / Links

- [NestJS Documentation](https://docs.nestjs.com)
- [NestJS GitHub Repository](https://github.com/nestjs/nest)
- [Discord Channel for Support](https://discord.gg/G7Qnnhy)
- [Official Video Courses](https://courses.nestjs.com/)
- [NestJS Mau (AWS Deployment)](https://mau.nestjs.com)
- [NestJS Devtools](https://devtools.nestjs.com)
- [Enterprise Support](https://enterprise.nestjs.com)
- [Twitter: @nestframework](https://twitter.com/nestframework)
- [LinkedIn](https://linkedin.com/company/nestjs)
- [Jobs Board](https://jobs.nestjs.com)

---

## Support

Nest is an MIT-licensed open source project that grows thanks to its sponsors and backers. To contribute or support the project, see [NestJS Support Documentation](https://docs.nestjs.com/support).

---

## Stay in Touch

- Author: [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website: [https://nestjs.com](https://nestjs.com/)
- Twitter: [@nestframework](https://twitter.com/nestframework)

---

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
