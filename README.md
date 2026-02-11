# Airlines Backend

## The Directory Structure:

### Layers
Controllers: Get the request, pass it to the backend.
    => When backend processes the request, pass the response to the frontend.

Services: All the business logic, no business logic will go inside Controller or Repository

Repository: To interact with the database, no one else can interact with the database; only repository layer.

## The Database:

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City can have many airports, an airport belongs to one city (one to many)