### README.md for Backend


# Property Rental Platform - Backend

This is the backend for the Property Rental Platform, providing user authentication functionalities, including registration and login.

## Features

- User registration
- User login
- Secure API with JWT authentication

## Technologies

- **Node.js**: JavaScript runtime for building the backend server
- **Express.js**: Web framework for building APIs
- **MongoDB**: NoSQL database for storing user data
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB
- **jsonwebtoken**: Library for creating and verifying JSON Web Tokens
- **dotenv**: Module to load environment variables from a `.env` file

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mdmonauwarulislam/totality-frontend-challenge.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd totality-frontend-challenge/backend
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the root of the backend directory and add the following environment variables:

```
PORT=8000
JWT_SECRET=''
MONGO_URI=''
```

Make sure to replace the `MONGO_URI` value with your MongoDB connection string.

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. The server will run on `http://localhost:8000`.

## API Endpoints

### User Authentication

- **POST /user/signup: 
  - Register a new user. 
  - **Request Body**: 
    - `username`: String
    - `email`: String
    - `password`: String
  - **Response**: 
    - Success: `{ message: 'User registered successfully' }`
    - Error: `{ message: 'Error message' }`

- **POST /user/login: 
  - Login a user. 
  - **Request Body**: 
    - `email`: String
    - `password`: String
  - **Response**: 
    - Success: `{ token: 'JWT_TOKEN', user: { username, email } }`
    - Error: `{ message: 'Invalid credentials' }`



## License

This project is licensed under the MIT License.
```

### Notes:
- Adjust the API request and response details according to your actual implementation.
- This README focuses specifically on user authentication, making it concise and easy to follow."# totality-backend" 
