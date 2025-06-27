import { aggregateResults } from "../../lib/util.js";
import {Event} from "../schema/event.schema.js";

export const createEvent = async (payload) => {
    return await Event.create(payload);
};


export const getEvent = async (payload) => {
    return (payload) ? await aggregateResults(Event, payload) : await Event.find()
};

export const getEvents = async (id) => {
    return await Event.findById(id)
}

export const updateEvent = async (id, payload) => {
    return await Event.findByIdAndUpdate(id, payload, {new: true});
};

export const deleteEvent = async (id) => {
    return await Event.findByIdAndDelete(id);
};

// for reference purposes, this is basically the events crud CREATE, READ, UPDATE, DELETE