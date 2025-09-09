# Architecture Documentation for project-test

---

**Version:** cd033e7f2eeffe6d4053e35cab8d03cb0d721491

---

## 1. High-level Overview

The `project-test` is a server-side application built using the NestJS framework, designed primarily for managing vehicle booking operations. The application handles booking creation and retrieval, structuring the flow of data through well-defined Data Transfer Objects (DTOs) to ensure type safety and validation.

### Purpose

- To provide an API for vehicle bookings.
- Allow clients to create new bookings with related customer, vehicle, and payment details.
- Enable retrieval of existing bookings based on unique identifiers.

### Main Modules and Structure

- The application is structured as a single main module `AppModule` that encapsulates the core functionality.
- Key layers include Controllers (`AppController`) for handling incoming requests and Services (`AppService`) for business logic execution.
- DTOs are extensively used to validate and transfer structured data between layers.

### Project Setup & Startup Flow

- Setup is typical for NestJS apps: after cloning, run `npm install` to install dependencies.
- Development and production modes are supported with respective npm scripts:
  - `npm run start` for standard start
  - `npm run start:dev` for watch mode development
  - `npm run start:prod` for production launch
- The bootstrap function in `main.ts` initializes the NestJS application (`AppModule`) and listens on a configurable port (default 3000).

## 2. Module Description

### AppModule

- **Role:** Root application module.
- **Dependencies:** None external, self-contained.
- **Controllers:** `AppController`
- **Providers (Services):** `AppService`

The `AppModule` imports no external modules, indicating a focused scope on booking functionalities.

## 3. Controller & Service Interactions

### AppController

- **Routes:**
  - `GET /` - Simple hello-world endpoint with optional UUID query parameter.
  - `POST /bookings` - Endpoint to create a new booking. Accepts a `BookingRequestDto` as input.
  - `GET /bookings` - Endpoint to retrieve booking details. Accepts a `BookingRetrievalDto` DTO.

- **Interactions:**
  - Injects `AppService` to delegate business logic.
  - Request DTOs are received and passed to service methods without transformation in the controller.
  - Returns service response DTOs directly in API responses.

### AppService

- **Methods:**
  - `createBooking(request: BookingRequestDto): BookingResponseDto`
    - Processes booking creation logic.
    - Currently returns a static success message with a dummy UUID.

  - `GetBooking(request: BookingRetrievalDto): BookingRequestDto`
    - Retrieves booking details based on the request.
    - Returns a static sample booking containing customer, vehicle, and payment information.

- **Note:** Real persistence and business validations are not included, indicating a stub/mock implementation.

## 4. Data Flow

1. **Incoming API Request**
   - `POST /bookings` receives JSON matching `BookingRequestDto`, which includes nested customer, vehicle, and payment details.
   - `GET /bookings` uses query parameters matching `BookingRetrievalDto` (mobile number and UUID) to fetch bookings.

2. **Validation & Transformation**
   - DTOs utilize `class-validator` and `class-transformer` decorators to ensure correct data structure and types at runtime.
   - Nested DTOs (e.g., `CustomerDto`, `VehicleDto`, `PaymentDto`) allow composition and modular validation.

3. **Controller handles request**
   - The `AppController` receives parsed DTO instances from NestJS's built-in validation pipe.
   - Delegates processing to `AppService` methods.

4. **Service processes data**
   - For creation, the service returns a confirmation DTO with message and UUID.
   - For retrieval, the service returns detailed booking info structured as `BookingRequestDto`.

5. **Response sent back to client**
   - Controller returns the service's DTO response serializable to JSON.

## 5. External Dependencies & Configuration

### package.json Dependencies

- `@nestjs/common`, `@nestjs/core`, `@nestjs/platform-express`: Core NestJS modules and platform adapter for Express.js.
- `class-transformer`: Enables transformation of plain objects to class instances, necessary for nested DTO validation and serialization.
- `class-validator`: Provides declarative validation decorators on DTO properties.
- `reflect-metadata`: Required to store and retrieve metadata used by NestJS and validation frameworks.
- `rxjs`: Supports reactive programming paradigms used internally by NestJS.

### Dev Dependencies

- `@nestjs/cli`, `@nestjs/schematics`, `@nestjs/testing`: Development utilities, schematics for scaffolding, and testing tools.
- `eslint`, `prettier`: Code linting and formatting.
- `jest`, `ts-jest`: Testing framework and TypeScript integration.
- Various `@types/*`: TypeScript typings for Node.js, Jest, Express, etc.

### Important Configuration Files

- **nest-cli.json**
  - Source root is set to `src`.
  - Compiler set to clean output directory on rebuild (`deleteOutDir: true`).
  - Uses `@nestjs/schematics` collection for project setup and code generation.

- **main.ts**
  - Configures and bootstraps the NestJS application with `AppModule`.
  - Listens on the port specified by `process.env.PORT` or defaults to 3000.

### Scripts

- Useful scripts defined for building, formatting, linting, testing (`unit` and `e2e`), and running the app in various modes.

## 6. Architecture Diagram Suggestions

To visualize the system, the following diagrams are recommended:

- **Component Diagram:** Showing the main components - `AppController`, `AppService`, DTOs, and external dependencies.

- **Data Flow Diagram:** Illustrate the flow of HTTP requests from API clients to `AppController`, then to `AppService`, showing DTO validation and responses.

- **Module Interaction Diagram:** Since this app is mostly one module, highlight controller to service interaction.

## 7. Technical Details Summary

- **Framework:** NestJS (v11.x)
- **Language:** TypeScript
- **Architecture:** Modular, service-oriented
- **Validation:** Declarative, via class-validator
- **Transformation:** Via class-transformer
- **API Style:** RESTful endpoints with HTTP verbs
- **DTOs:** Strongly typed data contracts

---

This architecture ensures a clear separation of concerns:

- Controllers handle request routing and response.
- Services encapsulate business logic.
- DTOs enforce input/output contracts with validation.

While the current service implementation is illustrative and uses static data, the design enables straightforward extension for database integration, error handling, and scalable booking management.
