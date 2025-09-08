# API Documentation

**Version:** a69daa75ed359dfb29965abddd40909638342a9f

---

## Endpoint: GET /
- **Method:** GET
- **Path:** `/`
- **Handler Function:** `GetHelloWorld`
- **Request DTO:** None
- **Response DTO:** None

**Description:**
Returns a simple greeting message.

**Example Request:**
```
GET /
```

**Example Response:**
```
Hello World
```

---

## Endpoint: POST /bookings
- **Method:** POST
- **Path:** `/bookings`
- **Handler Function:** `GetBookings`
- **Request DTO:** `BookingRequestDto`
  - `mobileNumber` (string, required)
  - `uuid` (string, required)
- **Response DTO:** `BookingResponseDto`
  - `vehicle` (string, required)
  - `uuid` (string, required)
  - `amount` (number, optional)
  - `pinode` (number, optional)

**Description:**
Accepts booking details and returns booking confirmation information.

**Example Request:**
```json
{
  "mobileNumber": "+1234567890",
  "uuid": "550e8400-e29b-41d4-a716-446655440000"
}
```

**Example Response:**
```json
{
  "vehicle": "Car",
  "uuid": "123e4567-e89b-12d3-a456-426614174000",
  "amount": 100
}
```

---