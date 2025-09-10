# Project Onboarding Documentation

---

**Version:** dd69acd6519018268a83ec2c3f136f0dc37a8bd5

---

## 1. Project Overview

This project is a starter template built using the [NestJS](https://nestjs.com) framework — a progressive Node.js framework designed for building efficient and scalable server-side applications. It employs modern TypeScript and application architecture principles to help create maintainable and testable backend services.

**Technologies and Frameworks Used:**
- NestJS Framework (version 11.0.1)
- TypeScript
- RxJS
- Class Validator and Class Transformer for validation and transformation
- Jest for testing
- ESLint and Prettier for code quality and formatting

The purpose of this project is to serve as a robust boilerplate for server-side applications, enabling rapid development with a solid architectural foundation.

---

## 2. Setup Instructions

### Installing Dependencies

Run the following command to install all required dependencies:
```bash
npm install
```

### Running the Project

- **Development mode:**
```bash
npm run start
```
Starts the application normally for development.

- **Watch mode (auto-restart on file changes):**
```bash
npm run start:dev
```
Runs the app in watch mode, restarting on code changes.

- **Production mode:**
```bash
npm run start:prod
```
Launches the compiled production build located in the `dist` directory.

### Running Tests

- **Unit tests:**
```bash
npm run test
```

- **E2E (end-to-end) tests:**
```bash
npm run test:e2e
```

- **Test coverage report:**
```bash
npm run test:cov
```

- **Test watch mode:**
```bash
npm run test:watch
```
Runs tests continuously on file changes.

---

## 3. Project Structure

The source code is located in the `src` directory (defined by `nest-cli.json`). Important main files include:

- **`main.ts`** 
  - Entry point of the application.
  - Uses `NestFactory` to create a NestJS application instance from the `AppModule`.
  - Starts the HTTP server, defaulting to port 3000 or the port defined in environment variables.

- **`app.module.ts`**
  - Root application module where other modules, controllers, and providers are registered.

- **`app.controller.ts`**
  - Handles incoming HTTP requests and returns responses.

- **`app.service.ts`**
  - Contains business logic and is injected into controllers to keep them slim.

### DTOs (Data Transfer Objects)
- DTOs are special objects used to define how data will be sent over the network.
- They enforce validation and structure for incoming requests and outgoing responses.

### Important Folders and Files
- **`src`**: Source code root.
- **`test`**: Contains e2e test files and configurations.
- **`package.json`**: Lists dependencies and scripts.
- **`nest-cli.json`**: Configuration for Nest CLI.

---

## 4. API Endpoints Overview

This starter project includes a default controller with basic HTTP route(s):

| HTTP Method | Path | Request DTO | Response DTO | Description |
| ----------- | ---- | ----------- | ------------ | ----------- |
| GET         | `/`  | None        | String       | Returns a welcome or default message from the app service. |

### Explanation
- **GET /**: This endpoint typically returns a simple string message confirming the app is running (e.g., "Hello World"). There are no request DTOs needed for this route.

> Note: This project contains default boilerplate code without additional routes or DTOs defined.

---

## 5. Testing

### Structure
- Tests are placed primarily under the `test` folder.
- Unit tests are located alongside source files with `.spec.ts` extension.
- E2E tests are run using Jest with a special configuration `jest-e2e.json`.

### Running Tests
- Use `npm run test` for unit tests.
- Use `npm run test:e2e` for end-to-end tests.

### Example (from default `app.e2e-spec.ts`)
```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
```
This test checks that a GET request to `/` returns an HTTP 200 status and the string "Hello World!".

---

## 6. Resources & References

Useful references extracted from the `README.md`:

- [NestJS Official Website](https://nestjs.com)
- [NestJS Documentation](https://docs.nestjs.com)
- [Discord Channel](https://discord.gg/G7Qnnhy)
- [NestJS Video Courses](https://courses.nestjs.com/)
- [NestJS Mau (deployment platform)](https://mau.nestjs.com)
- [NestJS Devtools](https://devtools.nestjs.com)
- [Enterprise Support](https://enterprise.nestjs.com)
- [Jobs Board](https://jobs.nestjs.com)
- License: [MIT License](https://github.com/nestjs/nest/blob/master/LICENSE)

---

Thank you for joining the project! If you have any questions or need help, please reach out via the Discord or consult the official docs linked above.
