import Joi from 'joi';

export const CreateEventRequest = Joi.object({
    title: Joi.string().required(),
    date: Joi.string().required(),
    time: Joi.string().required(),
    venue: Joi.string().required(),
    description: Joi.string().required(),

});