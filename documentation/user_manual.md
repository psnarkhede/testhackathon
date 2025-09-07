## User Manual

**Version:** 7f2eec614b7c99282052440ca6a0ba82bee672fa

---

Welcome to the system! This manual will guide you on how to interact with our services.

### How to Use the System

You will primarily interact with the system through web API calls. Here's what you need to know:

1. **Retrieve Users:**
   - To see the list of all users, you simply send a GET request to `/users`.
   - Example: Open your browser or API tool and access `https://your-api.com/users`.
   - You will receive a list of users including their IDs, names, and email addresses.

2. **Create a New User:**
   - To add a new user, send a POST request to `/users` with user details.
   - Example Request body:
     ```json
     {
       "name": "Jane Doe",
       "email": "jane@example.com",
       "password": "your_password"
     }
     ```
   - The system will respond with the created user's information.

3. **Login:**
   - To log in, send your email and password to `/auth/login`.
   - If successful, you'll receive a JWT token to use for authenticated requests.

4. **View Your Profile:**
   - After logging in, retrieve your profile info via GET `/profile` with your token.
   - Include the JWT token in the header like this: `Authorization: Bearer your_token`.

### Example Interaction in Simple Terms

- You want to create a user: tell the system the user's name, email, and a password.
- To login, provide your email and password.
- Using the token received, ask the system to show your personal profile info.

This approach allows you to manage users easily.

*Please contact support if you need help with HTTP tools or have difficulties using the system.*