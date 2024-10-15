const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data
const todos = [
  { id: 1, title: "Learn React", description: "Understand the basics of React." },
  { id: 2, title: "Build an App", description: "Create a simple To-Do app." },
  { id: 3, title: "Deploy App", description: "Deploy the app to a hosting service." },
];

// API endpoint to get todos
app.get('/api/todos', (req, res) => {
  res.json({ todos });
});

// API endpoint to get a single todo by ID
app.get('/api/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id, 10);
  const todo = todos.find(t => t.id === todoId);
  if (todo) {
    res.json({ todo });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
