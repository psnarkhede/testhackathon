# API Documentation

**Version:** c66abb2e7c1c0b62d3131cbc72ed8f9a47ac1149

---

## Endpoint: GET /

- **Method:** GET
- **Path:** /
- **Function Name:** GetHelloWorld
- **Request DTO:** None
- **Response DTO:** None

### Description
Returns a simple Hello World string.

### Example

#### Request
```
GET /
```

#### Response
```
Hello World
```

---

## Endpoint: POST /bookings

- **Method:** POST
- **Path:** /bookings
- **Function Name:** GetBookings
- **Request DTO:** BookingRequestDto
- **Response DTO:** BookingResponseDto

### Request DTO: BookingRequestDto
| Property     | Type   | Required |
|--------------|--------|----------|
| mobileNumber | string | Yes      |
| uuid         | string | Yes      |

### Response DTO: BookingResponseDto
| Property | Type   | Required | Description                   |
|----------|--------|----------|-------------------------------|
| vehicle  | string | Yes      | Vehicle associated with booking|
| uuid     | string | Yes      | UUID for the booking           |
| amount   | number | No       | Amount related to the booking  |
| pinode   | number | No       | An optional number field       |

### Description
Handles booking requests given user mobile number and UUID and returns booking details including vehicle, booking UUID, possibly amount and a pinode value.

### Example

#### Request (JSON):
```json
{
  "mobileNumber": "+1234567890",
  "uuid": "550e8400-e29b-41d4-a716-446655440000"
}
```

#### Response (JSON):
```json
{
  "vehicle": "Car",
  "uuid": "123e4567-e89b-12d3-a456-426614174000",
  "amount": 100
}
```

---