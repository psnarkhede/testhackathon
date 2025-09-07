**User Manual**

**Version: [object Object].version**

Welcome to the system! This guide explains how you, as an end user, can interact with the system using its API.

### How to Use the System

The system provides a set of endpoints that you can call over HTTP to manage users.

- To **list all users**, send a GET request to `/users`. You will receive a list showing each user's name and email.

- To **view details of a specific user**, send a GET request to `/users/{id}` where `{id}` is the user's unique ID.

- To **create a new user**, send a POST request to `/users` with the user's name and email in the request body.

### Example Interactions

#### List Users
- Request: `GET /users`
- Response:
```json
[
  {"id": "user1", "name": "Alice", "email": "alice@example.com"},
  {"id": "user2", "name": "Bob", "email": "bob@example.com"}
]
```

#### Get User Details
- Request: `GET /users/user1`
- Response:
```json
{
  "id": "user1",
  "name": "Alice",
  "email": "alice@example.com"
}
```

#### Create New User
- Request: `POST /users`
- Body:
```json
{
  "name": "Charlie",
  "email": "charlie@example.com"
}
```
- Response:
```json
{
  "id": "user3",
  "name": "Charlie",
  "email": "charlie@example.com"
}
```

Feel free to use tools like Postman or curl to try these requests. If you need assistance, contact support.