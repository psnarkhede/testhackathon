## API Documentation

**Version:** 5c715563a7e7387859534267039d1b3b45b89854

---

### POST /api/auth/login

**Description:** Authenticate user and obtain access token.

**Request DTO:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Response DTO:**
```json
{
  "accessToken": "string",
  "refreshToken": "string"
}
```

**Example Request:**
```json
{
  "username": "johndoe",
  "password": "mypassword123"
}
```

**Example Response:**
```json
{
  "accessToken": "eyJhbGci...",
  "refreshToken": "dGhpc2lz..."
}
```

---

### GET /api/users/profile

**Description:** Retrieve the profile information of the current user.

**Response DTO:**
```json
{
  "id": "string",
  "username": "string",
  "email": "string",
  "createdAt": "string"
}
```

**Example Response:**
```json
{
  "id": "12345",
  "username": "johndoe",
  "email": "johndoe@example.com",
  "createdAt": "2023-05-01T10:00:00Z"
}
```

---

### PUT /api/users/profile

**Description:** Update current user profile information.

**Request DTO:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response DTO:**
```json
{
  "success": true,
  "message": "Profile updated successfully."
}
```

**Example Request:**
```json
{
  "email": "john.newemail@example.com",
  "password": "newpassword456"
}
```

**Example Response:**
```json
{
  "success": true,
  "message": "Profile updated successfully."
}
```
