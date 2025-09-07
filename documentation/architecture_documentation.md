# Architecture Documentation

**Version:** c66abb2e7c1c0b62d3131cbc72ed8f9a47ac1149

---

## Overview
This project is a NestJS application structured with clear separation of concerns between controllers, services, and data transfer objects (DTOs).

## Project Structure

- **src/**
  - `app.controller.ts`: Defines API endpoints and handles HTTP requests.
  - `app.service.ts`: Provides the business logic and data response.
  - `app.module.ts`: Root module which bundles controllers and services.
  - **dto/**: Contains DTO classes for request and response data validation.
  - `main.ts`: Application bootstrap file, initializes NestJS app.

- **config files**
  - `nest-cli.json`: Nest CLI configuration.
  - `package.json`: Project dependencies, scripts, and jest configuration.

## Modules and Components

- **AppModule**
  - Registers AppController and AppService.
  - Acts as the root module for the application.

- **AppController**
  - Handles two endpoints:
    - `GET /`: Returns greeting string.
    - `POST /bookings`: Accepts a `BookingRequestDto` and returns a `BookingResponseDto`.

- **AppService**
  - Provides implementation for business logic.
  - Method `getHello()` returns a hardcoded booking response.

## Data Flow

1. A request arrives at the controller endpoint.
2. Input data is validated and transformed into DTO types.
3. Controller calls service methods with DTO input.
4. Service processes and returns output DTO.
5. Controller returns DTO data to client.

## Validation

- DTOs use `class-validator` decorators to enforce data types and constraints such as `IsUUID` and `IsMobilePhone`.

## Build and Run

- Uses TypeScript compilation and NestJS CLI for building.
- Runs on Node server listening on configurable port.

## Documentation & Support

- README describes setup, commands, and deployment.
- CircleCI badge present for CI/CD integration.
- Reference links to NestJS resources and community.

---