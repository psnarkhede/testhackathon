## API Documentation

### Version: 1.4.2-release

---

### 1. User Login

- **Endpoint:** `/api/login`
- **Method:** POST

#### Request DTO
```json
{
  "username": "string",
  "password": "string"
}
```

#### Response DTO
```json
{
  "token": "string",
  "expiresIn": 3600
}
```

#### Example Request
```
POST /api/login
Content-Type: application/json

{
  "username": "john_doe",
  "password": "s3cr3t"
}
```

#### Example Response
```
200 OK
{
  "token": "eyJhbGciOiJIUzI1NiIsInR...",
  "expiresIn": 3600
}
```

---

### 2. Get User Profile

- **Endpoint:** `/api/users/{userId}`
- **Method:** GET

#### Path Parameters
- `userId`: string (UUID)

#### Response DTO
```json
{
  "userId": "string",
  "username": "string",
  "email": "string",
  "createdAt": "string (ISO8601 date)"
}
```

#### Example Request
```
GET /api/users/123e4567-e89b-12d3-a456-426614174000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR...
```

#### Example Response
```
200 OK
{
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "username": "john_doe",
  "email": "john@example.com",
  "createdAt": "2023-05-01T12:00:00Z"
}
```

---

### 3. Update User Email

- **Endpoint:** `/api/users/{userId}/email`
- **Method:** PUT

#### Path Parameters
- `userId`: string (UUID)

#### Request DTO
```json
{
  "email": "string"
}
```

#### Response DTO
```json
{
  "message": "string"
}
```

#### Example Request
```
PUT /api/users/123e4567-e89b-12d3-a456-426614174000/email
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR...
Content-Type: application/json

{
  "email": "john_new@example.com"
}
```

#### Example Response
```
200 OK
{
  "message": "Email updated successfully"
}
```
