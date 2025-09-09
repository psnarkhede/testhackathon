# API Documentation

**Version:** cd033e7f2eeffe6d4053e35cab8d03cb0d721491

---

## Endpoint: GET /
- **HTTP Method:** GET
- **Path:** /
- **Controller:** app.controller.ts
- **Function Name:** GetHelloWorld

### Request Parameters (Query):
| Name | Type | Required |
|-------|------|----------|
| uuid  | string | Yes |

### Request DTO:
_None_

### Response DTO:
_None_

### Sample Example

#### Request
```http
GET /?uuid=123e4567-e89b-12d3-a456-426614174000 HTTP/1.1
Host: example.com
```

#### Response
_None_

---

## Endpoint: POST /bookings
- **HTTP Method:** POST
- **Path:** /bookings
- **Controller:** app.controller.ts
- **Function Name:** CreateBookings

### Request DTO: BookingRequestDto

| Property | Type | Required |
|----------|-------|----------|
| customer | CustomerDto | Yes |
| vehicle  | VehicleDto | Yes |
| payment  | PaymentDto | Yes |

#### CustomerDto Properties
| Property | Type | Required |
|----------|-------|----------|
| name     | string | Yes |
| email    | string | Yes |
| mobilenumber | string | Yes |
| address  | string | Yes |
| pincode  | string | Yes |

#### VehicleDto Properties
| Property | Type | Required |
|----------|-------|----------|
| modelId  | string | Yes |
| partId   | string | Yes |
| vehicleType | VehicleType | Yes |
| onRoadPrice | number | Yes |
| exShowroomPrice | number | Yes |

#### PaymentDto Properties
| Property | Type | Required |
|----------|-------|----------|
| paymentId | string | Yes |
| transactionId | string | Yes |
| paymentDate | string | Yes |
| merchant | string | Yes |
| amountPaid | number | Yes |
| paymentType | PaymentType | Yes |
| paymentMode | PaymentMode | Yes |

### Response DTO: BookingResponseDto

| Property | Type | Required |
|----------|-------|----------|
| message  | string | Yes |
| uuid     | string | Yes |

### Sample Example

#### Request
```json
{
  "customer": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "mobilenumber": "9876543210",
    "address": "123 Main St",
    "pincode": "560001"
  },
  "vehicle": {
    "modelId": "model-123",
    "partId": "part-456",
    "vehicleType": "SUV",
    "onRoadPrice": 25000.5,
    "exShowroomPrice": 23000.0
  },
  "payment": {
    "paymentId": "pay-789",
    "transactionId": "txn-1011",
    "paymentDate": "2024-06-01T10:00:00Z",
    "merchant": "PaymentGateway",
    "amountPaid": 25000.5,
    "paymentType": "CreditCard",
    "paymentMode": "Online"
  }
}
```

#### Response
```json
{
  "message": "Booking created successfully",
  "uuid": "123e4567-e89b-12d3-a456-426614174000"
}
```

---

## Endpoint: GET /bookings
- **HTTP Method:** GET
- **Path:** /bookings
- **Controller:** app.controller.ts
- **Function Name:** GetBookings

### Request DTO: BookingRetrievalDto

| Property | Type | Required |
|----------|-------|----------|
| mobileNumber | string | Yes |
| uuid         | string | Yes |

### Response DTO: BookingRequestDto

| Property | Type | Required |
|----------|-------|----------|
| customer | CustomerDto | Yes |
| vehicle  | VehicleDto | Yes |
| payment  | PaymentDto | Yes |

#### CustomerDto Properties
| Property | Type | Required |
|----------|-------|----------|
| name     | string | Yes |
| email    | string | Yes |
| mobilenumber | string | Yes |
| address  | string | Yes |
| pincode  | string | Yes |

#### VehicleDto Properties
| Property | Type | Required |
|----------|-------|----------|
| modelId  | string | Yes |
| partId   | string | Yes |
| vehicleType | VehicleType | Yes |
| onRoadPrice | number | Yes |
| exShowroomPrice | number | Yes |

#### PaymentDto Properties
| Property | Type | Required |
|----------|-------|----------|
| paymentId | string | Yes |
| transactionId | string | Yes |
| paymentDate | string | Yes |
| merchant | string | Yes |
| amountPaid | number | Yes |
| paymentType | PaymentType | Yes |
| paymentMode | PaymentMode | Yes |

### Sample Example

#### Request
```json
{
  "mobileNumber": "9876543210",
  "uuid": "123e4567-e89b-12d3-a456-426614174000"
}
```

#### Response
```json
{
  "customer": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "mobilenumber": "9876543210",
    "address": "123 Main St",
    "pincode": "560001"
  },
  "vehicle": {
    "modelId": "model-123",
    "partId": "part-456",
    "vehicleType": "SUV",
    "onRoadPrice": 25000.5,
    "exShowroomPrice": 23000.0
  },
  "payment": {
    "paymentId": "pay-789",
    "transactionId": "txn-1011",
    "paymentDate": "2024-06-01T10:00:00Z",
    "merchant": "PaymentGateway",
    "amountPaid": 25000.5,
    "paymentType": "CreditCard",
    "paymentMode": "Online"
  }
}
```

---

---

