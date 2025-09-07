## API Documentation

**Version:** 04d39232b7f955392abbb0a13145ce0e90ada880

---

### 1. `/users` - User Management Endpoint

- **Method:** GET
- **Description:** Retrieves a list of all users.
- **Response DTO:**
  ```json
  [
    {
      "id": "string",
      "name": "string",
      "email": "string"
    }
  ]
  ```

- **Example:**
  ```http
  GET /users HTTP/1.1
  Host: api.example.com
  ```

  **Response:**
  ```json
  [
    {
      "id": "u1",
      "name": "Alice Smith",
      "email": "alice.smith@example.com"
    },
    {
      "id": "u2",
      "name": "Bob Jones",
      "email": "bob.jones@example.com"
    }
  ]
  ```

---

### 2. `/users/{id}` - Get User Details

- **Method:** GET
- **Description:** Retrieves detailed information about a single user by their ID.
- **Request DTO:**
  - `id` (path parameter): string

- **Response DTO:**
  ```json
  {
    "id": "string",
    "name": "string",
    "email": "string",
    "createdAt": "string (ISO 8601 date)"
  }
  ```

- **Example:**
  ```http
  GET /users/u1 HTTP/1.1
  Host: api.example.com
  ```

  **Response:**
  ```json
  {
    "id": "u1",
    "name": "Alice Smith",
    "email": "alice.smith@example.com",
    "createdAt": "2023-04-15T12:00:00Z"
  }
  ```

---

### 3. `/users` - Create New User

- **Method:** POST
- **Description:** Creates a new user in the system.
- **Request DTO:**
  ```json
  {
    "name": "string",
    "email": "string"
  }
  ```

- **Response DTO:**
  ```json
  {
    "id": "string",
    "name": "string",
    "email": "string"
  }
  ```

- **Example:**
  ```http
  POST /users HTTP/1.1
  Host: api.example.com
  Content-Type: application/json

  {
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com"
  }
  ```

  **Response:**
  ```json
  {
    "id": "u3",
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com"
  }
  ```

---

(Additional endpoints can be documented similarly based on the full API documentation input.)