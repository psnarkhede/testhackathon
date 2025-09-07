## User Manual

### Version: 1.4.2-release

Welcome to our system! This guide will help you understand how to interact with the services provided.

---

### Logging In

To start using the system, you need to log in using your username and password.

**How to log in:**
- Send your username and password in a login request.
- If successful, you will receive a token.
- Keep this token safe because you will need it to access other parts of the system.

**Example:**

Request:
```
POST /api/login
{
  "username": "john_doe",
  "password": "your_password"
}
```

Response:
```
{
  "token": "your_access_token_here",
  "expiresIn": 3600
}
```

---

### Viewing Your Profile

Once logged in, you can request your profile information.

Just send a request with your user ID and the token you received.

**Example:**

Request:
```
GET /api/users/your_user_id
Authorization: Bearer your_access_token_here
```

Response:
```
{
  "userId": "your_user_id",
  "username": "your_username",
  "email": "your_email@example.com",
  "createdAt": "date_of_account_creation"
}
```

---

### Updating Your Email

You can update your email address by sending a request with your new email.

**Example:**

Request:
```
PUT /api/users/your_user_id/email
Authorization: Bearer your_access_token_here
{
  "email": "new_email@example.com"
}
```

Response:
```
{
  "message": "Email updated successfully"
}
```

That's it! You can now use the system with ease.