# Project Version

**Version:** cd033e7f2eeffe6d4053e35cab8d03cb0d721491

---

# Project Structure

```
src/
  ├── Services/
  │    └── app.service.ts
  ├── app.controller.ts
  ├── app.module.ts
  dto/
  │    ├── BookingRequestDto.ts
  │    ├── BookingResponseDto.ts
  │    ├── BookingRetrievalDto.ts
  │    ├── CustomerDto.ts
  │    ├── PaymentDto.ts
  │    └── VehicleDto.ts
```

---

# Modules

## AppModule

**Purpose:**

The root module of the application. It declares the controllers and providers (services) used in this application.

**Code:**

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

# Services

## AppService

**Purpose:**

Provides core business logic for booking creation and retrieval.

- `createBooking` handles creating a booking and returns a booking response.
- `GetBooking` retrieves booking information based on a request.

**Code:**

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

# Controllers

## AppController

**Purpose:**

Handles incoming HTTP requests related to bookings and provides responses.

### Endpoints

| HTTP Method | Path       | Description                   | Request DTO          | Response DTO         |
|-------------|------------|-------------------------------|----------------------|---------------------|
| GET         | `/`        | Returns a hello message with uuid query param | Query param: `uuid` (string) | string |
| POST        | `/bookings`| Creates a new booking           | `BookingRequestDto`  | `BookingResponseDto` |
| GET         | `/bookings`| Retrieves booking details       | `BookingRetrievalDto`| `BookingRequestDto`  |

### Example Snippets

**GET /**

```typescript
@Get('/')
GetHelloWorld(@Query('uuid') uuid: string): string {
  return `Hello World, your uuid is ${uuid}`;
}
```

**POST /bookings**

```typescript
@Post("bookings")
CreateBookings(request: BookingRequestDto): BookingResponseDto {
  return this.appService.createBooking(request);
}
```

**GET /bookings**

```typescript
@Get("/bookings")
GetBookings(request: BookingRetrievalDto): BookingRequestDto {
  return this.appService.GetBooking(request);
}
```

**Full code:**

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

# DTOs

## BookingRequestDto

| Property | Type           | Required |
|----------|----------------|----------|
| customer | CustomerDto    | Yes      |
| vehicle  | VehicleDto     | Yes      |
| payment  | PaymentDto     | Yes      |

```typescript
export class BookingRequestDto {
  customer: CustomerDto;
  vehicle: VehicleDto;
  payment: PaymentDto;
}
```

---

## CustomerDto

| Property    | Type    | Required |
|-------------|---------|----------|
| name        | string  | Yes      |
| email       | string  | Yes      |
| mobilenumber| string  | Yes      |
| address     | string  | Yes      |
| pincode     | string  | Yes      |

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

## VehicleDto

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

## PaymentDto

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

## BookingResponseDto

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

## BookingRetrievalDto

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
