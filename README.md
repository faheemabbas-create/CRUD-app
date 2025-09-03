# Express + MongoDB Users API

Small Express app to manage users (Create, Read, Update, Delete) using MongoDB and Mongoose.

## Features
- Create user (name, email)
- Get all users
- Get single user by id
- Update user by id
- Delete user by id
- JSON API

## Requirements
- Node.js (16+ recommended)
- MongoDB (local or cloud Atlas)

## Setup
1. Clone or extract the project.
2. Copy `.env.example` to `.env` and set `MONGODB_URI` and `PORT`.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server (development):
   ```bash
   npm run dev
   ```
   or production:
   ```bash
   npm start
   ```
5. The API will be available at `http://localhost:3000` (or your PORT).

## Endpoints
- `GET /` - health check
- `POST /api/users` - create user, JSON body `{ "name": "Alice", "email": "a@b.com" }`
- `GET /api/users` - list all users
- `GET /api/users/:id` - get user by id
- `PUT /api/users/:id` - update user by id, JSON body may include `name` and/or `email`
- `DELETE /api/users/:id` - delete user by id

## Push to GitHub
1. Create a repo on GitHub (do not add README/license there or you'll need to pull).
2. Run locally:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Express Mongo Users"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```

## Postman collection
A Postman collection `postman_collection.json` is included in the project root. Import it into Postman to test endpoints.

## Notes
- Use a valid MongoDB URI (e.g. with Atlas you get a connection string). Place it in `.env` as `MONGODB_URI`.
- For production, handle secrets with environment variables or a secrets manager.
