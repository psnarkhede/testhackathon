# Project Version

**Commit:** 196b5f7a1711cfd1008124dd1cd1f9243e5a4498

---

# 1. Project Structure

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
│   ├── VehicleDto.ts
├── app.controller.ts
└── app.module.ts
```

---

# 2. Modules

## AppModule
The root module of the application. It imports no additional modules but includes the main controller and service.

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

- **Purpose:** Bootstraps the application by linking the `AppController` and `AppService` together.

---

# 3. Services

## AppService
Responsible for handling the core business logic related to bookings.

### Purpose:
- Create a booking.
- Retrieve a booking based on given criteria.

### Code:
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

# 4. Controllers

## AppController
The main controller handling HTTP requests related to bookings.

### Constructor:
```typescript
constructor(private readonly appService: AppService) {}
```

### Endpoints:

| Endpoint       | HTTP Method | Request DTO          | Response DTO        | Purpose                        |
|----------------|-------------|----------------------|---------------------|--------------------------------|
| `/bookings`    | POST        | BookingRequestDto    | BookingResponseDto   | Create a new booking            |
| `/bookings`    | GET         | BookingRetrievalDto  | BookingRequestDto    | Retrieve booking information   |

### Code:
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

### Examples:

- **Create booking (POST /bookings):**
  ```json
  Request Body: BookingRequestDto (see DTO section)
  Response:
  {
    "message": "Booking Created Sucessfully",
    "uuid": "123e4567-e89b-12d3-a456-426614174000"
  }
  ```

- **Get booking (GET /bookings):**
  ```json
  Query Parameters: BookingRetrievalDto
  Response Body: BookingRequestDto (full booking details)
  ```

---

# 5. DTOs (Data Transfer Objects)

Below is a list of DTOs used by the controllers, with their properties, types, and whether they are required.

---

### BookingRequestDto
Represents the booking input data including customer, vehicle, and payment info.

| Property  | Type           | Required |
|-----------|----------------|----------|
| customer  | CustomerDto    | Yes      |
| vehicle   | VehicleDto     | Yes      |
| payment   | PaymentDto     | Yes      |

```typescript
export class BookingRequestDto {
  customer: [object Object];
  vehicle: [object Object];
  payment: [object Object];
}
```

---

### CustomerDto
Details of the customer.

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
Information about the vehicle.

| Property       | Type        | Required |
|----------------|-------------|----------|
| modelId        | string      | Yes      |
| partId         | string      | Yes      |
| vehicleType    | VehicleType | Yes      |
| onRoadPrice    | number      | Yes      |
| exShowroomPrice| number      | Yes      |

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
Details of the payment made for the booking.

| Property       | Type         | Required |
|----------------|--------------|----------|
| paymentId      | string       | Yes      |
| transactionId  | string       | Yes      |
| paymentDate    | string       | Yes      |
| merchant       | string       | Yes      |
| amountPaid     | number       | Yes      |
| paymentType    | PaymentType  | Yes      |
| paymentMode    | PaymentMode  | Yes      |

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
Confirmation response after booking creation.

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
Parameters for retrieving an existing booking.

| Property     | Type   | Required |
|--------------|--------|----------|
| mobileNumber | string | Yes      |
| uuid         | string | Yes      |

```typescript
export class BookingRetrievalDto {
  mobileNumber: string;
  uuid: string;
}
```

---

# Notes:
- `VehicleType`, `PaymentType`, and `PaymentMode` are enums imported from related DTO files but their exact definitions are not part of this extract.
- Some DTO properties in `BookingRequestDto` are noted as `[object Object]` in the source; this indicates they should correspond to the detailed DTO classes (CustomerDto, VehicleDto, PaymentDto) defined separately.

---

This concludes the developer guide for getting started with this booking system project.
