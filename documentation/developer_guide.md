# Developer Guide

**Version:** c66abb2e7c1c0b62d3131cbc72ed8f9a47ac1149

---

## Overview
This section explains how developers can understand, extend, and modify the project.

## Key Files and Their Roles

- **src/app.controller.ts**
  - Defines API endpoints.
  - Handles incoming requests and returns responses.
  - Uses `AppService` to handle business logic.

- **src/app.service.ts**
  - Contains business logic.
  - Currently provides booking data with the `getHello()` method.

- **src/app.module.ts**
  - Main module that wires up controllers and providers.

- **src/dto/BookingRequestDto.ts** and **src/dto/BookingResponseDto.ts**
  - Data Transfer Objects (DTOs) defining the shape of request and response data.

## Extending the API
To add new functionality:

1. Add a new method in `AppController` with appropriate HTTP decorators (`@Get`, `@Post`, etc).
2. Define or update DTOs for any new data structures.
3. Implement necessary business logic in `AppService`.
4. Register new providers in `AppModule` if required.

### Example: Endpoint and Service Method
```typescript
// src/app.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
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
  GetBookings(@Body() request: BookingRequestDto): BookingResponseDto {
    return this.appService.getHello();
  }
}
```

```typescript
// src/app.service.ts
import { Injectable } from '@nestjs/common';
import { BookingResponseDto } from './dto/bookinig-response.dto';

@Injectable()
export class AppService {
  getHello(): BookingResponseDto {
    const bookingResponse: BookingResponseDto = {
      vehicle: 'Car',
      uuid: '123e4567-e89b-12d3-a456-426614174000',
      amount: 100
    };
    return bookingResponse;
  }
}
```

## Notes
- DTOs use class-validator decorators (in `src/dto/booking-request.dto.ts` and `src/dto/bookinig-response.dto.ts`) to validate requests.
- Service methods should return DTO instances.
- Ensure to import DTOs correctly; there is a minor typo in the import statement in `app.controller.ts` where `bookinig-response.dto` is used instead of `booking-response.dto`.

---