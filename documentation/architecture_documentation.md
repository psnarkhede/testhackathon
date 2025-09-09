# Architecture Documentation

---

**Project Version:** cd033e7f2eeffe6d4053e35cab8d03cb0d721491

---

## 1. High-level Overview

### Purpose
This NestJS application is a backend API service designed to handle vehicle booking operations. It provides endpoints to create vehicle bookings, retrieve existing booking information, and a simple health-check endpoint.

### Main Modules
- **AppModule:** The root module encapsulating the core controllers and services.

### System Structure
- The application is structured following the standard NestJS project layout.
- Source code is located under the `src` directory as specified in the `nest-cli.json`.
- The project primarily consists of the `AppController` and `AppService`, handling HTTP requests and business logic respectively.
- DTOs (Data Transfer Objects) are extensively used for request and response validation and transformation.

### Project Setup and Startup Flow
- Setup involves installing dependencies using `npm install`.
- The application can be started in multiple modes:
  - Development: `npm run start:dev`
  - Production: `npm run start:prod`
- The entry point is `src/main.ts` where the NestJS application is bootstrapped by creating an instance of the `AppModule` and listening on a configurable port (defaulting to 3000).

---

## 2. Module Description

### AppModule
- **Purpose:** Acts as the root application module orchestrating the controller and service.
- **Dependencies:** None external; internal usage of `AppController` and `AppService`.
- **Controllers:**
  - `AppController`
- **Providers:**
  - `AppService`

---

## 3. Controller & Service Interactions

### AppController
- **Routes:**
  - `GET /?uuid=<string>` — Returns a simple greeting incorporating the provided UUID query parameter.
  - `POST /bookings` — Accepts a `BookingRequestDto` payload to create a new booking.
  - `GET /bookings` — Accepts parameters matching `BookingRetrievalDto` to retrieve booking details.

- **Dependencies:**
  - `AppService` for business logic.

- **Request & Response DTOs:**
  - Request DTOs:
    - `BookingRequestDto` for creating bookings.
    - `BookingRetrievalDto` for fetching booking information.
  - Response DTOs:
    - `BookingResponseDto` for booking creation confirmations.
    - `BookingRequestDto` (reused as response) in booking retrieval.

### AppService
- **Methods:**
  - `createBooking(request: BookingRequestDto): BookingResponseDto` — Processes booking creation and returns confirmation.
  - `GetBooking(request: BookingRetrievalDto): BookingRequestDto` — Retrieves booking details.

- **Interactions:**
  - Receives validated DTOs from controller.
  - Performs necessary business logic or data retrieval (mocked with hardcoded data).
  - Returns DTO instances to controller for response.

---

## 4. Data Flow

### Incoming API Requests
1. **Create Booking Request:**
   - Client sends a POST request to `/bookings` with a JSON payload adhering to `BookingRequestDto`.
   - NestJS performs validation and transformation using `class-validator` and `class-transformer` decorators within the DTO.

2. **Booking Retrieval Request:**
   - Client sends a GET request to `/bookings` with query parameters matching `BookingRetrievalDto`.
   - Parameters are validated (UUID and mobile number formats).

### Handling in Controller
- Requests are routed to corresponding methods in `AppController`.
- The controller delegates business logic handling to `AppService`.

### Service Processing
- `AppService` receives DTOs (already validated) and processes them.
- In `createBooking`, a new booking confirmation `BookingResponseDto` is generated with a UUID and message.
- In `GetBooking`, mocked booking data is returned in the shape of `BookingRequestDto`.

### Response Formation
- The controller sends back the DTOs received from `AppService` as HTTP responses.
- Responses are automatically serialized and sent as JSON to the client.

---

## 5. External Dependencies & Configuration

### Important Dependencies (from `package.json`)
- **@nestjs/common, @nestjs/core, @nestjs/platform-express:** Core NestJS packages for defining modules, controllers, providers, and HTTP platform integration.
- **class-validator:** Enables declarative validation rules on DTO properties.
- **class-transformer:** Supports transforming request payloads into DTO instances with nested object support.
- **reflect-metadata:** Necessary for the decorators used in NestJS for metadata reflection.
- **rxjs:** Used for reactive programming, typically in async operations (not explicitly demonstrated here).

### Development Dependencies
- **@nestjs/cli and @nestjs/schematics:** Used for NestJS project scaffolding and CLI commands.
- **eslint, prettier, typescript-eslint:** Ensure code quality and formatting consistency.
- **jest and ts-jest:** Testing framework for unit and e2e tests.
- **ts-node, ts-loader:** Facilitate on-the-fly TypeScript compilation.

### Configuration Files
- **nest-cli.json:** Configures Nest CLI to set source root as `src` and automatically clean build directory on build.

- **main.ts:** Bootstraps the NestJS application by loading the root module (`AppModule`) and listening on the environment port or default 3000.

---

## 6. Architecture Diagram Suggestions

For a visual overview, consider the following diagrams:

- **Module Interaction Diagram:** Showing `AppModule` containing the `AppController` and `AppService`.
- **Request Flow Diagram:** Illustrating HTTP requests entering `AppController`, being delegated to `AppService`, and responses sent back.
- **DTO Mapping Diagram:** Showcasing validation and transformation of incoming and outgoing data via DTOs.

Example diagram elements:

```
[Client] --> [HTTP Layer] --> [AppController] --> [AppService]
             ^                                   |
             |                                   v
        Validation/Transformation           Data Processing
             |                                   |
          DTOs -----------------<----------------
```

---

## 7. Summary

This NestJS application implements a clean, modular REST API for handling vehicle bookings, leveraging DTOs and validation for data integrity. It adheres to NestJS best practices with a clear separation of concerns between controllers and services. External dependencies are standard for NestJS projects, supporting validation, metadata reflection, and test automation.

The system is designed for extensibility, allowing for integration with databases and further business logic enhancement in the `AppService`. The present mock implementations can easily be replaced with persistent storage or external service calls.

---