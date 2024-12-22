import express from 'express';
import Event from '../models/Event.js';
import Joi from 'joi';

const router = express.Router();

// Validation Schema for Creating an Event
const eventSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    date: Joi.string().required(),
    time: Joi.string().required(),
    venue: Joi.string().required(),
    capacity: Joi.number().required(),
    organizer: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required()
});

// Validation Schema for Registering a Participant
const participantSchema = Joi.object({
    studentId: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    department: Joi.string().required(),
    year: Joi.number().integer().min(1).max(5).required()
});

// POST /create: Create a new event
router.post('/create', async (req, res) => {
    try {
        // Validate the request body
        const { error } = eventSchema.validate(req.body);
        if (error) return res.status(400).send({ error: error.details[0].message });

        const event = new Event(req.body);
        await event.save();

        res.status(201).send({ message: 'Event created successfully', event });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Error creating event' });
    }
});

// POST /register/{eventId}: Register for an event
router.post('/register/:eventId', async (req, res) => {
    try {
        const { eventId } = req.params;

        // Validate participant data
        const { error } = participantSchema.validate(req.body);
        if (error) return res.status(400).send({ error: error.details[0].message });

        const { studentId, name, email, department, year } = req.body;

        // Find the event by ID
        const event = await Event.findById(eventId);
        if (!event) return res.status(404).send({ error: 'Event not found' });

        if (event.capacity <= 0) return res.status(400).send({ error: 'Event is full' });

        // Register the participant
        event.capacity -= 1;
        event.participants.push({ studentId, name, email, department, year });
        await event.save();

        res.status(200).send({ message: 'Registered successfully', event });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Error registering for the event' });
    }
});

// GET /all: Retrieve all events
router.get('/all', async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).send(events);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Error fetching events' });
    }
});

// GET /:eventId: Retrieve event details
router.get('/:eventId', async (req, res) => {
    try {
        const { eventId } = req.params;
        const event = await Event.findById(eventId);
        if (!event) return res.status(404).send({ error: 'Event not found' });

        res.status(200).send(event);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Error fetching event details' });
    }
});

// DELETE /:eventId: Delete an event
router.delete('/:eventId', async (req, res) => {
    try {
        const { eventId } = req.params;

        const event = await Event.findByIdAndDelete(eventId);
        if (!event) return res.status(404).send({ error: 'Event not found' });

        res.status(200).send({ message: 'Event deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Error deleting event' });
    }
});

// PUT /update/:eventId: Update event details
router.put('/update/:eventId', async (req, res) => {
    try {
        const { eventId } = req.params;

        const updatedData = req.body;
        const event = await Event.findByIdAndUpdate(eventId, updatedData, { new: true });
        if (!event) return res.status(404).send({ error: 'Event not found' });

        res.status(200).send({ message: 'Event updated successfully', event });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Error updating event' });
    }
});

export default router;
