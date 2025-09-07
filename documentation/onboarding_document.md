## Onboarding Document

**Version:** 5c715563a7e7387859534267039d1b3b45b89854

---

### Installation

1. Clone the repository:
```
git clone <repository_url>
cd <repository_folder>
```

2. Install dependencies:
```
npm install
```

---

### Environment Setup

Create a `.env` file in the root directory with the following minimum configuration:
```
JWT_SECRET=your_jwt_secret
DATABASE_URL=your_database_connection_string
PORT=3000
```

Adjust these values according to your environment.

---

### Running Locally

Launch the application in development mode:
```
npm run start:dev
```

The server will start at `http://localhost:3000`.

You can now access the API endpoints as documented.