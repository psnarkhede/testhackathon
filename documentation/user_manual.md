## User Manual

**Version:** 5c715563a7e7387859534267039d1b3b45b89854

---

This system allows you to login and manage your user profile via the provided API endpoints.

### Logging In

To use the system, you first need to authenticate by calling the `POST /api/auth/login` endpoint with your username and password.

**Example Request:**
```json
{
  "username": "johndoe",
  "password": "mypassword123"
}
```

On successful authentication, you will receive an access token and refresh token. Use the access token to authorize subsequent requests.

**Example Response:**
```json
{
  "accessToken": "eyJhbGci...",
  "refreshToken": "dGhpc2lz..."
}
```

### Viewing Your Profile

Once logged in, you can retrieve your profile information by sending a GET request to `/api/users/profile` with your access token.

**Example Response:**
```json
{
  "id": "12345",
  "username": "johndoe",
  "email": "johndoe@example.com",
  "createdAt": "2023-05-01T10:00:00Z"
}
```

### Updating Your Profile

You can update your email and password by sending a PUT request to `/api/users/profile` with the new values in the body.

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

Use these endpoints responsibly and keep your authentication tokens secure.