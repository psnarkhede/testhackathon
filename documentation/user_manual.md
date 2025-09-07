**User Manual**

**Version:** c66abb2e7c1c0b62d3131cbc72ed8f9a47ac1149

---

### Overview
This system provides simple API endpoints to interact with booking information.

### How Users Interact with the System

#### Accessing the Greeting Endpoint
- You can access a greeting at the root URL.
- Simply send a GET request to `/`.
- You will receive a friendly 'Hello World' response.

##### Example

Send a GET request:
```
GET https://yourserver.com/
```
Response:
```
Hello World
```

#### Creating a Booking Request
- You can submit a booking query via a POST request to `/bookings`.
- You need to provide your mobile number and booking UUID in the request.
- The system will return booking details such as the vehicle type and amount.

##### What to Send
- Your **mobile phone number**.
- The **UUID** for your booking.

##### Example Request
```
POST https://yourserver.com/bookings
Content-Type: application/json

{
  "mobileNumber": "+1234567890",
  "uuid": "550e8400-e29b-41d4-a716-446655440000"
}
```

##### Example Response
```
{
  "vehicle": "Car",
  "uuid": "123e4567-e89b-12d3-a456-426614174000",
  "amount": 100
}
```

### Summary
- Use GET `/` for a simple greeting.
- Use POST `/bookings` with required details to get booking info.
- The response will contain the vehicle and booking details.

---