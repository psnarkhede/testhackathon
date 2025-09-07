# Developer Guide - Version: 1.0.0

## Project Structure

- `src/`
  - `index.js`: Entry point of the application, sets up the server.
  - `controllers/helloController.js`: Contains the function `sayHello` that handles GET requests to `/hello`.

## Setup Steps

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the server using `node src/index.js`.

## Minimal Example

```js
// src/controllers/helloController.js
exports.sayHello = (req, res) => {
  res.json({ message: 'Hello, World!' });
};

// src/index.js
const express = require('express');
const { sayHello } = require('./controllers/helloController');

const app = express();

app.get('/hello', sayHello);

app.listen(3000, () => console.log('Server running on port 3000'));
```
