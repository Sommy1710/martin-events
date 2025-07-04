export class NotFoundError extends Error
{
    constructor(message)
    {
        super(message);
        this.statusCode = 404;
    }
}

export class BadRequestError extends Error
{
    constructor(message)
    {
        super(message);
        this.statusCode = 400;
    }
}

export class UnauthenticatedError extends Error
{
    constructor (message)
    {
        super(message);
        this.statusCode = 401;
    }
}

export class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 403;
    }
}

export class ConflictError extends Error
{
    constructor (message)
    {
        super(message);
        this.statusCode = 409;
    }
}

export class TooManyRequestError extends Error
{
    constructor (message)
    {
        super(message);
        this.statusCode = 429;
    }
}

export class ValidationError extends Error
{
    constructor(message, error)
    {
        super(message);
        this.error = error;
        this.statusCode = 422;
    }
}

export class ServerError extends Error
{
    constructor(message)
    {
        super(message);
        this.statusCode = 500;
    }
}