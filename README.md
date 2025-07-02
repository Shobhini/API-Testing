This project is a full-stack web application, but my primary focus was on designing and building the backend. The backend is built using Node.js with Express and MongoDB as the database. Here’s a summary of my work and the architecture:

* User Authentication & Authorization:
I implemented secure user registration and login using JWT-based authentication. User passwords are hashed with bcrypt for security. The backend handles refresh tokens for session management, ensuring a secure login flow.

* RESTful API Design:
I designed a set of RESTful API endpoints to handle user actions, including registration, login, profile updates, uploading avatars and cover images (with Cloudinary integration), fetching user/channel profiles, and retrieving watch history.

* Middleware & Error Handling:
The backend uses Express middleware for authentication, file uploads (Multer), CORS, and error handling to ensure robust and maintainable code.

* Database Modeling:
I modeled user data with Mongoose schemas, ensuring data validation and safe storage of sensitive information, like passwords and tokens.

* Testing & Separation of Concerns:
The codebase is organized into controllers, routes, models, and utility functions, making it clean and maintainable. I wrote async handlers to manage errors gracefully.

* Scalability & Best Practices:
I followed best practices for environment configuration, modular code, and secure cookie handling, making the backend easy to scale and adapt.
