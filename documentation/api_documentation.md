## API Documentation

**Version:** {{version}}

---

### 1. GET /users

**Description:** Retrieves a list of users.

**Method:** GET

**Request:** No body required.

**Response:**
```json
[
  {
    "id": "string",
    "name": "string",
    "email": "string"
  }
]
```

**Example:**
```
GET /users

Response:
200 OK
[
  {
    "id": "123",
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "id": "456",
    "name": "Jane Smith",
    "email": "jane@example.com"
  }
]
```

---

### 2. POST /users

**Description:** Creates a new user.

**Method:** POST

**Request Body:**
```json
{
  "name": "string",
  "email": "string"
}
```

**Response:**
```json
{
  "id": "string",
  "name": "string",
  "email": "string"
}
```

**Example:**
```
POST /users
{
  "name": "Alice Johnson",
  "email": "alice@example.com"
}

Response:
201 Created
{
  "id": "789",
  "name": "Alice Johnson",
  "email": "alice@example.com"
}
```

---

### DTOs

**User DTO:**
```json
{
  "id": "string",
  "name": "string",
  "email": "string"
}
```

**CreateUser DTO:**
```json
{
  "name": "string",
  "email": "string"
}
```
