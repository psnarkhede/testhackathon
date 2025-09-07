# Architecture Documentation

**Version:** ad7b209673a0468c5fb1392a28b13495d49dadc3

---

## Overview

This project is built using [NestJS](https://nestjs.com), a progressive Node.js framework.

The application follows a modular structure:

- **Modules:** Main module is `AppModule` which brings together controllers and providers.
- **Controllers:** Located in `src/app.controller.ts`, they handle incoming HTTP requests.
- **Services:** Business logic resides in `src/app.service.ts`. Services are injected into controllers using NestJS's dependency injection.
- **Data Transfer Objects (DTOs):** Located under the `src/dto` folder, DTOs declare the schema and validation for request/response payloads.

## Components

### AppModule
- The root module that imports necessary modules, declares controllers and providers.

### AppController
- Handles API requests:
  - `GET /` endpoint returns a greeting.
  - `POST /bookings` processes booking request data.

### AppService
- Contains the application logic to retrieve booking data.

### DTOs

- `BookingRequestDto`:
  - Validates inputs such as `mobileNumber` (phone number) and `uuid` (UUID string).
- `BookingResponseDto`:
  - Contains booking response data with optional fields, validated accordingly.

## Data Flow

1. Client sends HTTP request to an endpoint.
2. Controller receives and validates request payload using DTOs.
3. Controller calls service methods to process the request.
4. Service builds response data.
5. Controller returns the response to the client.

## Configuration Files

- `package.json`: Contains scripts, dependencies, and project metadata.
- `nest-cli.json`: Configuration for Nest CLI indicating source directory and compiler options.

## README

The `README.md` includes overview, setup instructions, commands to run and test the project, and deployment guidance.

## Summary

The system is designed for easy extension and maintenance using NestJS best practices, emphasizing separation of concerns, dependency injection, and validation.

---
