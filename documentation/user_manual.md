# User Manual

**Version:** 1.0.0

---

## Using the API

This API exposes two main endpoints for end users:

### 1. GET /

- **Description:** Returns a greeting message.
- **How to call:** Send a GET request to the root path.

#### Example Request
```
GET /
```

#### Example Response
```json
{
  "message": "Hello World!"
}
```

---

### 2. POST /bookings

- **Description:** Creates a new booking with given user, date, and location.
- **How to call:** Send a POST request to `/bookings` with JSON body.

#### Expected Request Body
```json
{
  "user": "string",
  "date": "YYYY-MM-DD",
  "location": "string"
}
```

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

---

## Notes on Inputs and Outputs
- `user`: a string identifying the user making the booking.
- `date`: must be a valid date string formatted as ISO 8601 (YYYY-MM-DD).
- `location`: a string representing the location of the booking.
- `id`: string, unique booking identifier.
- `status`: string, status of the booking (normally "confirmed").

Make sure your requests have valid JSON and correct formatting.
