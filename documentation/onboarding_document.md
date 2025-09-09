# Project Onboarding Documentation

---

### Version: 196b5f7a1711cfd1008124dd1cd1f9243e5a4498

---

## 1. Project Overview

Welcome to the **project-test**! This is a starter NestJS project aimed at providing a scalable and efficient server-side application built with modern TypeScript.

- **Purpose:** To offer a clean structure and starter kit using the [NestJS](https://nestjs.com/) framework, helping developers build backend APIs quickly and maintainably.

- **Technologies & Framework:**
  - [NestJS](https://nestjs.com/) (v11.x) - A progressive Node.js framework for building efficient and scalable server-side applications.
  - TypeScript - typed superset of JavaScript for improved developer experience.
  - RxJS - Reactive Extensions library for reactive programming.
  - class-validator & class-transformer - for validating and transforming request data.
  - Jest - Testing framework.
  - ESLint & Prettier - Code formatting and linting tools.

---

## 2. Setup Instructions

### Installing Dependencies
Make sure you have [Node.js](https://nodejs.org/) installed.

To install required dependencies, run the following command in the project root directory:

```bash
npm install
```

### Running the Project
Use the following npm scripts:

- **Development mode:**
  ```bash
  npm run start
  ```
  Runs the project normally.

- **Watch mode (automatic restart on code changes):**
  ```bash
  npm run start:dev
  ```
  Very useful during active development.

- **Production mode:**
  ```bash
  npm run start:prod
  ```
  Executes the compiled JavaScript from `dist` folder for production deployment.

### Running Tests
The project uses Jest to run tests.

- **Run all unit tests:**
  ```bash
  npm run test
  ```

- **Run e2e (end-to-end) tests:**
  ```bash
  npm run test:e2e
  ```

- **Test coverage report:**
  ```bash
  npm run test:cov
  ```

- **Watch mode for tests:**
  ```bash
  npm run test:watch
  ```

---

## 3. Project Structure

The main source code is located in the `src` folder.

### Important Files

- **`src/main.ts`**
  - The application entry point.
  - Creates and starts the NestJS application using the `AppModule`.
  - Listens on a port (default 3000 or from `process.env.PORT`).

- **`src/app.module.ts`**
  - Root module that imports all other modules.
  - Responsible for application-level providers and configurations.

- **`src/app.controller.ts`**
  - Defines route handlers (endpoints) for the application.
  - Maps HTTP requests to functions.

- **`src/app.service.ts`**
  - Contains the business logic.
  - Called by the controller to process requests.

### DTOs (Data Transfer Objects)
- DTOs define the shape of data for incoming requests and outgoing responses.
- They help with validation and transformation of data.
- Typically created using TypeScript classes decorated with validation decorators from `class-validator`.
- Using DTOs improves code safety and clarity.

### Other Important Folders/Files
- **`test/`** - Contains end-to-end and unit test files.
- **`package.json`** - Defines dependencies, scripts, and build tools.
- **`nest-cli.json`** - Configuration for Nest CLI including source root directory.

---

## 4. API Endpoints Overview

> **Note:** As only base project files are provided (`main.ts` and config files), there are no additional controllers with endpoints beyond the default ones. Typically, `app.controller.ts` would contain routes. Please check that file to expand this section when endpoints are implemented.

Example for default root endpoint (usually present in minimal starter):

| HTTP Method | Path | Request DTO       | Response DTO      | Description                      |
|-------------|-------|------------------|------------------|---------------------------------|
| GET         | `/`   | None             | `{ message: string }` | Returns a welcome message or basic info |

> You can add your project-specific endpoints here with details about methods, paths, request/response DTOs, and description.

---

## 5. Testing

### Test Structure
- The project uses [Jest](https://jestjs.io/) as its testing framework.
- Tests are located in the `test` folder or alongside source files with `.spec.ts` extensions.
- Unit tests focus on individual services and modules.
- E2E tests simulate full scenarios by running the app and sending real HTTP requests.

### Running Tests
Run tests with:
```bash
npm run test
```

For end-to-end tests:
```bash
npm run test:e2e
```

To see coverage report:
```bash
npm run test:cov
```

### Example - app.e2e-spec.ts

An example e2e test might look like this:

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
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
      .expect({ message: 'Hello World!' });
  });

  afterAll(async () => {
    await app.close();
  });
});
```

- This tests the root GET endpoint `/` returns expected status and response.

---

## 6. Resources & References

For further learning and support, refer to the links included in `README.md`:

- [NestJS Official Documentation](https://docs.nestjs.com)
- [NestJS GitHub](https://github.com/nestjs/nest)
- [NestJS Discord Channel](https://discord.gg/G7Qnnhy)
- [NestJS Video Courses](https://courses.nestjs.com/)
- [NestJS Mau Deployment Platform](https://mau.nestjs.com)
- [NestJS Devtools](https://devtools.nestjs.com)
- [Enterprise Support](https://enterprise.nestjs.com)
- [NestJS Twitter](https://twitter.com/nestframework)
- [NestJS LinkedIn](https://linkedin.com/company/nestjs)
- [NestJS Jobs Board](https://jobs.nestjs.com)

---

Welcome aboard! Feel free to explore the codebase and reach out if you have questions.

Happy coding! 🚀