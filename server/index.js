/*require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require('axios');
const connection = require("./config/db");
const usersRoutes = require("./routes/users");
const userRoutes = require("./routes/user"); // Ensure this is correctly set
const authRoutes = require('./routes/auth');
const passwordResetRoutes = require('./routes/passwordReset');

const app = express();

// Connect to database
connection();

// Middleware
app.use(express.json());
app.use(cors());

// Setup CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/users", userRoutes); // Ensure this is correctly set to handle role updates

// Product search route
app.post('/api/search', async (req, res) => {
  try {
    const searchQueries = req.body.products;
    if (!searchQueries || searchQueries.length === 0) {
      return res.status(400).send({ message: 'No search queries provided' });
    }
    const response = await axios.post('http://localhost:3002/search', req.body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error during search:", error);
    res.status(500).send({ message: 'Internal server error' });
  }
});

// Serve static files from React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
*/require("dotenv").config();
const bodyParser = require('body-parser');
const express = require("express");
const path = require("path");
const cors = require("cors");

const axios = require('axios');
const connection = require("./db");
const usersRoutes = require("./routes/users");
const authRoutes = require('./routes/auth');
const app = express();

// Connect to database
connection();

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Setup CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);

// Product search route
app.post('/api/search', async (req, res) => {
  try {
    const searchQueries = req.body.products;
    if (!searchQueries || searchQueries.length === 0) {
      return res.status(400).send({ message: 'No search queries provided' });
    }
    const response = await axios.post('http://localhost:3002/search', req.body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error during search:", error);
    res.status(500).send({ message: 'Internal server error' });
  }
});

// Serve static files from React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
