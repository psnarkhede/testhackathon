# Developer Guide

**Version:** 1.0.0

---

## Project Structure

The project follows a typical NestJS style modular structure with the following main components:

- **Controllers:** Reside in `app.controller.ts`, handle incoming HTTP requests and delegate to services.
- **Services:** Located in `app.service.ts`, provide business logic and data handling.
- **DTOs (Data Transfer Objects):** Define request and response data shapes, found in the `dto/` folder.
- **Modules:** Defined in `app.module.ts`, wires up controllers and services.

### Specific files:
- `main.ts` — entry point bootstrapping the application.
- `app.controller.ts` — contains routing functions `getHello` (GET /) and `createBooking` (POST /bookings).
- `app.service.ts` — defines logic for greetings and booking creation.
- `dto/booking.request.dto.ts` — BookingRequest definition.
- `dto/booking.response.dto.ts` — BookingResponse definition.
- `dto/hello.response.dto.ts` — HelloResponse definition.

---

## Extending the Project

### Adding a new Controller
1. Create a new file in the controllers directory (or alongside `app.controller.ts`).
2. Define a controller class decorated with `@Controller('newpath')`.
3. Add handler methods decorated with HTTP method decorators (`@Get()`, `@Post()`, etc.).
4. Register the controller in the module's `controllers` array (in `app.module.ts`).

### Adding a new Service
1. Create a new service file.
2. Define a provider service class with `@Injectable()`.
3. Implement business methods needed.
4. Register the service in the module's `providers` array.
5. Inject it into controllers needing the service via constructor.

### Adding a new DTO
1. Add a new `.dto.ts` file inside the `dto/` folder.
2. Define classes and properties using decorators for validation (if applicable).
3. Use these DTOs in controller methods for request validation and response typing.

### Example Reference
- See `app.controller.ts` function `createBooking` uses `BookingRequest` and returns `BookingResponse`.
- See `app.service.ts` method `createBooking` which handles booking logic.
- DTOs are straightforward classes like in `dto/booking.request.dto.ts`:

```typescript
export class BookingRequest {
  user: string;
  date: string;
  location: string;
}
```

---

By following the above conventions, you can easily add new features and endpoints.