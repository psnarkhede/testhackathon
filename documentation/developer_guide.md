# Developer Guide

**Version:** ad7b209673a0468c5fb1392a28b13495d49dadc3

---

This guide provides an overview of how to extend or modify the system.

## Project Structure

- **src/app.controller.ts**: Defines API endpoints and their handlers.
- **src/app.service.ts**: Business logic layer providing response data.
- **src/app.module.ts**: The main application module that brings controllers and providers together.
- **src/dto/**: Contains Data Transfer Objects (DTOs) which describe the shape of request and response payloads.

## Key Files and Usage

### app.controller.ts

- Defines two endpoints: `GET /` and `POST /bookings`.
- Uses decorators from `@nestjs/common` to define routes.
- Calls `AppService` for business logic.

**Excerpt:**

```typescript
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BookingRequestDto } from './dto/booking-request.dto';
import { BookingResponseDto } from './dto/bookinig-response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  GetHelloWorld(): string {
    return 'Hello World';
  }

  @Post("bookings")
  GetBookings(request: BookingRequestDto): BookingResponseDto {
    return this.appService.getHello();
  }
}
```

### app.service.ts

- Implements the logic provided to the controller.
- The `getHello()` method returns a fixed booking response.

**Excerpt:**

```typescript
import { Injectable } from '@nestjs/common';
import { BookingResponseDto } from './dto/bookinig-response.dto';

@Injectable()
export class AppService {
  getHello(): BookingResponseDto {
    const bookingResponse: BookingResponseDto = {
      vehicle: 'Car',
      uuid: '123e4567-e89b-12d3-a456-426614174000',
      amount: 100
    }
    return bookingResponse;
  }
}
```

### DTOs

- `BookingRequestDto` and `BookingResponseDto` define the structure and validation rules for API data.
- Decorators from `class-validator` are used for input validation.

### Extending the System

- To add new endpoints, update `app.controller.ts` with new methods and routes.
- Business logic should be implemented or extended in `app.service.ts`.
- Define new DTO classes in the `dto/` folder as necessary.

### Notes

- Watch for the import paths for DTOs – note a probable typo in "bookinig-response.dto.ts" (should be "booking-response.dto.ts"). Ensure consistent naming.
- Use NestJS modules and dependency injection principles to add providers and services.

---
