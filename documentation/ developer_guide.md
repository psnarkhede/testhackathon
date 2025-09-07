**Developer Guide**

**Version: [object Object].version**

This guide explains how developers can extend or modify the system.

### Project Structure and Key Files

- `src/controllers/`: Contains API endpoint controllers.
- `src/services/`: Business logic lives here.
- `src/dto/`: Data Transfer Objects define the shape of request/response data.
- `src/main.ts`: Application entry point.

### Adding a New Endpoint

1. Create a new controller file in `src/controllers/`.
2. Define your route and handler functions.
3. Use DTOs from `src/dto/` for request validation and response typing.
4. Implement business logic in services located in `src/services/`.

### Example: Adding a Greeting Endpoint
```typescript
// src/controllers/greetingController.ts
import { Request, Response } from 'express';

export const getGreeting = (req: Request, res: Response) => {
  res.json({ message: 'Hello, Developer!' });
};
```

Register this controller in your main router to enable the endpoint.

### Code Snippet from developerGuide
```typescript
export class UserService {
  async findAll(): Promise<User[]> {
    // Fetch users from the database
  }
}
```

Use this pattern to add new services or modify existing ones.

### Testing

Test files located in `tests/` should be updated to cover your modifications. Use the testing framework setup described in the README.