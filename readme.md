# Authentication Service
This is the authentication microservice. It will be in charge of validating a users request, alongside of creating (log in) and deleting (log out) user's sessions.

This microservice will work with JWT.

# This service should allow inbound HTTP requests on port 8082

## Admitted Requests

- Authenticate Request (only local access):
> POST /authenticate
```javascript
{
    email: string,
    token: string
}
```

> Response:
```javascript
{
    valid: boolean
    Error: string (default: "")
}
```

# Things to note:
- This service will work with JWT