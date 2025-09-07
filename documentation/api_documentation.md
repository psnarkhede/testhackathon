# API Documentation

**Version:** ad7b209673a0468c5fb1392a28b13495d49dadc3

---

## Endpoint: GET /

- **Method:** GET
- **Path:** `/`
- **Function Name:** `GetHelloWorld`
- **Request DTO:** None
- **Response DTO:** None

### Description
Returns a simple "Hello World" string.

### Example Request
```http
GET /
```

### Example Response
```
Hello World
```

---

## Endpoint: POST /bookings

- **Method:** POST
- **Path:** `/bookings`
- **Function Name:** `GetBookings`
- **Request DTO:** `BookingRequestDto`

| Property     | Type   | Required | Description           |
|--------------|--------|----------|-----------------------|
| mobileNumber | string | Yes      | Mobile phone number   |
| uuid         | string | Yes      | Unique identifier UUID|

- **Response DTO:** `BookingResponseDto`

| Property | Type   | Required | Description                        |
|----------|--------|----------|----------------------------------|
| vehicle  | string | Yes      | Vehicle type (e.g., Car)          |
| uuid     | string | Yes      | Unique identifier UUID             |
| amount   | number | No       | Amount value (optional)            |
| pinode   | number | No       | Pinode value (optional)            |

### Description
Returns booking information for the given mobile number and UUID.

### Example Request
```json
{
  "mobileNumber": "+1234567890",
  "uuid": "123e4567-e89b-12d3-a456-426614174000"
}
```

### Example Response
```json
{
  "vehicle": "Car",
  "uuid": "123e4567-e89b-12d3-a456-426614174000",
  "amount": 100
}
```

---
