# Architecture Documentation - Version: 1.0.0

This project follows a simple architecture suitable for a basic REST API.

## Structure Overview

- `src/index.js`: Initializes an Express web server and sets up the API route `/hello`.
- `src/controllers/helloController.js`: Contains the business logic for responding to `/hello` requests.

The project uses Express.js (as found from the code requiring `express`) to handle HTTP requests and responses.

No database or middleware layers are apparent from the given files.
