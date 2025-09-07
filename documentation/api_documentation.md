## API Documentation

**Version:** [object Object].version

### Endpoints

---

### 1. GET /users

Retrieves a list of users.

**Request:**
- Method: GET
- URL: /users

**Response:**
- Status: 200 OK
- Body: Array of User DTO

**User DTO:**
```json
{
  "id": "string",
  "name": "string",
  "email": "string"
}
```

**Example Response:**
```json
[
  {"id": "1", "name": "John Doe", "email": "john@example.com"},
  {"id": "2", "name": "Jane Smith", "email": "jane@example.com"}
]
```

---

### 2. POST /users

Creates a new user.

**Request:**
- Method: POST
- URL: /users
- Body: NewUser DTO

**NewUser DTO:**
```json
{
  "name": "string",
  "email": "string"
}
```

**Response:**
- Status: 201 Created
- Body: User DTO

**Example Request:**
```json
{
  "name": "Alice Johnson",
  "email": "alice@example.com"
}
```

**Example Response:**
```json
{
  "id": "3",
  "name": "Alice Johnson",
  "email": "alice@example.com"
}
```

---

### 3. GET /users/{id}

Retrieves user details by ID.

**Request:**
- Method: GET
- URL: /users/{id}

**Response:**
- Status: 200 OK
- Body: User DTO

**Example:**
`GET /users/1`

**Response:**
```json
{
  "id": "1",
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

### 4. PUT /users/{id}

Updates existing user by ID.

**Request:**
- Method: PUT
- URL: /users/{id}
- Body: UpdateUser DTO

**UpdateUser DTO:**
```json
{
  "name": "string",
  "email": "string"
}
```

**Response:**
- Status: 200 OK
- Body: User DTO

**Example Request:**
```json
{
  "name": "Johnathan Doe",
  "email": "johnathan@example.com"
}
```

**Example Response:**
```json
{
  "id": "1",
  "name": "Johnathan Doe",
  "email": "johnathan@example.com"
}
```

---

### 5. DELETE /users/{id}

Deletes a user by ID.

**Request:**
- Method: DELETE
- URL: /users/{id}

**Response:**
- Status: 204 No Content

No body returned.