# API Documentation

**Version:** 1.0.0

---

## Endpoints

### 1. GET /

- **Method:** GET
- **Path:** /
- **Function:** getHello
- **Request DTO:** None
- **Response DTO:** HelloResponse

#### HelloResponse DTO
| Property | Type   |
|----------|--------|
| message  | string |

#### Example Response
```json
{
  "message": "Hello World!"
}
```

---

### 2. POST /bookings

- **Method:** POST
- **Path:** /bookings
- **Function:** createBooking
- **Request DTO:** BookingRequest
- **Response DTO:** BookingResponse

#### BookingRequest DTO
| Property   | Type   |
|------------|--------|
| user       | string |
| date       | string (ISO 8601 date)
| location   | string |

#### BookingResponse DTO
| Property   | Type   |
|------------|--------|
| id         | string |
| user       | string |
| date       | string (ISO 8601 date)
| location   | string |
| status     | string |

#### Example Request
```json
{
  "user": "john.doe",
  "date": "2023-08-15",
  "location": "New York"
}
```

#### Example Response
```json
{
  "id": "1",
  "user": "john.doe",
  "date": "2023-08-15",
  "location": "New York",
  "status": "confirmed"
}
```
