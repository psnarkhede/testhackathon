# User Manual for NestJS Project

---

## Version

dd69acd6519018268a83ec2c3f136f0dc37a8bd5

---

## Project Overview

This project is a starter repository for the [Nest](https://github.com/nestjs/nest) framework, a progressive Node.js framework designed to build efficient and scalable server-side applications using TypeScript. NestJS brings a modular architecture and extensive tooling to help developers create maintainable systems quickly.

---

## Installation & Setup

1. Ensure [Node.js](http://nodejs.org) and npm are installed on your system.
2. Clone the repository and navigate to the project root.
3. Run the following command to install all dependencies:

```bash
npm install
```

---

## Running the Application

The project can be run in various modes depending on the development or production needs. Use the npm scripts as follows:

- **Development mode:**

  ```bash
  npm run start
  ```
  Starts the NestJS application in development mode.

- **Watch mode:**

  ```bash
  npm run start:dev
  ```
  Starts the application and watches for file changes to restart automatically.

- **Production mode:**

  ```bash
  npm run start:prod
  ```
  Runs the compiled production-ready application from the `dist` folder.

- **Debug mode:**

  ```bash
  npm run start:debug
  ```
  Starts the application in debug mode with watch enabled for live reloads.

---

## Testing Instructions

Test your application using the following commands:

- **Unit tests:**

  ```bash
  npm run test
  ```
  Runs all unit tests using Jest.

- **End-to-end (e2e) tests:**

  ```bash
  npm run test:e2e
  ```
  Runs the end-to-end tests using a separate Jest configuration.

- **Test coverage report:**

  ```bash
  npm run test:cov
  ```
  Generates a coverage report of the unit tests.

- **Test watch mode:**

  ```bash
  npm run test:watch
  ```
  Runs Jest in watch mode, re-running tests on changes.

- **Debug tests:**

  ```bash
  npm run test:debug
  ```
  Runs tests with debugging enabled using Node.js inspect.

---

## Deployment Instructions

For deploying your NestJS application to production, it is recommended to follow optimized best practices outlined in the official [deployment documentation](https://docs.nestjs.com/deployment).

For cloud deployment, use [NestJS Mau](https://mau.nestjs.com), an official platform that simplifies deploying NestJS apps on AWS:

```bash
npm install -g @nestjs/mau
mau deploy
```

Mau streamlines deployment to let you focus on application development rather than infrastructure management.

---

## Available NPM Scripts

| Script         | Description                                                  |
|----------------|--------------------------------------------------------------|
| `build`        | Compiles the NestJS project using the Nest CLI.             |
| `format`       | Formats TypeScript files in `src` and `test` directories with Prettier. |
| `start`        | Starts the NestJS app in development mode.                   |
| `start:dev`    | Starts the app in watch mode, restarting on file changes.    |
| `start:debug`  | Starts the app in debug + watch mode for development.        |
| `start:prod`   | Runs the compiled app from the `dist` directory in production.| 
| `lint`         | Runs ESLint across source and test TypeScript files and fixes issues where possible. |
| `test`         | Runs all Jest unit tests.                                     |
| `test:watch`   | Runs Jest in watch mode to monitor and rerun tests on change.|
| `test:cov`     | Runs Jest with coverage report output.                        |
| `test:debug`   | Runs Jest with Node.js debugging enabled.                    |
| `test:e2e`     | Runs the end-to-end (e2e) test suite with a custom Jest config. |

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

- [NestJS Documentation](https://docs.nestjs.com)
- [NestJS Discord Support Channel](https://discord.gg/G7Qnnhy)
- [NestJS Official Video Courses](https://courses.nestjs.com/)
- [NestJS Mau (AWS Deployment)](https://mau.nestjs.com)
- [NestJS Devtools - Real-time Application Visualization](https://devtools.nestjs.com)
- [NestJS Enterprise Support](https://enterprise.nestjs.com)
- [NestJS on X (Twitter)](https://x.com/nestframework)
- [NestJS LinkedIn Page](https://linkedin.com/company/nestjs)
- [NestJS Jobs Board](https://jobs.nestjs.com)
- [Support NestJS](https://docs.nestjs.com/support)

---

## Support & Stay in Touch

NestJS is an MIT-licensed open source project supported by amazing backers and sponsors. To support or learn more, visit the official support documentation.

- **Author:** [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- **Website:** [https://nestjs.com](https://nestjs.com/)
- **Twitter:** [@nestframework](https://twitter.com/nestframework)

---

## License

NestJS is licensed under the [MIT License](https://github.com/nestjs/nest/blob/master/LICENSE).
