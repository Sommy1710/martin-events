MARTIN EVENTS


## MartinEvents
This is a RESTful API for an event management system the API allows users to view the date, time, and the location/venue
for available events. Admins can access certain endpoints like Event creation, Update, and delete.
it is a secure user authentication system with role-based accesscontrol using Node.js, Express, and JWT.

## Overview
MartinEvents is a backend authentication boilerplate that helps users view events and quickly spin up a secure system with best practices baked in. it supports:
-Password hashing (using Argon2)
- Custom error handling
- JWT generation and verification
- Role-based access control (RBAC)
- Secure cookie management

Use it as a foundation for any Node.js app that needs user login, sessions, and role-specific authorization.

---

## Features
- User registration and login 
- Argon2 password hashing
- JWT-based session tokens stored securely in cookies
- Midddleware-protected routes
- Role-based access control (user, admin, super admin)
- Token revocation (via logout)
- validation using custon schemas
- structured error messages and status codes
- Organized, modular folder structured

---



## Tech Stack
- Node.js : javaScript runtime
- Express.js : Server framework
- MongoDB + Mongoose : Database and ORM/ODM
- Argon2 : Secure password hashing
- JSON Web Tokens (JWT) : Signing/verifying tokens
- Express-Async-Handler : Error handling Midddleware
- Validator library (Joi)


## Installation
heres how you get this running on your local machine:

```bash
# 1. Clone the reports
git clone https://github.com/your-username/Martinevents.git

# 2. Navigate to the project
cd Martin-events

# 3. Install dependencies
npm install

# 4. Configure environment variables
cp .env.example .env

# Then edit the .env file to set:
# - PORT
# - MONGODB_URI
# - JWT_SECRET
# - JWT_EXPIRES_AT
# - NODE_ENV

# 5. Start the dev Server
npm run start:dev
