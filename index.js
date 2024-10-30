const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');
const pool = require('./db');

require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({ info: 'Manage Map Coordinates Api' });
});

// Get all coordinates
app.get('/api/coordinates/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM coordinates');
    res.json(result.rows);
  } catch (e) {
    console.error(e.message);
  }
});

// Create new coordinates
app.post('/api/coordinates/create', async (req, res) => {
  const newCoordinates = req.body;
  try {
    const insertQuery = `INSERT INTO coordinates (latitude, longitude, hintContent)
            VALUES ($1, $2, $3)`;
    for (const coord of newCoordinates) {
      await pool.query(insertQuery, [
        coord.latitude,
        coord.longitude,
        coord.hintContent,
      ]);
    }
    res.json({ message: 'Coordinates saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving coordinates' });
  }
});

// DELETE all meter data
app.delete('/api/delete', async (req, res) => {
  try {
    await pool.query('DELETE FROM coordinates');
    res.json({ message: 'All data deleted successfully!' });
  } catch (e) {
    console.error(e.message);
    res
      .status(500)
      .send('An error occurred while deleting the data.');
  }
});

const PORT = process.env.NODE_DOCKER_PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
