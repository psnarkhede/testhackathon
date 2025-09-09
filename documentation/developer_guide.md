# Project Version

**Version:** cd033e7f2eeffe6d4053e35cab8d03cb0d721491

# Project Structure

```
src/
├── Services/
│   └── app.service.ts
├── app.controller.ts
├── app.module.ts
│
dto/
├── BookingRequestDto.ts
├── BookingResponseDto.ts
├── BookingRetrievalDto.ts
├── CustomerDto.ts
├── PaymentDto.ts
└── VehicleDto.ts
```

# Modules

## AppModule

This is the root module of the application that imports controllers and services required by the app.

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './Services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

# Services

## AppService

`AppService` provides the business logic for managing bookings.

- **createBooking**: Takes a `BookingRequestDto` and returns a `BookingResponseDto` indicating successful booking creation.
- **GetBooking**: Takes a `BookingRetrievalDto` and returns a `BookingRequestDto` with booking details.

```typescript
import { Injectable } from '@nestjs/common';
import { BookingResponseDto } from '../dto/bookinig-response.dto';
import { BookingRequestDto } from '../dto/booking-request.dto';
import { VehicleType } from '../dto/vehicle.dto';
import { PaymentMode, PaymentType } from '../dto/payment.dto';
import { BookingRetrievalDto } from '../dto/booking-retrieval.dto';

@Injectable()
export class AppService {
  createBooking(requet: BookingRequestDto): BookingResponseDto {
    const bookingResponse: BookingResponseDto = {
      message: 'Booking Created Sucessfully',
      uuid: '123e4567-e89b-12d3-a456-426614174000',
    }
    return bookingResponse;
  }

  GetBooking(request: BookingRetrievalDto): BookingRequestDto {
    const bookingResponse: BookingRequestDto = {
      customer: {
        name : "John Doe",
        email : "johndoe@example.com",
        mobilenumber : "9876543210",
        address : "123 Main Street, New Delhi",
        pincode : "110011"
      },
      vehicle: {
        modelId : "550e8400-e29b-41d4-a716-446655440000",
        partId : "660e8400-e29b-41d4-a716-446655440111",
        vehicleType : VehicleType.CAR,
        onRoadPrice : 1250000,
        exShowroomPrice : 1150000
      },
      payment: {
        paymentId : "770e8400-e29b-41d4-a716-446655440222",
        transactionId : "880e8400-e29b-41d4-a716-446655440333",
        paymentDate : "2025-09-08T10:30:00Z",
        merchant : "HDFC Bank",
        amountPaid : 1250000,
        paymentType : PaymentType.FULL,
        paymentMode : PaymentMode.CARD
      }
    }

    return bookingResponse;
  }
}
```

# Controllers

## AppController

The controller handles HTTP requests for the application with three endpoints:

- **GET /**
  - **Purpose:** Returns a welcome message including a provided UUID query parameter.
  - **HTTP Method:** GET
  - **Path:** `/`
  - **Query Parameters:**
    - `uuid` (string) - UUID string to be included in the greeting.
  - **Response:** string message

- **POST /bookings**
  - **Purpose:** Create a new booking.
  - **HTTP Method:** POST
  - **Path:** `/bookings`
  - **Request DTO:** `BookingRequestDto`
  - **Response DTO:** `BookingResponseDto`
  - **Example snippet:**
    ```ts
    CreateBookings(request: BookingRequestDto): BookingResponseDto {
      return this.appService.createBooking(request);
    }
    ```

- **GET /bookings**
  - **Purpose:** Retrieve booking details.
  - **HTTP Method:** GET
  - **Path:** `/bookings`
  - **Request DTO:** `BookingRetrievalDto` (used as query params or body depending on implementation)
  - **Response DTO:** `BookingRequestDto`
  - **Example snippet:**
    ```ts
    GetBookings(request: BookingRetrievalDto): BookingRequestDto {
      return this.appService.GetBooking(request);
    }
    ```

Full code:

```typescript
import { Controller, Get, Post, Query } from '@nestjs/common';
import { BookingRequestDto } from './dto/booking-request.dto';
import { BookingResponseDto } from './dto/bookinig-response.dto';
import { AppService } from './Services/app.service';
import { BookingRetrievalDto } from './dto/booking-retrieval.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/')
  GetHelloWorld(@Query('uuid') uuid: string): string {
    return `Hello World, your uuid is ${uuid}`;
  }

  @Post("bookings")
  CreateBookings(request: BookingRequestDto): BookingResponseDto {
    return this.appService.createBooking(request);
  }

  @Get("/bookings")
  GetBookings(request: BookingRetrievalDto): BookingRequestDto {
    return this.appService.GetBooking(request);
  }
}
```

# DTOs

The Data Transfer Objects used in this project are:

---

### BookingRequestDto

Properties:
- `customer: CustomerDto` (required)
- `vehicle: VehicleDto` (required)
- `payment: PaymentDto` (required)

```typescript
export class BookingRequestDto {
  customer: CustomerDto;
  vehicle: VehicleDto;
  payment: PaymentDto;
}
```

---

### CustomerDto

Properties:
- `name: string` (required)
- `email: string` (required)
- `mobilenumber: string` (required)
- `address: string` (required)
- `pincode: string` (required)

```typescript
export class CustomerDto {
  name: string;
  email: string;
  mobilenumber: string;
  address: string;
  pincode: string;
}
```

---

### VehicleDto

Properties:
- `modelId: string` (required)
- `partId: string` (required)
- `vehicleType: VehicleType` (required)
- `onRoadPrice: number` (required)
- `exShowroomPrice: number` (required)

```typescript
export class VehicleDto {
  modelId: string;
  partId: string;
  vehicleType: VehicleType;
  onRoadPrice: number;
  exShowroomPrice: number;
}
```

---

### PaymentDto

Properties:
- `paymentId: string` (required)
- `transactionId: string` (required)
- `paymentDate: string` (required)
- `merchant: string` (required)
- `amountPaid: number` (required)
- `paymentType: PaymentType` (required)
- `paymentMode: PaymentMode` (required)

```typescript
export class PaymentDto {
  paymentId: string;
  transactionId: string;
  paymentDate: string;
  merchant: string;
  amountPaid: number;
  paymentType: PaymentType;
  paymentMode: PaymentMode;
}
```

---

### BookingResponseDto

Properties:
- `message: string` (required)
- `uuid: string` (required)

```typescript
export class BookingResponseDto {
  message: string;
  uuid: string;
}
```

---

### BookingRetrievalDto

Properties:
- `mobileNumber: string` (required)
- `uuid: string` (required)

```typescript
export class BookingRetrievalDto {
  mobileNumber: string;
  uuid: string;
}
```
