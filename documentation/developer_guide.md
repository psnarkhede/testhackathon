# Project Version: 196b5f7a1711cfd1008124dd1cd1f9243e5a4498

---

# Developer Guide

## 1. Project Structure

```
src/
├── Services/
│   └── app.service.ts
├── dto/
│   ├── BookingRequestDto.ts
│   ├── BookingResponseDto.ts
│   ├── BookingRetrievalDto.ts
│   ├── CustomerDto.ts
│   ├── PaymentDto.ts
│   └── VehicleDto.ts
├── app.controller.ts
└── app.module.ts
```

## 2. Modules

### AppModule
The root module of the application. It imports necessary modules, declares controllers, and provides services.

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


## 3. Services

### AppService
This service handles booking creation and retrieval operations. It acts as the business logic layer for bookings.

- **createBooking**: Accepts a booking request DTO and returns a booking response DTO indicating success and a generated UUID.
- **GetBooking**: Accepts a booking retrieval DTO and returns the booking details as a BookingRequestDto.

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


## 4. Controllers

### AppController
This controller provides HTTP endpoints to create and retrieve bookings.

| Endpoint       | HTTP Method | Request DTO           | Response DTO          | Purpose                       |
|----------------|-------------|-----------------------|-----------------------|-------------------------------|
| POST /bookings | POST        | `BookingRequestDto`   | `BookingResponseDto`  | Create a new booking           |
| GET /bookings  | GET         | `BookingRetrievalDto` | `BookingRequestDto`   | Retrieve existing booking info |

```typescript
import { Controller, Get, Post, Query } from '@nestjs/common';
import { BookingRequestDto } from './dto/booking-request.dto';
import { BookingResponseDto } from './dto/bookinig-response.dto';
import { AppService } from './Services/app.service';
import { BookingRetrievalDto } from './dto/booking-retrieval.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("bookings")
  CreateBookings(request: BookingRequestDto): BookingResponseDto {
    return this.appService.createBooking(request);
  }

  @Get("/bookings")
  GetBookings(request:BookingRetrievalDto): BookingRequestDto {
    return this.appService.GetBooking(request);
  }
}
```

**Example Usage:**

- Creating a booking: Send a POST request to `/bookings` with a JSON body matching `BookingRequestDto`.
- Retrieving a booking: Send a GET request to `/bookings` with query parameters matching `BookingRetrievalDto` (e.g., `mobileNumber` and/or `uuid`).

## 5. DTOs

### BookingRequestDto
Represents a booking request containing customer, vehicle, and payment details.

| Property | Type           | Required |
|----------|----------------|----------|
| customer | `CustomerDto`  | Yes      |
| vehicle  | `VehicleDto`   | Yes      |
| payment  | `PaymentDto`   | Yes      |

```typescript
export class BookingRequestDto {
  customer: [object Object];
  vehicle: [object Object];
  payment: [object Object];
}
```

---

### CustomerDto
Customer personal details for the booking.

| Property    | Type   | Required |
|-------------|--------|----------|
| name        | string | Yes      |
| email       | string | Yes      |
| mobilenumber| string | Yes      |
| address     | string | Yes      |
| pincode     | string | Yes      |

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
Vehicle details related to the booking.

| Property       | Type         | Required |
|----------------|--------------|----------|
| modelId        | string       | Yes      |
| partId         | string       | Yes      |
| vehicleType    | VehicleType  | Yes      |
| onRoadPrice    | number       | Yes      |
| exShowroomPrice| number       | Yes      |

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
Payment transaction details.

| Property      | Type         | Required |
|---------------|--------------|----------|
| paymentId     | string       | Yes      |
| transactionId | string       | Yes      |
| paymentDate   | string       | Yes      |
| merchant      | string       | Yes      |
| amountPaid    | number       | Yes      |
| paymentType   | PaymentType  | Yes      |
| paymentMode   | PaymentMode  | Yes      |

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
Response returned after booking creation.

| Property | Type   | Required |
|----------|--------|----------|
| message  | string | Yes      |
| uuid     | string | Yes      |

```typescript
export class BookingResponseDto {
  message: string;
  uuid: string;
}
```

---

### BookingRetrievalDto
DTO used to fetch booking information.

| Property    | Type   | Required |
|-------------|--------|----------|
| mobileNumber| string | Yes      |
| uuid        | string | Yes      |

```typescript
export class BookingRetrievalDto {
  mobileNumber: string;
  uuid: string;
}
```
