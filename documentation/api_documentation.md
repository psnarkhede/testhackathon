# API Documentation

**Version:** 1.0.0

## Endpoints

### 1. Get Home

- **Method:** GET
- **Path:** /
- **Function Name:** getHome
- **Request DTO:** None
- **Response DTO:** HomeResponseDto
  - **Properties:**
    - message: string

**Sample Request:**
```http
GET /
```

**Sample Response:**
```json
{
  "message": "Welcome to the Booking API!"
}
```

---

### 2. Create Booking

- **Method:** POST
- **Path:** /bookings
- **Function Name:** createBooking
- **Request DTO:** CreateBookingDto
  - **Properties:**
    - userId: string
    - roomId: string
    - date: string
- **Response DTO:** BookingResponseDto
  - **Properties:**
    - bookingId: string
    - status: string

**Sample Request:**
```json
{
  "userId": "user123",
  "roomId": "room456",
  "date": "2024-07-01"
}
```

**Sample Response:**
```json
{
  "bookingId": "booking789",
  "status": "confirmed"
}
```
