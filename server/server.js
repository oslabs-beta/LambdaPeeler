const express = require('express');
const AWS = require('aws-sdk');

// Initialize Express
const app = express();
const PORT = 3000;

// AWS Configurations
AWS.config.update({ region: 'us-east-1' });
const lambda = new AWS.Lambda();

// Endpoint to list AWS Lambda layers
app.get('/list-layers', (req, res) => {
  lambda.listLayers({}, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).json({ error: 'Failed to fetch AWS layers' });
    } else {
      console.log(data);
      res.status(200).json(data);
    }
  });
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});