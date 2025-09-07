# Developer Guide

**Version:** 1.0.0

## Code Structure

- **Controllers:** Handle incoming HTTP requests and return responses. Located in `app.controller.ts`.
- **Services:** Contain business logic and interact with data or other services. Located in `app.service.ts`.
- **DTOs:** Data Transfer Objects define the shape of request and response data.
- **Modules:** Define the application structure and dependency injection. Located in `app.module.ts`.

## How to Extend

### Adding a New Controller

1. Create a new controller file, e.g., `new-feature.controller.ts`.
2. Define your routes and methods using decorators like `@Get()`, `@Post()`, etc.
3. Register the controller in the relevant module.

### Adding a New Service

1. Create a new service file, e.g., `new-feature.service.ts`.
2. Implement business logic methods.
3. Inject this service into controllers or other services as needed.
4. Register the service in the relevant module.

### Adding a New DTO

1. Create a new class file for the DTO, e.g., `create-new-feature.dto.ts`.
2. Define the properties and apply validation decorators if necessary.

## Code Snippets

### Sample Controller Method
```typescript
@Get()
getHome(): HomeResponseDto {
  return this.appService.getHome();
}
```

### Sample Service Method
```typescript
createBooking(dto: CreateBookingDto): BookingResponseDto {
  // Logic to create booking
  return {
    bookingId: 'booking789',
    status: 'confirmed',
  };
}
```

### Sample DTO Definition
```typescript
export class CreateBookingDto {
  userId: string;
  roomId: string;
  date: string;
}
```
