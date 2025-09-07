# User Manual

**Version:** 1.0.0

## API Usage

### 1. Get Home

- **Endpoint:** `GET /`
- **Description:** Retrieve welcome message.

**Example Request:**
```http
GET /
```

**Example Response:**
```json
{
  "message": "Welcome to the Booking API!"
}
```

---

### 2. Create Booking

- **Endpoint:** `POST /bookings`
- **Description:** Create a new booking record.
- **Request Body:**
  - `userId` (string): The ID of the user making the booking.
  - `roomId` (string): The ID of the room to book.
  - `date` (string): Booking date in ISO format.

**Example Request:**
```json
{
  "userId": "user123",
  "roomId": "room456",
  "date": "2024-07-01"
}
```

**Example Response:**
```json
{
  "bookingId": "booking789",
  "status": "confirmed"
}
```
