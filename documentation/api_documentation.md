# API Documentation

**Version:** dd69acd6519018268a83ec2c3f136f0dc37a8bd5

---

## Endpoint: GET /
- **Controller:** app.controller.ts
- **Function:** GetHelloWorld
- **HTTP Method:** GET
- **Path:** /

### Parameters:
| Name | Type   | Source | Required |
|-------|--------|--------|----------|
| uuid  | string | query  | Yes      |

### Request DTO:
This endpoint does not use a request DTO.

### Response DTO:
This endpoint does not return a response DTO.

### Sample Request Example:
```http
GET /?uuid=example-uuid-string HTTP/1.1
Host: your-api-host
```

---

## Endpoint: POST /bookings
- **Controller:** app.controller.ts
- **Function:** CreateBookings
- **HTTP Method:** POST
- **Path:** /bookings

### Request DTO: BookingRequestDto
| Name    | Type          | Required |
|---------|---------------|----------|
| customer| CustomerDto   | Yes      |
| vehicle | VehicleDto    | Yes      |
| payment | PaymentDto    | Yes      |

#### CustomerDto Properties:
| Name       | Type   | Required |
|------------|--------|----------|
| name       | string | Yes      |
| email      | string | Yes      |
| mobilenumber| string | Yes     |
| address    | string | Yes      |
| pincode    | string | Yes      |

#### VehicleDto Properties:
| Name          | Type        | Required |
|---------------|-------------|----------|
| modelId       | string      | Yes      |
| partId        | string      | Yes      |
| vehicleType   | VehicleType | Yes      |
| onRoadPrice   | number      | Yes      |
| exShowroomPrice | number    | Yes      |

#### PaymentDto Properties:
| Name          | Type        | Required |
|---------------|-------------|----------|
| paymentId     | string      | Yes      |
| transactionId | string      | Yes      |
| paymentDate   | string      | Yes      |
| merchant      | string      | Yes      |
| amountPaid    | number      | Yes      |
| paymentType   | PaymentType | Yes      |
| paymentMode   | PaymentMode | Yes      |

### Response DTO: BookingResponseDto
| Name    | Type   | Required |
|---------|--------|----------|
| message | string | Yes      |
| uuid    | string | Yes      |

### Sample Request Example:
```json
{
  "customer": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "mobilenumber": "1234567890",
    "address": "123 Main St",
    "pincode": "123456"
  },
  "vehicle": {
    "modelId": "model123",
    "partId": "part456",
    "vehicleType": "SUV",
    "onRoadPrice": 35000,
    "exShowroomPrice": 32000
  },
  "payment": {
    "paymentId": "pay789",
    "transactionId": "txn101112",
    "paymentDate": "2024-06-01T14:30:00Z",
    "merchant": "PaymentGateway",
    "amountPaid": 35000,
    "paymentType": "CreditCard",
    "paymentMode": "Online"
  }
}
```

---

## Endpoint: GET /bookings
- **Controller:** app.controller.ts
- **Function:** GetBookings
- **HTTP Method:** GET
- **Path:** /bookings

### Request DTO: BookingRetrievalDto
| Name         | Type   | Required |
|--------------|--------|----------|
| mobileNumber | string | Yes      |
| uuid         | string | Yes      |

### Response DTO: BookingRequestDto
| Name    | Type          | Required |
|---------|---------------|----------|
| customer| CustomerDto   | Yes      |
| vehicle | VehicleDto    | Yes      |
| payment | PaymentDto    | Yes      |

#### CustomerDto Properties:
| Name       | Type   | Required |
|------------|--------|----------|
| name       | string | Yes      |
| email      | string | Yes      |
| mobilenumber| string | Yes     |
| address    | string | Yes      |
| pincode    | string | Yes      |

#### VehicleDto Properties:
| Name          | Type        | Required |
|---------------|-------------|----------|
| modelId       | string      | Yes      |
| partId        | string      | Yes      |
| vehicleType   | VehicleType | Yes      |
| onRoadPrice   | number      | Yes      |
| exShowroomPrice | number    | Yes      |

#### PaymentDto Properties:
| Name          | Type        | Required |
|---------------|-------------|----------|
| paymentId     | string      | Yes      |
| transactionId | string      | Yes      |
| paymentDate   | string      | Yes      |
| merchant      | string      | Yes      |
| amountPaid    | number      | Yes      |
| paymentType   | PaymentType | Yes      |
| paymentMode   | PaymentMode | Yes      |

### Sample Request Example:
```json
{
  "mobileNumber": "1234567890",
  "uuid": "example-uuid-string"
}
```

### Sample Response Example:
```json
{
  "customer": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "mobilenumber": "1234567890",
    "address": "123 Main St",
    "pincode": "123456"
  },
  "vehicle": {
    "modelId": "model123",
    "partId": "part456",
    "vehicleType": "SUV",
    "onRoadPrice": 35000,
    "exShowroomPrice": 32000
  },
  "payment": {
    "paymentId": "pay789",
    "transactionId": "txn101112",
    "paymentDate": "2024-06-01T14:30:00Z",
    "merchant": "PaymentGateway",
    "amountPaid": 35000,
    "paymentType": "CreditCard",
    "paymentMode": "Online"
  }
}
