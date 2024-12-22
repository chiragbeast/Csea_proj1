# Csea_proj1
# Event Management API

## Overview
This College Event Management API allows you to manage college events and registrations efficiently. It includes functionality for creating, updating, and deleting events, as well as managing participant registrations and tracking attendance. This project is built using **ASP.NET Core** with **MongoDB** as the database.

## Features
- **Create Events**: Organizers can create events with details like title, description, date, time, etc.
- **Register for Events**: Students can register for events by providing their information.
- **Update Events**: Organizers can update event details such as venue and capacity.
- **Delete Events**: Organizers can delete events they no longer need.
- **Track Participants**: The API tracks the students who register for each event.

## Technology Used
- **Express** for the server.
- **MongoDB** for storing event data and registrations.
- **MongoDB.Driver** to interact with MongoDB.
- **FluentValidation** for validating request data.
-**Html CSS JAVSCRIPT** for frontend 
## Steps to Run the Project
1. Clone the Repository:
   ```bash
   git clone https://github.com/chiragbeast/Csea_proj1.git
   cd Csea_proj1
2. Install dependencies:
3. Set up MongoDB (make sure MongoDB is running on your machine or use MongoDB Atlas).
4. Start the server:The server will run at http://localhost:3000.

## Api EndPoints
1.Create Event: POST /api/events/create – Create a new event.
2.Register for Event: POST /api/events/register/{eventId} – Register a student for an event.
3.Update Event: PUT /api/events/update/{eventId} – Update event details.
4.Delete Event: DELETE /api/events/{eventId} – Delete an event.
5.Get Event Details: GET /api/events/{eventId} – Get event details.
6.Get All Events: GET /api/events/all – List all events.
