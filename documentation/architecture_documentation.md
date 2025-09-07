# Architecture Document

**Version:** 1.0.0

---

## Overview

This project is based on the NestJS framework, which organizes applications into **modules**, **controllers**, **services**, and **DTOs**.


## Components

- **main.ts:** Bootstraps and launches the NestJS application. Sets up the HTTP server.

- **app.module.ts:** The root module of the app, which imports and ties together all components.

- **Controllers (`app.controller.ts`):** Handle HTTP requests and route them. Example endpoints implemented include `GET /` and `POST /bookings`.
    - The `AppController` defines handlers like `getHello()` which returns greeting and `createBooking()` which handles booking creation.

- **Services (`app.service.ts`):** Contains business logic. `AppService` has methods that the controller calls to fulfill requests.

- **DTOs (Data Transfer Objects):** Define request and response data shapes. Located in `dto/` folder:
    - `HelloResponse` for returning greetings.
    - `BookingRequest` for incoming booking data.
    - `BookingResponse` for sending booking confirmations.

## Interactions

- When a client sends a request to the API, the **Controller** mapped to that route receives it.
- The Controller method then uses the **Service** to process the business logic, for example, creating a booking or returning a hello message.
- Inputs and outputs are validated/typed by **DTOs**.

## Dependencies (from `package.json`)

- **@nestjs/core, @nestjs/common, @nestjs/platform-express:** Core NestJS framework modules.
- **Typescript:** For static typing.

This setup ensures modularity, testability, and maintainability.
