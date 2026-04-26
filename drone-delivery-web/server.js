const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;
const publicPath = path.join(__dirname, 'public');

// Serve static assets from public folder
app.use(express.static(publicPath));

// Home route serves index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Simple health/status API route
app.get('/api/status', (req, res) => {
  res.json({
    project: 'Drone Delivery System',
    status: 'running',
    backend: 'Node.js Express'
  });
});

app.listen(PORT, () => {
  console.log(`Drone Delivery web app is running at http://localhost:${PORT}`);
});
