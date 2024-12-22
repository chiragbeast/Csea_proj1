# Csea_proj1
**Event Management API**
**Overview**
This College Event Management API allows you to manage college events and registrations efficiently. It includes functionality for creating, updating, and deleting events, as well as managing participant registrations and tracking attendance. I built this project using Node.js, Express, and MongoDB.
**Features**
Create Events: Organizers can create events with details like title, description, date, time, etc.
Register for Events: Students can register for events by providing their information.
Update Events: Organizers can update event details such as venue and capacity.
Delete Events: Organizers can delete events they no longer need.
Track Participants: The API tracks the students who register for each event.
**Technology Used**
Node.js & Express.js for the server.
MongoDB for storing event data and registrations.
Mongoose to interact with MongoDB.
Joi for validating request data.
**Steps to Run the Project**
1. Clone the Repository 
git clone https://github.com/chiragbeast/Csea_proj1.git
cd Csea_proj1
2. Install dependencies: npm install
3. Set up MongoDB (make sure MongoDB is running on your machine or use MongoDB Atlas).
4. Start the server:
The server will run at http://localhost:3000.
**API Endpoints**
Create Event: POST /api/events/create – Create a new event.
Register for Event: POST /api/events/register/{eventId} – Register a student for an event.
Update Event: PUT /api/events/update/{eventId} – Update event details.
Delete Event: DELETE /api/events/{eventId} – Delete an event.
Get Event Details: GET /api/events/{eventId} – Get event details.
Get All Events: GET /api/events/all – List all events.
