# User Manual

---

## Version

`cd033e7f2eeffe6d4053e35cab8d03cb0d721491`

---

## Project Overview

Nest is a progressive Node.js framework designed for building efficient and scalable server-side applications. This project is a TypeScript starter repository for the Nest framework, providing a solid foundation for developing backend applications with modern architecture and design principles.

---

## Installation & Setup

1. Ensure you have [Node.js](http://nodejs.org) installed.
2. Clone the repository and navigate to the project directory.
3. Install the project dependencies by running:

```bash
npm install
```

---

## Running the Application

The project can be run in multiple modes based on your development needs.

- **Development mode:** Starts the application normally.

  ```bash
  npm run start
  ```

- **Watch mode:** Automatically restarts the application upon file changes.

  ```bash
  npm run start:dev
  ```

- **Debug mode:** Starts the application with debugging enabled and watch mode.

  ```bash
  npm run start:debug
  ```

- **Production mode:** Runs the compiled JavaScript code from the `dist` directory.

  ```bash
  npm run start:prod
  ```

---

## Testing Instructions

You can perform different types of tests using the available npm scripts:

- **Unit tests:** Run all unit tests.

  ```bash
  npm run test
  ```

- **End-to-end (e2e) tests:** Run e2e tests using a specific Jest config.

  ```bash
  npm run test:e2e
  ```

- **Test coverage:** Generate a coverage report for your tests.

  ```bash
  npm run test:cov
  ```

- **Test watch mode:** Re-run tests on file changes.

  ```bash
  npm run test:watch
  ```

- **Test debug mode:** Run tests with debugging enabled.

  ```bash
  npm run test:debug
  ```

---

## Deployment Instructions

To deploy your NestJS application efficiently in a production environment, refer to the official deployment documentation at:

- [NestJS Deployment Documentation](https://docs.nestjs.com/deployment)

For cloud-based deployment on AWS, you can use the official platform Mau. It simplifies deployment with just a few commands:

```bash
npm install -g @nestjs/mau
mau deploy
```

Mau allows quick and easy deployment, freeing you to focus on development instead of infrastructure management.

---

## Available NPM Scripts

| Script         | Description                                                    |
|----------------|----------------------------------------------------------------|
| `build`        | Builds the NestJS application using the Nest CLI (`nest build`).|
| `format`       | Runs Prettier to format all TypeScript files in `src` and `test` folders.
| `start`        | Starts the application in development mode.
| `start:dev`    | Starts the application in watch mode, restarting on source changes.
| `start:debug`  | Starts the application in debug mode with watch enabled.
| `start:prod`   | Runs the compiled JavaScript output from the `dist` directory.
| `lint`         | Runs ESLint to analyze and fix code issues in source and test files.
| `test`         | Runs all unit tests using Jest.
| `test:watch`   | Runs Jest in watch mode, rerunning tests on changes.
| `test:cov`     | Runs tests and outputs a code coverage report.
| `test:debug`   | Runs tests with Node.js debugger attached.
| `test:e2e`     | Runs end-to-end tests using a custom Jest configuration.

---

## Dependencies

### Dependencies

- @nestjs/common: ^11.0.1
- @nestjs/core: ^11.0.1
- @nestjs/platform-express: ^11.0.1
- class-transformer: ^0.5.1
- class-validator: ^0.14.2
- reflect-metadata: ^0.2.2
- rxjs: ^7.8.1

### DevDependencies

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

- [NestJS Documentation](https://docs.nestjs.com) - Comprehensive framework docs.
- [Discord Channel](https://discord.gg/G7Qnnhy) - Community support and discussion.
- [Official Video Courses](https://courses.nestjs.com/) - Learn NestJS through interactive courses.
- [NestJS Mau](https://mau.nestjs.com) - Official AWS deployment platform.
- [NestJS Devtools](https://devtools.nestjs.com) - Visualize and interact with Nest applications.
- [Enterprise Support](https://enterprise.nestjs.com) - Professional support plans.
- [Twitter @nestframework](https://twitter.com/nestframework) - Follow for updates.
- [LinkedIn](https://linkedin.com/company/nestjs) - Company page.
- [Jobs Board](https://jobs.nestjs.com) - Employment opportunities.

---

## Support

Nest is an MIT-licensed open source project maintained thanks to sponsors and backers. To support the project, visit:

- [Support NestJS](https://docs.nestjs.com/support)

---

## Stay in Touch

- Author: [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Official Website: [https://nestjs.com](https://nestjs.com/)
- Twitter: [@nestframework](https://twitter.com/nestframework)

---

## License

This project is licensed under the MIT License. For more details, see the [LICENSE file](https://github.com/nestjs/nest/blob/master/LICENSE).
