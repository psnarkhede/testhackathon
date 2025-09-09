# Architecture Documentation

---

**Project Version:** 196b5f7a1711cfd1008124dd1cd1f9243e5a4498

---

## 1. High-level Overview

### Purpose of the Application
This NestJS application is designed to manage vehicle booking operations. It provides API endpoints to create bookings and retrieve booking details based on customer information. The system is structured to encapsulate request validation, business logic processing, and response shaping in a modular and maintainable way.

### Main Modules and System Structure
- **AppModule:** The root module that integrates the controller and service responsible for booking operations.
- **AppController:** Exposes REST API endpoints for booking creation and retrieval.
- **AppService:** Contains business logic to handle the creation of bookings and fetching existing booking data.
- **Data Transfer Objects (DTOs):** Strongly typed objects used for request validation and response shaping, including booking requests and responses, customer, vehicle, and payment information.

### Project Setup and Startup Flow
- **Setup:** After cloning the project, dependencies are installed via `npm install`.
- **Development Start:** The application can be launched in development mode with `npm run start:dev` or production mode with `npm run start:prod`.
- **Bootstrap Process:** The entry point (`src/main.ts`) uses `NestFactory` to create and run the `AppModule` on a configured port (default 3000).

---

## 2. Module Description

### AppModule
- **Description:** The root module that wires together the controller and service layer.
- **Dependencies:** Does not import additional modules.
- **Controllers:** `AppController` handles incoming HTTP requests.
- **Providers/Services:** `AppService` contains the core booking business logic.

---

## 3. Controller & Service Interactions

### AppController
- **Endpoints:**
  - `POST /bookings`: Accepts a booking creation request with payload validated against `BookingRequestDto`.
  - `GET /bookings`: Expects query parameters validated via `BookingRetrievalDto` to fetch booking details.

- **Methods:**
  - `CreateBookings(request: BookingRequestDto): BookingResponseDto`:
    - Receives a validated booking creation request DTO.
    - Calls `AppService.createBooking`.
    - Returns a `BookingResponseDto` containing success message and booking UUID.

  - `GetBookings(request: BookingRetrievalDto): BookingRequestDto`:
    - Receives validated booking retrieval query DTO.
    - Calls `AppService.GetBooking`.
    - Returns the full `BookingRequestDto` representing the booking details.

### AppService
- **Methods:**
  - `createBooking(request: BookingRequestDto): BookingResponseDto`:
    - Processes booking creation logic.
    - Returns a confirmation with a fixed UUID (mock implementation).

  - `GetBooking(request: BookingRetrievalDto): BookingRequestDto`:
    - Retrieves booking details based on mobile number and booking UUID.
    - Returns a mock booking data object structured as `BookingRequestDto`.

- **Business Logic:**
  - Currently mocked, serving as placeholders to demonstrate data flow.

### DTOs Used
- **Request DTOs:**
  - `BookingRequestDto`:
    - Composite object containing `CustomerDto`, `VehicleDto`, and `PaymentDto`.
  - `BookingRetrievalDto`:
    - Contains `mobileNumber` (string) and `uuid` (UUID) to identify a booking.

- **Response DTOs:**
  - `BookingResponseDto`:
    - Contains a confirmation message and UUID.
  - `BookingRequestDto` (also serves as a response structure for retrieval):
    - Represents the detailed booking data including customer, vehicle, and payment information.

- **Supporting DTOs:**
  - `CustomerDto` - customer information like name, email, mobile number, address, pincode.
  - `VehicleDto` - vehicle identification, type, and pricing.
  - `PaymentDto` - payment metadata including IDs, amount, type, and mode.

- **Validation:**
  - DTO classes utilize `class-validator` decorators to enforce payload validity.
  - `class-transformer` is used for nested object transformation.

---

## 4. Data Flow

1. **Booking Creation (`POST /bookings`):**
   - Incoming HTTP POST request payload is validated against `BookingRequestDto`.
   - Controller `CreateBookings` method receives the DTO and delegates to `AppService.createBooking`.
   - Service processes the request (currently returns a hardcoded success response).
   - `BookingResponseDto` with confirmation message and UUID is returned to the client.

2. **Booking Retrieval (`GET /bookings`):**
   - Incoming HTTP GET request query parameters are validated against `BookingRetrievalDto`.
   - Controller `GetBookings` method invokes `AppService.GetBooking` with validated parameters.
   - Service retrieves a mock booking record returned as a `BookingRequestDto`.
   - Detailed booking information (customer, vehicle, payment) is sent back in the response.

3. **Validation and Transformation:**
   - Nested DTOs ensure structured and validated data for both requests and responses.
   - Validation errors (not shown here) would typically result in client errors prior to controller logic execution.

---

## 5. External Dependencies & Config

### Key Dependencies (from `package.json`)
- `@nestjs/common`, `@nestjs/core`, `@nestjs/platform-express`:
  - Core framework packages enabling the modular NestJS architecture and HTTP server.
- `class-validator` & `class-transformer`:
  - Perform input validation and class-to-plain-object transformation, ensuring data integrity.
- `rxjs`:
  - Supports reactive programming paradigms intrinsic to NestJS and async data streams.
- `reflect-metadata`:
  - Required for decorators and runtime type reflection in TypeScript.

### Dev Dependencies
- Tools for linting (`eslint`), formatting (`prettier`), testing (`jest`, `ts-jest`, `@nestjs/testing`), and TypeScript support (`typescript`, `ts-node`).

### Configuration Files
- **`nest-cli.json`**
  - Defines the source root directory as `src`.
  - Configures compiler options such as directory cleanup before builds.

- **`main.ts`**
  - Bootstraps the application by creating the Nest app instance with `AppModule`.
  - Listens on environment variable `PORT` or defaults to port 3000.

- **`package.json` Scripts**
  - `start`: Runs the compiled application.
  - `start:dev`: Runs the app in watch mode for hot-reloading during development.
  - `test` and variants provide comprehensive testing capabilities.

---

## 6. Architecture Diagram Suggestions

To visualize this system, a UML component or deployment diagram could illustrate:

- **Modules:**
  - AppModule containing AppController and AppService.

- **Interactions:**
  - Client → AppController: HTTP requests (`POST /bookings`, `GET /bookings`).
  - AppController → AppService: Service method calls with DTOs.
  - AppService → Data (mocked/stubbed for now): Business logic layer.

- **DTO flow:**
  - Incoming HTTP payloads → Validated DTO instances.
  - Service processes DTOs → Returns DTO instances as HTTP responses.

This diagram would highlight the clear separation of concerns, request flow, and validation layers.

---

## Summary
This NestJS application is a well-structured, modular system for vehicle booking management. It leverages strong typing and validation through DTOs and class-validator to ensure data correctness. Although currently using mocked service implementations, the architecture facilitates easy expansion to integrate persistence layers or external APIs. The clear separation between controllers, services, and DTOs aligns with NestJS best practices for scalable server-side applications.

---