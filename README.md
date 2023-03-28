
## API Reference
### Introduction
This API provides endpoints for managing users and rooms.

### Base URL
The base URL for the API is http://localhost:3000.

### Authentication
Authentication is not currently required for any endpoints.

### Endpoints
#### Users
- `GET /users` - Retrieves a list of all users
- `GET /users/:id` - Retrieves a single user by ID
- `POST /users` - Creates a new user
- `PATCH /users/:id` - Updates an existing user by ID
- `DELETE /users/:id` - Deletes a user by ID

#### Rooms
- `GET /rooms` - Retrieves a list of all rooms
- `GET /rooms/:id` - Retrieves a single room by ID
- `POST /rooms` - Creates a new room
- `PATCH /rooms/:id` - Updates an existing room by ID
- `DELETE /rooms/:id` - Deletes a room by ID