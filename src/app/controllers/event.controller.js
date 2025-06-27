import * as eventService from '../services/event.service.js';
import {asyncHandler} from '../../lib/util.js'; 
import { Validator } from './../../lib/validator.js';
import { CreateEventRequest } from './../requests/create-event.request.js';
import { ValidationError } from '../../lib/error-definitions.js';

export const createNewEvent = asyncHandler(async(req, res) => 
{
    const validator = new Validator();
    const {errors, value} = validator.validate(CreateEventRequest, req.body);

    if (errors) throw new ValidationError('the request failed with the following errors', errors);

    await eventService.createEvent(value);

    return res.status(201).json({
        success: true,
        message: 'new event record created'
    })

});

export const fetchAllEvents = asyncHandler(async(req, res) =>
{

    const events = Object.entries(req.query).length >= 1 
    //checks if there is at least one query parameter
    ? await eventService.getEvent(req.query)
    //if yes, use it as a filter
    : await eventService.getEvent()
    //if no, fetch everything
    
    return res.status(201).json({
        success: true,
        message: 'events retrieved',
        data: {
            events
        }
    }) 
})

export const fetchEvent = asyncHandler(async(req, res) => 
{
    const {id} = req.params;
    const event = await eventService.getEvents(id);
    
    return res.json({
        success: true,
        message: 'event retrieved',
        data: {
            event
        }
    })

});

export const upadteSingleEvent = asyncHandler(async(req, res) =>
{
    const {id} = req.params;
    const validator = new Validator()
    const {errors, value} = validator.validate(CreateEventRequest, req.body);

    if (errors) throw new ValidationError('the request failed with the following errors', errors);

    await eventService.updateEvent(id, value)

    return res.json({
        success: true,
        message: "event updated"
    });
});

export const deleteSingleEvent = asyncHandler(async(req, res) =>
{
    const {id} = req.params;
    await eventService.deleteEvent(id);     
    return res.json({
        success: true,
        message: "event deleted"
    })
})