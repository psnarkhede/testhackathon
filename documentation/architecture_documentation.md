# Architecture Documentation

---

## Version: 196b5f7a1711cfd1008124dd1cd1f9243e5a4498

---

# 1. High-level Overview

This project is a **NestJS** server-side application designed to manage vehicle booking operations. It provides RESTful API endpoints for creating and retrieving bookings, encapsulating customer, vehicle, and payment information within structured Data Transfer Objects (DTOs).

### Purpose

- Facilitate vehicle booking creation and retrieval
- Validate and transport data consistently between client requests and server responses

### System Structure

- The system follows a modular architecture centered around a single root module, **AppModule**.
- The key building blocks are:
  - **AppController**: Handles HTTP requests.
  - **AppService**: Contains business logic related to bookings.
  - **DTOs**: Define request/response data schemas and enforce validation.

### Project Setup & Startup Flow

- Dependencies are installed via `npm install`.
- The application can run in different modes:
  - Development: `npm run start:dev` for hot-reloading
  - Production: `npm run start:prod` to run compiled code
- The entry point is `src/main.ts` which bootstraps the NestJS application by:
  1. Creating an application instance from **AppModule** using `NestFactory.create(AppModule)`.
  2. Listening on port 3000 or a port defined in the `PORT` environment variable.

# 2. Module Description

### AppModule

- **Role:** Root module that orchestrates the application.
- **Dependencies:** None external (does not import other feature modules).
- **Components:**
  - **Controllers:** [AppController]
  - **Providers/Services:** [AppService]

# 3. Controller & Service Interactions

### AppController

- **Responsibilities:**
  - Defines API endpoints.
  - Handles incoming HTTP requests.
  - Delegates business logic to AppService.

- **Endpoints:**
  - `POST /bookings` - Creates a new booking.
  - `GET /bookings` - Retrieves an existing booking.

- **Method Signatures:**
  - `CreateBookings(request: BookingRequestDto): BookingResponseDto`
  - `GetBookings(request: BookingRetrievalDto): BookingRequestDto`

- **Request Handling:**
  - The controller methods accept DTO instances representing the request payload.
  - They invoke corresponding methods on `AppService` and return DTOs representing the response.

### AppService

- **Responsibilities:**
  - Implements core booking logic.
  - Responsible for creation and retrieval of booking data.

- **Methods:**
  - `createBooking(request: BookingRequestDto): BookingResponseDto`
    - Constructs a booking confirmation response with a success message and generated UUID.
  - `GetBooking(request: BookingRetrievalDto): BookingRequestDto`
    - Returns mock booking data populated with customer, vehicle, and payment details.

- **Data Interaction:**
  - Returns instances of DTO classes to enforce consistent contract.

# 4. Data Flow

### Incoming Request to Outgoing Response

1. **Client request** arrives as HTTP POST or GET.
2. NestJS framework deserializes and validates the data into DTO classes.
   - For booking creation: `BookingRequestDto`
   - For booking retrieval: `BookingRetrievalDto`
3. **AppController** receives validated DTOs and calls respective service methods.
4. **AppService processes the request**:
   - For creation, it returns a `BookingResponseDto` containing confirmation message and UUID.
   - For retrieval, returns a `BookingRequestDto` instance with sample booking details.
5. **AppController returns** the service's response DTO.
6. NestJS serializes the response DTO back into JSON as the API response.

### DTO Structures

- **BookingRequestDto**
  - Aggregates `CustomerDto`, `VehicleDto`, and `PaymentDto`.
  - Validates nested objects to ensure data integrity.

- **CustomerDto**
  - name, email, mobilenumber, address, pincode
  - Strong validation on mobile number length, email format, pincode length.

- **VehicleDto**
  - modelId, partId (UUID references), vehicleType (enum), onRoadPrice, exShowroomPrice

- **PaymentDto**
  - paymentId, transactionId (UUIDs), paymentDate (ISO string), merchant, amountPaid
  - Enums for paymentType (FULL, PARTIAL, REFUND) and paymentMode (CASH, CARD, UPI, NETBANKING, WALLET)

- **BookingRetrievalDto**
  - mobileNumber (string)
  - uuid (UUID)

- **BookingResponseDto**
  - message (string)
  - uuid (UUID)

# 5. External Dependencies & Configuration

### Package.json Dependencies

- **@nestjs/common**, **@nestjs/core**, **@nestjs/platform-express**
  - Core NestJS framework modules for application scaffolding, dependency injection, and HTTP platform support.

- **class-transformer**
  - Used for transforming plain objects into class instances and vice versa, enabling DTO validation and serialization.

- **class-validator**
  - Provides declarative validation decorators used extensively inside DTO classes to enforce data correctness.

- **reflect-metadata**
  - Enables metadata reflection required by decorators in TypeScript/NestJS.

- **rxjs**
  - Reactive Extensions library commonly used for asynchronous programming patterns in NestJS.

### Development Dependencies

- ESLint and Prettier related packages for linting and formatting.
- Jest and Supertest for testing, including unit and e2e tests.
- TypeScript and related tools for typed JavaScript development.

### Nest CLI Configuration (`nest-cli.json`)

- Specifies the source root directory as `src`.
- Uses the official `@nestjs/schematics` collection for project scaffolding.
- Configured to delete output directory on build (clean builds).

### Application Bootstrap (`src/main.ts`)

- Creates the Nest application from the root `AppModule`.
- Listens on a configured port (default `3000`).

# 6. Architecture Diagram Suggestions

To visualize this application, consider the following diagrams:

- **Component Diagram:**
  - Show **AppModule** as the root container.
  - Inside it, depict **AppController** and **AppService**.
  - Represent **DTOs** as data objects flowing between controller and service.

- **Sequence Diagram:**
  - Display flow for API calls:
    1. Client sends HTTP request
    2. Nest controller receives & validates DTO
    3. Controller calls service
    4. Service processes & returns response DTO
    5. Controller sends HTTP response

- **Package/Dependency Diagram:**
  - Show major external dependencies (`@nestjs/*`, `class-validator/transformer`, `rxjs`) and their responsibilities.

---

# Summary

This is a foundational NestJS application focused on vehicle booking management via REST endpoints. It leverages NestJS dependency injection and modularity, uses decorators for validation with DTOs, and cleanly separates HTTP concerns (controllers) from business logic (services).

All data contracts and validation rules are strictly defined using **class-validator** annotations within DTOs. The application can be easily extended with additional modules, controllers, and services for scalability.

The project is primed for professional development workflows, including testing and deployment, as indicated by the supplied scripts and dependencies.

---