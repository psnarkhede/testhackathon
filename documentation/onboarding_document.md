# Onboarding Document

**Version:** a69daa75ed359dfb29965abddd40909638342a9f

---

Welcome to the project! Follow these steps to setup and run the application locally.

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### Step 2: Install Dependencies

The project uses Node.js and NestJS framework.

Run:

```bash
npm install
```

This will install dependencies as defined in `package.json`.

### Step 3: Run the Application

You can run the application in development mode with watching enabled:

```bash
npm run start:dev
```

This will start the app and reload on file changes.

Alternatively, run for production:

```bash
npm run start:prod
```

### Step 4: Understand the Main Entry

The main bootstrap file is `src/main.ts`:

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```

This starts the NestJS app listening on port 3000 by default.

### Step 5: Running Tests

To run unit tests:

```bash
npm run test
```

To watch tests during development:

```bash
npm run test:watch
```

### Additional Help

Refer to the `README.md` for more details and usage instructions.

---