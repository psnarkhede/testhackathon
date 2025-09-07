# User Manual

**Version:** ad7b209673a0468c5fb1392a28b13495d49dadc3

---

This document explains how you as an end user can interact with the system via its APIs.

## How to Use the System

The system provides a simple set of HTTP APIs to get greetings and to retrieve booking information.

### 1. Get a greeting message

- Send a `GET` request to `/`.
- You will receive the message **"Hello World"**.

Example:

- Request:
```
GET http://your-server-address/
```
- Response:
```
Hello World
```

### 2. Retrieve Booking Information

- Send a `POST` request to `/bookings` with JSON containing your mobile number and a UUID.
- The system will provide details about your booking such as the vehicle type, UUID, the amount charged, and optionally some other data.

Example request body:
```json
{
  "mobileNumber": "+1234567890",
  "uuid": "123e4567-e89b-12d3-a456-426614174000"
}
```

Example response:
```json
{
  "vehicle": "Car",
  "uuid": "123e4567-e89b-12d3-a456-426614174000",
  "amount": 100
}
```

### Notes
- Make sure you supply a valid phone number and UUID in the request.
- The system validates these inputs.
- Amount and pinode fields may be absent in some responses.

---
