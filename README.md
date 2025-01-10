🏰MyContact-Backend :-
MyContact-Backend🚀 is a robust RESTful API built with Node.js and MongoDB for managing contacts. The project incorporates user authentication using JWT (JSON Web Tokens) and data encryption with bcrypt for secure password handling.

Features
User Authentication:

Secure login and registration using JWT.
Password hashing with bcrypt for enhanced security.
Contact Management:

CRUD operations (Create, Read, Update, Delete) for managing contacts.
Validation to ensure data integrity.
Error Handling:

Custom middleware for consistent and detailed error reporting.
Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (via Mongoose ODM)
Authentication: JWT (for token-based authentication), bcrypt (for password hashing)
Validation: Express Validator
Environment Variables: Configured with dotenv
Installation
Clone the repository:

bash :

Copy code
git clone [https://github.com/your-username/mycontact-backend.git ](https://github.com/NIMIT001/MyContact-Backend) 
cd mycontact-backend  
Install dependencies:

bash:

Copy code
npm install  
Create a .env file in the root directory with the following variables:

env
Copy code
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret_key  
PORT=5000  
Start the server:

bash
Copy code
npm start 
The API will be available at http://localhost:5000.
API Endpoints:

Authentication
POST /api/auth/register - Register a new user
POST /api/auth/login - Login user and receive a JWT

Contacts:
GET /api/contacts - Get all contacts for the logged-in user
POST /api/contacts - Add a new contact
GET /api/contacts/:id - Get details of a single contact
PUT /api/contacts/:id - Update a contact
DELETE /api/contacts/:id - Delete a contact


Project Structure

MyContact-Backend/  
├── controllers/          # Contains controller logic  
├── middleware/           # Custom middleware (e.g., error handling, authentication)  
├── models/               # Mongoose models (e.g., Contact, User)  
├── routes/               # Route definitions  
├── .env                  # Environment variables (ignored in version control)  
├── server.js             # Entry point for the server  

Dependencies 🛺:
bcryptjs: For password hashing
jsonwebtoken: For generating and verifying JWTs
mongoose: For interacting with MongoDB
express: For creating the backend server
dotenv: For managing environment variables
express-async-handler: To handle async errors gracefully


How to Use :-
Register a new user using the /api/auth/register endpoint.
Log in with the registered user and obtain the JWT token.
Use the token to authenticate and manage contacts through the available endpoints.

Future Enhancements:
Add role-based access control (RBAC).
Implement rate-limiting and request throttling for enhanced security.
Add unit tests for key functionalities.

License:
This project is licensed under the MIT License.
