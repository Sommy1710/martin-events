import Joi from 'joi'
export const CreateUserRequest = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(32).required(),
});