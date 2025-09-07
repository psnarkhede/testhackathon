## Architecture Documentation

**Version:** 5c715563a7e7387859534267039d1b3b45b89854

---

### High-Level Overview

This project is a RESTful API server that provides user authentication and profile management functionalities. It follows a modular architecture with clear separation of concerns between authentication, user management, and token handling.

---

### Project Structure

```
/src
  /auth
    auth.service.ts
    auth.controller.ts
  /users
    user.service.ts
    user.controller.ts
  /common
    dto
    guards
  main.ts
/package.json
/README.md
```

- `auth/`: Handles authentication logic.
- `users/`: Manages user profiles.
- `common/`: Contains shared DTOs and guards.

---

### Configuration

- Environment variables control JWT secrets, database connections, and port numbers.
- `main.ts` bootstrap the application and applies global middleware.

---

### Tests & Miscellaneous Files

- Unit tests are located alongside respective service and controller files.
- Testing uses Jest framework.
- Miscellaneous scripts for deployment and linting are included as npm scripts in `package.json`.
