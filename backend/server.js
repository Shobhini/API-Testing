import'dotenv/config';  
import mongoose from 'mongoose';

// Import the Express module
import express, { json } from 'express';
const app = express();
const port = process.env.PORT || 3000;

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/your_database_name')
  .then(() => {
    console.log('Successfully connected to MongoDB.');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(json());

// Define a route for GET requests
app.get('/users', (_req, res) => {
    res.json({ message: 'Returning list of users' });
});

// Define a route for POST requests
app.post('/users', (req, res) => {
    const newUser = req.body;
    res.json({ message: 'User created', user: newUser });
});

// Define a route for PUT requests
app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    res.json({ message: `User with ID ${userId} updated`, updatedUser });
});

// Define a route for DELETE requests
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `User with ID ${userId} deleted` });
});

// some jokes
app.get('/api/jokes', (_req, res) => {
    const jokes=[{
        "id": 1,
        "title": "Why did the programmer go broke?",
        "answer": "Because he needed to learn how to stop."
    }];
    res.json(jokes);
});

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${port}`);
});