# Developer Guide

**Version:** a69daa75ed359dfb29965abddd40909638342a9f

---

This guide helps developers understand, extend, and modify the system.

### Core Components

- **app.controller.ts**
  - Defines API endpoints using NestJS decorators (`@Get`, `@Post`).
  - Handles routing and input validation via DTOs.
  - Example snippet:

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

- **app.service.ts**
  - Contains business logic.
  - `getHello()` method returns a mock `BookingResponseDto`.

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

- **DTOs (Data Transfer Objects)**
  - **BookingRequestDto** validates input fields such as `mobileNumber` and `uuid`.
  - **BookingResponseDto** defines the structure of a response.
  - Use `class-validator` decorators to enforce validation rules (e.g., `@IsUUID()`, `@IsMobilePhone()`).

### Extending the System

- To add a new endpoint, extend `app.controller.ts` with a new method and appropriate decorators.
- Add any business logic to `app.service.ts`.
- Define any new DTOs in the `dto` folder, ensuring validation decorators.

### Modules and Providers

- Entry point is the `AppModule` defined in `app.module.ts`.
- Controllers and Services must be declared as providers in this module.

By following this structure, developers can efficiently maintain and extend the application.

---