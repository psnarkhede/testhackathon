# API Documentation

**Version:** a471a6bebe64570d91bbaa4fb356251c883fe416

---

## Endpoint 1

- **HTTP Method:** GET
- **Path:** /
- **Controller:** app.controller.ts
- **Function Name:** GetHelloWorld
- **Parameters:**
  - `uuid` (string) - query parameter
- **Request DTO:** None
- **Response DTO:** None

**Sample Request:**
```
GET /?uuid=123e4567-e89b-12d3-a456-426614174000
```

---

## Endpoint 2

- **HTTP Method:** POST
- **Path:** /bookings
- **Controller:** app.controller.ts
- **Function Name:** CreateBookings
- **Request DTO:** BookingRequestDto

| Property | Type | Required |
|---|---|---|
| customer | CustomerDto | Yes |
| vehicle | VehicleDto | Yes |
| payment | PaymentDto | Yes |


### CustomerDto

| Property | Type | Required |
|---|---|---|
| name | string | Yes |
| email | string | Yes |
| mobilenumber | string | Yes |
| address | string | Yes |
| pincode | string | Yes |

### VehicleDto

| Property | Type | Required |
|---|---|---|
| modelId | string | Yes |
| partId | string | Yes |
| vehicleType | VehicleType | Yes |
| onRoadPrice | number | Yes |
| exShowroomPrice | number | Yes |

### PaymentDto

| Property | Type | Required |
|---|---|---|
| paymentId | string | Yes |
| transactionId | string | Yes |
| paymentDate | string | Yes |
| merchant | string | Yes |
| amountPaid | number | Yes |
| paymentType | PaymentType | Yes |
| paymentMode | PaymentMode | Yes |

- **Response DTO:** BookingResponseDto

| Property | Type | Required |
|---|---|---|
| message | string | Yes |
| uuid | string | Yes |

**Sample Request:**
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
    "modelId": "model123",
    "partId": "part456",
    "vehicleType": "VehicleType",
    "onRoadPrice": 1500000,
    "exShowroomPrice": 1400000
  },
  "payment": {
    "paymentId": "pay789",
    "transactionId": "txn101112",
    "paymentDate": "2024-06-01T10:00:00Z",
    "merchant": "MerchantName",
    "amountPaid": 1500000,
    "paymentType": "PaymentType",
    "paymentMode": "PaymentMode"
  }
}
```

---

## Endpoint 3

- **HTTP Method:** GET
- **Path:** /bookings
- **Controller:** app.controller.ts
- **Function Name:** GetBookings
- **Request DTO:** BookingRetrievalDto

| Property | Type | Required |
|---|---|---|
| mobileNumber | string | Yes |
| uuid | string | Yes |

- **Response DTO:** BookingRequestDto

| Property | Type | Required |
|---|---|---|
| customer | CustomerDto | Yes |
| vehicle | VehicleDto | Yes |
| payment | PaymentDto | Yes |

### CustomerDto (Response)

| Property | Type | Required |
|---|---|---|
| name | string | Yes |
| email | string | Yes |
| mobilenumber | string | Yes |
| address | string | Yes |
| pincode | string | Yes |

### VehicleDto (Response)

| Property | Type | Required |
|---|---|---|
| modelId | string | Yes |
| partId | string | Yes |
| vehicleType | VehicleType | Yes |
| onRoadPrice | number | Yes |
| exShowroomPrice | number | Yes |

### PaymentDto (Response)

| Property | Type | Required |
|---|---|---|
| paymentId | string | Yes |
| transactionId | string | Yes |
| paymentDate | string | Yes |
| merchant | string | Yes |
| amountPaid | number | Yes |
| paymentType | PaymentType | Yes |
| paymentMode | PaymentMode | Yes |

**Sample Request:**
```json
{
  "mobileNumber": "9876543210",
  "uuid": "123e4567-e89b-12d3-a456-426614174000"
}
```

---