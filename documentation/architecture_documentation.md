# Architecture Documentation

**Version:** 1.0.0

## System Architecture

- **main.ts**: Bootstrap file to start the NestJS application.
- **app.module.ts**: Root module where controllers and services are registered.
- **app.controller.ts**: Defines request handling routes.
- **app.service.ts**: Contains business logic.
- **DTOs**: Define the schema of data for requests and responses, enforcing structure and validation.

## Interaction Flow

User Request → **Controller** → **Service** → **DTO**

1. The controller receives the incoming request and calls the respective service method.
2. The service processes the request, performing business logic.
3. DTOs are used to type-check both incoming requests and outgoing responses.

## Dependencies

- `@nestjs/common`, `@nestjs/core`, `@nestjs/platform-express` for the NestJS framework.
- `class-validator` and `class-transformer` for validation and transformation of DTOs.
- `reflect-metadata` for metadata reflection.
- `rxjs` for reactive programming.
- `typescript` and `ts-node` for TypeScript compilation and execution.
