# Developer Guide

## Project Version

`dd69acd6519018268a83ec2c3f136f0dc37a8bd5`

---

## Project Structure

```
src/
├── Services/
│   └── app.service.ts
├── app.controller.ts
├── app.module.ts
├── dto/
│   ├── BookingRequestDto.ts
│   ├── BookingResponseDto.ts
│   ├── BookingRetrievalDto.ts
│   ├── CustomerDto.ts
│   ├── PaymentDto.ts
│   └── VehicleDto.ts
```

---

## Modules

### AppModule

This is the root module of the application. It imports necessary modules (none in this project), registers the `AppController` as the controller and `AppService` as the provider.

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

---

## Services

### AppService

`AppService` contains the business logic related to booking creation and retrieval.

- **createBooking**: Accepts a `BookingRequestDto` object and returns a `BookingResponseDto` with a success message and a generated UUID.
- **GetBooking**: Accepts a `BookingRetrievalDto` object and returns a dummy booking (hardcoded) as a `BookingRequestDto`.

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

---

## Controllers

### AppController

This controller defines API endpoints related to bookings and a test endpoint.

- **GET /**
  - **Purpose:** Returns a greeting message including the UUID query parameter.
  - **HTTP Method:** GET
  - **Path:** `/`
  - **Request DTO:** none
  - **Response:** string
  - **Example:**
    - Request: `GET /?uuid=abc123`
    - Response: `Hello World, your uuid is abc123`

- **POST /bookings**
  - **Purpose:** Creates a booking.
  - **HTTP Method:** POST
  - **Path:** `/bookings`
  - **Request DTO:** `BookingRequestDto`
  - **Response DTO:** `BookingResponseDto`

- **GET /bookings**
  - **Purpose:** Retrieves a booking based on details.
  - **HTTP Method:** GET
  - **Path:** `/bookings`
  - **Request DTO:** `BookingRetrievalDto`
  - **Response DTO:** `BookingRequestDto`

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

---

## DTOs

### BookingRequestDto

Represents a booking request containing customer, vehicle, and payment information.

| Property | Type         | Required |
|----------|--------------|----------|
| customer | CustomerDto  | yes      |
| vehicle  | VehicleDto   | yes      |
| payment  | PaymentDto   | yes      |

```typescript
export class BookingRequestDto {
  customer: CustomerDto;
  vehicle: VehicleDto;
  payment: PaymentDto;
}
```

---

### CustomerDto

Customer details for booking.

| Property    | Type   | Required |
|-------------|--------|----------|
| name        | string | yes      |
| email       | string | yes      |
| mobilenumber| string | yes      |
| address     | string | yes      |
| pincode     | string | yes      |

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

Vehicle details for booking.

| Property       | Type         | Required |
|----------------|--------------|----------|
| modelId        | string       | yes      |
| partId         | string       | yes      |
| vehicleType    | VehicleType  | yes      |
| onRoadPrice    | number       | yes      |
| exShowroomPrice| number       | yes      |

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

Payment details for booking.

| Property       | Type         | Required |
|----------------|--------------|----------|
| paymentId      | string       | yes      |
| transactionId  | string       | yes      |
| paymentDate    | string       | yes      |
| merchant       | string       | yes      |
| amountPaid     | number       | yes      |
| paymentType    | PaymentType  | yes      |
| paymentMode    | PaymentMode  | yes      |

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

Response object after creating a booking.

| Property | Type   | Required |
|----------|--------|----------|
| message  | string | yes      |
| uuid     | string | yes      |

```typescript
export class BookingResponseDto {
  message: string;
  uuid: string;
}
```

---

### BookingRetrievalDto

Parameters for retrieving a booking.

| Property   | Type   | Required |
|------------|--------|----------|
| mobileNumber | string | yes    |
| uuid        | string | yes     |

```typescript
export class BookingRetrievalDto {
  mobileNumber: string;
  uuid: string;
}
```
