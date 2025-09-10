# Project Version: dd69acd6519018268a83ec2c3f136f0dc37a8bd5

# NestJS Application Architecture Documentation

---

## 1. High-level Overview

### Purpose
This NestJS application serves as a backend service for managing vehicle booking operations. It supports create and retrieve booking functionalities through RESTful API endpoints.

### Main Modules and System Structure
- The entire system is encapsulated within a single **AppModule**.
- It exposes endpoints through the **AppController**.
- Business logic and data processing are handled by the **AppService**.
- Data Transfer Objects (DTOs) enforce structured, validated data flow between client requests and business logic.

### Project Setup & Startup Flow
- **Setup:** Use `npm install` to install dependencies.
- **Startup:** Application is started by running `npm run start` (or in watch and production modes).
- **Bootstrap:** `main.ts` initializes the NestJS application by creating the app instance from `AppModule` and listens on port `3000` (or environment variable `PORT`).

---

## 2. Module Description

### AppModule
- **Role:** Root module orchestrating the application.
- **Imports:** None external.
- **Controllers:** `AppController` handles all incoming HTTP requests.
- **Providers:** `AppService` handles business logic and data processing.

---

## 3. Controller & Service Interactions

### AppController
- **Endpoints:**
  - `GET /` - Returns a simple greeting message containing a UUID query parameter.
  - `POST /bookings` - Accepts a booking creation request.
  - `GET /bookings` - Retrieves booking details based on query parameters.

- **Dependencies:** Injects `AppService` to delegate business logic.

- **Request & Response DTOs:**
  - `POST /bookings` expects `BookingRequestDto` and returns `BookingResponseDto`.
  - `GET /bookings` expects `BookingRetrievalDto` and returns `BookingRequestDto`.

### AppService
- **Methods:**
  - `createBooking(request: BookingRequestDto): BookingResponseDto`
    - Processes booking creation.
    - Returns a confirmation message and UUID.
  - `GetBooking(request: BookingRetrievalDto): BookingRequestDto`
    - Retrieves a booking by mobile number and UUID.
    - Returns full booking details including customer, vehicle, and payment information.

- **Business Logic:** Simulated with hardcoded responses.

### DTOs Used
- **BookingRequestDto:** Represents booking creation payload, consisting of nested `CustomerDto`, `VehicleDto`, and `PaymentDto`.
- **BookingResponseDto:** Contains confirmation message and booking UUID.
- **BookingRetrievalDto:** Contains identifiers for retrieving bookings (`mobileNumber` and `uuid`).

Nested DTOs:
- **CustomerDto:** Customer personal and contact details.
- **VehicleDto:** Vehicle identifiers and pricing.
- **PaymentDto:** Payment transaction details and enums for type and mode.

---

## 4. Data Flow

### Incoming Request Handling
1. **Booking Creation (`POST /bookings`):**
   - Request validated and transformed into `BookingRequestDto`.
   - Passed to `AppController.CreateBookings`.
   - Delegated to `AppService.createBooking` for processing.
   - Service returns `BookingResponseDto` confirming booking creation.
   - Response sent back to client.

2. **Booking Retrieval (`GET /bookings`):**
   - Query parameters parsed and validated into `BookingRetrievalDto`.
   - Passed to `AppController.GetBookings`.
   - Delegated to `AppService.GetBooking`.
   - Service returns populated `BookingRequestDto` representing booking details.
   - Response sent back to client.

3. **Hello World (`GET /`):**
   - Returns a greeting message with the UUID query parameter.

### DTO Validation & Transformation
- Uses `class-validator` decorators to ensure data integrity and correctness on incoming requests.
- Uses `class-transformer` for nested object instantiation.

### Service Layer
- Implements core logic (stubbed in this project) to process the DTOs and generate responses.

---

## 5. External Dependencies & Configuration

### package.json Dependencies

- **@nestjs/common, @nestjs/core, @nestjs/platform-express:** Core NestJS framework packages enabling modular architecture and Express platform integration.
- **class-transformer:** Transforms plain objects into class instances, essential for handling nested DTOs.
- **class-validator:** Performs declarative validation on DTOs to enforce request data correctness.
- **reflect-metadata:** Enables metadata reflection, required by class-transformer and validation.
- **rxjs:** Reactive extensions used internally by NestJS for observables support.

### Dev Dependencies
- Tools for linting (`eslint`, `prettier`), testing (`jest`, `@nestjs/testing`), and TypeScript support (`ts-node`, `ts-jest`, `typescript-eslint`).

### nest-cli.json
- Configures NestJS CLI:
  - `sourceRoot` set to `src`.
  - Cleans output directory on compile (`deleteOutDir: true`).
  - Uses default schematics collection `@nestjs/schematics`.

### main.ts
- Entry point:
  - Bootstraps the NestJS application with `AppModule`.
  - Listens on port defined by `process.env.PORT` or defaults to `3000`.

---

## 6. Architecture Diagram Suggestions (Optional)

- **Component Diagram** showing:
  - **AppModule** as the root.
  - Connections to **AppController** and **AppService**.
  - DTOs as data contracts between controller and service.
- **Sequence Diagram** illustrating:
  - Client sending HTTP requests.
  - Controller receiving and validating requests.
  - Service processing the request.
  - Controller sending HTTP response.

---

## Summary
This NestJS project is a foundational backend application structured around a single module exposing REST endpoints for vehicle booking creation and retrieval. It follows NestJS best practices by segregating concerns across controllers, services, and DTOs, supported by robust validation and metadata reflection. External dependencies include the core NestJS packages, validation and transformation libraries, and development tools for testing and code quality.

The architecture facilitates scalability by allowing future modules and services to be introduced seamlessly while maintaining strict data integrity through well-defined DTOs.