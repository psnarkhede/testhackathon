# Onboarding Document

**Version:** c66abb2e7c1c0b62d3131cbc72ed8f9a47ac1149

---

## Step 1: Clone the Repository

Clone the project repository to your local machine.

```bash
git clone <repository-url>
cd <repository-folder>
```

## Step 2: Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

## Step 3: Understand Project Structure

- **src/**: Source code including controllers, services, and DTOs.
- **dto/**: Data Transfer Objects used for validating and typing API payloads.
- **main.ts**: Entry point for the NestJS application.

## Step 4: Running the Application Locally

Use one of the following npm scripts to start the server:

- For development mode with watch support:

  ```bash
  npm run start:dev
  ```

- For normal development run:

  ```bash
  npm run start
  ```

- For production mode:

  ```bash
  npm run start:prod
  ```

The app will listen on port 3000 by default or on the port specified by the environment variable `PORT`.

## Step 5: Running Tests

- To run unit tests:

  ```bash
  npm run test
  ```

- To run e2e tests:

  ```bash
  npm run test:e2e
  ```

- For test coverage report:

  ```bash
  npm run test:cov
  ```

## Additional Resources

Refer to the README.md file for general info and useful links:

- Official NestJS Documentation: https://docs.nestjs.com
- Discord Support Channel: https://discord.gg/G7Qnnhy
- Deployment instructions and more.

---