# API Documentation

**Version:** c811bf1cdbd8581ea3bdf7c993cd66dcb54f9226

---

## Endpoint: GET /
- **Controller:** app.controller.ts
- **Function:** GetHelloWorld
- **HTTP Method:** GET
- **Path:** /

### Parameters:
| Name | Type | Source | Required |
|-------|------|--------|----------|
| uuid | string | query | yes |

### Request DTO:
- None

### Response DTO:
- None

### Sample Request Example:
```
GET /?uuid=123e4567-e89b-12d3-a456-426614174000
```

---

## Endpoint: POST /bookings
- **Controller:** app.controller.ts
- **Function:** CreateBookings
- **HTTP Method:** POST
- **Path:** /bookings

### Parameters:
| Name | Type | Source | Required |
|-------|------|--------|----------|
| request | BookingRequestDto | body | yes |

### Request DTO: BookingRequestDto
| Property | Type | Required |
|----------|------|----------|
| customer | CustomerDto | yes |
| vehicle | VehicleDto | yes |
| payment | PaymentDto | yes |

#### CustomerDto
| Property | Type | Required |
|----------|------|----------|
| name | string | yes |
| email | string | yes |
| mobilenumber | string | yes |
| address | string | yes |
| pincode | string | yes |

#### VehicleDto
| Property | Type | Required |
|----------|------|----------|
| modelId | string | yes |
| partId | string | yes |
| vehicleType | VehicleType | yes |
| onRoadPrice | number | yes |
| exShowroomPrice | number | yes |

#### PaymentDto
| Property | Type | Required |
|----------|------|----------|
| paymentId | string | yes |
| transactionId | string | yes |
| paymentDate | string | yes |
| merchant | string | yes |
| amountPaid | number | yes |
| paymentType | PaymentType | yes |
| paymentMode | PaymentMode | yes |

### Response DTO: BookingResponseDto
| Property | Type | Required |
|----------|------|----------|
| message | string | yes |
| uuid | string | yes |

### Sample Request Example:
```json
{
  "customer": {
    "name": "John Doe",
    "email": "john@example.com",
    "mobilenumber": "1234567890",
    "address": "123 Main St",
    "pincode": "123456"
  },
  "vehicle": {
    "modelId": "model123",
    "partId": "part456",
    "vehicleType": "VehicleType",
    "onRoadPrice": 25000.5,
    "exShowroomPrice": 24000.0
  },
  "payment": {
    "paymentId": "pay789",
    "transactionId": "txn101112",
    "paymentDate": "2024-06-01T10:00:00Z",
    "merchant": "MerchantName",
    "amountPaid": 25000.5,
    "paymentType": "PaymentType",
    "paymentMode": "PaymentMode"
  }
}
```

---

## Endpoint: GET /bookings
- **Controller:** app.controller.ts
- **Function:** GetBookings
- **HTTP Method:** GET
- **Path:** /bookings

### Parameters:
| Name | Type | Source | Required |
|-------|------|--------|----------|
| request | BookingRetrievalDto | body | yes |

### Request DTO: BookingRetrievalDto
| Property | Type | Required |
|----------|------|----------|
| mobileNumber | string | yes |
| uuid | string | yes |

### Response DTO: BookingRequestDto
| Property | Type | Required |
|----------|------|----------|
| customer | CustomerDto | yes |
| vehicle | VehicleDto | yes |
| payment | PaymentDto | yes |

#### CustomerDto
| Property | Type | Required |
|----------|------|----------|
| name | string | yes |
| email | string | yes |
| mobilenumber | string | yes |
| address | string | yes |
| pincode | string | yes |

#### VehicleDto
| Property | Type | Required |
|----------|------|----------|
| modelId | string | yes |
| partId | string | yes |
| vehicleType | VehicleType | yes |
| onRoadPrice | number | yes |
| exShowroomPrice | number | yes |

#### PaymentDto
| Property | Type | Required |
|----------|------|----------|
| paymentId | string | yes |
| transactionId | string | yes |
| paymentDate | string | yes |
| merchant | string | yes |
| amountPaid | number | yes |
| paymentType | PaymentType | yes |
| paymentMode | PaymentMode | yes |

### Sample Request Example:
```json
{
  "mobileNumber": "1234567890",
  "uuid": "123e4567-e89b-12d3-a456-426614174000"
}
```

### Sample Response Example:
```json
{
  "customer": {
    "name": "Jane Smith",
    "email": "jane@example.com",
    "mobilenumber": "1234567890",
    "address": "456 Secondary St",
    "pincode": "654321"
  },
  "vehicle": {
    "modelId": "modelABC",
    "partId": "partDEF",
    "vehicleType": "VehicleType",
    "onRoadPrice": 30000.0,
    "exShowroomPrice": 28000.0
  },
  "payment": {
    "paymentId": "pay456",
    "transactionId": "txn131415",
    "paymentDate": "2024-06-02T11:00:00Z",
    "merchant": "MerchantName",
    "amountPaid": 30000.0,
    "paymentType": "PaymentType",
    "paymentMode": "PaymentMode"
  }
}
```
